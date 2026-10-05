export default function Why() {
  return (
    <section className="py-28 md:py-44 bg-[#fffcf5] px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">

        <div className="reveal mb-14">
          <p className="text-[#FF9F1C] text-[11px] tracking-[0.35em] uppercase mb-8 font-bold">
            この教室の考え方
          </p>
          <h2
            className="font-black text-[#1a1a2e] leading-none"
            style={{ fontSize: 'clamp(2.6rem, 8vw, 6rem)', letterSpacing: '-0.03em' }}
          >
            技ができる。
            <br />
            <span style={{ color: '#FF9F1C' }}>その先へ。</span>
          </h2>
        </div>

        <div className="reveal mb-6">
          <p className="text-[#1a1a2e]/55 leading-[2]" style={{ fontSize: 'clamp(0.88rem, 2vw, 1rem)' }}>
            「体操」を、私たちは
          </p>
          <p className="font-bold text-[#1a1a2e] my-2" style={{ fontSize: 'clamp(1.05rem, 2.8vw, 1.4rem)' }}>
            "自分の体を操れるようになること"
          </p>
          <p className="text-[#1a1a2e]/55 leading-[2]" style={{ fontSize: 'clamp(0.88rem, 2vw, 1rem)' }}>
            だと考えています。
          </p>
        </div>

        <div
          className="reveal mx-auto mb-10"
          style={{
            height: 1,
            maxWidth: 120,
            background: 'linear-gradient(to right, transparent, rgba(255,159,28,0.4), transparent)',
          }}
        />

        <div className="reveal">
          <p
            className="font-semibold text-[#1a1a2e] leading-[1.85]"
            style={{ fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)' }}
          >
            目標とする技への挑戦を通して、
            <br />
            自分の身体を、
            <span className="text-[#FF9F1C] font-bold"> 自分で使いこなせる人へ。</span>
          </p>
        </div>

      </div>
    </section>
  )
}
