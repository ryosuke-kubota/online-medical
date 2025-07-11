'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

import nextConfig from "../../../next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

interface Medicine {
  title: string
  category?: string
  price: string
  originalPrice: string
  image: string
  subtitle?: string
  description?: string
  drugName?: string
  details?: string
}

interface MedicineModalProps {
  medicine: Medicine | null
  isOpen: boolean
  onClose: () => void
}

export default function MedicineModal({ medicine, isOpen, onClose }: MedicineModalProps) {
  if (!isOpen || !medicine) return null

  // モーダルの背景クリックで閉じる
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
        {/* 閉じるボタン */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* 左側：画像 */}
          <div className="relative bg-gray-100 min-h-[300px] lg:min-h-[500px]">
            <Image
              src={medicine.image}
              alt={medicine.title}
              fill
              className="object-cover"
            />
          </div>

          {/* 右側：詳細情報 */}
          <div className="p-8 flex flex-col justify-center">
            {medicine.category && (
              <p className="text-sm text-gray-600 mb-2">{medicine.category}</p>
            )}
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {medicine.drugName || medicine.title}
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {medicine.details || 
                `5α還元酵素阻害薬でAGAの根本治療薬です。服用することでヘアサイクルを正常化し、AGAを改善します。`
              }
            </p>

            <div className="mb-8">
              <p className="text-lg font-semibold text-gray-900">
                月あたり ¥{medicine.price}〜（税込 ¥{medicine.originalPrice}）
              </p>
            </div>

            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="flex-1 py-3 text-base font-medium border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-50"
              >
                詳細を見る
              </Button>
              <Button 
                className="flex-1 py-3 text-base font-medium bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2"
              >
                <Image 
                  src={`${BASE_PATH}/images/line-icon.png`}
                  alt="LINE"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                診療予約する
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}