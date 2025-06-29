import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
import AnimatedHero from "@/components/AnimatedHero"

import nextConfig from "../../next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  const heroImages = [
    "https://ext.same-assets.com/3284986432/649696560.jpeg",
    "https://ext.same-assets.com/3284986432/3049966336.jpeg",
    "https://ext.same-assets.com/3284986432/1355868134.jpeg",
    "https://ext.same-assets.com/3284986432/3875375121.jpeg",
    "https://ext.same-assets.com/3284986432/2427222098.jpeg",
    "https://ext.same-assets.com/3284986432/395372390.jpeg",
    "https://ext.same-assets.com/3284986432/1849124493.jpeg"
  ]

  const brands = [
    {
      id: "hair",
      title: "AGA診療、ぜんぶオンラインで",
      subtitle: "ENJOY YOUR STYLE FOREVER.",
      bg: "https://ext.same-assets.com/3284986432/2367239611.jpeg",
      banner: "https://ext.same-assets.com/3284986432/2873164595.png"
    },
    {
      id: "womb",
      title: "子宮との365日に、ちょっぴりピースを。",
      subtitle: "LOVE & PEACE WITH WOMB.",
      bg: "https://ext.same-assets.com/3284986432/2088257281.jpeg",
      banner: "https://ext.same-assets.com/3284986432/698188018.png"
    },
    {
      id: "love",
      title: "ED診療、ぜんぶオンラインで",
      subtitle: "DON'T WORRY. WE ARE THE SAME.",
      bg: "https://ext.same-assets.com/3284986432/2178503383.jpeg",
      banner: "https://ext.same-assets.com/3284986432/3356119166.png"
    },
    {
      id: "heart",
      title: "いろんなこころに、すっと頼れる診療を",
      subtitle: "ALWAYS BY YOUR SIDE.",
      bg: "https://ext.same-assets.com/3284986432/121544902.jpeg",
      banner: "https://ext.same-assets.com/3284986432/765577380.png"
    }
  ]

  const services = [
    { name: "男性AGA", icon: "https://ext.same-assets.com/3284986432/901484803.gif" },
    { name: "ピル処方", icon: "https://ext.same-assets.com/3284986432/1965986365.gif" },
    { name: "ED治療", icon: "https://ext.same-assets.com/3284986432/2754074324.gif" },
    { name: "こころのお悩み", icon: "https://ext.same-assets.com/3284986432/2410265565.gif" },
    { name: "女性AGA", icon: "https://ext.same-assets.com/3284986432/1520618157.gif" },
    { name: "眠りのお悩み", icon: "https://ext.same-assets.com/3284986432/248897485.gif" },
    { name: "花粉症", icon: "https://ext.same-assets.com/3284986432/2362979327.gif" },
    { name: "ニキビ治療", icon: "https://ext.same-assets.com/3284986432/278996483.gif" },
    { name: "ダイエット漢方", icon: "https://ext.same-assets.com/3284986432/593082522.gif" },
    { name: "高脂血症", icon: "https://ext.same-assets.com/3284986432/523577315.gif" },
    { name: "汗のお悩み", icon: "https://ext.same-assets.com/3284986432/3206766394.gif" },
    { name: "痛み・吐き気", icon: "https://ext.same-assets.com/3284986432/2821135590.gif" },
    { name: "まつ毛美容液", icon: "https://ext.same-assets.com/3284986432/622004978.gif" }
  ]

  const medicines = [
    {
      title: "5種類から選べるAGA治療薬セット",
      category: "AGA治療薬",
      price: "1,900",
      originalPrice: "2,090",
      image: "https://ext.same-assets.com/3284986432/3515286607.jpeg"
    },
    {
      title: "5種類から選べるAGA治療薬セット",
      category: "AGA治療薬",
      price: "4,980",
      originalPrice: "5,478",
      image: "https://ext.same-assets.com/3284986432/3755871950.jpeg"
    },
    {
      title: "AGA治療薬",
      category: "AGA治療薬",
      price: "1,800",
      originalPrice: "1,980",
      image: "https://ext.same-assets.com/3284986432/1981089046.jpeg"
    },
    {
      title: "低用量ピル",
      price: "2,350",
      originalPrice: "2,585",
      image: "https://ext.same-assets.com/3284986432/1271733455.jpeg"
    },
    {
      title: "バイアグラジェネリック",
      category: "ED治療薬",
      subtitle: "1回あたり136円〜",
      price: "7,900",
      originalPrice: "8,690",
      image: "https://ext.same-assets.com/3284986432/1016171196.jpeg"
    },
    {
      title: "花粉症治療薬",
      price: "2,500",
      originalPrice: "2,750",
      image: "https://ext.same-assets.com/3284986432/902400015.jpeg"
    }
  ]

  const features = [
    {
      title: "スマホで完結",
      description: "診察から薬の受け取りまで、全てスマホで完結します。",
      image: "https://ext.same-assets.com/3284986432/2624333347.jpeg"
    },
    {
      title: "プライバシー配慮",
      description: "配送時の梱包や宛名など、プライバシーに配慮しています。",
      image: "https://ext.same-assets.com/3284986432/492600595.jpeg"
    },
    {
      title: "医師による診察",
      description: "経験豊富な医師が、あなたの症状に合わせて診察します。",
      image: "https://ext.same-assets.com/3284986432/3882650208.jpeg"
    }
  ]

  const howToUse = [
    {
      title: "LINEで簡単予約",
      description: "OopsのLINE公式アカウントから簡単に予約できます。",
      image: "https://ext.same-assets.com/3284986432/716333298.png"
    },
    {
      title: "問診票記入",
      description: "症状や希望に応じて問診票にお答えいただきます。",
      image: "https://ext.same-assets.com/3284986432/851232475.png"
    },
    {
      title: "オンライン診察",
      description: "ビデオ通話で医師による診察を受けていただきます。",
      image: "https://ext.same-assets.com/3284986432/2257691788.png"
    },
    {
      title: "薬のお届け",
      description: "処方された薬がご自宅に配送されます。",
      image: "https://ext.same-assets.com/3284986432/2546847344.png"
    }
  ]

  const magazines = [
    {
      title: "俳優　松㟢 翔平さん",
      brand: "Oops LOVE",
      excerpt: "「こんなにも大好きなのに、できない。それが苦しかった。」",
      image: "https://ext.same-assets.com/3284986432/749654993.jpeg"
    },
    {
      title: "医師　佐藤 明男",
      brand: "Oops HAIR",
      excerpt: "「AGA治療のほんと、お話しします」",
      image: "https://ext.same-assets.com/3284986432/163125431.jpeg"
    },
    {
      title: "美容師　Ryutaro",
      brand: "Oops HAIR",
      excerpt: "「服装とヘアはセット」だから、お店にはご自身の好きなスタイルで来てください",
      image: "https://ext.same-assets.com/3284986432/515982478.jpeg"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Animated Hero Section */}
      <AnimatedHero />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Oops</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Oopsは、スマートフォン一つで完結する革新的なオンライン診療サービスです。<br />
                プライバシーを重視し、質の高い医療を身近にお届けします。
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">私たちのミッション</h3>
                <p className="text-gray-600 leading-relaxed">
                  医療へのアクセスをより簡単に、より身近にすることで、すべての人が健康で充実した生活を送れる社会の実現を目指しています。従来の医療の枠を超え、テクノロジーの力で新しい医療体験を提供します。
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">アクセシビリティ</h4>
                      <p className="text-sm text-gray-600">時間や場所を選ばず、必要な時に医療サービスを受けられます</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">プライバシー保護</h4>
                      <p className="text-sm text-gray-600">個人情報の取り扱いに最大限の配慮をしています</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">質の高い医療</h4>
                      <p className="text-sm text-gray-600">経験豊富な医師による丁寧な診察を提供します</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="オンライン診療の様子"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">24/7</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">スマホで完結</h4>
                <p className="text-gray-600 text-sm">予約から診察、薬の受け取りまで、すべてスマートフォンで完結します</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">安心・安全</h4>
                <p className="text-gray-600 text-sm">厳格なセキュリティ基準に基づき、患者様の情報を安全に管理しています</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">専門医による診察</h4>
                <p className="text-gray-600 text-sm">各分野の専門知識を持つ経験豊富な医師が診察を担当します</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Brand</h2>
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
                    <Image
                      src={brand.banner}
                      alt={brand.title}
                      width={200}
                      height={60}
                      className="mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{brand.title}</h3>
                    <p className="text-sm mb-4">{brand.subtitle}</p>
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black hover-scale">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">All</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <div key={service.name} className="text-center group cursor-pointer">
                <div className="relative w-20 h-20 mx-auto mb-3 overflow-hidden rounded-full service-icon">
                  <Image
                    src={service.icon}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-medium">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medicine Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Medicine</h2>
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
                    <Button className="flex-1 hover-scale" variant="outline">詳細を見る</Button>
                    <Button className="bg-green-500 hover:bg-green-600 text-white hover-scale">
                      診療予約する
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Features</h2>
          <p className="text-center text-gray-600 mb-16">Oopsが選ばれる3つの理由</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center feature-item">
                <div className="relative w-80 h-60 mx-auto mb-6 rounded-lg overflow-hidden image-overlay">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How to use</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howToUse.map((step, index) => (
              <div key={step.title} className="text-center step-item">
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden image-overlay">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-8 h-8 gradient-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
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
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">LINEで相談&診療予約する</h2>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg hover-scale">
            Oops公式LINEアカウントはこちら
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-b pb-6 faq-item">
              <h3 className="font-bold text-lg mb-2">Oopsのサービス内容を教えてください</h3>
              <p className="text-gray-600">Oopsは、AGA・ED診療、ピル処方をはじめ、いろんな診療がスマホひとつで受診することができるオンライン診療サービスです。</p>
            </div>
            <div className="border-b pb-6 faq-item">
              <h3 className="font-bold text-lg mb-2">オンライン診療の流れを教えてください</h3>
              <p className="text-gray-600">LINEで予約→問診票記入→オンライン診察→薬のお届けという流れで進みます。</p>
            </div>
            <div className="border-b pb-6 faq-item">
              <h3 className="font-bold text-lg mb-2">支払い方法を教えてください</h3>
              <p className="text-gray-600">VISA、Master、JCB、AMEX、Diners、Amazon Payでのお支払いが可能です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine */}
      <section className="py-20 bg-gray-50">
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
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <Image
                src="https://ext.same-assets.com/3284986432/991739575.svg"
                alt="Oops"
                width={120}
                height={40}
                className="filter brightness-0 invert mb-6"
              />
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-xs">LINE</span>
                </div>
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-xs">IG</span>
                </div>
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-xs">X</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">診療メニュー</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-blue-400">男性AGA</Link></li>
                <li><Link href="#" className="hover:text-blue-400">ピル処方</Link></li>
                <li><Link href="#" className="hover:text-blue-400">ED治療</Link></li>
                <li><Link href="#" className="hover:text-blue-400">こころのお悩み</Link></li>
                <li><Link href="#" className="hover:text-blue-400">女性AGA</Link></li>
                <li><Link href="#" className="hover:text-blue-400">眠りのお悩み</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">サービス</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-blue-400">花粉症</Link></li>
                <li><Link href="#" className="hover:text-blue-400">ニキビ治療</Link></li>
                <li><Link href="#" className="hover:text-blue-400">ダイエット漢方</Link></li>
                <li><Link href="#" className="hover:text-blue-400">高脂血症</Link></li>
                <li><Link href="#" className="hover:text-blue-400">汗のお悩み</Link></li>
                <li><Link href="#" className="hover:text-blue-400">まつ毛美容液</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">企業情報</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-blue-400">運営会社</Link></li>
                <li><Link href="#" className="hover:text-blue-400">特定商取引法に基づく表示</Link></li>
                <li><Link href="#" className="hover:text-blue-400">利用規約</Link></li>
                <li><Link href="#" className="hover:text-blue-400">プライバシーポリシー</Link></li>
                <li><Link href="#" className="hover:text-blue-400">お知らせ</Link></li>
                <li><Link href="#" className="hover:text-blue-400">お問い合わせ</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Oops. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
