'use client'

import Image from "next/image"

import nextConfig from "../../../next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

export default function FloatingCTA() {
  const handleCTAClick = () => {
    // ここに診療予約のロジックを追加
    // 例: 外部リンクへの遷移、モーダル表示など
    console.log('診療予約ボタンがクリックされました')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={handleCTAClick}
        className="bg-[#FFD66B] text-black px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm font-medium flex items-center gap-2"
      >
        <Image 
          src={`${BASE_PATH}/images/line-icon.png`}
          alt="LINE"
          className="w-10 h-10"
          width={20}
          height={20}
        />
        診療予約する
      </button>
    </div>
  )
}