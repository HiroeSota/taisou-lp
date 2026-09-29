export default function FinalCTA() {
  return (
    <section id="trial" className="py-28 md:py-40 bg-[#1a1a2e] px-6 overflow-hidden relative">
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      {/* glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FF9F1C 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="reveal">
          <p className="text-[#FF9F1C] text-xs tracking-[0.35em] uppercase mb-8">ここまで読んでくれたあなたへ</p>
          <h2
            className="text-white font-bold leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            次は、
            <br />
            <span className="text-[#FF9F1C]">あなたができるようになる番。</span>
          </h2>
        </div>

        <div className="reveal reveal-delay-1">
          <p className="text-white/45 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            挑戦して、失敗して、考えて、またやってみる。
            <br />
            その循環を、ここから始めてみませんか。
          </p>
        </div>

        <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            type="button"
            onClick={() => alert('体験レッスンのご予約は近日受付開始予定です。')}
            className="inline-block bg-[#FF9F1C] text-white font-bold px-10 py-5 rounded-full text-lg hover:bg-[#e8900f] transition-colors duration-200 shadow-xl shadow-[#FF9F1C]/25 cursor-pointer"
          >
            無料体験に申し込む
          </button>
          <button
            type="button"
            onClick={() => alert('お問い合わせ先は近日公開予定です。')}
            className="inline-block border border-white/20 text-white/65 font-medium px-10 py-5 rounded-full text-base hover:border-white/45 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            まずは質問してみる
          </button>
        </div>

        <div className="reveal reveal-delay-3">
          <p className="text-white/20 text-xs tracking-wide mb-12">
            ※ 料金・日程・場所は近日公開予定です
          </p>
          <div className="border-t border-white/10 pt-10">
            <p className="text-white/20 text-sm">
              [教室名] / [所在地 — 後日更新] / [連絡先 — 後日更新]
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
