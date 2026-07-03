import { Mail, GraduationCap } from 'lucide-react';

export default function Members() {
  const members = [
    {
      name: 'Yelimi Syu',
      role: 'Director & Assistant Professor',
      education: 'Department of Interior Architecture and Built Environment, Yonsei University',
      research: 'Intelligent environments, digital design technologies, human-centered spatial designs, and built environment health.',
      email: 'syu@yonsei.ac.kr',
      initials: 'YS',
      color: 'from-lime-200 to-lime-400',
    },
    {
      name: 'Dr. Sarah Jenkins',
      role: 'Postdoctoral Researcher',
      education: 'PhD in Design Technology',
      research: 'Algorithmic architectural generation, parametric planning methods, and robotic digital fabrication.',
      email: 'sarah.j@yonsei.ac.kr',
      initials: 'SJ',
      color: 'from-violet-100 to-violet-300',
    },
    {
      name: 'Alex Rivera',
      role: 'PhD Candidate',
      education: 'MS in Interior Architecture',
      research: 'Biophilic designs in clinical spaces, energy analytics, and thermal comfort model predictions using IoT sensors.',
      email: 'alex.r@yonsei.ac.kr',
      initials: 'AR',
      color: 'from-sky-100 to-sky-300',
    },
  ];

  return (
    <div className="bg-zinc-50 text-zinc-900 min-h-screen py-16 sm:py-20 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-lime-600 uppercase">
            Lab Team
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-zinc-900">
            Lab Members
          </h1>
          <p className="font-sans text-zinc-650 text-sm sm:text-base max-w-3xl leading-relaxed">
            Meet our Professor and pioneering Researchers. Our multi-disciplinary team brings together expertise in architecture, design engineering, and human ecology.
          </p>
          <hr className="border-zinc-200" />
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto pt-4">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-zinc-200 hover:border-lime-600/30 transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${member.color} text-zinc-900 font-display font-black text-lg flex items-center justify-center shadow-inner`}>
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-zinc-900">
                      {member.name}
                    </h3>
                    <p className="font-sans text-xs text-lime-700 font-semibold uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Institution / Education */}
                <div className="flex gap-2 text-zinc-550 text-xs font-sans mb-4 items-start">
                  <GraduationCap className="h-4 w-4 shrink-0 text-zinc-400 mt-0.5" />
                  <span>{member.education}</span>
                </div>

                {/* Research Focus */}
                <p className="font-sans text-sm text-zinc-600 leading-relaxed mb-6">
                  <strong className="text-zinc-800">Focus:</strong> {member.research}
                </p>
              </div>

              {/* Email contact */}
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-xs font-mono font-semibold text-zinc-500 hover:text-lime-600 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>{member.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
