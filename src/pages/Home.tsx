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
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src="/background.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* White translucent overlay layer (approx 80% opacity) */}
      <div className="absolute inset-0 bg-white/80 z-1" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(101,163,13,0.06),rgba(255,255,255,0))] z-2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-h-[calc(100vh-80px)] flex flex-col justify-between pt-24 pb-10 sm:pb-12 lg:pb-16">
        {/* Main Title, Tags, and CTA */}
        <div className="max-w-4xl space-y-6 sm:space-y-8 text-left my-auto w-full">
          
          {/* Tagline */}
          <div className="inline-flex px-3 py-1.5 rounded-full border border-lime-650/20 bg-lime-50 text-lime-700 text-xs font-semibold tracking-wider uppercase">
            <span>Research Laboratory</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-zinc-950">
            Architectural Design <br className="hidden sm:inline" />
            <span className="text-lime-600">+</span> Technology
          </h1>

          {/* Hashtags */}
          <div className="flex flex-row overflow-x-auto lg:overflow-visible gap-x-6 pt-2">
            {hashtags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-sm sm:text-base font-semibold text-zinc-700 hover:text-lime-600 transition-colors duration-200 cursor-default whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action to Research Route */}
          <div className="pt-6">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-lime-600 hover:bg-lime-700 text-white font-bold tracking-wide rounded-2xl shadow-lg shadow-lime-600/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Explore Our Research</span>
              <ArrowRight className="h-4 w-4 stroke-[3]" />
            </Link>
          </div>

        </div>

        {/* Affiliation block */}
        <div className="self-end text-right max-w-md sm:max-w-xl lg:max-w-2xl mt-8 pointer-events-none w-full">
          <div className="space-y-1 bg-white/60 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-3 sm:p-0 rounded-2xl border border-zinc-200/50 sm:border-none">
            <p className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-wider text-lime-700">
              Department of Interior Architecture and Built Environment
            </p>
            <p className="font-display text-xs sm:text-sm font-semibold text-zinc-800">
              College of Human Ecology, Yonsei University
            </p>
            <p className="font-sans text-[9px] sm:text-xs text-zinc-500">
              50 Yonsei-ro, Seodaemun-gu, Seoul, Korea
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
