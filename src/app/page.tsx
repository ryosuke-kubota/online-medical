'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
import AnimatedHero from "@/components/AnimatedHero"
import MedicineModal from "@/components/MedicineModal"

import nextConfig from "../../next.config.mjs";

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

export default function Home() {
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleMedicineClick = (medicine: Medicine) => {
    setSelectedMedicine(medicine)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedMedicine(null)
  }

  const brands = [
    {
      id: "hair",
      title: "AGA診療、ぜんぶオンラインで",
      subtitle: "ENJOY YOUR STYLE FOREVER.",
      bg: `${BASE_PATH}/images/brand/brand1.png`,
      banner: "https://ext.same-assets.com/3284986432/2873164595.png"
    },
    {
      id: "womb",
      title: "子宮との365日に、ちょっぴりピースを。",
      subtitle: "LOVE & PEACE WITH WOMB.",
      bg: `${BASE_PATH}/images/brand/brand2.png`,
      banner: "https://ext.same-assets.com/3284986432/698188018.png"
    },
    {
      id: "love",
      title: "ED診療、ぜんぶオンラインで",
      subtitle: "DON'T WORRY. WE ARE THE SAME.",
      bg: `${BASE_PATH}/images/brand/brand3.png`,
      banner: "https://ext.same-assets.com/3284986432/3356119166.png"
    },
    {
      id: "heart",
      title: "いろんなこころに、すっと頼れる診療を",
      subtitle: "ALWAYS BY YOUR SIDE.",
      bg: `${BASE_PATH}/images/brand/brand4.png`,
      banner: "https://ext.same-assets.com/3284986432/765577380.png"
    }
  ]

  const services = [
    { name: "ED 早漏防止", icon: `${BASE_PATH}/images/services/ed.png` },
    { name: "インフルエンザ予防", icon: `${BASE_PATH}/images/services/flu.png` },
    { name: "ドクターズコスメ", icon: `${BASE_PATH}/images/services/doctors-cosme.png` },
    { name: "メディカルスキンケア", icon: `${BASE_PATH}/images/services/medical-skincare.png` },
    { name: "メディカルダイエット", icon: `${BASE_PATH}/images/services/medical-diet.png` },
    { name: "飲む日焼け止め", icon: `${BASE_PATH}/images/services/sunscreen.png` },
    { name: "花粉症", icon: `${BASE_PATH}/images/services/pollen.png` },
    { name: "汗のお悩み", icon: `${BASE_PATH}/images/services/sweat.png` },
    { name: "睡眠障害", icon: `${BASE_PATH}/images/services/sleep.png` },
    { name: "性感染症", icon: `${BASE_PATH}/images/services/sex.png` },
    { name: "生活習慣病", icon: `${BASE_PATH}/images/services/life.png` },
    { name: "こころのお悩み", icon: `${BASE_PATH}/images/services/heart.png` },
    { name: "AGA", icon: `${BASE_PATH}/images/services/aga.png` },
    { name: "女性不感症", icon: `${BASE_PATH}/images/services/woman.png` },
    { name: "ピル", icon: `${BASE_PATH}/images/services/pil.png` }
  ]

  const medicines = [
    {
      title: "5種類から選べるAGA治療薬セット",
      category: "男性AGA",
      drugName: "フィナステリド",
      price: "1,900",
      originalPrice: "2,090",
      image: "https://ext.same-assets.com/3284986432/3515286607.jpeg",
      details: "5α還元酵素阻害薬でAGAの根本治療薬です。服用することでヘアサイクルを正常化し、AGAを改善します。"
    },
    {
      title: "5種類から選べるAGA治療薬セット",
      category: "男性AGA",
      drugName: "デュタステリド",
      price: "4,980",
      originalPrice: "5,478",
      image: "https://ext.same-assets.com/3284986432/3755871950.jpeg",
      details: "フィナステリドよりも強力な5α還元酵素阻害薬です。より効果的なAGA治療が期待できます。"
    },
    {
      title: "AGA治療薬",
      category: "男性AGA",
      drugName: "ミノキシジル",
      price: "1,800",
      originalPrice: "1,980",
      image: "https://ext.same-assets.com/3284986432/1981089046.jpeg",
      details: "血管拡張作用により毛根への血流を改善し、発毛を促進する外用薬です。"
    },
    {
      title: "低用量ピル",
      category: "女性の健康",
      drugName: "トリキュラー",
      price: "2,350",
      originalPrice: "2,585",
      image: "https://ext.same-assets.com/3284986432/1271733455.jpeg",
      details: "避妊効果に加え、月経周期の安定化や月経困難症の改善にも効果があります。"
    },
    {
      title: "バイアグラジェネリック",
      category: "ED治療薬",
      drugName: "シルデナフィル",
      subtitle: "1回あたり136円〜",
      price: "7,900",
      originalPrice: "8,690",
      image: "https://ext.same-assets.com/3284986432/1016171196.jpeg",
      details: "PDE5阻害薬として血管を拡張し、勃起機能を改善します。服用後約1時間で効果が現れます。"
    },
    {
      title: "花粉症治療薬",
      category: "アレルギー",
      drugName: "アレグラ",
      price: "2,500",
      originalPrice: "2,750",
      image: "https://ext.same-assets.com/3284986432/902400015.jpeg",
      details: "第2世代抗ヒスタミン薬で、眠気が少なく花粉症の症状を効果的に抑制します。"
    }
  ]

  const features = [
    {
      title: "スマホで完結",
      description: "診察から薬の受け取りまで、全てスマホで完結します。",
      image: `${BASE_PATH}/images/features/features01.png` 
    },
    {
      title: "プライバシー配慮",
      description: "配送時の梱包や宛名など、プライバシーに配慮しています。",
      image: `${BASE_PATH}/images/features/features02.png` 
    },
    {
      title: "医師による診察",
      description: "経験豊富な医師が、あなたの症状に合わせて診察します。",
      image: `${BASE_PATH}/images/features/features03.png` 
    }
  ]

  const howToUse = [
    {
      title: "LINEで簡単予約",
      description: "薬の桃太郎のLINE公式アカウントから簡単に予約できます。",
      image: `${BASE_PATH}/images/how-to-use/how-to-use01.png`
    },
    {
      title: "問診票記入",
      description: "症状や希望に応じて問診票にお答えいただきます。",
      image: `${BASE_PATH}/images/how-to-use/how-to-use02.png`
    },
    {
      title: "オンライン診察",
      description: "ビデオ通話で医師による診察を受けていただきます。",
      image: `${BASE_PATH}/images/how-to-use/how-to-use03.png`
    },
    {
      title: "薬のお届け",
      description: "処方された薬がご自宅に配送されます。",
      image: `${BASE_PATH}/images/how-to-use/how-to-use04.png`
    }
  ]

  const magazines = [
    {
      title: "俳優　松㟢 翔平さん",
      brand: "MOMOTARO LOVE",
      excerpt: "「こんなにも大好きなのに、できない。それが苦しかった。」",
      image: "https://ext.same-assets.com/3284986432/749654993.jpeg"
    },
    {
      title: "医師　佐藤 明男",
      brand: "MOMOTARO HAIR",
      excerpt: "「AGA治療のほんと、お話しします」",
      image: "https://ext.same-assets.com/3284986432/163125431.jpeg"
    },
    {
      title: "美容師　Ryutaro",
      brand: "MOMOTARO HAIR",
      excerpt: "「服装とヘアはセット」だから、お店にはご自身の好きなスタイルで来てください",
      image: "https://ext.same-assets.com/3284986432/515982478.jpeg"
    }
  ]

  return (
    <>
      {/* Animated Hero Section */}
      <AnimatedHero />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 md:py-20">
              <div className="space-y-6">
                <h3 className="text-center md:text-left text-2xl md:text-4xl font-bold text-gray-900 leading-[2] md:leading-[2]">薬の桃太郎が守る<br className='md:hidden' />"健康の宝"</h3>
                <p className="text-sm md:text-xl text-black font-bold leading-[2.6] md:leading-[2.6]">
                  日本の昔話「桃太郎」のように、私たちは「薬」を武器にして、皆さまの"健康という宝"をお守りします。
                  <br /><br />
                  遠く離れた場所からでも<br />
                  まるで鬼退治に出かける主人公のように<br />
                  以下の特長で病気や悩みの"鬼"をスムーズに撃退します。
                </p>
              </div>
              
              <div className="relative">
                <div className="relative aspect-square w-full md:aspect-auto md:h-96 md:w-auto rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={`${BASE_PATH}/images/about.png`}
                    alt="オンライン診療の様子"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* 特長セクション */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div> */}
                <h4 className="text-xl font-bold text-gray-900 mb-3">いつでもどこでも簡単診療</h4>
                <p className="text-gray-600 text-xs md:text-sm leading-6">
                  スマホやPCから24時間いつでもアクセス可能。思い立ったらすぐに専門医とつながり、面倒な移動や長い待ち時間は一切なし。
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div> */}
                <h4 className="text-xl font-bold text-gray-900 mb-3">予約制で待ち時間ゼロ</h4>
                <p className="text-gray-600 text-xs md:text-sm leading-6">
                  ご都合のよい日時を選ぶだけ。予約時間になればすぐチャットまたはビデオ通話で問診／診察がスタートします。
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div> */}
                <h4 className="text-xl font-bold text-gray-900 mb-3">安心・安全の専門医処方</h4>
                <p className="text-gray-600 text-xs md:text-sm leading-6">
                  各分野のプロフェッショナル医師が、丁寧な問診をもとに最適な薬を処方。万一のフォローアップまでしっかりサポートします。
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div> */}
                <h4 className="text-xl font-bold text-gray-900 mb-3">プライバシー厳守</h4>
                <p className="text-gray-600 text-xs md:text-sm leading-6">
                  全てオンラインで完結するから、周りの目を気にせず診療OK。プライバシーがしっかり守られます。
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div> */}
                <h4 className="text-xl font-bold text-gray-900 mb-3">翌日お届けの迅速配送</h4>
                <p className="text-gray-600 text-xs md:text-sm leading-6">
                  処方した薬は最短で翌日にはご自宅へ。まるで桃から飛び出したキジのように、素早く手元にお届けします。
                </p>
              </div>
            </div>

            {/* 締めくくりメッセージ */}
            <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
              <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4">手軽さ × 安心感 × スピード</h3>
              <p className="text-xs md:text-lg text-gray-700 leading-8 max-w-4xl mx-auto">
                薬の桃太郎は、「手軽さ × 安心感 × スピード」を兼ね備えた新しいオンライン診療サービスです。あなたの"健康の宝"を守るパートナーとして、ぜひお気軽にご利用ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-20 bg-gray-50" id='pick-up'>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">ピックアップ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {brands.map((brand) => (
              <div key={brand.id} className="relative group cursor-pointer overflow-hidden rounded-2xl brand-card card-hover">
                <div className="relative h-80">
                  <Image
                    src={brand.bg}
                    alt={brand.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{brand.title}</h3>
                    <p className="text-sm mb-4">{brand.subtitle}</p>
                    <Button variant="outline" className="text-black border-white hover:bg-white hover:text-black hover-scale">
                      View More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-20" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">診療科目</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-6">
            {services.map((service, index) => (
              <Card key={service.name} className="overflow-hidden service-card cursor-pointer group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="relative w-16 sm:w-24 h-16 sm:h-24 mx-auto mb-4 overflow-hidden rounded-full service-icon">
                    <Image
                      src={service.icon}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xs sm:text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Medicine Cards */}
      <section className="py-20 bg-gray-50" id='medicines'>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">お薬</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {medicines.slice(0, 6).map((medicine, index) => (
              <Card key={`medicine-${index}`} className="overflow-hidden medicine-card">
                <div className="relative h-48">
                  <Image
                    src={medicine.image}
                    alt={medicine.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{medicine.title}</h3>
                  {medicine.category && (
                    <p className="text-sm text-gray-600 mb-2">{medicine.category}</p>
                  )}
                  {medicine.subtitle && (
                    <p className="text-sm text-blue-600 mb-2">{medicine.subtitle}</p>
                  )}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="price-tag text-2xl font-bold text-red-500">¥{medicine.price}</span>
                    <span className="text-sm text-gray-500 line-through">¥{medicine.originalPrice}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      className="flex-1 hover-scale"
                      variant="outline"
                      onClick={() => handleMedicineClick(medicine)}
                    >
                      詳細を見る
                    </Button>
                    {/* <Button className="bg-green-500 hover:bg-green-600 text-white hover-scale">
                      診療予約する
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">特徴</h2>
          <p className="text-center text-gray-600 mb-16">薬の桃太郎が選ばれる3つの理由</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center feature-item">
                <div className="relative w-full max-w-80 h-60 mx-auto mb-6 rounded-lg overflow-hidden image-overlay">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-20 bg-gray-50" id='how-to-use'>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">ご利用の流れ</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howToUse.map((step, index) => (
              <div key={step.title} className="text-center step-item">
                <div className="relative w-full max-w-[200px] mx-auto h-auto aspect-square mb-6 rounded-lg overflow-hidden image-overlay">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-8 h-8 bg-[#4DA8DA] text-white rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4DA8DA]" id="cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-8">LINEで相談&診療予約する</h2>
          <Button size="lg" className="bg-white text-black px-10 py-8 rounded-full text-base font-medium flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all duration-300 mx-auto">
            <Image 
              src={`${BASE_PATH}/images/line-icon.png`}
              alt="LINE"
              className="w-10 h-10"
              width={20}
              height={20}
            />
            診療予約する
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" id='faq'>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">よくある質問</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-b pb-6 faq-item">
              <h3 className="font-bold text-sm md:text-lg mb-2">薬の桃太郎のサービス内容を教えてください</h3>
              <p className="text-xs md:text-base text-gray-600">薬の桃太郎は、AGA・ED診療、ピル処方をはじめ、いろんな診療がスマホひとつで受診することができるオンライン診療サービスです。</p>
            </div>
            <div className="border-b pb-6 faq-item">
              <h3 className="font-bold text-sm md:text-lg mb-2">オンライン診療の流れを教えてください</h3>
              <p className="text-xs md:text-base text-gray-600">LINEで予約→問診票記入→オンライン診察→薬のお届けという流れで進みます。</p>
            </div>
            <div className="border-b pb-6 faq-item">
              <h3 className="font-bold text-sm md:text-lg mb-2">支払い方法を教えてください</h3>
              <p className="text-xs md:text-base text-gray-600">VISA、Master、JCB、AMEX、Diners、Amazon Payでのお支払いが可能です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Magazine</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {magazines.map((article, index) => (
              <Card key={article.title} className="overflow-hidden magazine-card cursor-pointer">
                <div className="relative h-48 image-overlay">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="text-sm text-blue-600 font-medium">{article.brand}</span>
                  <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm">{article.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Medicine Modal */}
      <MedicineModal
        medicine={selectedMedicine}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

    </>
  )
}
