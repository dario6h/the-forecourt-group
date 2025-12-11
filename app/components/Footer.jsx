export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span
                className="text-base sm:text-lg font-bold tracking-wide text-white uppercase"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                The Forecourt Group Ltd.
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering excellence in automotive fuel retail and IT services
              across the United Kingdom.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company Information</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Company No: 12155932</li>
              <li>Incorporated: 12 September 2019</li>
              <li>Status: Active</li>
              <li>Type: Private Limited Company</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <span className="text-gray-400 block">Privacy Policy</span>
              <span className="text-gray-400 block">Terms of Service</span>
              <span className="text-gray-400 block">Cookie Policy</span>
              <span className="text-gray-400 block">Data Protection</span>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 The Forecourt Group Ltd. All rights reserved. Registered in
              Scotland.
            </p>
            <p className="text-gray-400 text-xs">
              SIC Code: 47300 - Retail sale of automotive fuel in specialised
              stores
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

