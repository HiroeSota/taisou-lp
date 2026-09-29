import { useRef, useEffect, useState } from 'react'

const SCENES = [
  {
    idx: 0,
    word: 'やってみたい。',
    sub: '最初の一歩。',
    note: '先生は答えを教えない。あなたの「やりたい」から全てが始まる。',
    bg: '#ffffff',
    textColor: '#1a1a2e',
    accent: '#FF9F1C',
    type: 'start',
  },
  {
    idx: 1,
    word: 'うまくいかない。',
    sub: '怖い。難しい。何度やっても。',
    note: '当然だ。初めてのことに、いきなり成功なんてしない。',
    bg: '#1a1a2e',
    textColor: '#ffffff',
    accent: '#FF9F1C',
    type: 'struggle',
  },
  {
    idx: 2,
    word: 'どうすれば？',
    sub: 'なぜ？何が違う？次はどうする？',
    note: '失敗は情報だ。考えることが、次の挑戦の燃料になる。',
    bg: '#fffcf5',
    textColor: '#1a1a2e',
    accent: '#FFC928',
    type: 'think',
  },
  {
    idx: 3,
    word: 'もう一回。',
    sub: '少し変えて、また挑戦する。',
    note: '「もう一回」が言える場所でいたい。ここはそういう場所だ。',
    bg: '#ffffff',
    textColor: '#1a1a2e',
    accent: '#FF9F1C',
    type: 'retry',
  },
  {
    idx: 4,
    word: 'できた！',
    sub: 'この瞬間のワクワクが、また次の挑戦を生む。',
    note: '「できた！」は終わりじゃない。次の「やってみたい」への入り口だ。',
    bg: '#FFC928',
    textColor: '#1a1a2e',
    accent: '#1a1a2e',
    type: 'celebrate',
  },
]

const CONFETTI = [
  [10, 0.00, '#FF9F1C', 10, 400, 0],
  [22, 0.09, '#1a1a2e', 8,  560, 1],
  [35, 0.16, '#ffffff', 9,  320, 0],
  [48, 0.04, '#FF9F1C', 11, 480, 1],
  [60, 0.20, '#1a1a2e', 7,  600, 0],
  [72, 0.11, '#FFC928', 12, 360, 1],
  [83, 0.02, '#FF9F1C', 8,  520, 0],
  [93, 0.13, '#1a1a2e', 9,  280, 1],
  [5,  0.21, '#FFC928', 6,  440, 0],
  [17, 0.07, '#FF9F1C', 10, 380, 1],
  [28, 0.17, '#1a1a2e', 8,  540, 0],
  [42, 0.03, '#FFC928', 11, 620, 1],
  [55, 0.14, '#FF9F1C', 7,  340, 0],
  [67, 0.19, '#1a1a2e', 10, 500, 1],
  [78, 0.06, '#FFC928', 8,  460, 0],
  [88, 0.12, '#FF9F1C', 9,  580, 1],
  [95, 0.18, '#1a1a2e', 6,  320, 0],
  [14, 0.08, '#FFC928', 12, 420, 1],
  [38, 0.15, '#FF9F1C', 8,  640, 0],
  [52, 0.01, '#1a1a2e', 10, 360, 1],
  [25, 0.10, '#FFC928', 7,  480, 0],
  [62, 0.05, '#FF9F1C', 11, 540, 1],
  [75, 0.22, '#1a1a2e', 9,  400, 0],
  [86, 0.14, '#FFC928', 8,  620, 1],
]

function Figure({ type, accent }) {
  const sw = { strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' }
  const col = type === 'struggle' ? '#ffffff' : type === 'celebrate' ? '#1a1a2e' : accent

  return (
    <svg
      width="72"
      height="110"
      viewBox="0 0 72 110"
      aria-hidden="true"
      style={{
        transition: 'transform 0.4s ease',
        transform:
          type === 'struggle'
            ? 'rotate(22deg)'
            : type === 'retry'
            ? 'rotate(-10deg)'
            : 'none',
        transformOrigin: 'center 90px',
      }}
    >
      {/* head */}
      <circle cx="36" cy="16" r="10" stroke={col} {...sw} />

      {/* body */}
      <line x1="36" y1="26" x2="36" y2="62" stroke={col} {...sw} />

      {/* arms */}
      {type === 'celebrate' ? (
        <>
          <line x1="36" y1="40" x2="14" y2="22" stroke={col} {...sw} />
          <line x1="36" y1="40" x2="58" y2="22" stroke={col} {...sw} />
        </>
      ) : type === 'think' ? (
        <>
          <line x1="36" y1="40" x2="18" y2="52" stroke={col} {...sw} />
          <line x1="18" y1="52" x2="12" y2="44" stroke={col} {...sw} />
          <line x1="36" y1="40" x2="54" y2="52" stroke={col} {...sw} />
        </>
      ) : (
        <>
          <line x1="36" y1="40" x2="16" y2="54" stroke={col} {...sw} />
          <line x1="36" y1="40" x2="56" y2="54" stroke={col} {...sw} />
        </>
      )}

      {/* legs */}
      {type === 'retry' ? (
        <>
          <line x1="36" y1="62" x2="50" y2="86" stroke={col} {...sw} />
          <line x1="36" y1="62" x2="24" y2="84" stroke={col} {...sw} />
          <line x1="24" y1="84" x2="16" y2="96" stroke={col} {...sw} />
        </>
      ) : (
        <>
          <line x1="36" y1="62" x2="24" y2="90" stroke={col} {...sw} />
          <line x1="36" y1="62" x2="48" y2="90" stroke={col} {...sw} />
        </>
      )}
    </svg>
  )
}

function SceneContent({ scene }) {
  return (
    <div
      key={scene.idx}
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        animation: 'fadeIn 0.35s ease both',
      }}
    >
      {/* scene number */}
      <p
        className="scene-anim"
        style={{
          color: scene.accent,
          fontSize: '11px',
          letterSpacing: '0.3em',
          fontWeight: 700,
          textTransform: 'uppercase',
          marginBottom: '32px',
          animation: 'wordUp 0.4s ease 0.05s both',
          opacity: 0,
        }}
      >
        {String(scene.idx + 1).padStart(2, '0')} / 05
      </p>

      {/* figure */}
      <div
        className="scene-anim"
        style={{
          marginBottom: '20px',
          animation:
            scene.type === 'think'
              ? 'wordUp 0.5s ease 0.05s both'
              : 'bounceIn 0.6s ease 0.05s both',
          opacity: 0,
        }}
      >
        <Figure type={scene.type} accent={scene.accent} />
      </div>

      {/* main word */}
      <div
        className="scene-anim"
        style={{
          textAlign: 'center',
          animation:
            scene.type === 'celebrate'
              ? 'bounceIn 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both'
              : scene.type === 'struggle'
              ? 'wordUp 0.4s ease 0.1s both, shake 0.55s ease 0.55s both'
              : 'wordUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both',
          opacity: 0,
        }}
      >
        <h2
          style={{
            color: scene.textColor,
            fontWeight: 900,
            lineHeight: 1.1,
            fontSize: 'clamp(2.6rem, 9vw, 7rem)',
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          {scene.word}
        </h2>
      </div>

      {/* thinking dots (scene 2 only) */}
      {scene.type === 'think' && (
        <div
          className="scene-anim"
          style={{
            display: 'flex',
            gap: '10px',
            marginTop: '20px',
            animation: 'fadeIn 0.4s ease 0.5s both',
            opacity: 0,
          }}
        >
          <div
            className="think-dot-1"
            style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFC928' }}
          />
          <div
            className="think-dot-2"
            style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFC928' }}
          />
          <div
            className="think-dot-3"
            style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFC928' }}
          />
        </div>
      )}

      {/* sub text */}
      <p
        className="scene-anim"
        style={{
          color: scene.textColor,
          opacity: 0,
          fontSize: 'clamp(0.85rem, 2.5vw, 1.1rem)',
          marginTop: '24px',
          textAlign: 'center',
          maxWidth: '420px',
          lineHeight: 1.6,
          animation: 'wordUp 0.5s ease 0.3s both',
        }}
      >
        {scene.sub}
      </p>

      {/* note */}
      <p
        className="scene-anim"
        style={{
          color: scene.textColor,
          opacity: 0,
          fontSize: 'clamp(0.7rem, 1.8vw, 0.85rem)',
          marginTop: '12px',
          textAlign: 'center',
          maxWidth: '380px',
          lineHeight: 1.7,
          animation: 'fadeIn 0.6s ease 0.5s both',
          fontStyle: 'italic',
        }}
      >
        {scene.note}
      </p>
    </div>
  )
}

export default function ChallengeScene() {
  const wrapperRef = useRef(null)
  const [sceneIdx, setSceneIdx] = useState(0)
  const prevSceneRef = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const totalScrollable = el.offsetHeight - window.innerHeight
      const scrolled = Math.max(0, -rect.top)
      const progress = Math.min(1, scrolled / totalScrollable)
      const raw = progress * SCENES.length
      const idx = Math.min(SCENES.length - 1, Math.floor(raw))
      if (idx !== prevSceneRef.current) {
        prevSceneRef.current = idx
        setSceneIdx(idx)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scene = SCENES[sceneIdx]

  return (
    <section style={{ position: 'relative', background: scene.bg }}>
      {/* section label - scrolls away before sticky begins */}
      <div
        style={{
          padding: '80px 24px 40px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
        className="reveal"
      >
        <p
          style={{
            color: '#FF9F1C',
            fontSize: '11px',
            letterSpacing: '0.35em',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          挑戦のストーリー
        </p>
        <h2
          className="font-bold"
          style={{
            color: '#1a1a2e',
            fontSize: 'clamp(1.4rem, 4vw, 2.4rem)',
            lineHeight: 1.3,
          }}
        >
          スクロールしてみてください。
        </h2>
        <p style={{ color: '#1a1a2e', opacity: 0.4, fontSize: '0.9rem', marginTop: '8px' }}>
          ここで起きることが、この教室のすべてです。
        </p>
        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              width: 1,
              height: 40,
              background: 'linear-gradient(to bottom, #FF9F1C, transparent)',
              animation: 'floatY 1.8s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      {/* scroll driver — sticky section lives here */}
      <div
        ref={wrapperRef}
        style={{ height: '550vh', position: 'relative' }}
      >
        {/* sticky viewport */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            overflow: 'hidden',
            backgroundColor: scene.bg,
            transition: 'background-color 0.55s ease',
          }}
        >
          {/* grid overlay for dark scene */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: scene.type === 'struggle' ? 0.03 : 0,
              transition: 'opacity 0.5s ease',
              backgroundImage:
                'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '56px 56px',
              pointerEvents: 'none',
            }}
          />

          {/* yellow glow for celebrate */}
          {scene.type === 'celebrate' && (
            <div
              key="glow"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.5) 0%, transparent 65%)',
                animation: 'flashBright 0.5s ease',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />
          )}

          {/* confetti */}
          {scene.type === 'celebrate' &&
            CONFETTI.map(([left, delay, color, size, spin, isSquare], i) => (
              <div
                key={`confetti-${i}`}
                className="confetti-item"
                style={{
                  position: 'absolute',
                  left: `${left}%`,
                  top: '-20px',
                  width: size,
                  height: size,
                  background: color,
                  borderRadius: isSquare ? '2px' : '50%',
                  '--spin': `${spin}deg`,
                  animation: `confettiFall 2.4s ease ${delay}s both, confettiSway ${1.6 + i * 0.04}s ease-in-out ${delay}s infinite`,
                  pointerEvents: 'none',
                  zIndex: 20,
                }}
              />
            ))}

          {/* scene content (key forces remount → re-triggers animations) */}
          <SceneContent key={sceneIdx} scene={scene} />

          {/* progress dots */}
          <div
            style={{
              position: 'absolute',
              right: 20,
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              zIndex: 30,
            }}
            aria-hidden="true"
          >
            {SCENES.map((s, i) => (
              <div
                key={i}
                style={{
                  width: sceneIdx === i ? 10 : 6,
                  height: sceneIdx === i ? 10 : 6,
                  borderRadius: '50%',
                  background:
                    sceneIdx === i
                      ? scene.type === 'struggle'
                        ? '#FF9F1C'
                        : '#FF9F1C'
                      : scene.type === 'struggle'
                      ? 'rgba(255,255,255,0.2)'
                      : 'rgba(26,26,46,0.15)',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* section tail — bridge to next section */}
      <div
        style={{
          padding: '64px 24px',
          textAlign: 'center',
          background: '#1a1a2e',
        }}
        className="reveal"
      >
        <p
          style={{
            color: '#FF9F1C',
            fontSize: '11px',
            letterSpacing: '0.35em',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          この循環が、成長の正体です
        </p>
        <p
          style={{
            color: '#ffffff',
            opacity: 0.6,
            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
            maxWidth: '480px',
            margin: '0 auto 32px',
            lineHeight: 1.75,
          }}
        >
          挑戦 → 失敗 → 考える → もう一回 → できた！
          <br />
          この教室では、この繰り返しを一緒に楽しみます。
        </p>
        <a
          href="#trial"
          className="btn-cta"
          style={{
            background: '#FF9F1C',
            color: '#fff',
            fontWeight: 700,
            padding: '16px 36px',
            borderRadius: '100px',
            fontSize: '1rem',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 8px 28px rgba(255,159,28,0.3)',
          }}
        >
          あなたの「やってみたい」を聞かせて
          <svg className="arrow-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  )
}
