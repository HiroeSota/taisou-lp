import { useRef, useEffect, useState } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// Scene data
//
// To add real photos:
//   1. Place images in /public/images/challenge/
//   2. Set photoSrc: '/images/challenge/step01.webp' (etc.)
// When photoSrc is null → falls back to photoPlaceholderBg gradient
// ─────────────────────────────────────────────────────────────────────────────
const SCENES = [
  {
    idx: 0,
    word: 'やってみたい。',
    sub: '最初の一歩。',
    note: '先生は、すぐに答えを教えない。あなたの「やりたい」から全てが始まる。',
    bg: '#f8f5f0',
    textColor: '#1a1a2e',
    accent: '#FF9F1C',
    type: 'start',
    photoSrc: null,                       // ← '/images/challenge/step01.webp'
    photoAlt: '跳び箱を前に、興味津々に見つめる子どもの写真',
    photoPosition: 'center 40%',
    photoFilter: 'brightness(1.0) saturate(0.9)',
    photoPlaceholderBg: 'linear-gradient(170deg, #d4c8b8 0%, #b8aa98 60%, #a09080 100%)',
    readabilityOverlay: 'rgba(248,245,240,0.70)',
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
    photoSrc: null,                       // ← '/images/challenge/step02.webp'
    photoAlt: '試行錯誤しながら挑戦している写真',
    photoPosition: 'center 50%',
    photoFilter: 'brightness(0.65) saturate(0.8)',
    photoPlaceholderBg: 'linear-gradient(170deg, #28283e 0%, #1a1a30 60%, #101020 100%)',
    readabilityOverlay: 'rgba(26,26,46,0.72)',
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
    photoSrc: null,                       // ← '/images/challenge/step03.webp'
    photoAlt: '先生と一緒に動きを確認している写真',
    photoPosition: 'center 50%',
    photoFilter: 'brightness(0.92) saturate(0.85)',
    photoPlaceholderBg: 'linear-gradient(170deg, #e0d4bc 0%, #c8bc9e 60%, #b4a888 100%)',
    readabilityOverlay: 'rgba(255,252,245,0.70)',
  },
  {
    idx: 3,
    word: 'もう一回。',
    sub: '少し変えて、また挑戦する。',
    note: '「もう一回」が言える場所でありたい。',
    bg: '#ffffff',
    textColor: '#1a1a2e',
    accent: '#FF9F1C',
    type: 'retry',
    photoSrc: null,                       // ← '/images/challenge/step04.webp'
    photoAlt: '再挑戦している前向きな様子の写真',
    photoPosition: 'center 45%',
    photoFilter: 'brightness(1.0) saturate(1.0)',
    photoPlaceholderBg: 'linear-gradient(170deg, #d8d0c4 0%, #c0b4a4 60%, #ac9e8c 100%)',
    readabilityOverlay: 'rgba(255,255,255,0.70)',
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
    photoSrc: null,                       // ← '/images/challenge/step05.webp'
    photoAlt: '技が成功して全力で喜んでいる写真',
    photoPosition: 'center 40%',
    photoFilter: 'brightness(1.05) saturate(1.1)',
    photoPlaceholderBg: 'linear-gradient(170deg, #f0c800 0%, #ffe040 60%, #ffe870 100%)',
    readabilityOverlay: 'rgba(255,201,40,0.65)',
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

// ─── Scroll state machine ─────────────────────────────────────────────────────
// States:
//   'outside'  — not in sticky zone (or never entered)
//   'entering' — just entered sticky zone; this gesture MUST NOT advance a step
//   'ready'    — gesture ended; waiting for the next deliberate swipe
//   'locked'   — step just changed; waiting for this gesture to fully stop
//
// Transitions:
//   outside  → entering : first wheel event where inSticky is true
//   entering → ready    : GESTURE_END_MS passes with no wheel events
//   ready    → locked   : threshold met → step changes
//   locked   → ready    : GESTURE_END_MS passes with no wheel events
//   any      → outside  : inSticky becomes false
//
// Boundary exit (no preventDefault):
//   STEP01 + scroll up  → page scrolls up → sticky releases naturally
//   STEP05 + scroll down (only in 'ready') → page scrolls down → sticky releases
//   (in 'locked' at STEP05: still preventing, must wait for gesture to fully end)
// ─────────────────────────────────────────────────────────────────────────────
const GESTURE_END_MS = 220  // ms of no wheel events = gesture ended
const STEP_THRESHOLD = 30   // min |accumulated deltaY| to trigger a step change
const SCENES_COUNT = SCENES.length

// ─────────────────────────────────────────────────────────────────────────────
// SceneContent
// Layout: step number at ~28% from top, main word below center
// Background: photo (or gradient) + readability overlay
// ─────────────────────────────────────────────────────────────────────────────
function SceneContent({ scene }) {
  return (
    <div style={{ position: 'absolute', inset: 0, animation: 'fadeIn 0.3s ease both' }}>

      {/* ── Background layer ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {scene.photoSrc ? (
          <img
            src={scene.photoSrc}
            alt={scene.photoAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: scene.photoPosition || 'center',
              filter: scene.photoFilter || 'none',
              display: 'block',
            }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', background: scene.photoPlaceholderBg }} />
        )}
        {/* Semi-transparent overlay — keeps text readable, photo visible behind */}
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, background: scene.readabilityOverlay }}
        />
      </div>

      {/* ── Content layer ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 24px',
        }}
      >
        {/* Top spacer — positions step number at ~28% from top */}
        <div style={{ height: '28vh', flexShrink: 0 }} />

        {/* Step number */}
        <p
          style={{
            color: scene.accent,
            fontSize: '11px',
            letterSpacing: '0.3em',
            fontWeight: 700,
            textTransform: 'uppercase',
            animation: 'wordUp 0.4s ease 0.05s both',
            opacity: 0,
            margin: 0,
          }}
        >
          {String(scene.idx + 1).padStart(2, '0')} / 05
        </p>

        {/* Middle spacer */}
        <div style={{ height: '14vh', flexShrink: 0 }} />

        {/* Main word */}
        <div
          style={{
            animation:
              scene.type === 'celebrate'
                ? 'bounceIn 0.65s cubic-bezier(0.34,1.56,0.64,1) 0.1s both'
                : scene.type === 'struggle'
                ? 'wordUp 0.4s ease 0.1s both, shake 0.55s ease 0.55s both'
                : 'wordUp 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.1s both',
            opacity: 0,
            marginBottom: '16px',
          }}
        >
          <h2
            style={{
              color: scene.textColor,
              fontWeight: 900,
              lineHeight: 1.05,
              fontSize: 'clamp(2.6rem, 9vw, 7rem)',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            {scene.word}
          </h2>
        </div>

        {/* Thinking dots — scene 03 only */}
        {scene.type === 'think' && (
          <div
            style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '12px',
              animation: 'fadeIn 0.4s ease 0.5s both',
              opacity: 0,
            }}
          >
            <div className="think-dot-1" style={{ width: 9, height: 9, borderRadius: '50%', background: '#FFC928' }} />
            <div className="think-dot-2" style={{ width: 9, height: 9, borderRadius: '50%', background: '#FFC928' }} />
            <div className="think-dot-3" style={{ width: 9, height: 9, borderRadius: '50%', background: '#FFC928' }} />
          </div>
        )}

        {/* Sub text */}
        <p
          style={{
            color: scene.textColor,
            opacity: 0,
            fontSize: 'clamp(0.88rem, 2.5vw, 1.1rem)',
            maxWidth: '420px',
            lineHeight: 1.6,
            animation: 'wordUp 0.5s ease 0.3s both',
            marginBottom: '10px',
          }}
        >
          {scene.sub}
        </p>

        {/* Note */}
        <p
          style={{
            color: scene.textColor,
            opacity: 0,
            fontSize: 'clamp(0.72rem, 1.8vw, 0.88rem)',
            maxWidth: '360px',
            lineHeight: 1.7,
            animation: 'fadeIn 0.6s ease 0.5s both',
            fontStyle: 'italic',
          }}
        >
          {scene.note}
        </p>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────
export default function ChallengeScene() {
  const wrapperRef = useRef(null)
  const [sceneIdx, setSceneIdx] = useState(0)

  // State machine refs (stable across renders — safe in event handlers)
  const sceneIdxRef   = useRef(0)        // mirrors sceneIdx state
  const phaseRef      = useRef('outside') // scroll phase: outside|entering|ready|locked
  const accumRef      = useRef(0)         // accumulated wheel deltaY within current gesture
  const prevSignRef   = useRef(0)         // sign of prev deltaY: -1 | 0 | 1
  const prevStickyRef = useRef(false)     // was in sticky zone on previous wheel event
  const gestureTimerRef = useRef(null)    // fires after GESTURE_END_MS of wheel silence

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    const applyScene = (idx) => {
      sceneIdxRef.current = idx
      setSceneIdx(idx)
    }

    // Called when GESTURE_END_MS elapses with no wheel events
    const onGestureEnd = () => {
      if (phaseRef.current === 'entering' || phaseRef.current === 'locked') {
        phaseRef.current = 'ready'
      }
      accumRef.current = 0
      prevSignRef.current = 0
    }

    // Reset the gesture-end countdown (called on every wheel event inside sticky zone)
    const scheduleGestureEnd = () => {
      clearTimeout(gestureTimerRef.current)
      gestureTimerRef.current = setTimeout(onGestureEnd, GESTURE_END_MS)
    }

    // ── onScroll ──────────────────────────────────────────────────────────────
    // Primary control for mobile (no wheel events on touch).
    // On desktop, only updates when wheel control is not active (phase = 'outside').
    // Also manages body class for header dimming.
    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const inSticky = rect.top <= 0 && rect.bottom >= window.innerHeight

      if (inSticky) {
        document.body.classList.add('challenge-scene-active')
      } else {
        document.body.classList.remove('challenge-scene-active')
      }

      if (phaseRef.current !== 'outside') return

      const totalScrollable = el.offsetHeight - window.innerHeight
      const scrolled = Math.max(0, -rect.top)
      const progress = Math.min(1, scrolled / totalScrollable)
      const idx = Math.min(SCENES_COUNT - 1, Math.floor(progress * SCENES_COUNT))
      if (idx !== sceneIdxRef.current) applyScene(idx)
    }

    // ── onWheel (state machine) ───────────────────────────────────────────────
    const onWheel = (e) => {
      const rect = el.getBoundingClientRect()
      const inSticky = rect.top <= 0 && rect.bottom >= window.innerHeight

      const wasSticky = prevStickyRef.current
      prevStickyRef.current = inSticky

      // ── Detect sticky zone entry ──────────────────────────────────────────
      if (!wasSticky && inSticky) {
        const totalScrollable = el.offsetHeight - window.innerHeight
        const wrapAbsTop = rect.top + window.scrollY
        // deltaY < 0 = scrolling UP = entering from below the section
        const fromBelow = e.deltaY < 0

        if (fromBelow) {
          // Re-entering from below (after exiting at STEP05 bottom).
          // Snap to near-exit position so upward navigation works immediately.
          window.scrollTo({ top: wrapAbsTop + totalScrollable - 5, behavior: 'instant' })
          applyScene(SCENES_COUNT - 1)
        } else {
          // Entering from above — snap to STEP01 position.
          window.scrollTo({ top: wrapAbsTop + 2, behavior: 'instant' })
          applyScene(0)
        }

        phaseRef.current = 'entering'
        accumRef.current = 0
        prevSignRef.current = 0
        scheduleGestureEnd()
      }

      // ── Outside sticky zone: reset state and yield control ────────────────
      if (!inSticky) {
        clearTimeout(gestureTimerRef.current)
        phaseRef.current = 'outside'
        accumRef.current = 0
        prevSignRef.current = 0
        return
      }

      // ── Inside sticky zone ────────────────────────────────────────────────
      const phase = phaseRef.current
      const step  = sceneIdxRef.current
      const sign  = e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0

      // ── Boundary: release control so the page can scroll out ─────────────
      // STEP01 + up → let page scroll up (sticky releases naturally)
      if (step === 0 && sign < 0) {
        accumRef.current = 0
        prevSignRef.current = 0
        return  // no preventDefault → page scrolls
      }
      // STEP05 + down, only when 'ready' → force-jump past sticky zone end
      // (without this, user needs to scroll ~90vh to exit — feels stuck)
      if (step === SCENES_COUNT - 1 && sign > 0 && phase === 'ready') {
        e.preventDefault()
        const totalScrollable = el.offsetHeight - window.innerHeight
        const wrapAbsTop = rect.top + window.scrollY
        window.scrollTo({ top: wrapAbsTop + totalScrollable + 10, behavior: 'smooth' })
        phaseRef.current = 'outside'
        accumRef.current = 0
        prevSignRef.current = 0
        return
      }

      // ── Claim this wheel event: prevent page from scrolling ───────────────
      e.preventDefault()

      // ── Direction change: reset accumulator ──────────────────────────────
      if (sign !== 0 && prevSignRef.current !== 0 && sign !== prevSignRef.current) {
        accumRef.current = 0
      }
      if (sign !== 0) prevSignRef.current = sign

      // ── Keep gesture timer alive ──────────────────────────────────────────
      scheduleGestureEnd()

      // ── entering / locked: absorb events, no step change ─────────────────
      if (phase === 'entering' || phase === 'locked') return

      // ── ready: accumulate and check for step change ───────────────────────
      if (phase !== 'ready') return

      accumRef.current += e.deltaY
      if (Math.abs(accumRef.current) < STEP_THRESHOLD) return

      const stepDir  = accumRef.current > 0 ? 1 : -1
      const nextStep = Math.max(0, Math.min(SCENES_COUNT - 1, step + stepDir))

      if (nextStep === step) {
        // Already at boundary in this direction (e.g. STEP05 going down while locked).
        // Keep preventing scroll; gesture must end before the boundary exit above fires.
        return
      }

      // ── Advance step ──────────────────────────────────────────────────────
      accumRef.current = 0
      prevSignRef.current = 0
      applyScene(nextStep)
      phaseRef.current = 'locked'

      // Sync scroll position to this step's canonical position within the 550vh zone.
      // Ensures that after step change, the next gesture starts from the right offset.
      const totalScrollable = el.offsetHeight - window.innerHeight
      const wrapAbsTop = rect.top + window.scrollY
      const targetY = wrapAbsTop + nextStep * (totalScrollable / SCENES_COUNT) + 2
      window.scrollTo({ top: targetY, behavior: 'instant' })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('wheel', onWheel, { passive: false })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('wheel', onWheel)
      clearTimeout(gestureTimerRef.current)
      document.body.classList.remove('challenge-scene-active')
    }
  }, [])

  const scene = SCENES[sceneIdx]

  return (
    <section style={{ position: 'relative', background: scene.bg }}>
      {/* Section header */}
      <div
        style={{ padding: '80px 24px 40px', textAlign: 'center', position: 'relative', zIndex: 1 }}
        className="reveal"
      >
        <p style={{ color: '#FF9F1C', fontSize: '11px', letterSpacing: '0.35em', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px' }}>
          挑戦のストーリー
        </p>
        <h2 className="font-bold" style={{ color: '#1a1a2e', fontSize: 'clamp(1.4rem, 4vw, 2.4rem)', lineHeight: 1.3 }}>
          スクロールしてみてください。
        </h2>
        <p style={{ color: '#1a1a2e', opacity: 0.4, fontSize: '0.9rem', marginTop: '8px' }}>
          ここで起きることが、この教室のすべてです。
        </p>
        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #FF9F1C, transparent)', animation: 'floatY 1.8s ease-in-out infinite' }} />
        </div>
      </div>

      {/* 550vh scroll driver */}
      <div ref={wrapperRef} style={{ height: '550vh', position: 'relative' }}>
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            overflow: 'hidden',
            backgroundColor: scene.bg,
            transition: 'background-color 0.45s ease',
          }}
        >
          {/* Grid texture for dark scene */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: scene.type === 'struggle' ? 0.03 : 0,
              transition: 'opacity 0.4s ease',
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '56px 56px',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          {/* Celebrate: radial flash */}
          {scene.type === 'celebrate' && (
            <div
              key="glow"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, transparent 60%)',
                animation: 'flashBright 0.5s ease',
                pointerEvents: 'none',
                zIndex: 10,
              }}
            />
          )}

          {/* Confetti */}
          {scene.type === 'celebrate' &&
            CONFETTI.map(([left, delay, color, size, spin, isSquare], i) => (
              <div
                key={`confetti-${i}`}
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

          {/* Scene content — key remounts to re-trigger enter animations */}
          <SceneContent key={sceneIdx} scene={scene} />

          {/* Progress dots */}
          <div
            style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 10, zIndex: 30 }}
            aria-hidden="true"
          >
            {SCENES.map((s, i) => (
              <div
                key={i}
                style={{
                  width: sceneIdx === i ? 10 : 6,
                  height: sceneIdx === i ? 10 : 6,
                  borderRadius: '50%',
                  background: sceneIdx === i
                    ? '#FF9F1C'
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

      {/* Tail */}
      <div style={{ padding: '52px 24px 60px', textAlign: 'center', background: '#1a1a2e' }} className="reveal">
        <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'clamp(1.05rem, 3vw, 1.3rem)', lineHeight: 1.75, maxWidth: '380px', margin: '0 auto 20px', fontWeight: 600 }}>
          「できた！」は終わりじゃない。
          <br />
          <span style={{ color: '#FF9F1C' }}>次の「やってみたい」への、入口だ。</span>
        </p>
        <div style={{ width: 1, height: 28, background: 'linear-gradient(to bottom, rgba(255,159,28,0.4), transparent)', margin: '0 auto' }} />
      </div>
    </section>
  )
}
