import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-2xl font-bold text-gray-800">Oops!</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/online-medical">
            <span className="text-gray-600 hover:text-gray-800">オンライン診療</span>
          </Link>
          <Link href="/about">
            <span className="text-gray-600 hover:text-gray-800">Oops!について</span>
          </Link>
          <Link href="/column">
            <span className="text-gray-600 hover:text-gray-800">コラム</span>
          </Link>
          <Link href="/faq">
            <span className="text-gray-600 hover:text-gray-800">よくある質問</span>
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login">
            <span className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              ログイン
            </span>
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