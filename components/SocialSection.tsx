"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const instagramPosts = [
  { id: 1, image: "/assets/Instagram-1.jpg" },
  { id: 2, image: "/assets/Instagram-2.jpg" },
  { id: 3, image: "/assets/Instagram-3.jpg" },
  { id: 4, image: "/assets/Instagram-4.jpg" },
]

const youtubeVideos = [
  { id: 1, thumbnail: "/assets/YouTube-1.jpg" },
  { id: 2, thumbnail: "/assets/YouTube-2.jpg" },
  { id: 3, thumbnail: "/assets/YouTube-3.jpg" },
  { id: 4, thumbnail: "/assets/YouTube-4.jpg" },
]

export function SocialSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="mb-8">
              <p className="text-gray-400 tracking-[0.3em] text-sm mb-2">
                F O L L O W &nbsp;&nbsp; U S &nbsp;&nbsp; O N
              </p>
              <h2 className="text-5xl md:text-6xl text-gray-800">Instagram</h2>
            </div>

            <div className="grid grid-cols-2 gap-1">
              {instagramPosts.map((post, index) => (
                <a
                  key={post.id}
                  href="https://www.instagram.com/keyesrealestatela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative aspect-square overflow-hidden group transition-all duration-500 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={`Instagram post ${post.id}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="mb-8">
              <p className="text-gray-400 tracking-[0.3em] text-sm mb-2">K E Y E S &nbsp;&nbsp; T O &nbsp;&nbsp; L A</p>
              <h2 className="text-5xl md:text-6xl text-gray-800">YouTube</h2>
            </div>

            <div className="grid grid-cols-2 gap-1">
              {youtubeVideos.map((video, index) => (
                <a
                  key={video.id}
                  href="https://www.youtube.com/channel/UCGYnpm0WIVImxW9Z3826ftw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative aspect-video bg-black overflow-hidden group transition-all duration-500 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={`YouTube video ${video.id}`}
                    fill
                    className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
                      <svg width="24" height="28" viewBox="0 0 24 28" fill="none" className="ml-1">
                        <path d="M24 14L0 28V0L24 14Z" fill="#3CBFAE" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
