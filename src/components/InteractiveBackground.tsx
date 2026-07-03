import { useEffect, useRef } from 'react';

interface Cell {
  id: string;
  cx: number;        // Grid center X
  cy: number;        // Grid center Y
  angle: number;     // Current rotation angle
  angleVel: number;  // Angular velocity for spring physics
  offsetX: number;   // Current physical translation X (buckle shift)
  offsetY: number;   // Current physical translation Y (buckle shift)
  offsetVelX: number;// Velocity for physical translation X
  offsetVelY: number;// Velocity for physical translation Y
  twistDir: number;  // Alternating direction: 1 (clockwise) or -1 (counter-clockwise)
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Constants for parametric design & interactions
    const CELL_SIZE = 40;
    const GAP = 4;
    const RADIUS = 120; // Influence radius (120px)
    const MAX_ANGLE = Math.PI / 2.2; // ~81 degrees maximum twist rotation
    const MAX_SHIFT = 10; // Max distance panels shift outward (px)
    
    // Spring physics configuration
    const SPRING_K = 0.08; // Spring stiffness
    const DAMPING = 0.85;  // Dampening factor (closer to 1 = more bounce)
    
    // Mouse state
    let mouseX: number | null = null;
    let mouseY: number | null = null;
    let easeMouseX = -9999;
    let easeMouseY = -9999;

    // Grid cells state
    let cells: Cell[] = [];

    const initCells = (width: number, height: number) => {
      // Create a grid that overflows slightly to ensure complete viewport coverage
      const cols = Math.ceil(width / CELL_SIZE) + 1;
      const rows = Math.ceil(height / CELL_SIZE) + 1;
      const gridOffsetX = (width - (cols - 1) * CELL_SIZE) / 2;
      const gridOffsetY = (height - (rows - 1) * CELL_SIZE) / 2;

      const newCells: Cell[] = [];
      const oldCellMap = new Map<string, Cell>();
      cells.forEach(c => oldCellMap.set(c.id, c));

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const id = `${r}-${c}`;
          const cx = gridOffsetX + c * CELL_SIZE;
          const cy = gridOffsetY + r * CELL_SIZE;
          
          // Keep existing states if resizing, preventing abrupt jumps
          const old = oldCellMap.get(id);

          newCells.push({
            id,
            cx,
            cy,
            angle: old ? old.angle : 0,
            angleVel: old ? old.angleVel : 0,
            offsetX: old ? old.offsetX : 0,
            offsetY: old ? old.offsetY : 0,
            offsetVelX: old ? old.offsetVelX : 0,
            offsetVelY: old ? old.offsetVelY : 0,
            twistDir: old ? old.twistDir : ((r + c) % 2 === 0 ? 1 : -1),
          });
        }
      }
      cells = newCells;
    };

    // Canvas Sizing and Device Pixel Ratio Scaling for maximum visual clarity
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      // Scale standard contexts to use CSS pixel space sizes
      ctx.resetTransform();
      ctx.scale(dpr, dpr);

      initCells(width, height);
    };

    // Initialize dimensions and grid setup
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse coordinates globally to handle canvas absolute layering
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // 브라우저 전체 창 기준 좌표에서 캔버스의 시작 위치(상단 여백)를 빼주어 정확한 0점 조정을 합니다.
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = null;
      mouseY = null;
    };

    // Support mobile touch interfaces for a complete, modern interaction
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.touches[0].clientX - rect.left;
        mouseY = e.touches[0].clientY - rect.top;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.touches[0].clientX - rect.left;
        mouseY = e.touches[0].clientY - rect.top;
      }
    };

    const handleTouchEnd = () => {
      mouseX = null;
      mouseY = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);

    // Animation Loop
    let animationId: number;

    const animate = () => {
      // 1. Ease tracked mouse cursor coordinates
      if (mouseX !== null && mouseY !== null) {
        if (easeMouseX === -9999) {
          easeMouseX = mouseX;
          easeMouseY = mouseY;
        } else {
          easeMouseX += (mouseX - easeMouseX) * 0.35;
          easeMouseY += (mouseY - easeMouseY) * 0.35;
        }
      } else {
        // Smoothly send eased mouse far away when inactive
        if (easeMouseX !== -9999) {
          easeMouseX += (-9999 - easeMouseX) * 0.35;
          easeMouseY += (-9999 - easeMouseY) * 0.35;
          if (Math.abs(easeMouseX + 9999) < 1) {
            easeMouseX = -9999;
            easeMouseY = -9999;
          }
        }
      }

      // 2. Clear canvas viewport space
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // 3. Update & render panel cells
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];

        let targetAngle = 0;
        let targetOffsetX = 0;
        let targetOffsetY = 0;

        if (easeMouseX !== -9999) {
          const dx = cell.cx - easeMouseX;
          const dy = cell.cy - easeMouseY;
          const dist = Math.hypot(dx, dy);

          if (dist < RADIUS) {
            // High quality exponential easing-in-out influence profile
            const influence = (RADIUS - dist) / RADIUS;
            const smoothInf = influence * influence * (3 - 2 * influence);

            // Twist panel angle (alternating directions)
            targetAngle = cell.twistDir * MAX_ANGLE * smoothInf;

            // Compute radial shift vector pushing panels outwards
            if (dist > 0) {
              targetOffsetX = (dx / dist) * MAX_SHIFT * smoothInf;
              targetOffsetY = (dy / dist) * MAX_SHIFT * smoothInf;
            }
          }
        }

        // Apply soft spring forces to approach target angle
        const angleForce = (targetAngle - cell.angle) * SPRING_K;
        cell.angleVel = (cell.angleVel + angleForce) * DAMPING;
        cell.angle += cell.angleVel;

        // Apply soft spring forces to translation offsets
        const forceX = (targetOffsetX - cell.offsetX) * SPRING_K;
        cell.offsetVelX = (cell.offsetVelX + forceX) * DAMPING;
        cell.offsetX += cell.offsetVelX;

        const forceY = (targetOffsetY - cell.offsetY) * SPRING_K;
        cell.offsetVelY = (cell.offsetVelY + forceY) * DAMPING;
        cell.offsetY += cell.offsetVelY;

        // Draw structural tiles using computed transforms
        const drawX = cell.cx + cell.offsetX;
        const drawY = cell.cy + cell.offsetY;
        const panelSize = CELL_SIZE - GAP;

        ctx.save();
        ctx.translate(drawX, drawY);

        // Parametric twisting facade transformation
        ctx.rotate(cell.angle);
        
        // Twist angle projection on X-axis scale (simulating 3D rotation)
        const scaleX = Math.cos(cell.angle);
        ctx.scale(scaleX, 1);

        // Stylized stroke glow depending on active displacement twist
        const activeRatio = Math.abs(cell.angle) / MAX_ANGLE;
        const strokeAlpha = 0.15 + 0.20 * activeRatio; // Becomes slightly more distinct when activated
        ctx.strokeStyle = `rgba(132, 204, 22, ${strokeAlpha})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(-panelSize / 2, -panelSize / 2, panelSize, panelSize);

        // Soft shimmering lime overlay when active
        const fillAlpha = 0.04 * activeRatio;
        if (fillAlpha > 0.001) {
          ctx.fillStyle = `rgba(132, 204, 22, ${fillAlpha})`;
          ctx.fillRect(-panelSize / 2, -panelSize / 2, panelSize, panelSize);
        }

        ctx.restore();
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Precise memory and listener cleanups inside return statement
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
