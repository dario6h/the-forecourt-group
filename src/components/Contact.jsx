import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate opacity-0">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Get In
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Ready to discuss your fuel retail or IT service needs? Contact us today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 flex items-start space-x-4 scroll-animate opacity-0">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Registered Office</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  4 High Street<br />
                  Cowdenbeath<br />
                  Scotland, KY4 9NA<br />
                  United Kingdom
                </p>
              </div>
            </div>

            <a 
              href="tel:+441383000000"
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 flex items-start space-x-4 hover:border-cyan-500/50 transition-all duration-300 scroll-animate opacity-0 block"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors">
                  +44 (0) 7392 570 952
                </p>
              </div>
            </a>

            <a 
              href="https://wa.me/441383000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 flex items-start space-x-4 hover:border-emerald-500/50 transition-all duration-300 scroll-animate opacity-0 block"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors">
                  +44 (0) 7392 570 952
                </p>
              </div>
            </a>

            <a 
              href="mailto:info@theforecourtgroup.co.uk"
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 flex items-start space-x-4 hover:border-purple-500/50 transition-all duration-300 scroll-animate opacity-0 block"
            >
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-purple-400 text-sm hover:text-purple-300 transition-colors break-all">
                  info@theforecourtgroup.co.uk
                </p>
              </div>
            </a>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 flex items-center justify-center scroll-animate opacity-0">
            <div className="text-center">
             {/* <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {/* Empty space for logo 
              </div> */}
              <span 
              className="text-base sm:text-lg font-bold tracking-wide text-white uppercase" 
              style={{ fontFamily: 'Times New Roman, serif' }}
            >
              The Forecourt Group Ltd.
            </span>
              <p className="text-gray-400 mb-6">
                Your trusted partner for fuel retail and IT services
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
