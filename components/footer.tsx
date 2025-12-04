"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Building, Send } from "lucide-react"
import { useState } from "react"

const navigationLinks = {
  left: ["HOME", "OUR TEAM", "PROPERTY VALUATION", "CONTACT"],
  right: ["PROPERTIES", "INTERACTIVE MAP"],
}

const partnerLogos = [
  "LOS ANGELES BUSINESS JOURNAL",
  "REAL TRENDS VERIFIED",
  "RT REAL TRENDS ★ EMERGING LEADERS",
  "Los Angeles Real Estate All-Stars",
  "PASADENA REAL ESTATE ALL-STARS 2023",
  "LEADERS OF INFLUENCE RESIDENTIAL REAL ESTATE BROKERS",
  "Zillow",
  "tradedla",
  "Neighborhood FAVES",
  "Dealsetters",
]

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  return (
    <>
      <footer id="contact" className="relative bg-[#2a2a2a] text-white overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none">
          <div className="h-full w-full bg-linear-to-r from-transparent to-[#2a2a2a]" 
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"200\" height=\"400\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M100 0 L80 100 L120 100 Z M90 100 L70 200 L110 200 Z M100 200 L60 300 L140 300 Z\" fill=\"white\" opacity=\"0.1\"/%3E%3C/svg%3E')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left center",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="mb-8">
                <h2
                  className="text-white leading-none mb-1"
                  style={{
                    fontSize: "48px",
                    fontWeight: "normal",
                    fontStyle: "normal",
                  }}
                >
                  keyes
                </h2>
                <p
                  className="text-white uppercase"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    fontWeight: 500,
                  }}
                >
                  REAL ESTATE
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col gap-3">
                  {navigationLinks.left.map((link) => (
                    <Link
                      key={link}
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-white uppercase text-sm tracking-wider hover:text-[#20b8f7] transition-colors"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  {navigationLinks.right.map((link) => (
                    <Link
                      key={link}
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-white uppercase text-sm tracking-wider hover:text-[#20b8f7] transition-colors"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="flex flex-col gap-4">
                <a
                  href="tel:310.486.9417"
                  className="flex items-center gap-3 text-white hover:text-[#20b8f7] transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>310.486.9417</span>
                </a>
                <a
                  href="mailto:info@keyesLA.com"
                  className="flex items-center gap-3 text-white hover:text-[#20b8f7] transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>info@keyesLA.com</span>
                </a>
                <div className="flex items-start gap-3 text-white">
                  <MapPin className="w-4 h-4 shrink-0 mt-1" />
                  <div className="flex flex-col gap-2">
                    <span>1412 Colorado Boulevard, Los Angeles, CA 90041</span>
                    <span>15113 W Sunset Boulevard, Ste 3 Pacific Palisades, CA 90272</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Building className="w-4 h-4 shrink-0" />
                  <span>CalDRE #01912382</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <h3
                className="text-3xl font-bold mb-6 text-white"
              >
                Get in Touch
              </h3>
              <form
                className="relative bg-gray-800 p-6 rounded-lg"
              >
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/20 backdrop-blur-sm border border-white/30 rounded px-4 py-3 text-white placeholder-gray-200 focus:outline-none focus:border-white transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/20 backdrop-blur-sm border border-white/30 rounded px-4 py-3 text-white placeholder-gray-200 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div className="relative mb-4">
                  <textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded px-4 py-3 text-white placeholder-gray-200 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="absolute bottom-4 right-4 text-white hover:scale-110 transition-transform"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
              {partnerLogos.map((logo, index) => (
                <div
                  key={index}
                  className="text-white/70 text-xs text-center hover:text-white transition-colors"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-white/70 text-xs"
            >
              Copyright © 2025. Keyes Real Estate. All Rights Reserved.{" "}
              <Link href="#" className="hover:text-white transition-colors">
                Sitemap
              </Link>
              . Real Estate Website Design by Agent Image
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
