'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

export default function AnimatedHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  // メニュー外クリックで閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('.menu-container')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <div ref={containerRef} id="main" className="relative w-full h-screen min-h-[100vh] overflow-hidden">
      {/* フローティングメニューボタン */}
      <div className="fixed top-6 left-6 z-50">
        <div className="flex items-center gap-4">
          <Image
            src="https://ext.same-assets.com/3284986432/991739575.svg"
            alt="Oops"
            width={100}
            height={32}
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* フローティングメニューボタン（右上） */}
      <div className="fixed top-6 right-6 z-50 menu-container">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
        >
          <div className="flex flex-col gap-1">
            <div className={`w-5 h-0.5 bg-neutral-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-neutral-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-neutral-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </div>
        </button>
        
        {/* ドロップダウンメニュー */}
        <div className={`absolute top-16 right-0 w-64 bg-white/95 backdrop-blur-sm border border-neutral-200 rounded-2xl shadow-xl transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="p-6 space-y-4">
            <div className="space-y-3">
              <a href="#services" className="block text-neutral-900 hover:text-blue-600 transition-colors duration-200 font-medium">診療メニュー</a>
              <a href="#features" className="block text-neutral-900 hover:text-blue-600 transition-colors duration-200 font-medium">サービス特徴</a>
              <a href="#how-to-use" className="block text-neutral-900 hover:text-blue-600 transition-colors duration-200 font-medium">ご利用方法</a>
              <a href="#faq" className="block text-neutral-900 hover:text-blue-600 transition-colors duration-200 font-medium">よくある質問</a>
            </div>
            <div className="pt-4 border-t border-neutral-200">
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300">
                診療予約する
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* フローティングCTAボタン */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm font-medium">
          診療予約する
        </button>
      </div>

      {/* ミニマルな背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100"></div>
      
      {/* 幾何学的パターン */}
      <div className="absolute inset-0 opacity-3">
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
      <div className="floating-element absolute top-1/4 left-4 md:left-10 w-2 h-2 bg-neutral-900 rounded-full"></div>
      <div className="floating-element absolute top-1/3 right-8 md:right-20 w-1 h-8 bg-neutral-900"></div>
      <div className="floating-element absolute bottom-1/4 left-1/4 w-8 h-1 bg-neutral-900"></div>
      <div className="floating-element absolute bottom-1/3 right-1/3 w-3 h-3 bg-neutral-900 rotate-45"></div>

      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 md:px-8">
        <div id="center" className="relative w-full max-w-7xl h-full flex items-center justify-center">
          {/* 元のアニメーションテキスト */}
          <div id="text" className="absolute bottom-[15%] md:bottom-[20%] left-4 md:left-[-60px] w-[250px] md:w-[300px] h-[60px] md:h-[75px] z-10 overflow-hidden">
            <h1 className="absolute top-[80px] md:top-[100px] left-[5px] md:left-[10px] text-[40px] md:text-[50px] lg:text-[60px] uppercase w-[250px] md:w-[300px] h-[60px] md:h-[75px] flex items-center justify-start tracking-[2px] md:tracking-[3px] font-bold text-neutral-900" style={{ fontFamily: 'Ranade, sans-serif' }}>
              Klax
            </h1>
            <h1 className="absolute top-[80px] md:top-[100px] left-[5px] md:left-[10px] text-[40px] md:text-[50px] lg:text-[60px] uppercase w-[250px] md:w-[300px] h-[60px] md:h-[75px] flex items-center justify-start tracking-[2px] md:tracking-[3px] font-bold text-neutral-900" style={{ fontFamily: 'Ranade, sans-serif' }}>
              Kalpan
            </h1>
            <h1 className="absolute top-[80px] md:top-[100px] left-[5px] md:left-[10px] text-[40px] md:text-[50px] lg:text-[60px] uppercase w-[250px] md:w-[300px] h-[60px] md:h-[75px] flex items-center justify-start tracking-[2px] md:tracking-[3px] font-bold text-neutral-900" style={{ fontFamily: 'Ranade, sans-serif' }}>
              Kraven
            </h1>
          </div>
          
          {/* 画像コンテナ */}
          <div className="relative w-full md:w-[70%] h-[60%] md:h-[70%] flex items-center justify-center">
            {heroData.map((item, index) => (
              <div key={index} id="image-container" className="absolute w-0 h-full overflow-hidden shadow-2xl rounded-lg">
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
          </div>

          {/* ミニマルな生徒情報ボックス */}
          <div
            id="student-info-box"
            className="absolute top-[10%] md:top-[15%] right-4 md:right-[-100px] z-30 bg-white/95 backdrop-blur-sm border border-neutral-200 shadow-xl p-6 md:p-8 w-[280px] md:w-[360px] rounded-lg transform hover:translate-y-[-4px] transition-all duration-300"
          >
            <div className="space-y-4 md:space-y-6">
              {/* ヘッダー */}
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2" style={{ fontFamily: 'Ranade, sans-serif' }}>
                  OOPS
                </h2>
                <p className="text-sm md:text-base text-neutral-700">オンライン診療で<br />あなたの健康をサポート</p>
                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <p className="text-xs md:text-sm text-neutral-600">
                    スマホで完結する<br />
                    新しい医療体験
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}