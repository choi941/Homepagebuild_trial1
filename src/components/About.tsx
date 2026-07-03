import { BookOpen, Award, Activity } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: BookOpen,
      title: 'Human-Centered Design',
      description: 'Understanding occupant cognitive, physiological, and emotional experiences to design adaptive interior spaces.',
    },
    {
      icon: Award,
      title: 'Architectural Technology',
      description: 'Developing high-performance building skins, parametric design configurations, and automated digital workflows.',
    },
    {
      icon: Activity,
      title: 'Health & Wellbeing',
      description: 'Optimizing spatial metrics (daylighting, air, biophilia) to create restorative built environments for occupant health.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-900 border-t border-zinc-800 min-h-[60vh] flex items-center transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-lime-accent">
              About Laboratory
            </h2>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              About AD+T
            </h3>
            <p className="font-sans text-slate-350 text-base leading-relaxed">
              Architectural Design + Technology Laboratory at Yonsei University. We focus on human-centered design, architectural technology, and health & wellbeing in built environments.
            </p>
            <div className="pt-2">
              <span className="text-xs font-mono text-slate-500 border border-zinc-800 bg-zinc-950 px-3 py-1.5 rounded-xl">
                Yonsei University / College of Human Ecology
              </span>
            </div>
          </div>

          {/* Pillars Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 hover:border-lime-accent/30 transition-all duration-350"
                >
                  <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-lime-accent inline-block mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
