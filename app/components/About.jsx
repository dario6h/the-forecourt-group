import { CheckCircle, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate opacity-0">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              About The Forecourt Group
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Established in 2019, we are a dynamic company delivering excellence
            in automotive fuel retail and IT services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 scroll-animate opacity-0">
            <Target className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To provide exceptional fuel retail services and innovative IT
              solutions that drive business growth and operational excellence
              for our clients across the United Kingdom.
            </p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 scroll-animate opacity-0">
            <CheckCircle className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
            <p className="text-gray-400 leading-relaxed">
              We are committed to delivering reliable, efficient, and
              sustainable solutions that meet the evolving needs of the
              automotive and technology sectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

