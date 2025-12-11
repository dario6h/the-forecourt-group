import { Fuel, Server } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate opacity-0">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Our Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Delivering excellence across multiple sectors with proven results
            and satisfied clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 scroll-animate opacity-0">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Fuel className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold">Fuel Retail Operations</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Successfully managing specialized automotive fuel retail stores
              with focus on quality service delivery and customer satisfaction.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300">
                Retail Management
              </span>
              <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300">
                Quality Control
              </span>
              <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300">
                Customer Service
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 scroll-animate opacity-0">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Server className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold">IT Service Delivery</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Providing comprehensive IT manpower and outsourcing services to
              businesses, enhancing their technological infrastructure and
              capabilities.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm text-cyan-300">
                IT Staffing
              </span>
              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm text-cyan-300">
                Outsourcing
              </span>
              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm text-cyan-300">
                IT Consulting
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

