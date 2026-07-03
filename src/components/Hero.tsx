import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const hashtags = [
    '#architectural design',
    '#design technology',
    '#human-centered design',
    '#design health & wellbeing',
    '#sustainable urban living',
  ];

  return (
    <section id="hero" className="relative min-h-[calc(100vh-80px)] w-full flex items-center overflow-hidden bg-zinc-900 text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src="/background.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Dark overlay layer (approx 35% opacity) */}
      <div className="absolute inset-0 bg-black/35 z-1" />

      {/* Grid pattern overlay for tech aesthetics */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(199,255,0,0.04),rgba(255,255,255,0))] z-2 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12 pb-24 md:py-32">
        <div className="max-w-[1100px] space-y-6 sm:space-y-8">
          
          {/* Tagline / Subtitle */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-lime-accent/20 bg-lime-accent/5 text-lime-accent text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            <span>Research Laboratory</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
            Architectural Design <br className="hidden sm:inline" />
            <span className="text-lime-accent">+</span> Technology
          </h1>

          {/* Hashtag List */}
          <div className="flex flex-wrap gap-x-6 gap-y-2.5 pt-2">
            {hashtags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-sm sm:text-base font-semibold text-slate-300 hover:text-lime-accent transition-colors duration-205 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action to scroll to Research */}
          <div className="pt-6">
            <a
              href="#research"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-lime-accent hover:bg-lime-accent/90 text-black rounded-2xl font-bold tracking-wide shadow-lg shadow-lime-accent/15 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Explore Our Research</span>
              <ArrowRight className="h-4 w-4 stroke-[3]" />
            </a>
          </div>

        </div>
      </div>

      {/* Affiliation block in the bottom-right corner */}
      <div className="absolute bottom-6 right-4 sm:bottom-10 sm:right-8 lg:right-12 z-10 text-right max-w-sm sm:max-w-md px-4 sm:px-0 pointer-events-none">
        <div className="space-y-1 bg-black/60 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-3 sm:p-0 rounded-2xl border border-slate-900/50 sm:border-none">
          <p className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-wider text-lime-accent/90">
            Department of Interior Architecture and Built Environment
          </p>
          <p className="font-display text-xs sm:text-sm font-semibold text-slate-200">
            College of Human Ecology, Yonsei University
          </p>
          <p className="font-sans text-[9px] sm:text-xs text-slate-400">
            50 Yonsei-ro, Seodaemun-gu, Seoul, Korea
          </p>
        </div>
      </div>
    </section>
  );
}
