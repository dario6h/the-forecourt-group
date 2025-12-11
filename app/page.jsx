"use client";

import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
        <div
          className="fixed inset-0 pointer-events-none z-30"
          aria-hidden="true"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
          }}
        />

        <Navbar scrolled={scrolled} />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {/* Enhanced Structured Data with LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://theforecourtgroup.com/#organization",
                name: "The Forecourt Group Ltd",
                alternateName: "The Forecourt Group",
                url: "https://theforecourtgroup.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://theforecourtgroup.com/tfg-logo.png",
                  width: 512,
                  height: 512,
                },
                description:
                  "Premium automotive fuel retail and comprehensive IT services across Scotland and the UK.",
                foundingDate: "2019-09-12",
                legalName: "The Forecourt Group Ltd",
                taxID: "12155932",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "4 High Street",
                  addressLocality: "Cowdenbeath",
                  addressRegion: "Scotland",
                  postalCode: "KY4 9NA",
                  addressCountry: "GB",
                },
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+44-7392-570952",
                    contactType: "customer service",
                    areaServed: ["GB"],
                    availableLanguage: ["English"],
                    contactOption: "TollFree",
                  },
                ],
                sameAs: [
                  "https://theforecourtgroup.com",
                  "https://wa.me/447392570952",
                ],
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://theforecourtgroup.com/#localbusiness",
                name: "The Forecourt Group Ltd",
                image: "https://theforecourtgroup.com/tfg-logo.png",
                telephone: "+44-7392-570952",
                email: "info@theforecourtgroup.co.uk",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "4 High Street",
                  addressLocality: "Cowdenbeath",
                  addressRegion: "Scotland",
                  postalCode: "KY4 9NA",
                  addressCountry: "GB",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "56.1130",
                  longitude: "-3.3489",
                },
                url: "https://theforecourtgroup.com",
                priceRange: "$$",
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "23:59",
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://theforecourtgroup.com/#website",
                url: "https://theforecourtgroup.com",
                name: "The Forecourt Group Ltd",
                description:
                  "Premium automotive fuel retail and comprehensive IT services",
                publisher: {
                  "@id": "https://theforecourtgroup.com/#organization",
                },
                inLanguage: "en-GB",
              },
              {
                "@type": "WebPage",
                "@id": "https://theforecourtgroup.com/#webpage",
                url: "https://theforecourtgroup.com",
                name: "The Forecourt Group Ltd - Fuel Retail & IT Services Scotland",
                isPartOf: {
                  "@id": "https://theforecourtgroup.com/#website",
                },
                about: {
                  "@id": "https://theforecourtgroup.com/#organization",
                },
                description:
                  "The Forecourt Group Ltd delivers premium automotive fuel retail services and comprehensive IT solutions across Scotland and the wider UK.",
                inLanguage: "en-GB",
              },
              {
                "@type": "Service",
                "@id": "https://theforecourtgroup.com/#service-fuel",
                serviceType: "Automotive Fuel Retail",
                provider: {
                  "@id": "https://theforecourtgroup.com/#organization",
                },
                areaServed: {
                  "@type": "Country",
                  name: "United Kingdom",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Fuel Retail Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Premium Fuel Retail",
                      },
                    },
                  ],
                },
              },
              {
                "@type": "Service",
                "@id": "https://theforecourtgroup.com/#service-it",
                serviceType: "IT Services & Outsourcing",
                provider: {
                  "@id": "https://theforecourtgroup.com/#organization",
                },
                areaServed: {
                  "@type": "Country",
                  name: "United Kingdom",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "IT Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "IT Manpower Services",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "IT Outsourcing",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Web Development",
                      },
                    },
                  ],
                },
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://theforecourtgroup.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://theforecourtgroup.com#services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Contact",
                item: "https://theforecourtgroup.com#contact",
              },
            ],
          }),
        }}
      />
    </>
  );
}