import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [membersOpen, setMembersOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-zinc-200 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group cursor-pointer">
            <img 
              src="/AD+T_logo.png" 
              alt="AD+T Lab Logo" 
              className="h-12 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/about" className="font-sans font-bold text-base text-zinc-700 hover:text-lime-600 tracking-wide">About</Link>
            <Link to="/research" className="font-sans font-bold text-base text-zinc-700 hover:text-lime-600 tracking-wide">Research</Link>
            
            <div className="relative group">
              <span className="font-sans font-bold text-base text-zinc-700 hover:text-lime-600 tracking-wide cursor-pointer">Members</span>
              <div className="absolute left-0 top-full w-40 pt-1 pb-1 hidden group-hover:block bg-white border border-zinc-100 rounded-lg shadow-lg">
                <Link to="/professor" className="block px-4 py-2 text-sm text-zinc-700 hover:text-lime-600">Professor</Link>
                <Link to="/researchers" className="block px-4 py-2 text-sm text-zinc-700 hover:text-lime-600">Researchers</Link>
              </div>
            </div>
            
            <Link to="/contact" className="font-sans font-bold text-base text-zinc-700 hover:text-lime-600 tracking-wide">Contact</Link>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-zinc-700">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-4 py-4 space-y-1">
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 font-bold text-zinc-700">About</Link>
          <Link to="/research" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 font-bold text-zinc-700">Research</Link>
          
          <div>
            <button 
              onClick={() => setMembersOpen(!membersOpen)}
              className="flex items-center justify-between w-full px-3 py-3 font-bold text-zinc-700"
            >
              Members
              {membersOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {membersOpen && (
              <div className="pl-6 space-y-1 bg-zinc-50 rounded-lg py-2">
                <Link to="/professor" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-zinc-600 font-medium">Professor</Link>
                <Link to="/researchers" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-zinc-600 font-medium">Researchers</Link>
              </div>
            )}
          </div>

          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 font-bold text-zinc-700">Contact</Link>
        </div>
      )}
    </header>
  );
}