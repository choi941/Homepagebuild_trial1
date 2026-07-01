import { Mail, GraduationCap } from 'lucide-react';

export default function Testimonials() {
  const members = [
    {
      name: 'Yelimi Syu',
      role: 'Director & Assistant Professor',
      education: 'Department of Interior Architecture and Built Environment, Yonsei University',
      research: 'Intelligent environments, digital design technologies, human-centered spatial designs, and built environment health.',
      email: 'syu@yonsei.ac.kr',
      initials: 'YS',
      color: 'from-lime-accent to-emerald-500',
    },
    {
      name: 'Dr. Sarah Jenkins',
      role: 'Postdoctoral Researcher',
      education: 'PhD in Design Technology',
      research: 'Algorithmic architectural generation, parametric planning methods, and robotic digital fabrication.',
      email: 'sarah.j@yonsei.ac.kr',
      initials: 'SJ',
      color: 'from-violet-500 to-indigo-500',
    },
    {
      name: 'Alex Rivera',
      role: 'PhD Candidate',
      education: 'MS in Interior Architecture',
      research: 'Biophilic designs in clinical spaces, energy analytics, and thermal comfort model predictions using IoT sensors.',
      email: 'alex.r@yonsei.ac.kr',
      initials: 'AR',
      color: 'from-sky-500 to-blue-500',
    },
  ];

  return (
    <section id="members" className="py-24 bg-zinc-900 border-t border-zinc-800 min-h-[60vh] flex items-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display font-bold text-xs uppercase tracking-widest text-lime-accent">
            Members
          </h2>
          <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Lab Members
          </h3>
          <p className="font-sans text-slate-350 text-sm sm:text-base">
            Meet our Professor and pioneering Researchers.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 hover:border-lime-accent/30 hover:bg-zinc-950/70 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Member Profile Avatar Initials */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${member.color} text-black font-display font-black text-lg flex items-center justify-center shadow-md`}>
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {member.name}
                    </h3>
                    <p className="font-sans text-xs text-lime-accent/90 font-semibold uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Institution / Education */}
                <div className="flex gap-2 text-slate-400 text-xs font-sans mb-4 items-start">
                  <GraduationCap className="h-4 w-4 shrink-0 text-slate-500 mt-0.5" />
                  <span>{member.education}</span>
                </div>

                {/* Research Focus */}
                <p className="font-sans text-sm text-slate-400 leading-relaxed mb-6">
                  <strong className="text-slate-200">Focus:</strong> {member.research}
                </p>
              </div>

              {/* Email contact footer */}
              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-450 hover:text-lime-accent transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>{member.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
