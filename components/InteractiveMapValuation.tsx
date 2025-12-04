"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export function InteractiveMapValuation() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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
    <section ref={sectionRef} className="relative">
      <div className="h-4 bg-[#4FBDBA] w-full" />

      <div className="bg-[#e8e8e8] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <Link
              href="#"
              className={`group block transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative">
                <div className="absolute -top-4 left-0 right-0 h-8 bg-[#4FBDBA] -z-10" />

                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src="/assets/Interactive-img.jpg"
                    alt="Aerial view of Malibu coastal homes"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-500 text-sm tracking-[0.4em] uppercase mb-2">I N T E R A C T I V E</p>
                <h3 className="text-4xl md:text-5xl text-gray-800">Map</h3>
              </div>
            </Link>

            <Link
              href="#"
              className={`group block transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative">
                <div className="absolute -top-4 left-0 right-0 h-8 bg-[#4FBDBA] -z-10" />

                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src="/assets/MapValuation.jpg"
                    alt="Luxury home entrance with blue gate"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-500 text-sm tracking-[0.4em] uppercase mb-2">P R O P E R T Y</p>
                <h3 className="text-4xl md:text-5xl text-gray-800">Valuation</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
