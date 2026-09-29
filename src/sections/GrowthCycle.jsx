import { useRef, useEffect, useState } from 'react'

const steps = [
  { id: 0, label: '自分で選ぶ',   angle: 0,   color: '#FF9F1C' },
  { id: 1, label: '挑戦する',     angle: 40,  color: '#f09010' },
  { id: 2, label: '失敗する',     angle: 80,  color: '#d07a00' },
  { id: 3, label: '身体で感じる', angle: 120, color: '#b06000' },
  { id: 4, label: '自分で考える', angle: 160, color: '#1a1a2e' },
  { id: 5, label: '試してみる',   angle: 200, color: '#1a2a4e' },
  { id: 6, label: '修正する',     angle: 240, color: '#1a3a6e' },
  { id: 7, label: 'できる！',     angle: 280, color: '#FFC928' },
  { id: 8, label: '自分で再現',   angle: 320, color: '#e0b010' },
]

function polarToXY(angleDeg, r, cx, cy) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

export default function GrowthCycle() {
  const [active, setActive] = useState(null)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.25 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const CX = 200, CY = 200, R = 130, size = 400

  return (
    <section className="py-24 md:py-32 bg-[#1a1a2e] px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-12">
          <p className="text-[#FF9F1C] text-xs tracking-[0.3em] uppercase mb-5">成長の循環</p>
          <h2
            className="font-bold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}
          >
            何度も回るほど、
            <br />
            <span className="text-[#FF9F1C]">深く「できる」が育っていく。</span>
          </h2>
          <p className="text-white/35 text-base max-w-sm mx-auto">
            各ステップをタップ・ホバーして確認できます
          </p>
        </div>

        <div ref={ref} className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* SVG circle */}
          <div className="relative shrink-0 mx-auto" style={{ width: size, height: size, maxWidth: '90vw' }}>
            <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%" style={{ overflow: 'visible' }}>
              <circle cx={CX} cy={CY} r={R} fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="1" />

              {steps.map((step, i) => {
                const next = steps[(i + 1) % steps.length]
                const from = polarToXY(step.angle, R, CX, CY)
                const to   = polarToXY(next.angle, R, CX, CY)
                const mid  = polarToXY((step.angle + next.angle) / 2, R * 1.08, CX, CY)
                return (
                  <path key={`arc-${i}`}
                    d={`M ${from.x} ${from.y} Q ${mid.x} ${mid.y} ${to.x} ${to.y}`}
                    fill="none" stroke="white" strokeOpacity="0.10" strokeWidth="1.5" />
                )
              })}

              <defs>
                <marker id="arrowOrange" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#FF9F1C" opacity="0.7" />
                </marker>
              </defs>
              <path d="M 200 72 L 200 52" fill="none" stroke="#FF9F1C" strokeOpacity="0.7" strokeWidth="2"
                markerEnd="url(#arrowOrange)" />

              <text x={CX} y={CY - 8}  textAnchor="middle" fill="white" fontSize="11" opacity="0.3" fontFamily="sans-serif">「次は、</text>
              <text x={CX} y={CY + 8}  textAnchor="middle" fill="white" fontSize="11" opacity="0.3" fontFamily="sans-serif">何ができる</text>
              <text x={CX} y={CY + 24} textAnchor="middle" fill="white" fontSize="11" opacity="0.3" fontFamily="sans-serif">ようになりたい？」</text>

              {steps.map((step, i) => {
                const { x, y } = polarToXY(step.angle, R, CX, CY)
                const isActive  = active === i
                const labelPos  = polarToXY(step.angle, R + 38, CX, CY)
                const labelAnchor = x < CX - 8 ? 'end' : x > CX + 8 ? 'start' : 'middle'

                return (
                  <g key={step.id}
                    style={{ cursor: 'pointer', opacity: visible ? 1 : 0, transition: `opacity 0.4s ease ${i * 0.08}s` }}
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                    onClick={() => setActive(isActive ? null : i)}
                  >
                    <circle cx={x} cy={y}
                      r={isActive ? 14 : 10}
                      fill={isActive ? step.color : '#1a1a2e'}
                      stroke={step.color}
                      strokeWidth={isActive ? 0 : 2}
                      style={{ transition: 'r 0.2s ease, fill 0.2s ease' }}
                    />
                    {step.id === 7 && (
                      <circle cx={x} cy={y} r={17} fill="none" stroke="#FFC928" strokeWidth="1" strokeOpacity="0.4">
                        <animate attributeName="r" values="15;22;15" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
                      </circle>
                    )}
                    <text x={labelPos.x} y={labelPos.y + 4}
                      textAnchor={labelAnchor}
                      fill={isActive ? '#FF9F1C' : 'white'} fillOpacity={isActive ? 1 : 0.55}
                      fontSize="11" fontWeight={isActive ? 'bold' : 'normal'} fontFamily="sans-serif"
                      style={{ transition: 'fill 0.2s ease' }}
                    >
                      {step.label}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>

          {/* step list */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-col gap-3.5">
              {steps.map((step, i) => (
                <div key={i}
                  className={`flex items-center gap-3 cursor-pointer transition-opacity duration-200 ${active !== null && active !== i ? 'opacity-25' : 'opacity-100'}`}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                >
                  <div className="w-2 h-2 rounded-full shrink-0 transition-transform duration-200"
                    style={{ backgroundColor: step.color, transform: active === i ? 'scale(1.6)' : 'scale(1)' }} />
                  <p className={`text-sm font-medium transition-colors duration-200 ${active === i ? 'text-[#FF9F1C]' : 'text-white/55'}`}>
                    {step.label}
                  </p>
                </div>
              ))}
              <div className="flex items-center gap-3 mt-2">
                <div className="w-2 h-2 rounded-full bg-[#FF9F1C] shrink-0" />
                <p className="text-sm font-bold text-[#FF9F1C]">次の挑戦へ →</p>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-3 mt-16 text-center">
          <p className="text-white/25 text-sm mb-3">この循環を何度も重ねるほど</p>
          <p className="text-white font-bold" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)' }}>
            「できる」の質が上がり、
            <span className="text-[#FF9F1C]">自分への信頼が積み重なる。</span>
          </p>
        </div>
      </div>
    </section>
  )
}
