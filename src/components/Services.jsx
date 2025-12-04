import { Fuel, Server, Users, CheckCircle, Globe } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate opacity-0">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Our Core
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 scroll-animate opacity-0">
            <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all">
              <Fuel className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Automotive Fuel Retail</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Specialized retail services for automotive fuel in dedicated stores, ensuring quality, reliability, and customer satisfaction.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>Premium fuel quality</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>Efficient service delivery</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>Strategic locations</span>
              </li>
            </ul>
          </div>

          <div className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 scroll-animate opacity-0">
            <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-all">
              <Users className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">IT Manpower Services</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Professional IT staffing solutions providing skilled personnel to meet your technology requirements.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Qualified IT professionals</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Flexible resource allocation</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Rapid deployment</span>
              </li>
            </ul>
          </div>

          <div className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 scroll-animate opacity-0">
            <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-all">
              <Server className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">IT Outsourcing & Services</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Comprehensive IT outsourcing solutions to streamline operations and enhance technological capabilities.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                <span>End-to-end IT management</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                <span>Cost-effective solutions</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                <span>24/7 support available</span>
              </li>
            </ul>
          </div>

          <div className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 scroll-animate opacity-0">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-all">
              <Globe className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Web Development</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Custom web development solutions tailored to your business needs with modern technologies and best practices.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Responsive design</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Modern frameworks</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>SEO optimized</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}