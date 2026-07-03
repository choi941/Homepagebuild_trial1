import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zinc-50 text-zinc-600 border-t border-zinc-200 transition-colors duration-300">
      {/* 와이드 레이아웃에 맞춘 max-w-[1600px] 유지 */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* [수정 포인트 1]: items-start 대신 md:items-center를 적용
          - 모바일에서는 기본적으로 상단 정렬을 유지하지만,
          - PC(md 이상) 화면에서는 좌측 덩어리와 우측 덩어리가 세로축 기준으로 '완벽한 정중앙'에 위치하게 됩니다.
        */}
        <div className="flex flex-col md:grid md:grid-cols-[auto_1fr] gap-12 items-start md:items-center">

          {/* Navigation Column: 모바일 중앙, 데스크탑 왼쪽 정렬 */}
          <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left w-full">
            <h3 className="font-display text-zinc-800 font-bold text-xs uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-2 text-sm font-sans">
              <li><Link to="/about" className="hover:text-lime-600">About</Link></li>
              <li><Link to="/research" className="hover:text-lime-600">Research</Link></li>
              <li>
                <span className="text-zinc-400 select-none">Members</span>
                <ul className="mt-1.5 pl-4 border-l border-zinc-200 space-y-1.5 text-xs text-zinc-500">
                  <li>
                    <Link to="/professor" className="hover:text-lime-600 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                      Professor
                    </Link>
                  </li>
                  <li>
                    <Link to="/researchers" className="hover:text-lime-600 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                      Researchers
                    </Link>
                  </li>
                </ul>
              </li>
              <li><Link to="/contact" className="hover:text-lime-600">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info & Logo Container 
            - 내부 요소들도 세로축 정앙에 오도록 md:items-center를 유지합니다.
          */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full text-center md:text-left md:justify-end">
            
            {/* Contact Info */}
            <div className="space-y-1.5 text-sm font-mono w-full md:w-auto">
              <h3 className="font-display text-zinc-800 font-bold text-xs uppercase tracking-widest mb-3 text-center md:text-left">Contact Information</h3>
              <p><a href="mailto:syu@yonsei.ac.kr" className="hover:text-lime-600">syu@yonsei.ac.kr</a></p>
              <p>(+82) 2-2123-3092</p>
              <p className="text-zinc-455 text-xs mt-2 font-sans">
                College of Human Ecology, Yonsei University <br /> Seoul, Korea
              </p>
            </div>

            {/* Logo */}
            <div className="shrink-0 flex justify-center w-full md:w-auto mt-4 md:mt-0">
              <img
                src="/logo_footer.png"
                alt="AD+T Lab Footer Logo"
                className="h-26 sm:h-28 w-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-zinc-200 py-6 text-xs text-zinc-500 font-sans text-center">
        <p>Copyright © 2026 AD+T All rights reserved. | Built by CYL</p>
      </div>
    </footer>
  );
}