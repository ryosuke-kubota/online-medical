'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function AnimatedHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const heroData = [
    {
      name: "Klax",
      image: "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      accent: "bg-blue-500"
    },
    {
      name: "Kalpan",
      image: "https://images.pexels.com/photos/3854884/pexels-photo-3854884.jpeg",
      accent: "bg-purple-500"
    },
    {
      name: "Kraven",
      image: "https://images.pexels.com/photos/6311250/pexels-photo-6311250.jpeg",
      accent: "bg-emerald-500"
    }
  ]

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current && isPlaying) {
      const tl = gsap.timeline({
        repeat: -1,
        onRepeat: () => {
          setCurrentIndex((prev) => (prev + 1) % heroData.length)
        }
      })
      
      // パララックス効果
      gsap.to(".parallax-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })

      // メインアニメーション
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

      // 生徒情報ボックスのアニメーション
      gsap.fromTo("#student-info-box",
        {
          opacity: 0,
          x: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 2,
          delay: 0.8,
          ease: "power3.out"
        }
      )

      // フローティングエレメンツ
      gsap.to(".floating-element", {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-5, 5)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      })

      return () => {
        tl.kill()
      }
    }
  }, [isPlaying, heroData.length])

  return (
    <div ref={containerRef} id="main" className="relative w-full h-screen overflow-hidden">
      {/* ミニマルな背景 */}
      <div className="absolute inset-0 bg-neutral-50"></div>
      
      {/* 幾何学的パターン */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
             style={{
               backgroundImage: `
                 linear-gradient(90deg, transparent 79px, #000 80px, #000 81px, transparent 82px),
                 linear-gradient(transparent 79px, #000 80px, #000 81px, transparent 82px)
               `,
               backgroundSize: '80px 80px'
             }}>
        </div>
      </div>

      {/* ミニマルなアクセント要素 */}
      <div className="floating-element absolute top-1/4 left-10 w-2 h-2 bg-neutral-900 rounded-full"></div>
      <div className="floating-element absolute top-1/3 right-20 w-1 h-8 bg-neutral-900"></div>
      <div className="floating-element absolute bottom-1/4 left-1/4 w-8 h-1 bg-neutral-900"></div>
      <div className="floating-element absolute bottom-1/3 right-1/3 w-3 h-3 bg-neutral-900 rotate-45"></div>

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div id="center" className="relative w-[70%] h-[80%]">
          {/* 元のアニメーションテキスト */}
          <div id="text" className="absolute bottom-[100px] left-[-60px] w-[300px] h-[75px] z-10 overflow-hidden">
            <h1 className="absolute top-[100px] left-[10px] text-[50px] uppercase w-[300px] h-[75px] flex items-center justify-start tracking-[3px] font-bold text-neutral-900" style={{ fontFamily: 'Ranade, sans-serif' }}>
              Klax
            </h1>
            <h1 className="absolute top-[100px] left-[10px] text-[50px] uppercase w-[300px] h-[75px] flex items-center justify-start tracking-[3px] font-bold text-neutral-900" style={{ fontFamily: 'Ranade, sans-serif' }}>
              Kalpan
            </h1>
            <h1 className="absolute top-[100px] left-[10px] text-[50px] uppercase w-[300px] h-[75px] flex items-center justify-start tracking-[3px] font-bold text-neutral-900" style={{ fontFamily: 'Ranade, sans-serif' }}>
              Kraven
            </h1>
          </div>
          
          {/* 画像コンテナ */}
          {heroData.map((item, index) => (
            <div key={index} id="image-container" className="absolute w-0 h-full overflow-hidden shadow-2xl">
              <div className="relative w-full h-full">
                <img
                  src={item.image}
                  alt={`Hero Image ${index + 1}`}
                  className="w-full h-full object-cover filter contrast-110 saturate-90"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>
          ))}

          {/* ミニマルな生徒情報ボックス */}
          <div
            id="student-info-box"
            className="absolute top-[10%] right-[-100px] z-30 bg-white border border-neutral-200 shadow-xl p-8 w-[360px] transform hover:translate-y-[-4px] transition-all duration-300"
          >
            <div className="space-y-6">
              {/* ヘッダー */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-neutral-900 mb-2" style={{ fontFamily: 'Ranade, sans-serif' }}>
                  OOPS
                </h2>
                <p>このサイトのコンセプト！！！！</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}