import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────
   순서: eunseo → hannah → minjung → haneul
         → seonggyeol → yelim → seongbo
   ───────────────────────────────────────── */
const researchers = [
  {
    id: 'eunseo-choi',
    name: 'Eunseo Choi',
    role: 'M.S. Candidate',
    image: '/eunseo.png',
    isIntern: false,
    research: ['Spatial Experience Design', 'Human–Space Interaction', 'Workplace Environment'],
  },
  {
    id: 'hannah-ju',
    name: 'Hannah Ju',
    role: 'Research Professor',
    image: '/hannah.png',
    isIntern: false,
    research: ['Life-course Housing Environment', 'Spatial–Behavior Relationship', 'Evidence-Based Spatial Analysis'],
  },
  {
    id: 'minjung-cho',
    name: 'Minjung Cho',
    role: 'M.S. Candidate',
    image: '/minjung.png',
    isIntern: false,
    research: ['Salutogenic Architecture', 'Behavioral Design', 'Evidence-based Design'],
  },
  {
    id: 'haneul-chung',
    name: 'Haneul Chung',
    role: 'M.S. Candidate',
    image: '/haneul.png',
    isIntern: false,
    research: ['Computational Design', 'Design Morphology', 'Spatial Cognition'],
  },
  {
    id: 'seonggyeol-cho',
    name: 'Seonggyul Cho',
    role: 'Ph.D. Candidate',
    image: '/seonggyeol.png',
    isIntern: false,
    research: ['Restorative Environments', 'Person–Environment Relationships', 'Social Interaction'],
  },
  {
    id: 'yelim-choi',
    name: 'Yelim Choi',
    role: 'M.S. Candidate',
    image: '/yelim.png',
    isIntern: false,
    research: ['Adaptive Reuse', 'Spatial Interaction', 'Wayfinding'],
  },
  {
    id: 'seongbo-jeon',
    name: 'Seongbo Jeon',
    role: 'Undergraduate Intern',
    image: '/seongbo.png',
    isIntern: true,
    research: ['Sustainability Architecture', 'Adaptive Reuse Architecture'],
  },
];

const alumniResearchers = [
  { name: 'Uijung Kwak', detail: 'M.S. Student, Sep 2023 – Feb 2026' },
];

const alumniInterns = [
  { name: 'Anastasiya Kim', detail: 'Undergraduate Intern, Sep 2023 – Jun 2024' },
  { name: 'Anisa Uggez',   detail: 'Undergraduate Intern, Sep 2023 – Dec 2023' },
  { name: 'Yelim Choi',    detail: 'Undergraduate Intern, Mar 2024 – Jun 2025' },
];

/* Card component — conditionally wrapped in Link */
function ResearcherCard({ r }: { r: typeof researchers[0] }) {
  const inner = (
    <div className={`flex flex-col items-center group ${r.isIntern ? 'cursor-default' : 'cursor-pointer'}`}>
      <div className="w-full max-w-[200px] mx-auto overflow-hidden rounded-xl">
        <img
          src={r.image}
          alt={r.name}
          className={`w-full aspect-[3/4] object-cover rounded-xl shadow-sm border border-zinc-200 bg-zinc-100
            ${!r.isIntern ? 'transition-transform duration-300 group-hover:scale-105' : ''}`}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      </div>

      <div className="mt-4 w-full text-center">
        <p className={`font-bold text-zinc-900 text-lg leading-tight ${!r.isIntern ? 'group-hover:text-lime-600 transition-colors duration-200' : ''}`}>
          {r.name}
        </p>
        <p className="text-sm font-medium text-zinc-500 mt-0.5">{r.role}</p>
      </div>

      <div className="mt-2 flex flex-wrap justify-center gap-x-1 gap-y-0.5">
        {r.research.map((field, idx) => (
          <span key={idx} className="text-sm text-zinc-500 break-keep" style={{ wordBreak: 'keep-all' }}>
            {field}{idx < r.research.length - 1 && <span className="mx-1 text-zinc-300">|</span>}
          </span>
        ))}
      </div>
    </div>
  );

  /* Interns have no detail page — render plain div */
  if (r.isIntern) return <div key={r.id}>{inner}</div>;

  return (
    <Link key={r.id} to={`/researchers/${r.id}`}>
      {inner}
    </Link>
  );
}

export default function Researchers() {
  return (
    <div className="bg-zinc-50 text-zinc-900 min-h-screen py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section header */}
        <div className="space-y-4 mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-lime-600 uppercase">
            Laboratory Members
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-zinc-900">
            Researchers
          </h1>
          <hr className="border-zinc-200" />
        </div>

        {/* Researcher card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 text-center">
          {researchers.map((r) => <ResearcherCard key={r.id} r={r} />)}
        </div>

        {/* Alumni section */}
        <div className="border-t border-zinc-200 mt-24 pt-16">
          <div className="flex flex-col md:flex-row md:gap-24">
            <div className="shrink-0 mb-10 md:mb-0">
              <h2 className="text-3xl font-medium text-zinc-950">Alumni</h2>
            </div>

            <div className="flex-1 space-y-8">
              {/* Researchers */}
              <div>
                <p className="text-lg font-semibold mb-4" style={{ color: '#FF00A2' }}>
                  Researchers
                </p>
                <ul className="space-y-2">
                  {alumniResearchers.map((a) => (
                    <li key={a.name} className="flex items-baseline gap-3">
                      <span className="font-bold text-zinc-900 whitespace-nowrap">{a.name}</span>
                      <span className="text-zinc-300 select-none">|</span>
                      <span className="text-zinc-600 text-sm">{a.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interns */}
              <div>
                <p className="text-lg font-semibold mb-4 mt-6" style={{ color: '#FF00A2' }}>
                  Interns
                </p>
                <ul className="space-y-2">
                  {alumniInterns.map((a) => (
                    <li key={a.name + a.detail} className="flex items-baseline gap-3">
                      <span className="font-bold text-zinc-900 whitespace-nowrap">{a.name}</span>
                      <span className="text-zinc-300 select-none">|</span>
                      <span className="text-zinc-600 text-sm">{a.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
