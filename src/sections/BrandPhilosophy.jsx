import { useRef, useEffect, useState } from 'react'

const LOOP_STEPS = [
  { label: '自分で選ぶ' },
  { label: '挑戦する' },
  { label: '考える・試す' },
  { label: 'できる！', highlight: true },
  { label: '自分で再現' },
]

export default function BrandPhilosophy() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-28 md:py-44 bg-[#fffcf5] px-6 overflow-hidden">
      <style>{`
        @keyframes bp-fade { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:none } }
        @keyframes bp-line { from { transform:scaleX(0) } to { transform:scaleX(1) } }
        @keyframes bp-pulse { 0%,100%{opacity:.5;transform:translateX(0)} 50%{opacity:1;transform:translateX(-3px)} }
      `}</style>

      <div className="max-w-3xl mx-auto text-center">

        {/* ── Hero copy ── */}
        <div className="reveal mb-16">
          <p className="text-[#FF9F1C] text-[11px] tracking-[0.35em] uppercase mb-10 font-bold">
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

        {/* ── Philosophy text ── */}
        <div className="reveal mb-6">
          <p
            className="text-[#1a1a2e]/55 leading-[2]"
            style={{ fontSize: 'clamp(0.88rem, 2vw, 1rem)' }}
          >
            「体操」を、私たちは
          </p>
          <p
            className="font-bold text-[#1a1a2e] my-2"
            style={{ fontSize: 'clamp(1.05rem, 2.8vw, 1.4rem)' }}
          >
            "自分の体を操れるようになること"
          </p>
          <p
            className="text-[#1a1a2e]/55 leading-[2]"
            style={{ fontSize: 'clamp(0.88rem, 2vw, 1rem)' }}
          >
            だと考えています。
          </p>
        </div>

        {/* divider */}
        <div
          className="reveal mx-auto mb-10"
          style={{
            height: 1,
            maxWidth: 120,
            background: 'linear-gradient(to right, transparent, rgba(255,159,28,0.4), transparent)',
            transformOrigin: 'left',
          }}
        />

        <div className="reveal mb-24">
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

        {/* ── Simplified loop ── */}
        <div ref={ref}>
          {/* PC: horizontal */}
          <div className="hidden md:flex items-center justify-center gap-0">
            {LOOP_STEPS.map((s, i) => (
              <div key={i} className="flex items-center">
                {/* Step */}
                <div
                  style={{
                    opacity: 0,
                    ...(visible && {
                      animation: `bp-fade 0.5s ease ${i * 0.1 + 0.1}s both`,
                    }),
                    textAlign: 'center',
                    width: 110,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      margin: '0 auto 8px',
                      background: s.highlight ? '#FF9F1C' : 'transparent',
                      border: s.highlight ? 'none' : '1px solid rgba(26,26,46,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: s.highlight ? '0 4px 16px rgba(255,159,28,0.3)' : 'none',
                    }}
                  >
                    {s.highlight && (
                      <span style={{ color: '#fff', fontSize: 14, fontWeight: 700 }}>★</span>
                    )}
                  </div>
                  <p
                    style={{
                      fontSize: s.highlight ? '0.82rem' : '0.75rem',
                      fontWeight: s.highlight ? 700 : 500,
                      color: s.highlight ? '#FF9F1C' : 'rgba(26,26,46,0.55)',
                      lineHeight: 1.3,
                    }}
                  >
                    {s.label}
                  </p>
                </div>

                {/* Arrow between steps */}
                {i < LOOP_STEPS.length - 1 && (
                  <div
                    style={{
                      opacity: 0,
                      ...(visible && {
                        animation: `bp-fade 0.3s ease ${i * 0.1 + 0.25}s both`,
                      }),
                      color: 'rgba(26,26,46,0.18)',
                      fontSize: 12,
                      margin: '0 4px',
                      marginBottom: 20,
                    }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}

            {/* Loop back arrow */}
            <div
              style={{
                opacity: 0,
                ...(visible && {
                  animation: `bp-fade 0.4s ease 0.65s both`,
                }),
                marginLeft: 8,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  color: 'rgba(255,159,28,0.5)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                <span
                  style={{
                    animation: visible ? 'bp-pulse 2s ease-in-out 1s infinite' : 'none',
                  }}
                >
                  ↺
                </span>
                <span>次の挑戦へ</span>
              </div>
            </div>
          </div>

          {/* Mobile: compact single line */}
          <div
            className="md:hidden flex items-center justify-center flex-wrap gap-x-3 gap-y-2"
            style={{
              opacity: 0,
              ...(visible && { animation: 'bp-fade 0.5s ease 0.2s both' }),
            }}
          >
            {LOOP_STEPS.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: s.highlight ? 700 : 500,
                    color: s.highlight ? '#FF9F1C' : 'rgba(26,26,46,0.5)',
                  }}
                >
                  {s.label}
                </span>
                {i < LOOP_STEPS.length - 1 && (
                  <span style={{ color: 'rgba(26,26,46,0.2)', fontSize: 10 }}>→</span>
                )}
              </div>
            ))}
            <span
              style={{
                fontSize: '0.75rem',
                color: 'rgba(255,159,28,0.55)',
                fontWeight: 600,
                animation: visible ? 'bp-pulse 2s ease-in-out 1s infinite' : 'none',
              }}
            >
              ↺ 次の挑戦へ
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
