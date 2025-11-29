"use client"

import { useState, useEffect } from "react"
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ChevronDown } from "lucide-react"

const socialIcons = [
  { name: "facebook", icon: Facebook },
  { name: "instagram", icon: Instagram },
  { name: "twitter", icon: Twitter },
  { name: "linkedin", icon: Linkedin },
  { name: "youtube", icon: Youtube },
]

const heroImages = [
  "/assets/hero-1.jpg",
  "/assets/hero-2.jpg",
  "/assets/hero-3.jpg",
  "/assets/hero-4.jpg",
  "/assets/hero-5.jpg",
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
        setIsTransitioning(false)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className={`absolute inset-0 bg-cover bg-center ${
            index === currentImageIndex && !isTransitioning
              ? "opacity-100 z-0"
              : "opacity-0 z-[-1]"
          }`}
          style={{
            backgroundImage: `url('${image}')`,
            transform: index === currentImageIndex ? "scale(1.1)" : "scale(1)",
            transition: "opacity 1.5s ease-in-out, transform 10s ease-in-out",
          }}
        >
          <div className="absolute inset-0 bg-black/30 transition-opacity duration-1000" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
        <h1
          className={`text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.3em] mb-2 transition-all duration-1000 ${
            "opacity-100 translate-y-0"
          }`}
        >
          keyes
        </h1>
        <p
          className={`text-lg md:text-xl tracking-[0.5em] font-light transition-all duration-1000 delay-300 ${
            "opacity-100 translate-y-0"
          }`}
        >
          REAL ESTATE
        </p>

        <div
          className={`absolute bottom-12 transition-all duration-1000 delay-700 ${
            "opacity-100"
          }`}
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs tracking-widest">SCROLL</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 hover:bg-blue-400 hover:text-white hidden lg:flex flex-col gap-3">
        {socialIcons.map((social, i) => (
          <a
            key={social.name}
            href="#"
            className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-cyan-400 hover:border-cyan-400 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-cyan-400/50 animate-in fade-in slide-in-from-right-4"
            style={{
              animationDelay: `${1000 + i * 150}ms`,
              animationDuration: "600ms",
              animationFillMode: "both",
            }}
          >
            <span className="sr-only">{social.name}</span>
            <social.icon className="w-4 h-4 transition-transform duration-300 hover:scale-125" />
          </a>
        ))}
      </div>

      <div
        className={`absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block transition-all duration-700 delay-500 ${
          "opacity-100 translate-x-0"
        }`}
      >
        <a
          href="#contact"
          className="bg-cyan-500 text-white py-6 px-3 text-xs tracking-widest writing-vertical rotate-180 hover:bg-cyan-400 transition-colors cursor-pointer"
        >
          GET IN TOUCH
        </a>
      </div>
    </section>
  )
}
