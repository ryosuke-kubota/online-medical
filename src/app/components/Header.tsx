import Link from 'next/link';
import Image from 'next/image';
import nextConfig from "../../../next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src={`${BASE_PATH}/images/logo.png`}
                alt="薬の桃太郎"
                width={40}
                height={40}
                className="hover:scale-105 transition-transform duration-300"
              />
              <span className="text-2xl font-bold text-gray-800">薬の桃太郎</span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/#services">
            <span className="text-gray-600 hover:text-blue-600 transition-colors duration-200">診療科目</span>
          </Link>
          <Link href="/#features">
            <span className="text-gray-600 hover:text-blue-600 transition-colors duration-200">特徴</span>
          </Link>
          <Link href="/#how-to-use">
            <span className="text-gray-600 hover:text-blue-600 transition-colors duration-200">ご利用の流れ</span>
          </Link>
          <Link href="/#faq">
            <span className="text-gray-600 hover:text-blue-600 transition-colors duration-200">よくある質問</span>
          </Link>
        </nav>
        <div className="hidden md:block">
          <Link href="/#cta">
            <button className="bg-[#4DA8DA] text-white px-6 py-2 rounded-full font-medium hover:bg-[#3d8bb3] transition-colors duration-200">
              診療予約する
            </button>
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;