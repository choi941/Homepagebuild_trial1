export default function Professor() {
  return (
    <div className="bg-zinc-50 text-zinc-900 min-h-screen py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section label */}
        <div className="space-y-4 mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-lime-600 uppercase">
            Laboratory Director
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-zinc-900">
            Professor
          </h1>
          <hr className="border-zinc-200" />
        </div>

        {/* 2-column grid: left profile card / right bio text */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start">

          {/* ── LEFT: profile card ── */}
          <div className="flex flex-col items-start">
            <img
              src="/professor.png"
              alt="Professor Soungmin Yu"
              className="w-full max-w-[240px] h-auto object-cover rounded-lg shadow-sm border border-zinc-200 bg-white"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />

            <h2 className="mt-5 text-2xl font-bold text-zinc-950">
              Soungmin Yu
            </h2>

            <p className="mt-1 text-sm font-medium text-zinc-500">
              Assistant Professor | Director
            </p>

            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              PhD | ARB | RIBA<br />
              건축학 박사 | 영국 왕립 건축사
            </p>

            {/* Divider */}
            <div className="mt-6 w-full border-t border-zinc-200" />

            {/* Contact / affiliation badge */}
            <p className="mt-4 text-xs font-mono font-bold tracking-widest text-lime-600 uppercase">
              Yonsei University
            </p>
            <p className="text-xs text-zinc-400 mt-0.5">
              AD+T Lab · Seoul, Korea
            </p>
          </div>

          {/* ── RIGHT: bilingual bio ── */}
          <div className="space-y-8">

            {/* English bio */}
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-lime-600 uppercase">
                Profile
              </span>
              <p className="mt-3 text-base text-zinc-800 leading-relaxed">
                Soungmin Yu is an Assistant Professor at Yonsei University and the director of
                Architectural Design + Technology Lab. She is a practicing architect (UK chartered
                architect RIBA/ARB), researcher, and educator formerly based in London. Prior to
                joining Yonsei University, she had over 14 years of experience working for
                international practices in London, Amsterdam, and New York. She has experience
                working on projects with diverse scales, programs, and complex forms throughout all
                design stages and has completed built projects. She was a lead architect at Zaha
                Hadid Architects, where she worked as a design architect and a specialist involved
                in research to develop a computational design methodology for evaluating the social
                performance of design alternatives. Her previous places of work include Foster +
                Partners in London, SOM in New York, and UNStudio in Amsterdam. She has taught
                architecture design studios as a lecturer at the Bartlett School of Architecture,
                University College London. She has also taught studios and workshops in the UK, the
                US, and the Netherlands including at the AA School, Cardiff University, TUDelft, and
                Harvard GSD. She obtained her 5-year professional degree (B.Arch) in architecture
                from Cornell University, a Master of Science degree (MSc) from the Architectural
                Association School of Architecture, and a Ph.D. (Dr. phil) from Universität für
                angewandte Kunst Wien. Her research focuses on the social and qualitative aspects of
                the built environment, and computational design methodologies. Her research has been
                published in high-impact journals.
              </p>
            </div>

            {/* Divider */}
            <hr className="border-zinc-200" />

            {/* Korean bio */}
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-lime-600 uppercase">
                프로필
              </span>
              <div className="mt-3 space-y-4 text-sm text-zinc-600 leading-7 break-keep border-l-2 border-zinc-200 pl-5">
                <p>
                  유성민 교수는 건축 디자인 + 테크놀로지 연구소 소장입니다. 영국 왕립건축사이며
                  건축학박사로 실무와 연구를 병행하며 런던을 기반으로 활동해 왔습니다.
                  연세대학교에 부임하기 전 런던, 암스테르담 및 뉴욕의 저명 건축사사무소에서
                  14년의 실무경력이 있습니다. 그간 다양한 규모의 설계 및 복합 기능의 프로젝트에
                  참여하며 건축설계 실무 경험을 쌓아왔습니다.
                </p>
                <p>
                  런던의 자하 하디드 건축사 사무소에서는 건축설계와 설계대안의 평가를 위한
                  컴퓨터 기반 설계 방법론 개발에도 참여하며 설계와 연구를 병행하였으며, 런던의
                  Foster + Partners, 뉴욕의 SOM 및 암스테르담의 UN Studio에서도 근무한 경력이
                  있습니다.
                </p>
                <p>
                  교육경력으로는 런던 대학교 바틀렛 건축학교 대학원 디자인 스튜디오 겸임 교수를
                  역임하였으며, 또한 영국 AA School, Cardiff University, 네덜란드 TU Delft 및
                  Harvard GSD에서 디자인 워크샵 교수를 역임하였습니다.
                </p>
                <p>
                  유성민 교수는 미국 코넬 대학교에서 5년제 건축학 학사 (B.Arch)를 취득했으며,
                  영국 Architectural Association School of Architecture에서 건축학석사 (MSc),
                  오스트리아 Universität für angewandte Kunst Wien에서 박사학위 (Dr.&nbsp;phil)를
                  받았습니다. 연구분야는 건축 환경이 미치는 사회적 현상 및 질적 연구이며,
                  컴퓨터 기반 설계 방법론에 중점을 두고 있습니다. 그간의 연구는 최상위
                  저명국제저널에 발표되었습니다.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
