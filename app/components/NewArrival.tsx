'use client'

import { useRef, useEffect } from 'react'

export default function NewArrival() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay was prevented:', error)
      })
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-3 px-6 w-full">
        <div className="max-w-3xl text-white">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-none tracking-tight mb-8">
            We didn't follow the diamond rules,
            <span className="block mt-4 font-bold tracking-tight">WE REWROTE THEM.</span>
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-10 max-w-xl">
            The first designer jewellery house to work exclusively with lab-grown diamonds, from day one.
          </p>
        </div>
      </div>
    </section>
  )
}