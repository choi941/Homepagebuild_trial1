import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const hashtags = [
    '#architectural design',
    '#design technology',
    '#human-centered design',
    '#design health & wellbeing',
    '#sustainable urban living',
  ];

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full flex items-center overflow-hidden bg-white text-zinc-900 transition-colors duration-300">
      {/* [배경 미디어 일시 제외] */}
      {/* 
      <video autoPlay muted loop playsInline src="/background.mp4" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-white/80 z-1" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(101,163,13,0.06),rgba(255,255,255,0))] z-2 pointer-events-none" />
      */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-h-[calc(100vh-80px)] flex flex-col justify-between pt-24 pb-10">
        
        {/* 본문 블록 전체를 위로 끌어올린 레이아웃 유지 */}
        <div className="max-w-4xl space-y-8 text-left my-auto w-full -translate-y-16">
          <div className="inline-flex px-3 py-1.5 rounded-full border border-lime-650/20 bg-lime-50 text-lime-700 text-xs font-semibold tracking-wider uppercase">
            <span>Research Laboratory</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-zinc-950">
            Architectural Design <br className="hidden sm:inline" />
            <span className="text-lime-600">+</span> Technology
          </h1>

          {/* Hashtags Container */}
          <div className="w-full overflow-hidden pt-2">
            
            {/* 
              [수정된 모바일 파트]: 
              - flex-nowrap으로 줄바꿈을 절대 금지하고, gap을 통일했습니다.
              - animate-scroll이 적용되는 두 그룹이 완벽하게 대칭을 이루도록 분리했습니다.
            */}
            <div className="lg:hidden w-full overflow-hidden relative flex flex-nowrap gap-x-6">
              
              {/* 첫 번째 세트 */}
              <div className="flex shrink-0 gap-x-6 animate-scroll whitespace-nowrap">
                {hashtags.map((tag) => (
                  <span key={tag} className="font-mono text-sm font-semibold text-zinc-700 cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* 두 번째 세트 (복사본: 첫 번째 세트 뒤에 공백 없이 바로 붙어서 끊김을 방지함) */}
              <div className="flex shrink-0 gap-x-6 animate-scroll whitespace-nowrap" aria-hidden="true">
                {hashtags.map((tag) => (
                  <span key={`${tag}-dup`} className="font-mono text-sm font-semibold text-zinc-700 cursor-default">
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            {/* Desktop: Static Grid */}
            <div className="hidden lg:flex flex-row gap-x-6">
              {hashtags.map((tag) => (
                <span key={tag} className="font-mono text-base font-semibold text-zinc-700 hover:text-lime-600 transition-colors duration-200 cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <Link to="/research" className="inline-flex items-center gap-2 px-6 py-3.5 bg-lime-600 hover:bg-lime-700 text-white font-bold rounded-2xl shadow-lg transition-all duration-200">
              <span>Explore Our Research</span>
              <ArrowRight className="h-4 w-4 stroke-[3]" />
            </Link>
          </div>
        </div>

        {/* Footer/Affiliation block... */}
      </div>
    </section>
  );
}