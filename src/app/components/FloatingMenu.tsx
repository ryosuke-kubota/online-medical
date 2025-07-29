'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function FloatingMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    <>
      {/* フローティングロゴ（左上） */}
      {/* <div className="fixed top-6 left-6 z-50">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="https://ext.same-assets.com/3284986432/991739575.svg"
              alt="くすりの桃太郎"
              width={100}
              height={32}
              className="hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>
      </div> */}

      {/* フローティングメニューボタン（右上） */}
      <div className="fixed top-4 right-6 z-50 menu-container">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 bg-transparent  rounded-full flex items-center justify-center hover:scale-105 transition-all duration-300 group"
          // className="w-12 h-12 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
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
              <Link href="/#pick-up" className="block text-neutral-900 hover:text-blue-600 transition-colors duration-200 font-medium">ピックアップ</Link>
              <Link href="/#services" className="block text-neutral-900 hover:text-blue-600 transition-colors duration-200 font-medium">診療科目</Link>
              <Link href="/#medicines" className="block text-neutral-900 hover:text-blue-600 transition-colors duration-200 font-medium">お薬</Link>
              <Link href="/#features" className="block text-neutral-900 hover:text-blue-600 transition-colors duration-200 font-medium">特徴</Link>
              <Link href="/#how-to-use" className="block text-neutral-900 hover:text-blue-600 transition-colors duration-200 font-medium">ご利用の流れ</Link>
              <Link href="/#faq" className="block text-neutral-900 hover:text-blue-600 transition-colors duration-200 font-medium">よくある質問</Link>
            </div>
            <div className="pt-4 border-t border-neutral-200">
              <Link href="/#cta">
                <button className="w-full bg-[#4DA8DA] text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-[#3d8bb3] hover:shadow-lg transition-all duration-300">
                  診療予約する
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}