import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Research', href: '/research' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-zinc-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo - links to Home Page */}
          <Link to="/" className="flex items-center group cursor-pointer">
            <img 
              src="/AD+T_logo.png" 
              alt="AD+T Lab Logo" 
              className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav Links with Members dropdown */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/about"
              className="font-sans font-bold text-sm text-zinc-700 hover:text-lime-600 tracking-wide transition-colors duration-200"
            >About</Link>
            <Link
              to="/research"
              className="font-sans font-bold text-sm text-zinc-700 hover:text-lime-600 tracking-wide transition-colors duration-200"
            >Research</Link>
            {/* Members dropdown */}
            <div className="relative group">
                <span className="font-sans font-bold text-sm text-zinc-700 hover:text-lime-600 tracking-wide transition-colors duration-200 cursor-pointer">Members</span>
                <div className="absolute left-0 top-full w-40 pt-1 pb-1 hidden group-hover:block bg-white border border-zinc-100 rounded-lg shadow-lg">
                <Link
                  to="/professor"
                  className="block px-4 py-2 text-sm text-zinc-700 hover:text-lime-600"
                >Professor</Link>
                <Link
                  to="/researchers"
                  className="block px-4 py-2 text-sm text-zinc-700 hover:text-lime-600"
                >Researchers</Link>
              </div>
            </div>
            <Link
              to="/contact"
              className="font-sans font-bold text-sm text-zinc-700 hover:text-lime-600 tracking-wide transition-colors duration-200"
            >Contact</Link>
          </nav>

          {/* Right Institution Tag */}
          <div className="hidden md:flex items-center gap-4">
            <span className="font-sans text-xs text-zinc-400 font-semibold tracking-wider">
              YONSEI UNIVERSITY
            </span>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-zinc-200 text-zinc-700 bg-zinc-50"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white/95 px-4 py-4 space-y-2 transition-all duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-bold text-zinc-700 hover:text-lime-600 hover:bg-zinc-50 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
