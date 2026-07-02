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
      {/* Background elements remain same... */}
      <video autoPlay muted loop playsInline src="/background.mp4" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-white/80 z-1" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(101,163,13,0.06),rgba(255,255,255,0))] z-2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-h-[calc(100vh-80px)] flex flex-col justify-between pt-24 pb-10">
        
        {/* 수정된 부분: my-auto 기반으로 정렬을 고정하되, -translate-y-16을 추가하여 본문을 위로 깔끔하게 쳐올림 */}
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
            {/* Mobile: Infinite Scroll */}
            <div className="flex animate-scroll whitespace-nowrap lg:hidden">
              <div className="flex gap-x-6">
                {hashtags.map((tag) => (
                  <span key={tag} className="font-mono text-sm font-semibold text-zinc-700 cursor-default">{tag}</span>
                ))}
              </div>
              <div className="flex gap-x-6 ml-6">
                {hashtags.map((tag) => (
                  <span key={`${tag}-dup`} className="font-mono text-sm font-semibold text-zinc-700 cursor-default">{tag}</span>
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