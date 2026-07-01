import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Researchers from './pages/Researchers';
import ResearcherDetail from './pages/ResearcherDetail';
import Professor from './pages/Professor';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 selection:bg-lime-600 selection:text-white transition-colors duration-300">
        {/* Persistent top Header bar */}
        <Header />

        {/* Dynamic page routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/researchers" element={<Researchers />} />
            <Route path="/researchers/:id" element={<ResearcherDetail />} />
            <Route path="/professor" element={<Professor />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Persistent bottom Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
