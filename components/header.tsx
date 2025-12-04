"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPropertiesDropdownOpen, setIsPropertiesDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-black' : 'bg-transparent'
        }`}
        style={{
          padding: isScrolled ? "20px 0" : "30px 0",    
        }}
      >
        <div className="mx-12">
          <div className="flex items-center justify-between">
            {isScrolled ? (
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-start">
                  <Link
                    href="/"
                    className="text-white leading-none transition-opacity duration-300 hover:opacity-80"
                    style={{
                      fontSize: "72px",
                      fontWeight: 200,
                      fontStyle: "normal",
                      lineHeight: "1",
                      fontFamily: 'inherit'
                    }}
                  >
                    keyes
                  </Link>
                  <span 
                    className="text-white uppercase mt-[3px] ml-1"
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.8em",
                      fontWeight: 500,
                      fontFamily: "'Montserrat', sans-serif"
                    }}
                  >
                    REAL ESTATE
                  </span>
                </div>

                <Link
                  href="/"
                  className="text-white leading-none ml-3 transition-opacity duration-300 hover:opacity-80 hidden md:block"
                  style={{
                    fontFamily: "'Qwigley', cursive",
                    fontSize: "32px",
                    fontWeight: "normal",
                    fontStyle: "italic",
                    lineHeight: "1"
                  }}
                >
                  Pasadena to the Palisades™
                </Link>
              </div>
            ) : (
              <Link
                href="/"
                className="text-white leading-none transition-opacity duration-300 hover:opacity-80"
                style={{
                  fontFamily: "'Qwigley', cursive",
                  fontSize: "42px",
                  fontWeight: "normal",
                  fontStyle: "italic",
                  lineHeight: "1"
                }}
              >
                Pasadena to the Palisades™
              </Link>
            )}

            <nav className="hidden md:flex items-center gap-8">
              <div
                className="relative group"
                onMouseEnter={() => setIsPropertiesDropdownOpen(true)}
                onMouseLeave={() => setIsPropertiesDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1.5 text-white uppercase transition-all duration-300 hover:text-[#20b8f7] relative"
                  style={{ 
                    fontSize: "24px", 
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    fontFamily: "'Montserrat', sans-serif"
                  }}
                >
                  PROPERTIES
                </button>
                {isPropertiesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-4 bg-blue-400 backdrop-blur-md shadow-2xl py-3 z-9999 animate-fadeIn"
                    style={{ minWidth: "220px" }}
                  >
                    {["Current Listings", "Available Leases", "Under Contract", "Sold", "Leased"].map((item, index) => (
                      <Link
                        key={item}
                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                        className="block px-6 py-3 text-white transition-all duration-200 hover:bg-gray-900/50 hover:text-[#20b8f7] hover:pl-7"
                        style={{ 
                          fontSize: "24px", 
                          letterSpacing: "0.04em",
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 500,
                          animationDelay: `${index * 50}ms`
                        }}
                        onClick={() => setIsPropertiesDropdownOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {[
                { label: "OUR TEAM", href: "#" },
                { label: "PRESS", href: "#" },
                { label: "CONTACT", href: "#" }
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white uppercase transition-all duration-300 hover:text-[#20b8f7]"
                  style={{
                    fontSize: "24px",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    fontFamily: "'Montserrat', sans-serif"
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                className="text-white transition-all duration-300 md:hidden"
                style={{ 
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-12 h-12" /> : <Menu className="w-12 h-12  " />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60"
              onClick={() => setIsMenuOpen(false)}
              style={{ animation: "fadeIn 0.3s ease-out" }}
            />
            
            <div 
              className="fixed top-0 right-0 h-full w-full md:w-[900px] bg-linear-to-br from-[#20b8f7] to-[#1a9dd9] z-70 shadow-2xl"
              style={{ animation: "slideInRight 0.4s ease-out" }}
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform duration-300"
                style={{ fontSize: "32px" }}
              >
                <X className="w-8 h-8" />
              </button>

              <div className="h-full overflow-y-auto py-16 px-12">
                <div className="flex flex-col md:flex-row gap-16">
                  <div className="flex-1 space-y-12">
                    <div>
                      <Link
                        href="#"
                        className="block text-white text-4xl font-bold mb-6 hover:opacity-80 transition-opacity"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        HOME
                      </Link>
                    </div>

                    <div>
                      <h3 
                        className="text-white text-4xl font-bold mb-6"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        PROPERTIES
                      </h3>
                      <div className="space-y-3">
                        {["Current Listings", "Available Leases", "Under Contract", "Sold", "Leased"].map((item) => (
                          <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className="block text-white/90 text-lg hover:text-white hover:pl-2 transition-all"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <Link
                        href="#"
                        className="block text-white text-2xl font-semibold hover:opacity-80 transition-opacity"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        INTERACTIVE MAP
                      </Link>
                      <Link
                        href="#"
                        className="block text-white text-2xl font-semibold hover:opacity-80 transition-opacity"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        OUR TEAM
                      </Link>
                    </div>
                  </div>

                  <div className="flex-1 space-y-12">
                    <div className="space-y-6">
                      <Link
                        href="#"
                        className="block text-white text-2xl font-semibold hover:opacity-80 transition-opacity"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        PROPERTY VALUATION
                      </Link>
                      <Link
                        href="#"
                        className="block text-white text-2xl font-semibold hover:opacity-80 transition-opacity"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        PRESS
                      </Link>
                      <Link
                        href="#"
                        className="block text-white text-2xl font-semibold hover:opacity-80 transition-opacity"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        CONTACT
                      </Link>
                    </div>

                    <div className="pt-12 border-t border-white/30 space-y-6">
                      <a
                        href="tel:310.486.9417"
                        className="block text-white text-3xl font-bold hover:opacity-80 transition-opacity"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        310.486.9417
                      </a>
                      <a
                        href="mailto:info@keyesLA.com"
                        className="block text-white text-xl hover:opacity-80 transition-opacity"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        info@keyesLA.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                  {['facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'vimeo', 'google'].map((social) => (
                    <a
                      key={social}
                      href={`#${social}`}
                      className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-[#20b8f7] transition-all duration-300"
                    >
                      <span className="text-sm font-bold">{social[0].toUpperCase()}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  )
}