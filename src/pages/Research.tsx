import { useState } from 'react';

// Publication data
const publications = [
  // 2026
  { year: 2026, category: 'Conference', date: '2026.06', title: 'In-the-Wild Wearable Sensing for Opportunity Based Design: A Pilot Study for Framework Toward Computational Design for Wellbeing', description: 'Haneul Chung, Minjung Cho, Soungmin Yu / CAADRIA abstract accepted' },
  // 2025
  { year: 2025, category: 'Conference', date: '2025.11', title: "Designing Rest Facilities for Promoting Workers' Mental Health: Focusing on Domestic and International Guidelines and Literature Review", description: 'Seonggyeol Cho, Sounmin Yu / Korean Institute of Interior Design' },
  { year: 2025, category: 'Journal', date: '2025.08', title: 'Trends in Research on Physical and Mental Well-Being in Workplace: A Keyword Network Analysis of Office-Related Studies Before and After the COVID-19 Pandemic', description: 'Hannah Ju, Soungmin Yu / Journal of the Architectural Institute of Korea Vol.41 No.8' },
  { year: 2025, category: 'Conference', date: '2025.05', title: 'Analyzing Existing Assessment Tools and WELL Building Standard focusing on Korean Workplace Environment', description: 'Haneul Chung, Soungmin Yu / Korean Institute of Interior Design' },
  { year: 2025, category: 'Conference', date: '2025.05', title: "Spaital Boundary Setting of Seoul’s CBDs Using Getis-Ord Gi* and WELL-Based Indicators", description: 'Minjung Cho, Soungmin Yu / Korean Institute of Interior Design' },
  { year: 2025, category: 'Conference', date: '2025.04', title: 'Breakout Spaces in Workplace Design: Enhancing Mental and PhysicalWell-Being', description: 'Eunseo Choi, Soungmin Yu / Architectural Institute of Korea' },
  // 2024
  { year: 2024, category: 'Conference', date: '2024.11', title: 'Creating Healthy Work Environments: Design Strategies for Mental and Physical well-being- Office Environment Design to Reduce Burnout and Improve Productivity', description: 'Eunseo Choi, Soungmin Yu / Korean Institute of Interior Design' },
  { year: 2024, category: 'Conference', date: '2024.10', title: 'An Analysis of International Research Trends on Spatial Cognition in the Elderly Using Co-occurrence Word Analysis', description: 'Uijung Kwag, Soungmin Yu / Architectural Institute of Korea' },
  { year: 2024, category: 'Conference', date: '2024.10', title: 'A Comparative Keyword Analysis of Workplace Research Before and After COVID-19 - Potential Applicability of Physical and Mental Wellness', description: 'Hannah Ju, Soungmin Yu / Architectural Institute of Korea' },
  { year: 2024, category: 'Conference', date: '2024.06', title: 'Various Interpretations of Biophilic Design Principles and Implications', description: 'Eunseo Choi, Soungmin Yu / The Korean Housing Association' },
  { year: 2024, category: 'Conference', date: '2024.06', title: 'Utilizing EEG in studying the Impact of Design Variables on Users in VR Environments', description: 'Uijung Kwag, Soungmin Yu / The Korean Housing Association' },
  // 2023
  { year: 2023, category: 'Conference', date: '2023.11', title: 'Analyzing trends in interior architecture research using VR', description: 'Uijung Kwag, Soungmin Yu / Korean Institute of Spatial Design' },
  { year: 2023, category: 'Journal', date: '2023.11', title: 'Evaluating Architectural Layouts for Occupancy Pattern and Interactions Using Agent-Based Modelling as a Methodology for Workplace Design', description: 'Soungmin Yu / Automation in Construction' },
  // 2022
  { year: 2022, category: 'Journal', date: '2022.10', title: 'Agent-based modelling using survey data to simulate occupancy patterns and occupant interactions for workplace design', description: 'Soungmin Yu / Building and Environment' },
  { year: 2022, category: 'Conference', date: '2022.08', title: 'Algorithmic approaches to occupant centric design', description: 'European Association of Architectural Education / Abstract Accepted' },
  { year: 2022, category: 'Exhibition', date: '2022.05', title: '‘Meta-Horizons Future Now’', description: 'Dongdaemun Design Plaza, Seoul Exhibition' },
  { year: 2022, category: 'Exhibition', date: '2022.01', title: '‘Vertical Urbanism’', description: 'Hong Kong Design Institute Exhibition' },
  // 2021
  { year: 2021, category: 'Exhibition', date: '2021.06', title: '‘ZHA Close Up - Work & Research Exhibition’', description: 'Museum of Contemporary Art Shanghai Exhibition' },
  // 2020
  { year: 2020, category: 'Conference', date: '2020.10', title: 'Agent-based Parametric Semiology', description: 'DC I/O Conference' },
  // 2019
  { year: 2019, category: 'Conference', date: '2019.09', title: 'Agent-based model and empirical data integration in architectural design methodology for corporate offices', description: 'Soungmin Yu, Patrik Schumacher / Social Simulation Conference' },
  { year: 2019, category: 'Exhibition', date: '2019.05', title: 'Agent-based Parametric Semiology (Exhibition & Symposium)', description: 'Soungmin Yu, Tyson Hosmer, Sobitha Ravichandran (ZHA CODE)' },
  // 2018
  { year: 2018, category: 'Exhibition', date: '2018.12', title: 'Agent-Based Parametric Semiology', description: 'Exhibition & Symposium' },
  // 2015
  { year: 2015, category: 'Journal', date: '2015.10', title: 'Performance driven self-supporting curved surface morphologies and tectonic in current practice', description: 'Soungmin Yu, Soomeen Hahm, Shajay Bhooshan / Next Generation Building Journal' },
  // 2014
  { year: 2014, category: 'Conference', date: '2014.10', title: 'Multi-scalar Agent-based complex design systems, The case of CECO(Climatic Ecologies)studio : Informed generative design systems and performance driven design work flow', description: 'Sina Mostafavi, Soungmin Yu, Nimish M. Biloria / ACADIA' },
  { year: 2014, category: 'Conference', date: '2014.05', title: 'The urban genome', description: 'Guy Austern, Soungmin Yu, Mara Moral, Theerapat Jirathiyut / CAADRIA' },
  { year: 2014, category: 'Journal', date: '2014.05', title: 'Climatic Formations: Evolutionary Dynamics of Urban Morphologies', description: 'Soungmin Yu, Guy Austern, Theerapat Jirathiyut, Mara Moral / Journal of Asian Architecture and Building Engineering' },
];

const categories = ['All', 'Conference', 'Journal', 'Exhibition'];

export default function Research() {
  const [activeCat, setActiveCat] = useState('All');
  const filtered = publications.filter(p => activeCat === 'All' || p.category === activeCat);
  const years = Array.from(new Set(filtered.map(p => p.year))).sort((a, b) => b - a);

  return (
    <div className="bg-zinc-50 text-zinc-900 min-h-screen py-12 sm:py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-4xl font-extrabold text-zinc-950 mb-6">Research &amp; Publications</h1>
        <div className="flex space-x-3 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${activeCat === cat ? 'bg-lime-600 text-white' : 'text-zinc-700 hover:bg-lime-100 hover:text-lime-700'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        {years.map(year => (
          <section key={year} className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-800 mb-2">{year}년</h2>
            <hr className="border-zinc-200 mb-6" />
            {filtered
              .filter(p => p.year === year)
              .map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 py-4">
                  <div className="w-12 h-12 bg-zinc-200 rounded-md flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-sm mb-1">
                      <span className="text-zinc-500">{item.date}</span>
                      <span className="inline-block px-2 py-0.5 text-xs font-mono font-bold tracking-wide text-lime-700 bg-lime-50 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg text-zinc-900">{item.title}</h3>
                    <p className="text-sm text-zinc-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
          </section>
        ))}
      </div>
    </div>
  );
}
