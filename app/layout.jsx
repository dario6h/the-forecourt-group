import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://theforecourtgroup.com"),
  title: {
    default:
      "The Forecourt Group Ltd - Fuel Retail & IT Services Scotland | Cowdenbeath",
    template: "%s | The Forecourt Group Ltd",
  },
  description:
    "The Forecourt Group Ltd delivers premium automotive fuel retail services and comprehensive IT solutions including IT staffing, outsourcing, and web development across Scotland and the UK. Contact us: +44 7392 570 952",
  keywords: [
    "The Forecourt Group",
    "Forecourt Group Scotland",
    "automotive fuel retail Scotland",
    "fuel retail Cowdenbeath",
    "IT services Scotland",
    "IT staffing UK",
    "IT outsourcing Scotland",
    "web development Scotland",
    "IT manpower services",
    "fuel retail United Kingdom",
    "Scotland IT consulting",
    "Cowdenbeath fuel retail",
    "UK fuel services",
    "Scottish IT solutions",
    "automotive fuel specialists",
  ],
  authors: [{ name: "The Forecourt Group Ltd" }],
  creator: "The Forecourt Group Ltd",
  publisher: "The Forecourt Group Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://theforecourtgroup.com",
  },
  openGraph: {
    title:
      "The Forecourt Group Ltd - Premium Fuel Retail & IT Services Scotland",
    description:
      "Leading provider of automotive fuel retail and comprehensive IT solutions across Scotland. Specialized services in fuel retail, IT staffing, outsourcing, and web development. Available 24/7.",
    url: "https://theforecourtgroup.com",
    siteName: "The Forecourt Group Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://theforecourtgroup.com/tfg-logo.png",
        width: 512,
        height: 512,
        alt: "The Forecourt Group Ltd - Fuel Retail & IT Services Scotland",
        type: "image/png",
      },
      {
        url: "https://theforecourtgroup.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Forecourt Group Ltd - Your Trusted Partner for Fuel Retail and IT Services",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Forecourt Group Ltd - Fuel Retail & IT Services Scotland",
    description:
      "Premium automotive fuel retail and comprehensive IT solutions across Scotland and the UK. Contact us for IT staffing, outsourcing, and web development services.",
    images: ["https://theforecourtgroup.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Business Services",
  classification: "Fuel Retail, IT Services, Technology Solutions",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f172a" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}