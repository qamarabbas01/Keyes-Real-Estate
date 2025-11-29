"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/Button"

const testimonials = [
  {
    type: "text",
    quote: "I have bought a few homes without an agent but never in LA. What a crazy market! After months of trying and a couple serendipitous run ins with Brad, I knew he was the agent I wanted on my side of the...",
    author: "Henryp4u",
    fullQuote: "I have bought a few homes without an agent but never in LA. What a crazy market! After months of trying and a couple serendipitous run ins with Brad, I knew he was the agent I wanted on my side of the transaction. His knowledge of the market, negotiation skills, and attention to detail made the entire process smooth and stress-free.",
  },
  {
    type: "text",
    quote: "The Keyes Real Estate team have been nothing short of amazing, guiding us through our first commercial real estate purchase. Josh kept us in the loop every step of the way and was available at any tim...",
    author: "Zuser20140921141533587",
    fullQuote: "The Keyes Real Estate team have been nothing short of amazing, guiding us through our first commercial real estate purchase. Josh kept us in the loop every step of the way and was available at any time to answer questions. Their professionalism and expertise made what could have been a stressful process incredibly smooth. We couldn't be happier with our purchase!",
  },
  {
    type: "text",
    quote: "Brad and his team at Keyes Real Estate are simply the best. I worked directly with Josh Stein-Sapir to purchase my home, but have also asked Brad various questions along the way during the process. Th...",
    author: "Tracymlakar",
    fullQuote: "Brad and his team at Keyes Real Estate are simply the best. I worked directly with Josh Stein-Sapir to purchase my home, but have also asked Brad various questions along the way during the process. They were always responsive, knowledgeable, and genuinely cared about finding us the perfect home. The entire experience exceeded our expectations!",
  },
  {
    type: "text",
    quote: "Working with Keyes Real Estate was an absolute pleasure. Brad's expertise in the LA market is unmatched, and his attention to detail throughout the entire buying process was impressive. He made sure...",
    author: "Sarah M.",
    fullQuote: "Working with Keyes Real Estate was an absolute pleasure. Brad's expertise in the LA market is unmatched, and his attention to detail throughout the entire buying process was impressive. He made sure we understood every step and negotiated the best possible deal for us. I would highly recommend them to anyone looking to buy or sell in the area.",
  },
  {
    type: "text",
    quote: "As a first-time homebuyer, I was nervous about the process, but Brad and his team made everything so easy. They explained everything clearly, were patient with all my questions, and helped us find...",
    author: "Michael R.",
    fullQuote: "As a first-time homebuyer, I was nervous about the process, but Brad and his team made everything so easy. They explained everything clearly, were patient with all my questions, and helped us find the perfect home within our budget. The level of service and professionalism was outstanding from start to finish.",
  },
  {
    type: "text",
    quote: "We've worked with several real estate agents over the years, but none compare to Brad Keyes. His knowledge of the market, negotiation skills, and genuine care for his clients set him apart. He...",
    author: "Jennifer L.",
    fullQuote: "We've worked with several real estate agents over the years, but none compare to Brad Keyes. His knowledge of the market, negotiation skills, and genuine care for his clients set him apart. He went above and beyond to ensure we got the best deal possible, and the entire process was seamless. Highly recommend!",
  },
  {
    type: "video",
    videoTitle: "Seller Testimonial - Valerie & Brian in Eagle Rock",
    videoUrl: "#", // Replace with actual video URL
    author: "Valerie & Brian",
  },
  {
    type: "text",
    quote: "Keyes Real Estate helped us sell our home quickly and for top dollar. Brad's marketing strategy was excellent, and his team handled everything professionally. We couldn't have asked for a better...",
    author: "David K.",
    fullQuote: "Keyes Real Estate helped us sell our home quickly and for top dollar. Brad's marketing strategy was excellent, and his team handled everything professionally. We couldn't have asked for a better experience. The communication was clear, the process was smooth, and we were thrilled with the results.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [expandedLeft, setExpandedLeft] = useState(false)
  const [expandedRight, setExpandedRight] = useState(false)

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? testimonials.length - 1 : prev - 1
      setExpandedLeft(false) // Reset expanded quotes when changing
      setExpandedRight(false)
      return newIndex
    })
  }

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === testimonials.length - 1 ? 0 : prev + 1
      setExpandedLeft(false) // Reset expanded quotes when changing
      setExpandedRight(false)
      return newIndex
    })
  }

  // Show current testimonial on left, next on right
  const leftTestimonial = testimonials[currentIndex]
  const rightTestimonial = testimonials[(currentIndex + 1) % testimonials.length]

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Qwigley&family=Montserrat:wght@400;500;600;700&display=swap');
      `}</style>
      
      <section className="relative bg-[#20b8f7] py-20 px-6 overflow-hidden">
        {/* Palm Tree Silhouettes on Right */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M200 0 L180 150 L220 150 Z M190 150 L170 300 L210 300 Z M200 300 L160 450 L240 450 Z M200 450 L140 600 L260 600 Z' fill='%23000000'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right center",
              backgroundSize: "contain",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <p
              className="text-white uppercase mb-2"
              style={{
                fontSize: "14px",
                letterSpacing: "0.2em",
                fontWeight: 500,
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              WHAT OUR
            </p>
            <h2
              className="text-white"
              style={{
                fontFamily: "'Qwigley', cursive",
                fontSize: "72px",
                fontWeight: "normal",
                fontStyle: "normal",
                lineHeight: "1",
              }}
            >
              Clients Say
            </h2>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto relative">
              {/* Left Arrow - Outside the grid */}
              <button
                onClick={handlePrev}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-white border-2 border-gray-300 shadow-lg flex items-center justify-center hover:bg-gray-50 hover:border-[#20b8f7] transition-all z-20"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>

              {/* Left Card */}
              <div className="bg-white rounded-lg p-8 relative shadow-xl min-h-[300px]">
                {leftTestimonial.type === "text" ? (
                  <div>
                    <p
                      className="text-black italic mb-4 leading-relaxed"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "16px",
                      }}
                    >
                      {expandedLeft ? leftTestimonial.fullQuote : leftTestimonial.quote}
                    </p>
                    {!expandedLeft && (
                      <button
                        onClick={() => setExpandedLeft(true)}
                        className="text-[#20b8f7] hover:underline font-semibold"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        [Read More]
                      </button>
                    )}
                    <p
                      className="text-black text-right mt-6"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "14px",
                      }}
                    >
                      - {leftTestimonial.author}
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Video testimonial
                    </p>
                  </div>
                )}
              </div>

              {/* Right Card */}
              <div className="bg-white rounded-lg p-8 relative shadow-xl min-h-[300px]">
                {rightTestimonial.type === "text" ? (
                  <div>
                    <p
                      className="text-black italic mb-4 leading-relaxed"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "16px",
                      }}
                    >
                      {expandedRight ? rightTestimonial.fullQuote : rightTestimonial.quote}
                    </p>
                    {!expandedRight && (
                      <button
                        onClick={() => setExpandedRight(true)}
                        className="text-[#20b8f7] hover:underline font-semibold"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        [Read More]
                      </button>
                    )}
                    <p
                      className="text-black text-right mt-6"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "14px",
                      }}
                    >
                      - {rightTestimonial.author}
                    </p>
                  </div>
                ) : rightTestimonial.type === "video" ? (
                  <div>
                    {/* Video Title Bar */}
                    <div className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
                      <p
                        className="text-sm"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {rightTestimonial.videoTitle}
                      </p>
                      <button className="text-white">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </div>

                    {/* Video Player */}
                    <div className="relative bg-gray-800 aspect-video overflow-hidden">
                      {/* Watermark Text */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <p
                          className="text-white/5 text-6xl font-bold uppercase tracking-widest"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          REAL ESTATE
                        </p>
                      </div>
                      
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto">
                            <svg
                              className="w-8 h-8 text-white ml-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                          <p className="text-white/70 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Video Player
                          </p>
                        </div>
                      </div>

                      {/* Video Controls */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-2 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button className="text-white hover:text-gray-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </button>
                          <span className="text-white text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            01:05
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button className="text-white hover:text-gray-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </button>
                          <button className="text-white hover:text-gray-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                          </button>
                          <button className="text-white hover:text-gray-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                            </svg>
                          </button>
                          <button className="text-white hover:text-gray-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm2 2a1 1 0 000 2h.01a1 1 0 100-2H5zm3 0a1 1 0 000 2h3a1 1 0 100-2H8z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Author Name */}
                    <div className="px-4 py-3">
                      <p
                        className="text-black text-right"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "14px",
                        }}
                      >
                        - {rightTestimonial.author}
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>

              {/* Right Arrow - Outside the grid */}
              <button
                onClick={handleNext}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-white border-2 border-gray-300 shadow-lg flex items-center justify-center hover:bg-gray-50 hover:border-[#20b8f7] transition-all z-20"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* View All Reviews Button */}
          <div className="text-center">
            <Button
              variant="outline"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#20b8f7] transition-all duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              VIEW ALL ZILLOW REVIEWS
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

