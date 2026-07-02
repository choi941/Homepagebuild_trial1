export default function Contact() {
  return (
    <div className="bg-white text-zinc-900 min-h-screen py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8">

        {/* ── Page header ── */}
        <div className="space-y-4 mb-14">
          <span className="text-xs font-mono font-bold tracking-widest text-lime-600 uppercase">
            
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-zinc-950">
            Contact
          </h1>
          <hr className="border-zinc-200" />
        </div>

        {/* ══════════════════════════════════════
            SECTION 1 — Application Notice
            ══════════════════════════════════════ */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl px-10 py-10 mb-16">
          <h2 className="font-display font-bold text-2xl sm:text-3xl"
            style={{ color: '#C7FF00', filter: 'brightness(0.75)' }}>
            Application is open for graduate studies
          </h2>

          {/* English */}
          <p className="mt-5 text-base text-zinc-600 leading-relaxed break-keep"
            style={{ wordBreak: 'keep-all' }}>
            AD + T Lab welcomes applicants interested in exploring the combination of 
            architectural design and technology in the listed areas under research interests. <br />
            Applications are open for both master's and doctoral degrees. <br />
            While a portfolio is not a requirement for application, it is recommended for those with a 
            design background. <br />
            Proficiency in English (both writing and speaking) is desired due to our international collaborations and publications. <br />
            Additionally, it is highly recommended to get in touch before submitting your application.
          </p>

          {/* Korean */}
          <p className="mt-4 text-sm text-zinc-500 leading-6 break-keep border-l-2 border-zinc-200 pl-5"
            style={{ wordBreak: 'keep-all' }}>
            AD + T Lab은 건축 설계와 기술의 융합을 다양한 연구 분야에서 탐구하고자 하는 지원자를 환영합니다. 
            연구 희망자는 석사 또는 박사 학위 과정으로 지원 가능합니다. <br />
            포트폴리오는 필수 제출 서류는 아니지만, 설계 관련 배경이 있는 경우 제출을 권장합니다. <br />
            국제 연구 협력과 국제 저널 발표를 위해 영어 작문 및 회화 능력이 요구되며, 관심 있는 지원자는 사전 연락을 권장합니다.
          </p>
        </div>

        {/* ══════════════════════════════════════
            SECTION 2 — Contact Info + Map (2-column)
            ══════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT: Contact Info */}
          <div className="space-y-10">
            <h2 className="font-display font-semibold text-2xl text-zinc-900">
              Contact us.
            </h2>

            {/* Email */}
            <div className="space-y-1.5">
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                Email
              </p>
              <a
                href="mailto:syu@yonsei.ac.kr"
                className="block text-lg font-semibold text-zinc-800 hover:text-lime-600 transition-colors duration-200"
              >
                syu@yonsei.ac.kr
              </a>
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                Phone
              </p>
              <p className="text-lg text-zinc-800">
                +82 (0)2-2123-3092~6
              </p>
            </div>

            {/* Address */}
            <div className="space-y-1.2">
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                Address
              </p>
              <p className="text-lg text-zinc-800 leading-relaxed break-keep"
                style={{ wordBreak: 'keep-all' }}>
                Department of Interior Architecture
                and Built Environment,<br />
                College of Human Ecology,<br />
                50 Yonsei-ro, Seodaemun-gu,<br />
                Seoul, Korea 37220
              </p>
            </div>

            {/* Affiliation note */}
            <p className="pt-4 border-t border-zinc-100 text-xs text-zinc-400 font-mono tracking-wide">
              Yonsei University · AD+T Lab · Seoul, Korea
            </p>
          </div>

          {/* RIGHT: Google Maps embed (연세대 생활과학대학 좌표) */}
          <div className="rounded-xl overflow-hidden shadow-lg h-96 w-full mt-8">
            <iframe
              title="AD+T Lab Location — Yonsei University"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              // 연세대학교 생활과학대학(삼성관) 좌표 적용
              src="https://www.google.com/maps?q=37.5649,126.9343&z=17&output=embed"
            />
          </div>

        </div>

      </div>
    </div>
  );
}