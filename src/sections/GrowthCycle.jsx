import { useRef, useEffect, useState } from 'react'

const STEPS = [
  {
    num: '01',
    label: '自分で選ぶ',
    sub: null,
    delay: 0,
    anim: 'gc-fade',
  },
  {
    num: '02',
    label: '挑戦する',
    sub: null,
    delay: 0.12,
    anim: 'gc-forward',
  },
  {
    num: '03',
    label: '失敗する',
    sub: null,
    delay: 0.24,
    anim: 'gc-tilt',
  },
  {
    num: '04',
    label: '考える・試す',
    sub: ['身体で感じる', '自分で考える', '試してみる', '修正する'],
    delay: 0.38,
    anim: 'gc-rise',
  },
  {
    num: '05',
    label: 'できる！',
    sub: null,
    delay: 0.54,
    anim: 'gc-bounce',
    highlight: true,
  },
  {
    num: '06',
    label: '自分で再現する',
    sub: null,
    delay: 0.70,
    anim: 'gc-stable',
  },
]

export default function GrowthCycle() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 md:py-32 bg-[#1a1a2e] px-6 overflow-hidden">
      <style>{`
        @keyframes gc-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes gc-forward {
          from { opacity: 0; transform: translateX(-14px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes gc-tilt {
          from { opacity: 0; transform: rotate(4deg) translateY(8px); }
          to   { opacity: 1; transform: rotate(0deg) translateY(0); }
        }
        @keyframes gc-rise {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gc-bounce {
          0%   { opacity: 0; transform: scale(0.82) translateY(10px); }
          58%  { opacity: 1; transform: scale(1.08) translateY(-5px); }
          78%  { transform: scale(0.96) translateY(2px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes gc-stable {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gc-loop-fade {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gc-arrow-pulse {
          0%, 100% { opacity: 0.5; transform: translateX(0); }
          50%       { opacity: 1;   transform: translateX(-3px); }
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="reveal text-center mb-16">
          <p className="text-[#FF9F1C] text-xs tracking-[0.3em] uppercase mb-5">成長の循環</p>
          <h2
            className="font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}
          >
            何度も回るほど、
            <br />
            <span className="text-[#FF9F1C]">深く「できる」が育っていく。</span>
          </h2>
        </div>

        <div ref={ref}>
          {/* ── PC: horizontal flow ── */}
          <div className="hidden md:block">
            <div className="flex items-start justify-between">
              {STEPS.map((step, i) => (
                <div key={step.num} className="flex items-start">
                  {/* Step card */}
                  <div
                    className="flex flex-col items-center text-center"
                    style={{
                      width: '130px',
                      opacity: 0,
                      ...(visible && {
                        animation: `${step.anim} 0.7s cubic-bezier(0.34,1.1,0.64,1) ${step.delay + 0.15}s both`,
                      }),
                    }}
                  >
                    <span
                      className="text-[10px] font-bold tracking-[0.2em] mb-2"
                      style={{ color: step.highlight ? '#FF9F1C' : 'rgba(255,255,255,0.22)' }}
                    >
                      {step.num}
                    </span>

                    {/* Icon circle */}
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center mb-3"
                      style={
                        step.highlight
                          ? { background: '#FF9F1C', boxShadow: '0 0 24px rgba(255,159,28,0.35)' }
                          : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }
                      }
                    >
                      <span style={{ fontSize: step.highlight ? '18px' : '11px', color: step.highlight ? 'white' : 'rgba(255,255,255,0.35)', fontWeight: 700 }}>
                        {step.highlight ? '★' : step.num}
                      </span>
                    </div>

                    <p
                      className="font-bold leading-snug"
                      style={{
                        fontSize: step.highlight ? '1.05rem' : '0.9rem',
                        color: step.highlight ? '#FF9F1C' : 'white',
                      }}
                    >
                      {step.label}
                    </p>

                    {step.sub && (
                      <p className="text-[9px] leading-relaxed mt-2" style={{ color: 'rgba(255,255,255,0.28)' }}>
                        {step.sub.join('\n→ ')}
                      </p>
                    )}
                  </div>

                  {/* Arrow connector */}
                  {i < STEPS.length - 1 && (
                    <div
                      className="flex-shrink-0 self-center mt-5 mx-0.5"
                      style={{
                        opacity: 0,
                        ...(visible && {
                          animation: `gc-fade 0.4s ease ${step.delay + 0.4}s both`,
                        }),
                      }}
                    >
                      <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
                        <path
                          d="M0 5 H16 M12 1.5 L19.5 5 L12 8.5"
                          stroke="white"
                          strokeOpacity="0.18"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Loop back arc */}
            <div
              className="relative mt-1 mx-10"
              style={{
                opacity: 0,
                ...(visible && {
                  animation: 'gc-loop-fade 0.6s ease 1.05s both',
                }),
              }}
            >
              {/* U-shape border */}
              <div
                className="h-8 rounded-b-2xl"
                style={{
                  border: '1px dashed rgba(255,159,28,0.22)',
                  borderTop: 'none',
                }}
              />
              {/* Loop label centered at bottom */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 flex items-center gap-1.5 px-3 py-0.5"
                style={{ background: '#1a1a2e' }}>
                <span
                  style={{
                    color: '#FF9F1C',
                    opacity: 0.55,
                    fontSize: '11px',
                    animation: visible ? 'gc-arrow-pulse 2.2s ease-in-out 1.6s infinite' : 'none',
                  }}
                >
                  ↺
                </span>
                <span className="text-[11px] tracking-wide" style={{ color: 'rgba(255,159,28,0.45)' }}>
                  次の挑戦へ
                </span>
              </div>
            </div>
          </div>

          {/* ── Mobile: vertical flow ── */}
          <div className="md:hidden flex flex-col items-center">
            {STEPS.map((step, i) => (
              <div key={step.num} className="flex flex-col items-center w-full max-w-xs">
                {/* Step row */}
                <div
                  className="flex items-center gap-4 w-full py-2"
                  style={{
                    opacity: 0,
                    ...(visible && {
                      animation: `${step.anim} 0.65s cubic-bezier(0.34,1.1,0.64,1) ${step.delay + 0.15}s both`,
                    }),
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={
                      step.highlight
                        ? { background: '#FF9F1C', boxShadow: '0 0 20px rgba(255,159,28,0.3)' }
                        : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }
                    }
                  >
                    <span
                      style={{
                        fontSize: step.highlight ? '16px' : '10px',
                        color: step.highlight ? 'white' : 'rgba(255,255,255,0.35)',
                        fontWeight: 700,
                      }}
                    >
                      {step.highlight ? '★' : step.num}
                    </span>
                  </div>
                  <div>
                    <p
                      className="font-bold"
                      style={{
                        fontSize: step.highlight ? '1.05rem' : '1rem',
                        color: step.highlight ? '#FF9F1C' : 'white',
                      }}
                    >
                      {step.label}
                    </p>
                    {step.sub && (
                      <p className="text-[11px] leading-relaxed mt-0.5"
                        style={{ color: 'rgba(255,255,255,0.3)' }}>
                        {step.sub.join(' → ')}
                      </p>
                    )}
                  </div>
                </div>

                {/* Down connector */}
                {i < STEPS.length - 1 && (
                  <div className="py-1" style={{ color: 'rgba(255,255,255,0.15)', fontSize: '18px' }}>↓</div>
                )}
              </div>
            ))}

            {/* Mobile loop indicator */}
            <div
              className="mt-5 flex flex-col items-center"
              style={{
                opacity: 0,
                ...(visible && {
                  animation: 'gc-loop-fade 0.5s ease 1.1s both',
                }),
              }}
            >
              <div style={{ color: 'rgba(255,255,255,0.15)', fontSize: '18px' }}>↓</div>
              <div
                className="mt-2 flex items-center gap-2 px-5 py-2 rounded-full"
                style={{ border: '1px dashed rgba(255,159,28,0.3)' }}
              >
                <span
                  style={{
                    color: '#FF9F1C',
                    opacity: 0.6,
                    fontSize: '14px',
                    animation: visible ? 'gc-arrow-pulse 2.2s ease-in-out 1.6s infinite' : 'none',
                  }}
                >
                  ↺
                </span>
                <span className="text-sm font-bold" style={{ color: 'rgba(255,159,28,0.55)' }}>
                  次の挑戦へ
                </span>
              </div>
              <p className="mt-2 text-xs tracking-wide" style={{ color: 'rgba(255,255,255,0.2)' }}>
                また「自分で選ぶ」へ戻る
              </p>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="reveal reveal-delay-3 mt-20 text-center">
          <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.25)' }}>
            この循環を何度も重ねるほど
          </p>
          <p className="text-white font-bold" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)' }}>
            「できる」の質が上がり、
            <span className="text-[#FF9F1C]">自分への信頼が積み重なる。</span>
          </p>
        </div>
      </div>
    </section>
  )
}
