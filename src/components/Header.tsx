import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'; // Chevron 아이콘 추가

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [membersOpen, setMembersOpen] = useState(false); // Members 펼침 상태 추가

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... (로고 및 데스크탑 메뉴는 동일) ... */}
        
        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-200 bg-white/95 px-4 py-4 space-y-1">
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 font-bold text-zinc-700">About</Link>
            <Link to="/research" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 font-bold text-zinc-700">Research</Link>
            
            {/* Members Accordion */}
            <div>
              <button 
                onClick={() => setMembersOpen(!membersOpen)}
                className="flex items-center justify-between w-full px-3 py-3 font-bold text-zinc-700 hover:text-lime-600"
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
      </div>
    </header>
  );
}