export default function About() {


  const interests = [
    'Design language and spatial cognition',
    'Design technology and sustainable living',
    'Simulating human spatial and social behaviour',
    'Computational design methodology',
    'Technology and salutogenic design',
  ];

  return (
    <div className="bg-zinc-50 text-zinc-900 min-h-screen py-16 sm:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-lime-600 uppercase">
            Laboratory Profile
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-zinc-900">
            About AD+T
          </h1>
          <hr className="border-zinc-200" />
        </div>

        {/* Intro Image and Descriptions — Flex two-column */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left: image fills its side fully */}
          <div className="w-full lg:w-[58%] shrink-0">
            <img
              src="/About.png"
              alt="AD+T Lab About Illustration"
              className="w-full h-auto object-contain rounded-lg border border-zinc-200 shadow-sm bg-white"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Right: Bilingual description text and current interests */}
          <div className="w-full lg:w-[42%] space-y-6 flex flex-col justify-center">
            <div className="space-y-4 text-left">
              {/* English */}
              <p className="font-sans text-lg sm:text-[1.1rem] font-medium text-zinc-900 leading-snug">
                At the Architectural Design + Technology Lab, we investigate pressing issues of social and environmental sustainability in the built environment that can be addressed with architectural design and design technology.
              </p>
              {/* Korean */}
              <p className="font-sans text-sm text-zinc-600 leading-5 border-l-2 border-zinc-200 pl-4 font-medium mt-4 break-keep">
                건축 디자인 + 테크놀로지 연구소에서는 건축 디자인과 테크놀로지를 기반으로 건축/도시 환경을 지속적으로 발전 시킬 수 있는 사회/환경 문제를 연구합니다.
              </p>
            </div>

            {/* Current Research Interests Bullets */}
            <div className="space-y-3 pt-4 border-t border-zinc-200 text-left">
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-zinc-500">
                Current research interests include:
              </h3>
              <ul className="space-y-2.5">
                {interests.map((interest, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base font-semibold text-zinc-800">
                    <span className="w-2 h-2 rounded-full bg-lime-600 shrink-0 mt-2" />
                    <span className="leading-tight">{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}
