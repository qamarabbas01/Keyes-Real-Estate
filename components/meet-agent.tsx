"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Home, DollarSign } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: DollarSign, value: "$1.5B+", label: "Transaction Volume" },
  { icon: Home, value: "500+", label: "Properties Sold" },
  { icon: Award, value: "16+", label: "Years Experience" },
]

export function MeetAgent() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="team" className="bg-cyan-500 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <p
              className={`text-sm tracking-[0.3em] mb-2 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              MEET
            </p>
            <h2
              className={`text-5xl md:text-6xl lg:text-7xl  fon mb-8 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Brad
              <br />
              Keyes
            </h2>
            <p
              className={`text-white/90 leading-relaxed max-w-lg mb-8 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Raised in Westwood, Brad Keyes is a trusted real estate advisor known for his energy, candor, and
              strategic mindset. A licensed broker and practicing real estate attorney, Brad brings a rare blend of
              legal expertise, brokerage savvy, and investor insight to every deal. With more than 16 years of
              experience and over $1.5 billion in transactional advisory experience, he&apos;s handled everything from
              single-family homes to complex commercial transactions.
            </p>

            <div
              className={`grid grid-cols-3 gap-6 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center lg:text-left"
                  style={{ 
                    transitionDelay: `${400 + i * 100}ms`,
                    fontFamily: "'Montserrat', sans-serif"
                  }}
                >
                  <stat.icon className="w-6 h-6 mb-2 mx-auto lg:mx-0" />
                  <p className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>{stat.value}</p>
                  <p className="text-white/70 text-xs tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className={`inline-block mt-8 border-2 border-white text-white px-8 py-3 text-sm tracking-wider hover:bg-white hover:text-cyan-500 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ 
                transitionDelay: "500ms",
                fontFamily: "'Montserrat', sans-serif"
              }}
            >
              WORK WITH BRAD
            </a>
          </div>

          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"
            }`}
          >
            <div className="bg-cyan-400 absolute -top-4 -left-4 w-full h-full" />
            <Image
              src="/assets/agent.jpg"
              alt="Brad Keyes"
              width={600}
              height={800}
              unoptimized
              className="relative z-10 w-full max-w-md mx-auto shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
