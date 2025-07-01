'use client'

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
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm font-medium"
      >
        診療予約する
      </button>
    </div>
  )
}