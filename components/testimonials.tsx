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
    videoUrl: "https://www.youtube.com/embed/KUIJZ3rWQNY",
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
      setExpandedLeft(false)
      setExpandedRight(false)
      return newIndex
    })
  }

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === testimonials.length - 1 ? 0 : prev + 1
      setExpandedLeft(false)
      setExpandedRight(false)
      return newIndex
    })
  }

  const leftTestimonial = testimonials[currentIndex]
  const rightTestimonial = testimonials[(currentIndex + 1) % testimonials.length]

  return (
    <>
      <section className="relative bg-[#20b8f7] py-20 px-6 overflow-hidden">
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
          <div className="text-center mb-12">
            <p
              className="text-white uppercase mb-2"
              style={{
                fontSize: "14px",
                letterSpacing: "0.2em",
                fontWeight: 500,
              }}
            >
              WHAT OUR
            </p>
            <h2
              className="text-white"
              style={{
                fontSize: "72px",
                fontWeight: "normal",
                fontStyle: "normal",
                lineHeight: "1",
              }}
            >
              Clients Say
            </h2>
          </div>

          <div className="relative mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto relative">
              <button
                onClick={handlePrev}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-white border-2 border-gray-300 shadow-lg items-center justify-center hover:bg-gray-50 hover:border-[#20b8f7] transition-all z-20"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>

              <div className="bg-white rounded-lg p-8 relative shadow-xl min-h-[300px]">
                {leftTestimonial.type === "text" ? (
                  <div>
                    <p
                      className="text-black italic mb-4 leading-relaxed"
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      {expandedLeft ? leftTestimonial.fullQuote : leftTestimonial.quote}
                    </p>
                    {!expandedLeft && (
                      <button
                        onClick={() => setExpandedLeft(true)}
                        className="text-[#20b8f7] hover:underline font-semibold"
                      >
                        Read More
                      </button>
                    )}
                    <p
                      className="text-black text-right mt-6"
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      - {leftTestimonial.author}
                    </p>
                  </div>
                ) : leftTestimonial.type === "video" ? (
                  <div className="relative bg-gray-800 aspect-video overflow-hidden">
                    <iframe
                      width="100%"
                      height="315"
                      src={leftTestimonial.videoUrl}
                      title={leftTestimonial.videoTitle}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : null}
              </div>

              <div className="bg-white rounded-lg p-8 relative shadow-xl min-h-[300px]">
                {rightTestimonial.type === "text" ? (
                  <div>
                    <p
                      className="text-black italic mb-4 leading-relaxed"
                      style={{
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
                        Read More
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
                  <div className="relative bg-gray-800 aspect-video overflow-hidden">
                    <iframe
                      width="100%"
                      height="315"
                      src={rightTestimonial.videoUrl}
                      title={rightTestimonial.videoTitle}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : null}
              </div>

              <button
                onClick={handleNext}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-white border-2 border-gray-300 shadow-lg items-center justify-center hover:bg-gray-50 hover:border-[#20b8f7] transition-all z-20"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              className="border border-white text-white px-8 py-3 hover:bg-white hover:text-[#20b8f7] transition-all duration-300"
            >
              VIEW ALL ZILLOW REVIEWS
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
