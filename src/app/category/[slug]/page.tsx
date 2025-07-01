
import { notFound } from 'next/navigation';
import { Breadcrumb } from '@/components/Breadcrumb';

// Type definitions
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

interface About {
  title: string;
  content: string;
  features: string[];
}

interface CategoryData {
  title: string;
  description: string;
  about: About;
  products: Product[];
}

// This is a placeholder for where you might fetch your category data
const fetchCategoryData = async (slug: string): Promise<CategoryData | null> => {
  // In a real application, you would fetch this data from a CMS or database.
  const categories: { [key: string]: CategoryData } = {
    sweat: {
      title: '汗のお悩み',
      description: '多汗症など、汗に関するお悩みを解決します。',
      about: {
        title: 'このカテゴリについて',
        content: '汗のお悩みは多くの方が抱える身近な問題です。多汗症、汗の臭い、汗染みなど、様々な症状に対して適切な治療法や対策をご提案いたします。当クリニックでは、患者様一人ひとりの症状に合わせたオーダーメイドの治療を行っております。',
        features: [
          '専門医による詳細な診断',
          '最新の治療技術を使用',
          '個人に合わせた治療プラン',
          'アフターケアも充実'
        ]
      },
      products: [
        {
          id: 1,
          name: 'ボトックス注射',
          description: '多汗症に効果的な治療法です。汗腺の働きを抑制し、汗の分泌を大幅に減少させます。',
          price: '¥50,000〜',
          duration: '約30分',
          image: '/products/botox.jpg'
        },
        {
          id: 2,
          name: 'イオントフォレーシス',
          description: '電気を使った非侵襲的な治療法。手のひらや足の裏の多汗症に特に効果的です。',
          price: '¥15,000〜',
          duration: '約45分',
          image: '/products/iontophoresis.jpg'
        },
        {
          id: 3,
          name: '制汗剤処方',
          description: '医療用の強力な制汗剤を処方いたします。市販品では効果が不十分な方におすすめです。',
          price: '¥3,000〜',
          duration: '約15分',
          image: '/products/antiperspirant.jpg'
        }
      ]
    },
    // Add other categories here
  };

  if (!categories[slug]) {
    return null;
  }

  return categories[slug];
};

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await fetchCategoryData(params.slug);

  if (!category) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: category.title, href: `/category/${params.slug}` },
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="my-8">
        <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
        <p className="text-lg text-gray-600">{category.description}</p>
      </div>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{category.about.title}</h2>
        <div className="bg-gray-50 rounded-lg p-8">
          <p className="text-lg leading-relaxed mb-8 text-gray-700">
            {category.about.content}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.about.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">治療・サービス</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-100 rounded-t-lg flex items-center justify-center">
                <div className="text-gray-400 text-sm">画像準備中</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{product.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-blue-600">{product.price}</span>
                  <span className="text-sm text-gray-500">施術時間: {product.duration}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
                  詳細を見る
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">お気軽にご相談ください</h3>
        <p className="text-gray-600 mb-6">
          専門医が患者様のお悩みに合わせた最適な治療法をご提案いたします。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200">
            無料相談予約
          </button>
          <button className="border border-blue-600 text-blue-600 py-3 px-6 rounded-md hover:bg-blue-50 transition-colors duration-200">
            お電話でのお問い合わせ
          </button>
        </div>
      </section>
    </div>
  );
}
