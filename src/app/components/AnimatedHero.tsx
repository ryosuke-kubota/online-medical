'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

import nextConfig from "../../../next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

export default function AnimatedHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoBlackRef = useRef<HTMLImageElement>(null)
  const logoWhiteRef = useRef<HTMLImageElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // 配列をシャッフルする関数
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const originalHeroData = [
    {
      name: "ドクターズコスメ",
      image: `${BASE_PATH}/images/hero/hero1.png`,
      accent: "bg-blue-500"
    },
    {
      name: "メディアルスキンケア",
      image: `${BASE_PATH}/images/hero/hero2.png`,
      accent: "bg-purple-500"
    },
    {
      name: "メディカルダイエット",
      image: `${BASE_PATH}/images/hero/hero3.png`,
      accent: "bg-emerald-500"
    },
    {
      name: "飲む日焼け止め",
      image: `${BASE_PATH}/images/hero/hero4.png`,
      accent: "bg-emerald-500"
    },
    {
      name: "花粉症",
      image: `${BASE_PATH}/images/hero/hero5.png`,
      accent: "bg-emerald-500"
    },
    {
      name: "汗のお悩み",
      image: `${BASE_PATH}/images/hero/hero6.png`,
      accent: "bg-emerald-500"
    },
    {
      name: "睡眠障害",
      image: `${BASE_PATH}/images/hero/hero7.png`,
      accent: "bg-emerald-500"
    },
    {
      name: "生活習慣病",
      image: `${BASE_PATH}/images/hero/hero8.png`,
      accent: "bg-emerald-500"
    }
  ]

  // シャッフルされたheroDataを状態として管理
  const [heroData, setHeroData] = useState(originalHeroData)

  useEffect(() => {
    // クライアントサイドでのみシャッフルを実行
    if (typeof window !== 'undefined') {
      setHeroData(shuffleArray(originalHeroData))
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current && isPlaying) {
      const tl = gsap.timeline({
        repeat: -1,
        onRepeat: () => {
          setCurrentIndex((prev) => (prev + 1) % heroData.length)
        }
      })
      
      // 初期設定：白いロゴを非表示にする
      gsap.set(logoWhiteRef.current, { opacity: 0 })

      // ロゴアニメーション用のタイムライン（1度だけ実行）
      const logoTl = gsap.timeline({
        delay: 0.5 // 0.5秒後に開始（画像アニメーションより早く）
      })

      // スムーズなクロスフェードアニメーション
      logoTl.to(logoBlackRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
      })
      .to(logoWhiteRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
      }, "-=1") // 同時に開始
      .to(textRef.current, {
        color: "#ffffff",
        duration: 1,
        ease: "power2.inOut"
      }, "-=1") // 同時に開始
      
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
        "#text h2",
        {
          top: "0px",
          stagger: 2,
          duration: 2,
          ease: "expo.inOut"
        },
        "moveElem"
      )
      
      tl.to(
        "#text h2",
        {
          top: window.innerWidth < 640 ? "-80px" : "-110px",
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

      // hero-info-boxのアニメーション（スマホ対応版）
      // const isMobile = window.innerWidth < 640
      
      // gsap.set("#hero-info-box", {
      //   opacity: 0,
      //   y: isMobile ? 50 : 30,
      //   x: isMobile ? 0 : 20,
      //   scale: 0.98,
      //   rotationY: isMobile ? 0 : 5
      // })

      // gsap.to("#hero-info-box", {
      //   opacity: 1,
      //   y: 0,
      //   x: 0,
      //   scale: 1,
      //   rotationY: 0,
      //   duration: 1.8,
      //   delay: 1.2,
      //   ease: "expo.out"
      // })

      // フローティングエレメンツ
      // gsap.to(".floating-element", {
      //   y: "random(-20, 20)",
      //   x: "random(-10, 10)",
      //   rotation: "random(-5, 5)",
      //   duration: "random(3, 6)",
      //   repeat: -1,
      //   yoyo: true,
      //   ease: "sine.inOut",
      //   stagger: 0.5
      // })

      return () => {
        tl.kill()
        logoTl.kill()
      }
    }
  }, [isPlaying, heroData.length])

  return (
    <div ref={containerRef} id="main" className="relative w-full h-screen min-h-[100vh] overflow-hidden">

      {/* ミニマルな背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100"></div>
      
      {/* 幾何学的パターン */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 left-0 w-full h-full"
             style={{
               backgroundImage: `
                 linear-gradient(90deg, transparent 79px, #343434 80px, #343434 81px, transparent 82px),
                 linear-gradient(transparent 79px, #343434 80px, #343434 81px, transparent 82px)
               `,
               backgroundSize: '80px 80px'
             }}>
        </div>
      </div>

      {/* ミニマルなアクセント要素 - スマホ対応 */}
      {/* <div className="floating-element absolute top-1/4 left-2 sm:left-4 md:left-10 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-neutral-900 rounded-full"></div>
      <div className="floating-element absolute top-1/3 right-4 sm:right-8 md:right-20 w-0.5 sm:w-1 h-6 sm:h-8 bg-neutral-900"></div>
      <div className="floating-element absolute bottom-1/4 left-1/4 w-6 sm:w-8 h-0.5 sm:h-1 bg-neutral-900"></div>
      <div className="floating-element absolute bottom-1/3 right-1/3 w-2 sm:w-3 h-2 sm:h-3 bg-neutral-900 rotate-45"></div> */}

      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 md:px-8">
        <div id="center" className="relative w-full max-w-7xl h-full flex items-center justify-center">
          {/* 元のアニメーションテキスト */}
          <div id="text" className="absolute bottom-[10%] md:bottom-[10%] left-0 md:left-4 w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] md:w-[calc(100vw-8rem)] lg:w-[900px] xl:w-[1100px] h-[80px] sm:h-[90px] md:h-[110px] z-10 overflow-hidden">
            {heroData.map((item, index) => (
              <h2 key={index} className="absolute pl-2 md:pl-6 top-[80px] sm:top-[100px] md:top-[130px] left-0 text-[27px] sm:text-[36px] md:text-[42px] lg:text-[48px] uppercase w-max flex items-center justify-start tracking-[1px] sm:tracking-[2px] md:tracking-[3px] font-bold text-white whitespace-nowrap leading-[1.4]" style={{ fontFamily: 'var(--font-shippori-mincho), "Sawarabi Mincho", serif', fontWeight: '900', lineHeight: '1.4' }}>{item.name}</h2>
            ))}
          </div>
          
          {/* 画像コンテナ - スマホでは縦長、タブレット以上では横長 */}
          <div className="relative w-full sm:w-[85%] md:w-[100%] h-[75%] sm:h-[60%] md:h-[80%] flex items-center justify-center">
            {heroData.map((item, index) => (
              <div key={index} id="image-container" className="absolute w-0 h-full overflow-hidden rounded-lg">
                <div className="relative w-full h-full">
                  <img
                    src={item.image}
                    alt={`Hero Image ${index + 1}`}
                    className="w-full h-full object-cover filter contrast-110 saturate-90"
                  />
                  {/* 全体的なオーバーレイ */}
                  <div className="absolute inset-0 bg-black/10"></div>
                  {/* テキスト部分のグラデーションオーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>

          {/* サイト名 - 画像の中央に配置 */}
          <div
            id="hero-info-box"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 backdrop-blur-xs border-neutral-200 p-4 sm:p-6 md:p-8 w-[260px] sm:w-[280px] md:w-[360px] rounded-lg transform-gpu will-change-transform"
          >
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {/* ヘッダー */}
              <div className="text-center">
                <div className="relative mx-auto mb-4 w-[180px] md:w-[300px] h-[30px] md:h-[60px]">
                  <img
                    ref={logoBlackRef}
                    src={`${BASE_PATH}/images/logo_black.png`}
                    alt="MOMOTARO Logo Black"
                    // width={300}
                    // height={60}
                    className="absolute top-0 left-0 w-[180px] md:w-[300px] h-auto h-auto"
                  />
                  <img
                    ref={logoWhiteRef}
                    src={`${BASE_PATH}/images/logo_white.png`}
                    alt="MOMOTARO Logo White"
                    // width={300}
                    // height={60}
                    className="absolute top-0 left-0 w-[180px] md:w-[300px] h-auto h-auto opacity-0"
                  />
                </div>
                <p
                  ref={textRef}
                  className="text-xs sm:text-sm md:text-lg font-bold text-black"
                >
                  いつでもカンタン診療
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}