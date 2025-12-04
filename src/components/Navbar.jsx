import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar({ scrolled }) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    function handleScroll() {
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuIsOpen(false);
  };

  return (
    <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
      scrolled ? 'w-11/12 max-w-5xl' : 'w-11/12 max-w-6xl'
    }`}>
      <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-2.5 shadow-2xl">
        <div className="flex justify-between items-center">
          {/* Logo - Left Side */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => scrollToSection('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              {/* Empty space for logo */}
            </div>
            <span 
              className="text-base sm:text-lg font-bold tracking-wide text-white uppercase" 
              style={{ fontFamily: 'Times New Roman, serif' }}
            >
              The Forecourt Group
            </span>
          </div>

          {/* Nav Links - Right Side */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 py-2 group"
              >
                <span className="relative z-10">{item}</span>
                
                {/* Animated underline */}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                    activeSection === item.toLowerCase() 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-200"
            onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
          >
            {mobileMenuIsOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuIsOpen && (
          <div className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-slate-950/95 backdrop-blur-xl z-50 flex flex-col">
            {/* Header with Close Button */}
            <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
              <span 
                className="text-lg font-bold tracking-wide text-white uppercase" 
                style={{ fontFamily: 'Times New Roman, serif' }}
              >
                The Forecourt Group
              </span>
              <button
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                onClick={() => setMobileMenuIsOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col items-center justify-center flex-1 space-y-8 px-6">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-2xl font-medium transition-all duration-200 ${
                    activeSection === item.toLowerCase()
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
