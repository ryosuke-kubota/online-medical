'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function AnimatedHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      const tl = gsap.timeline({
        repeat: -1
      })
      
      tl.to(
        "#image-container",
        {
          width: "100%",
          duration: 2,
          stagger: 2,
          ease: "expo.inOut"
        },
        "moveElem"
      )
      
      tl.to(
        "#text h1",
        {
          top: "0px",
          stagger: 2,
          duration: 2,
          ease: "expo.inOut"
        },
        "moveElem"
      )
      
      tl.to(
        "#text h1",
        {
          top: "-75px",
          stagger: 2,
          duration: 2,
          delay: 2,
          ease: "expo.inOut"
        },
        "moveElem"
      )
      
      tl.to("#image-container", {
        width: "0%",
        ease: "expo.inOut",
        duration: 0.5
      })

      return () => {
        tl.kill()
      }
    }
  }, [])

  return (
    <div ref={containerRef} id="main" className="w-full h-screen flex items-center justify-center bg-white">
      <div id="center" className="relative w-[65%] h-[85%]">
        <div id="text" className="absolute bottom-[100px] left-[-60px] w-[300px] h-[75px] z-10 overflow-hidden">
          <h1 className="absolute top-[100px] left-[10px] text-[50px] uppercase w-[300px] h-[75px] flex items-center justify-start tracking-[3px] font-bold text-black" style={{ fontFamily: 'Ranade, sans-serif' }}>
            Klax
          </h1>
          <h1 className="absolute top-[100px] left-[10px] text-[50px] uppercase w-[300px] h-[75px] flex items-center justify-start tracking-[3px] font-bold text-black" style={{ fontFamily: 'Ranade, sans-serif' }}>
            Kalpan
          </h1>
          <h1 className="absolute top-[100px] left-[10px] text-[50px] uppercase w-[300px] h-[75px] flex items-center justify-start tracking-[3px] font-bold text-black" style={{ fontFamily: 'Ranade, sans-serif' }}>
            Kraven
          </h1>
        </div>
        
        <div id="image-container" className="absolute w-0 h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Hero Image 1"
            className="h-full object-cover object-center"
          />
        </div>
        
        <div id="image-container" className="absolute w-0 h-full overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3854884/pexels-photo-3854884.jpeg"
            alt="Hero Image 2"
            className="h-full object-cover object-center"
          />
        </div>
        
        <div id="image-container" className="absolute w-0 h-full overflow-hidden">
          <img
            src="https://images.pexels.com/photos/6311250/pexels-photo-6311250.jpeg"
            alt="Hero Image 3"
            className="h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  )
}