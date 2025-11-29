"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const properties = [
  {
    address: "1970 ADDISON WAY",
    location: "EAGLE ROCK CA 90041",
    price: "$1,100,000",
    beds: 3,
    baths: 1,
    sqft: "1,296",
    image: "/assets/property-1.jpg",
  },
  {
    address: "471 HILL DRIVE",
    location: "LOS ANGELES CA 90041",
    price: "$2,500,000",
    beds: 4,
    baths: 3,
    sqft: "2,800",
    image: "/assets/property-2.jpg",
  },
  {
    address: "7742 ISIS AVENUE",
    location: "LOS ANGELES CA 90046",
    price: "$3,200,000",
    beds: 5,
    baths: 4,
    sqft: "3,500",
    image: "/assets/property-3.jpg",
  },
  {
    address: "2111 FOREST TRAIL",
    location: "LOS ANGELES CA 90049",
    price: "$4,800,000",
    beds: 6,
    baths: 5,
    sqft: "4,200",
    image: "/assets/property-4.jpg",
  },
  {
    address: "3343 ATWATER AVENUE",
    location: "LOS ANGELES CA 90039",
    price: "$5,500,000",
    beds: 5,
    baths: 6,
    sqft: "5,200",
    image: "/assets/property-5.jpg",
  },
  {
    address: "3343 ATWATER AVENUE",
    location: "LOS ANGELES CA 90039",
    price: "$5,500,000",
    beds: 5,
    baths: 6,
    sqft: "5,200",
    image: "/assets/property-5.jpg",
  }
]

export function FeaturedProperties() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProperty, setHoveredProperty] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section ref={sectionRef} id="properties" className="relative">
      <div className="bg-white pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`flex flex-col md:flex-row md:items-end md:justify-between gap-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <p className="text-sm tracking-[0.3em] text-black mb-1 font-sans">FEATURED</p>
              <h2 className="text-4xl md:text-5xl font-sans font-normal text-black">Properties</h2>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-none border-black bg-transparent hover:bg-black hover:text-white transition-colors text-black"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-none border-gray-400 text-xs tracking-wider px-6 bg-transparent hover:bg-gray-400 hover:text-white transition-colors text-gray-400"
              >
                VIEW MORE PROPERTIES
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-none border-gray-400 bg-transparent hover:bg-gray-400 hover:text-white transition-colors text-gray-400"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 relative">
            {properties.map((property, index) => (
              <div
                key={`property-${index}`}
                className="relative group overflow-hidden aspect-4/3 cursor-pointer"
                onMouseEnter={() => setHoveredProperty(index)}
                onMouseLeave={() => setHoveredProperty(null)}
              >
                <div className="absolute inset-0 aspect-4/3 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.address}
                    fill
                    unoptimized
                    className="object-cover scale-125 group-hover:scale-150 group-hover:opacity-60 transition-all duration-300"
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>

                <div className="absolute bottom-0 flex items-center justify-center p-4">
                  <p className="text-white text-lg font-sans uppercase tracking-wider text-center">
                    {property.address}
                  </p>
                </div>

                <div
                  className={`absolute inset-0 bg-[#20b8f7] border-2 border-white transition-all duration-300 ${
                    hoveredProperty === index
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 translate-y-4 pointer-events-none"
                  }`}
                  style={{
                    zIndex: hoveredProperty === index ? 10 : 1,
                  }}
                >
                  <div className="h-full flex flex-col justify-between p-6 text-white">
                    <div>
                      <h3 className="text-xl font-bold uppercase tracking-wider mb-2 font-sans">
                        {property.address}
                      </h3>
                      <p className="text-sm mb-4 font-sans">{property.location}</p>
                      <p className="text-sm mb-6 font-sans">
                        {property.beds} BEDS | {property.baths} BATHS | {property.sqft} SQ. FT.
                      </p>
                      <p className="text-3xl font-bold font-sans">{property.price}</p>
                    </div>
                    <button className="border-2 border-white px-6 py-3 text-sm uppercase tracking-wider font-sans hover:bg-white hover:text-[#20b8f7] transition-colors">
                      VIEW MORE DETAILS
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
