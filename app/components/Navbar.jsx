"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar({ scrolled }) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    function handleScroll() {
      const sections = ["home", "about", "services", "projects", "contact"];
      const current = sections.find((section) => {
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
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuIsOpen(false);
  };

  return (
    <>
      <nav
        className={`hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? "w-11/12 max-w-5xl" : "w-11/12 max-w-6xl"
        }`}
        aria-label="Primary navigation"
      >
        <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-2.5 shadow-2xl">
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => scrollToSection("home")}
            >
              <span
                className="text-lg font-bold tracking-wide text-white uppercase"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                The Forecourt Group Ltd.
              </span>
            </button>

            <div className="flex items-center space-x-8">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 py-2 group"
                  >
                    <span className="relative z-10">{item}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                        activeSection === item.toLowerCase()
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      <nav className="md:hidden fixed top-4 left-0 right-0 z-50 px-4">
        <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl">
          <div className="flex justify-between items-center px-6 py-3.5">
            <button
              type="button"
              className="flex items-center cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <span
                className="text-sm font-bold tracking-wide text-white uppercase"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                The Forecourt Group Ltd.
              </span>
            </button>

            <button
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
              aria-expanded={mobileMenuIsOpen}
              aria-label="Toggle navigation"
              type="button"
            >
              {mobileMenuIsOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {mobileMenuIsOpen && (
            <div className="px-4 pb-4 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-1">
                {["Home", "About", "Services", "Projects", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                        activeSection === item.toLowerCase()
                          ? "text-white bg-blue-500/20"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

