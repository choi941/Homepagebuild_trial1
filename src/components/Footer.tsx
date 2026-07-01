import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zinc-100 text-zinc-600 border-t border-zinc-200 transition-colors duration-300">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-start">

          {/* Navigation Column — left-aligned */}
          <div className="space-y-4 text-left">
            <h3 className="font-display text-zinc-800 font-bold text-xs uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <Link to="/about" className="hover:text-lime-600 transition-colors duration-200">About</Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-lime-600 transition-colors duration-200">Research</Link>
              </li>
              {/* Members — label only, sub-links are clickable */}
              <li>
                <span className="text-zinc-400 cursor-default select-none">Members</span>
                <ul className="mt-1 ml-3 space-y-1">
                  <li>
                    <Link to="/professor" className="hover:text-lime-600 transition-colors duration-200">Professor</Link>
                  </li>
                  <li>
                    <Link to="/researchers" className="hover:text-lime-600 transition-colors duration-200">Researchers</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact" className="hover:text-lime-600 transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information & Logo — pushed to right */}
          <div className="flex flex-row items-center justify-end gap-6 w-full">
            <div className="space-y-1.5 text-sm font-mono text-left lg:text-right">
              <h3 className="font-display text-zinc-800 font-bold text-xs uppercase tracking-widest mb-3">Contact Information</h3>
              <p className="text-zinc-700">
                <a href="mailto:syu@yonsei.ac.kr" className="hover:text-lime-600 transition-colors">
                  syu@yonsei.ac.kr
                </a>
              </p>
              <p className="text-zinc-700">(+82) 2-2123-3092</p>
              <p className="text-zinc-455 text-xs mt-2 font-sans">
                College of Human Ecology, Yonsei University <br />
                Seoul, Korea
              </p>
            </div>
            <div className="shrink-0 flex items-center justify-center">
              <img
                src="/logo_footer.png"
                alt="AD+T Lab Footer Logo"
                className="h-24 sm:h-28 w-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-zinc-200 py-6 text-xs text-zinc-500 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>Copyright © 2026 AD+T All rights reserved.</p>
          <p>Built by CYL</p>
        </div>
      </div>

    </footer>
  );
}
