import { ArrowRight, Fuel, Server } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-6xl mx-auto text-center relative z-10 scroll-animate opacity-0">
        <div className="inline-flex items-center space-x-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
          <Fuel className="w-4 h-4 text-blue-400" />
          <span className="text-gray-400 text-sm">+</span>
          <Server className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-gray-300 font-medium">Fuel Retail & IT Services Excellence</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-2">
            Powering Your Business
          </span>
          <span className="bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Forward
          </span>
        </h1>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          The Forecourt Group Ltd delivers premium automotive fuel retail services and comprehensive IT solutions across Scotland and beyond.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => scrollToSection('services')}
            className="group px-8 py-4 bg-white text-slate-900 rounded-full font-semibold transition-all duration-200 hover:bg-gray-100 hover:scale-105 flex items-center space-x-2"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}