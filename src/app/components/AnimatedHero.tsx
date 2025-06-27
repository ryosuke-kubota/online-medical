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
                <div className="w-20 h-20 bg-neutral-900 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">田</span>
                </div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-2" style={{ fontFamily: 'Ranade, sans-serif' }}>
                  田中 太郎
                </h2>
                <div className="inline-flex items-center px-4 py-2 bg-neutral-100 border border-neutral-200">
                  <span className="text-sm text-neutral-700 font-medium">医学部 3年生</span>
                </div>
              </div>
              
              {/* 学習コンセプト */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-neutral-900 text-center">学習コンセプト</h3>
                <div className="space-y-3">
                  {[
                    { text: "実践的な臨床知識の習得", accent: "bg-blue-500" },
                    { text: "患者中心のケア理念", accent: "bg-emerald-500" },
                    { text: "継続的な学習と成長", accent: "bg-purple-500" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 border border-neutral-200 hover:border-neutral-300 transition-colors">
                      <div className={`w-1 h-8 ${item.accent}`}></div>
                      <span className="text-sm text-neutral-700 flex-1">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 引用文 */}
              <div className="relative p-6 bg-neutral-50 border border-neutral-200">
                <div className="absolute top-2 left-4 text-neutral-300 text-4xl font-serif">"</div>
                <p className="text-neutral-700 text-center pt-4 font-medium">
                  医療の未来を創る、<br />
                  <span className="font-bold text-neutral-900">
                    情熱ある学習者として
                  </span>
                </p>
                <div className="absolute bottom-2 right-4 text-neutral-300 text-4xl font-serif rotate-180">"</div>
              </div>
            </div>

            {/* プログレスインジケーター */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroData.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 transition-all duration-300 ${
                    index === currentIndex ? 'bg-neutral-900 w-8' : 'bg-neutral-300 w-2'
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* コントロールボタン */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 bg-white border border-neutral-200 shadow-lg p-4 text-neutral-900 hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300"
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}