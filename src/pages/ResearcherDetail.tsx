import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

/* ─────────────────────────────────────────────
   실제 연구원 데이터 (이메일·약력·학력 포함)
   ───────────────────────────────────────────── */
const researcherData: Record<string, {
  name: string;
  role: string;
  image: string;
  email: string;
  bio: string;
  research: string[];
  education: { period: string; degree: string }[];
}> = {
  'eunseo-choi': {
    name: 'Eunseo Choi',
    role: 'M.S. Candidate',
    image: '/eunseo.png',
    email: 'cmkceskj@yonsei.ac.kr',
    bio: 'Her research interest is in how design elements within office environments can positively influence behavior and well-being. She aims to identify key spatial factors and propose improved strategies for healthier, more engaging, and productive workplaces.',
    research: ['Spatial Experience Design', 'Human–Space Interaction', 'Workplace Environment'],
    education: [
      {
        period: '2018.08 – 2022.05',
        degree: 'B.F.A., School of the Art Institute of Chicago — Architecture Interior Architecture and Design Object',
      },
    ],
  },
  'hannah-ju': {
    name: 'Hannah Ju',
    role: 'Research Professor',
    image: '/hannah.png',
    email: 'hannahredju@gmail.com',
    bio: 'Her research interest is in a human-centered approach that combines social research, design, and data-driven strategy, with a focus on how spatial design influences behavior and improves quality of life.',
    research: ['Life-course Housing Environment', 'Spatial–Behavior Relationship', 'Evidence-Based Spatial Analysis'],
    education: [
      { period: '2023.03 – 2024.02', degree: 'Ph.D., Yonsei University — College of Human Ecology, Department of Interior Architecture and Built Environment' },
      { period: '2017.03 – 2019.12', degree: 'ABD, Yonsei University — College of Human Ecology, Department of Interior Architecture and Built Environment' },
      { period: '2012.03 – 2014.02', degree: 'M.S., Yonsei University — College of Human Ecology, Department of Interior Architecture and Built Environment' },
      { period: '2005.03 – 2011.02', degree: 'B.S., The Catholic University of Korea — Affiliation of Life Sciences, Department of Spatial Design & Consumer Studies' },
    ],
  },
  'minjung-cho': {
    name: 'Minjung Cho',
    role: 'M.S. Candidate',
    image: '/minjung.png',
    email: 'mj333@yonsei.ac.kr',
    bio: 'Her research interest is in spatial strategies for occupant well-being in offices, focusing on nudging design and the WELL Building Standard, with particular interest in classifying spatial elements and deriving evidence-based strategies.',
    research: ['Salutogenic Architecture', 'Behavioral Design', 'Evidence-based Design'],
    education: [
      {
        period: '2022.03 – 2026.02',
        degree: 'B.S., Kyung Hee University — College of Foreign Languages, Global Communication / College of Human Ecology, Housing & Interior Design',
      },
    ],
  },
  'haneul-chung': {
    name: 'Haneul Chung',
    role: 'M.S. Candidate',
    image: '/haneul.png',
    email: 'haneudii@yonsei.ac.kr',
    bio: 'Her research interest is in how long-term environmental exposure shapes interior spatial preferences, focusing on the roles of place attachment and perceived placeness in emotional responses to residential design. She explores how environmental memory and user perception influence spatial sensibilities across different residential settings.',
    research: ['Computational Design', 'Design Morphology', 'Spatial Cognition'],
    education: [
      {
        period: '2019.03 – 2025.02',
        degree: 'B.F.A., University of Seoul — College of Arts and Sports, Visual Design / B.S., University of Seoul — College of Urban Science, Landscape Architecture',
      },
    ],
  },
  'seonggyeol-cho': {
    name: 'Seonggyul Cho',
    role: 'Ph.D. Candidate',
    image: '/seonggyeol.png',
    email: 'seonggyeol@gmail.com',
    bio: 'Her research interest is in the intersection of built environments, healthcare, and communication technologies, with a particular focus on how interior design principles can be applied to create restorative spaces that foster human health and well-being.',
    research: ['Restorative Environments', 'Person–Environment Relationships', 'Social Interaction'],
    education: [
      { period: '2017.03 – 2019.02', degree: 'M.S., Yonsei University — College of Social Science, Media and Communication' },
      { period: '2013.03 – 2017.02', degree: 'B.S., Sogang University — College of Communication, Mass Communication' },
    ],
  },
  'yelim-choi': {
    name: 'Yelim Choi',
    role: 'M.S. Candidate',
    image: '/yelim.png',
    email: 'cyl@yonsei.ac.kr',
    bio: 'Her research interest is in giving new meaning to neglected urban spaces through design, with a focus on how people find their way and interact with interior environments, integrating social context and spatial behavior.',
    research: ['Adaptive Reuse', 'Spatial Interaction', 'Wayfinding'],
    education: [
      {
        period: '2022.03 – 2026.02',
        degree: 'B.S., Yonsei University — College of Human Ecology, Interior Architecture and Built Environment',
      },
    ],
  },
};

export default function ResearcherDetail() {
  const { id } = useParams<{ id: string }>();
  const person = id ? researcherData[id] : null;

  if (!person) return <Navigate to="/researchers" replace />;

  return (
    <div className="bg-zinc-50 text-zinc-900 min-h-screen py-16 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-8">

        {/* Back link */}
        <Link
          to="/researchers"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-lime-600 transition-colors duration-200 mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Members
        </Link>

        {/* ── Top: photo + basic info ── */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start mb-16">

          {/* Left: photo */}
          <div className="shrink-0">
            <img
              src={person.image}
              alt={person.name}
              className="w-full max-w-[260px] h-auto object-cover rounded-xl shadow-sm border border-zinc-200 bg-zinc-100"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>

          {/* Right: name / role / email / bio / tags */}
          <div className="flex flex-col justify-start space-y-5">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-lime-600 uppercase">
                {person.role}
              </span>
              <h1 className="mt-1 font-display font-extrabold text-4xl text-zinc-950 break-keep"
                  style={{ wordBreak: 'keep-all' }}>
                {person.name}
              </h1>
              {person.email && (
                <a
                  href={`mailto:${person.email}`}
                  className="mt-1 block text-sm text-zinc-500 hover:text-lime-600 transition-colors"
                >
                  {person.email}
                </a>
              )}
            </div>

            {/* Bio */}
            <p className="text-base text-zinc-700 leading-relaxed break-keep"
               style={{ wordBreak: 'keep-all' }}>
              {person.bio}
            </p>

            {/* Research interest tags */}
            <div>
              <p className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase mb-2">
                Research Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {person.research.map((field) => (
                  <span
                    key={field}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-lime-50 text-lime-700 border border-lime-200 break-keep"
                    style={{ wordBreak: 'keep-all' }}
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Education timeline ── */}
        {person.education.length > 0 && (
          <>
            <hr className="border-zinc-200 mb-10" />
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
                Education
              </span>
              <h2 className="mt-1 font-display font-bold text-2xl text-zinc-900 mb-8">
                Academic Background
              </h2>

              <div className="relative pl-6 border-l-2 border-zinc-200 space-y-8">
                {person.education.map((edu, idx) => (
                  <div key={idx} className="relative">
                    {/* Timeline dot */}
                    <span className="absolute -left-[1.45rem] top-1 w-3 h-3 rounded-full bg-lime-500 border-2 border-white shadow-sm" />
                    <p className="text-xs font-mono text-zinc-400 mb-0.5">{edu.period}</p>
                    <p className="font-semibold text-zinc-900 text-base break-keep"
                       style={{ wordBreak: 'keep-all' }}>{edu.degree}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
