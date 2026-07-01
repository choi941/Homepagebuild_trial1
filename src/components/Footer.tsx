import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zinc-100 text-zinc-600 border-t border-zinc-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* 모바일에서는 세로(flex-col), 데스크탑에서는 가로(md:grid)로 작동 */}
        <div className="flex flex-col md:grid md:grid-cols-[auto_1fr] gap-12 items-start">

          {/* Navigation Column */}
          <div className="space-y-4 text-left">
            <h3 className="font-display text-zinc-800 font-bold text-xs uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-2 text-sm font-sans">
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

          {/* Contact Info & Logo */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between md:justify-end gap-8 md:gap-6 w-full">
            
            {/* Contact Info (모바일/데스크탑 모두 정렬 유지) */}
            <div className="space-y-1.5 text-sm font-mono text-center md:text-right w-full md:w-auto">
              <h3 className="font-display text-zinc-800 font-bold text-xs uppercase tracking-widest mb-3">Contact Information</h3>
              <p><a href="mailto:syu@yonsei.ac.kr" className="hover:text-lime-600">syu@yonsei.ac.kr</a></p>
              <p>(+82) 2-2123-3092</p>
              <p className="text-zinc-455 text-xs mt-2 font-sans">
                College of Human Ecology, Yonsei University <br /> Seoul, Korea
              </p>
            </div>

            {/* Logo (모바일에서는 중앙, 데스크탑에서는 오른쪽 끝) */}
            <div className="shrink-0 flex justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0">
              <img
                src="/logo_footer.png"
                alt="AD+T Lab Footer Logo"
                className="h-20 sm:h-28 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-zinc-200 py-6 text-xs text-zinc-500 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <p>Copyright © 2026 AD+T All rights reserved. | Built by CYL</p>
        </div>
      </div>
    </footer>
  );
}