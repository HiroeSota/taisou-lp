const selfQuestions = [
  'なぜ今できたんだろう？',
  'なぜ失敗したんだろう？',
  '次は何を変えたらいい？',
  '自分の身体はいまどうなっている？',
]

export default function WhoWeRaise() {
  return (
    <section className="py-28 md:py-36 bg-[#f9f7f4] px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <p className="reveal text-[#e85d26] text-xs tracking-[0.3em] uppercase mb-8 text-center">
          私たちが育てたい人
        </p>

        {/* headline */}
        <div className="reveal reveal-delay-1 text-center mb-16">
          <h2
            className="font-bold text-[#1a1a2e] leading-tight mb-6"
            style={{ fontSize: 'clamp(1.6rem, 4.5vw, 3rem)' }}
          >
            自分の身体を、
            <br />
            自分で理解し、
            <br />
            <span className="text-[#e85d26]">自分で扱える人。</span>
          </h2>
        </div>

        {/* not / but split */}
        <div className="reveal reveal-delay-2 grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[#ede9e3] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#1a1a2e]/10 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <line x1="3" y1="3" x2="13" y2="13" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" />
                <line x1="13" y1="3" x2="3" y2="13" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <p className="text-[#1a1a2e]/40 text-xs tracking-wide uppercase mb-4">ではなく</p>
            <p className="text-[#1a1a2e]/60 text-xl font-medium leading-snug">
              できることを
              <br />
              増やしてもらう人
            </p>
          </div>
          <div className="bg-[#1a1a2e] rounded-2xl p-8 relative overflow-hidden shadow-lg shadow-[#1a1a2e]/20">
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#e85d26]/20 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <polyline points="2 8 6 12 14 4" stroke="#e85d26" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-[#e85d26] text-xs tracking-wide uppercase mb-4">目指すのは</p>
            <p className="text-white text-xl font-bold leading-snug">
              自分で「できる」を
              <br />
              増やせる人
            </p>
          </div>
        </div>

        {/* self-reflection questions */}
        <div className="reveal reveal-delay-3 bg-white rounded-3xl p-10 md:p-14 border border-[#e8e3dc] shadow-sm">
          <p className="text-[#1a1a2e]/40 text-sm tracking-wide text-center mb-10">
            自分に問いかけられるようになってほしい
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {selfQuestions.map((q, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} flex items-start gap-3`}
              >
                <div className="w-6 h-6 rounded-full border-2 border-[#e85d26] flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#e85d26]" />
                </div>
                <p className="text-[#1a1a2e] text-base md:text-lg font-medium leading-snug">{q}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-10 border-t border-[#e8e3dc] text-center">
            <p className="text-[#1a1a2e]/40 text-sm tracking-wide mb-4">そこから生まれる力</p>
            <p
              className="font-bold text-[#1a1a2e] leading-snug"
              style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)' }}
            >
              答えを教えてもらうのではなく、
              <br />
              <span className="text-[#e85d26]">自分で答えを見つけられる人へ。</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
