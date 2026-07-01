import { Layout, Cpu, Heart, Trees, LineChart } from 'lucide-react';

export default function Features() {
  const researchProjects = [
    {
      icon: Layout,
      title: 'Human-Centered Environments',
      description: 'Designing smart, adaptive interior architectures that prioritize human health, thermal comfort, and psychological well-being.',
      tag: 'Interior Architecture',
    },
    {
      icon: Cpu,
      title: 'Design Technology & Automation',
      description: 'Leveraging algorithmic design, parametric modeling, and digital fabrication to optimize building layouts and structural efficiency.',
      tag: 'Computational Design',
    },
    {
      icon: Heart,
      title: 'Design for Health & Wellbeing',
      description: 'Investigating biophilic design principles and light/air optimization to construct curative and restorative healthcare spaces.',
      tag: 'Spatial Ergonomics',
    },
    {
      icon: Trees,
      title: 'Sustainable Urban Living',
      description: 'Engineering net-zero architectural frameworks, responsive building skins, and sustainable materials for ecological urbanism.',
      tag: 'Environmental Tech',
    },
    {
      icon: LineChart,
      title: 'Built Environment Analytics',
      description: 'Employing IoT sensors, energy simulations, and occupant behavior modeling to track spatial performance in real-time.',
      tag: 'Big Data & IoT',
    },
  ];

  return (
    <section id="research" className="py-24 bg-zinc-900 border-t border-zinc-800 min-h-[60vh] flex items-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display font-bold text-xs uppercase tracking-widest text-lime-accent">
            Research
          </h2>
          <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Our Research
          </h3>
          <p className="font-sans text-slate-350 text-sm sm:text-base">
            Explore our recent research projects and publications regarding sustainable urban living and smart office design direction.
          </p>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchProjects.map((project, idx) => {
            const IconComponent = project.icon;
            return (
              <div
                key={idx}
                className="group relative bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-lime-accent/35 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-lime-accent/5"
              >
                {/* Neon glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-lime-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Project Tag */}
                <span className="inline-block text-[10px] font-mono font-bold tracking-wider text-lime-accent border border-lime-accent/30 bg-lime-accent/5 px-2.5 py-1 rounded-full mb-6">
                  {project.tag}
                </span>

                {/* Icon */}
                <div className="inline-flex p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-lime-accent mb-6 group-hover:scale-105 transition-transform duration-300">
                  <IconComponent className="h-5.5 w-5.5" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-lime-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
