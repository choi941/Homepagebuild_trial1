import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zinc-100 text-zinc-600 border-t border-zinc-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* 상단 섹션: 모바일/데스크탑 구분 */}
        <div className="flex flex-col gap-10">
          
          {/* 모바일용 레이아웃: 상단 가로 정렬 (Nav + Contact) */}
          <div className="flex justify-between items-start gap-4">
            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="font-display text-zinc-800 font-bold text-xs uppercase tracking-widest">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-lime-600">About</Link></li>
                <li><Link to="/research" className="hover:text-lime-600">Research</Link></li>
                <li>
                  <span className="text-zinc-400 select-none">Members</span>
                  <ul className="mt-1 ml-3 space-y-1">
                    <li><Link to="/professor" className="hover:text-lime-600">Professor</Link></li>
                    <li><Link to="/researchers" className="hover:text-lime-600">Researchers</Link></li>
                  </ul>
                </li>
                <li><Link to="/contact" className="hover:text-lime-600">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-1.5 text-sm font-mono text-right">
              <h3 className="font-display text-zinc-800 font-bold text-xs uppercase tracking-widest mb-3">Contact</h3>
              <p><a href="mailto:syu@yonsei.ac.kr" className="hover:text-lime-600">syu@yonsei.ac.kr</a></p>
              <p>(+82) 2-2123-3092</p>
              <p className="text-zinc-450 text-xs mt-2 font-sans">
                Yonsei Univ, Seoul, Korea
              </p>
            </div>
          </div>

          {/* 모바일용 하단: 로고 중앙 정렬 */}
          <div className="flex justify-center w-full border-t border-zinc-200 pt-8">
            <img
              src="/logo_footer.png"
              alt="AD+T Lab Footer Logo"
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>

      </div>

      {/* 하단 저작권 */}
      <div className="border-t border-zinc-200 py-6 text-xs text-zinc-500 font-sans text-center">
        <p>Copyright © 2026 AD+T All rights reserved. | Built by CYL</p>
      </div>
    </footer>
  );
}