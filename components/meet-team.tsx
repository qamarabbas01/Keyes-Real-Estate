"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const teamMembers = [
  {
    name: "MARCUS CHEN",
    role: "Transaction Coordinator",
    position: { left: 0, right: 20 },
  },
  {
    name: "JENNIFER WALSH",
    role: "Senior Agent",
    position: { left: 20, right: 40 },
  },
  {
    name: "BRAD KEYES",
    role: "Managing Partner",
    position: { left: 40, right: 60 },
  },
  {
    name: "SOFIA MARTINEZ",
    role: "Client Relations Manager",
    position: { left: 60, right: 80 },
  },
  {
    name: "MICHAEL TORRES",
    role: "Luxury Properties Specialist",
    position: { left: 80, right: 100 },
  },
]

export function MeetTeam() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return
    const rect = imageRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100

    const hoveredMember = teamMembers.findIndex((member) => x >= member.position.left && x < member.position.right)

    if (hoveredMember !== -1) {
      setHoveredIndex(hoveredMember)
    }
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  const getColorClipPath = () => {
    if (hoveredIndex === null) return "inset(0 100% 0 0)"
    const member = teamMembers[hoveredIndex]
    return `inset(0 ${100 - member.position.right}% 0 ${member.position.left}%)`
  }

  const getLabelPosition = () => {
    if (hoveredIndex === null) return { left: "50%", transform: "translateX(-50%)" }
    const member = teamMembers[hoveredIndex]
    const center = (member.position.left + member.position.right) / 2
    return { left: `${center}%`, transform: "translateX(-50%)" }
  }

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white">
      <div
        className={`py-16 md:py-24 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-gray-400 text-sm md:text-base tracking-[0.4em] uppercase mb-2">M E E T</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-gray-900">The Team</h2>
      </div>

      <div className="relative w-full h-[70vh] min-h-[500px]">
        <div
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`absolute inset-0 cursor-pointer transition-all duration-1000 ${
            isVisible ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
        >
          <Image
            src="/assets/image.png"
            alt="Keyes Real Estate Team"
            fill
            className="object-cover object-top"
            priority
          />

          <div
            className="absolute inset-0 transition-[clip-path] duration-300 ease-out"
            style={{ clipPath: getColorClipPath() }}
          >
            <Image
              src="/assets/image.png"
              alt="Keyes Real Estate Team"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {hoveredIndex !== null && (
            <div
              className="absolute top-1/2 -translate-y-1/2 z-20 transition-all duration-300"
              style={getLabelPosition()}
            >
              <div className="bg-cyan-500 px-8 py-4 text-center min-w-[200px]">
                <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide">
                  {teamMembers[hoveredIndex].name}
                </h3>
                <p className="text-white/90 text-sm mt-1">{teamMembers[hoveredIndex].role}</p>
              </div>
            </div>
          )}
        </div>

        <div
          className={`absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          {teamMembers.map((member, index) => (
            <button
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
                hoveredIndex === index ? "bg-cyan-500 border-cyan-500 scale-125" : "bg-transparent hover:bg-white/50"
              }`}
              aria-label={`View ${member.name}`}
            />
          ))}
        </div>

        <div
          className={`absolute left-0 top-1/3 w-1 h-32 bg-cyan-500 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </section>
  )
}
