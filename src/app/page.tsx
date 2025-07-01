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
    { name: "ED 早漏防止", icon: "https://ext.same-assets.com/3284986432/901484803.gif" },
    { name: "インフルエンザ予防", icon: "https://ext.same-assets.com/3284986432/1965986365.gif" },
    { name: "ドクターズコスメ", icon: "https://ext.same-assets.com/3284986432/2754074324.gif" },
    { name: "メディカルスキンケア", icon: "https://ext.same-assets.com/3284986432/2410265565.gif" },
    { name: "メディカルダイエット", icon: "https://ext.same-assets.com/3284986432/1520618157.gif" },
    { name: "飲む日焼け止め", icon: "https://ext.same-assets.com/3284986432/248897485.gif" },
    { name: "花粉症", icon: "https://ext.same-assets.com/3284986432/2362979327.gif" },
    { name: "汗のお悩み", icon: "https://ext.same-assets.com/3284986432/278996483.gif" },
    { name: "睡眠障害", icon: "https://ext.same-assets.com/3284986432/593082522.gif" },
    { name: "性感染症", icon: "https://ext.same-assets.com/3284986432/523577315.gif" },
    { name: "生活習慣病", icon: "https://ext.same-assets.com/3284986432/3206766394.gif" },
    { name: "こころのお悩み", icon: "https://ext.same-assets.com/3284986432/2821135590.gif" },
    { name: "AGA", icon: "https://ext.same-assets.com/3284986432/622004978.gif" },
    { name: "女性不感症", icon: "https://ext.same-assets.com/3284986432/622004978.gif" },
    { name: "ピル", icon: "https://ext.same-assets.com/3284986432/622004978.gif" }
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
    <>
      {/* Animated Hero Section */}
      <AnimatedHero />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Oops</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">ここは、あなたのポケットにある“かかりつけ”</h3>
                <p className="text-gray-600 leading-relaxed">
                心と体はいつでも完璧であるわけではなく、ちょっとした不調や不安は日々の中で誰にでも訪れます。面倒な通院も薬局の待ち時間も、すべてオンラインでまるっと完結。診察からお薬の処方、相談からフォローアップまで、まとまった手間を省いて、あなたの生活に寄り添う診療を提供します。時間や場所を選ばず、信頼できる医師とのつながりを当たり前に。頼りたいときに、すぐにアクセスできる安心を届けます。
                </p>
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

    </>
  )
}
