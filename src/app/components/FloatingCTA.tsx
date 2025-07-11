'use client'

import { useState, useEffect } from "react"
import Image from "next/image"

import nextConfig from "../../../next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // スクロール位置が300px以上の場合に表示
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 300)
    }

    // スクロールイベントリスナーを追加
    window.addEventListener('scroll', handleScroll)

    // クリーンアップ関数
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleCTAClick = () => {
    // ここに診療予約のロジックを追加
    // 例: 外部リンクへの遷移、モーダル表示など
    console.log('診療予約ボタンがクリックされました')
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        onClick={handleCTAClick}
        className="bg-[#FFD66B] text-black px-4 md:px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm font-medium flex items-center gap-2"
      >
        <Image
          src={`${BASE_PATH}/images/line-icon.png`}
          alt="LINE"
          className="w-6 h-6 md:w-10 md:h-10"
          width={20}
          height={20}
        />
        診療予約する
      </button>
    </div>
  )
}