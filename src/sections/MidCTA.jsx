export default function MidCTA() {
  return (
    <section className="py-16 md:py-20 bg-[#FF9F1C] px-6 overflow-hidden relative stripe-bg">
      {/* decorative dot cluster */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20 hidden md:block">
        {[0,1,2,3,4].map(row => (
          <div key={row} className="flex gap-3 mb-3">
            {[0,1,2,3,4].map(col => (
              <div key={col} className="w-2 h-2 rounded-full bg-white" />
            ))}
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <p className="text-white/70 text-sm tracking-wide mb-4">まずは一歩、踏み出してみませんか</p>
        <h2
          className="font-bold text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
        >
          あなたの「やってみたい」を、
          <br />
          ぜひ聞かせてください。
        </h2>
        <a
          href="#trial"
          className="inline-block bg-white text-[#FF9F1C] font-bold px-10 py-4 rounded-full text-base hover:bg-[#fffcf5] transition-colors duration-200 shadow-lg"
        >
          無料体験に申し込む →
        </a>
        <p className="text-white/60 text-xs mt-4">
          ※ 体験レッスンの詳細・日程は近日公開予定
        </p>
      </div>
    </section>
  )
}
