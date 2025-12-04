"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const properties = [
  { address: "123 Malibu Crest Drive, Malibu", image: "/assets/property-1.jpg" },
  { address: "456 Beverly Hills Boulevard, Beverly Hills", image: "/assets/property-2.jpg" },
  { address: "789 Brentwood Park Lane, Brentwood", image: "/assets/property-3.jpg" },
  { address: "321 Pacific Heights Avenue, Pacific Heights", image: "/assets/property-4.jpg" },
  { address: "654 Santa Monica Pier Road, Santa Monica", image: "/assets/property-5.jpg" },
]

export function FeaturedProperties() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right')
  const sectionRef = useRef(null)

  const getCurrentProperties = () => {
    const startIndex = currentSlide % properties.length
    const displayProperties = []
    
    for (let i = 0; i < 5; i++) {
      const index = (startIndex + i) % properties.length
      displayProperties.push(properties[index])
    }
    
    return displayProperties
  }

  const currentProperties = getCurrentProperties()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isPaused || !isVisible || isTransitioning) return

    const interval = setInterval(() => {
      setSlideDirection('right')
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % properties.length)
        setTimeout(() => setIsTransitioning(false), 50)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, isVisible, isTransitioning])

  const handlePrevious = () => {
    if (isTransitioning) return
    setSlideDirection('left')
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + properties.length) % properties.length)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  const handleNext = () => {
    if (isTransitioning) return
    setSlideDirection('right')
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % properties.length)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  return (
    <section
      ref={sectionRef}
      id="properties"
      className="py-20 px-4 md:px-8 lg:px-12 bg-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3">
        <div
          className={`flex flex-col justify-center px-4 lg:px-8 py-8 lg:py-0 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } text-center lg:text-left`}
        >
          <p className="text-[11px] tracking-[0.4em] text-gray-400 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            FEATURED PROPERTIES
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Our Properties
          </h2>

          <div className="flex items-center gap-2">
            <button 
              onClick={handlePrevious}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="w-11 h-11 border border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors" 
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              aria-label="Previous property"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              className="h-11 px-4 bg-[#0033A0] text-white text-[9px] tracking-[0.2em] font-medium whitespace-nowrap hover:bg-[#00267a] transition-colors"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              VIEW MORE PROPERTIES
            </button>
            <button 
              onClick={handleNext}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="w-11 h-11 border border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors"
              aria-label="Next property"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <PropertyTile
          property={currentProperties[0]}
          isVisible={isVisible}
          delay={100}
          currentSlide={currentSlide}
          slideDirection={slideDirection}
          isTransitioning={isTransitioning}
          className="border-l border-b border-white"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        />

        <PropertyTile
          property={currentProperties[1]}
          isVisible={isVisible}
          delay={200}
          currentSlide={currentSlide}
          slideDirection={slideDirection}
          isTransitioning={isTransitioning}
          className="border-l border-b border-white"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 mt-0.5 gap-[1.5px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {currentProperties.slice(2).map((property, index) => (
            <PropertyTile
              key={`${property.address}-${currentSlide}-${index}`}
              property={property}
              isVisible={isVisible}
              delay={300 + index * 100}
              currentSlide={currentSlide}
              slideDirection={slideDirection}
              isTransitioning={isTransitioning}
              className="border-r border-white last:border-r-0"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface PropertyTileProps {
  property: {
    address: string
    image: string
  }
  isVisible: boolean
  delay: number
  currentSlide: number
  slideDirection: 'left' | 'right'
  isTransitioning: boolean
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

function PropertyTile({ property, isVisible, delay, currentSlide, slideDirection, isTransitioning, className = "", onMouseEnter, onMouseLeave }: PropertyTileProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isTransitioning) {
      const startTimer = setTimeout(() => setIsAnimating(true), 0)
      const endTimer = setTimeout(() => setIsAnimating(false), 600)
      return () => {
        clearTimeout(startTimer)
        clearTimeout(endTimer)
      }
    }
  }, [currentSlide, isTransitioning])

  const getTransform = () => {
    if (!isTransitioning || !isAnimating) return 'translateX(0) scale(1)'
    if (slideDirection === 'right') {
      return 'translateX(100%) scale(0.95)'
    } else {
      return 'translateX(-100%) scale(0.95)'
    }
  }

  return (
    <div
      className={`relative group overflow-hidden aspect-4/3 cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ 
        transitionDelay: isTransitioning ? "0ms" : `${delay}ms`,
        transform: isTransitioning && isAnimating ? getTransform() : undefined,
        opacity: isTransitioning && isAnimating ? 0 : 1,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={property.image}
        alt={property.address}
        fill
        className={`object-cover group-hover:scale-105 transition-transform duration-700 ${
          isTransitioning && isAnimating ? 'scale-110' : ''
        }`}
        style={{
          transition: isTransitioning ? 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out' : undefined,
        }}
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-0" />
      <div className="absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-300 group-hover:opacity-0">
        <p className="text-white text-sm tracking-widest">{property.address}</p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-[#0033A0]/95 w-full h-full flex flex-col items-center justify-center px-6 text-center">
          <p
            className="text-white text-lg md:text-xl tracking-[0.12em] mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {property.address}
          </p>
          <button
            className="border border-white text-white text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-white hover:text-[#0033A0] transition-colors"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            VIEW MORE DETAILS
          </button>
        </div>
      </div>
    </div>
  )
}
