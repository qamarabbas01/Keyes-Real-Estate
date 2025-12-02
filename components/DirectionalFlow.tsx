"use client"

export function DirectionalFlow() {
    return (
        <section className="relative">
            <div className="bg-gray-100 py-12 sm:py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                    <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div className="transition-all duration-1000">
                            <p className="tracking-[0.4em] text-xs sm:text-sm mb-2"
                               style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                FROM VISION
                            </p>

                            <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 sm:mb-6">
                                <span style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    From Vision
                                </span>
                                <br />
                                <span style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    To Reality
                                </span>
                            </h2>

                            <p className="leading-relaxed text-sm sm:text-base"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                We transform dreams into exceptional properties. Our team combines expertise, dedication, and market knowledge to bring your real estate vision to life.
                            </p>
                        </div>

                        <div className="transition-all duration-1000 delay-300">
                            <div className="relative group cursor-pointer">
                                <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                                    <iframe
                                        title="vimeo-player"
                                        src="https://player.vimeo.com/video/563891845?h=bc6e42e18d"
                                        className="w-full h-full"
                                        frameBorder="0"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
