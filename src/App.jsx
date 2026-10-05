import { useEffect } from 'react'
import Nav from './components/Nav'
import MobileStickyCTA from './components/MobileStickyCTA'
import CursorFollower from './components/CursorFollower'
import Hero from './sections/Hero'
import Want from './sections/Want'
import ChallengeScene from './sections/ChallengeScene'
import Why from './sections/Why'
import How from './sections/How'
import TrustService from './sections/TrustService'
import TrialFaqCta from './sections/TrialFaqCta'

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        }),
      { threshold: 0.08 }
    )
    document
      .querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      .forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useReveal()

  return (
    <div className="min-h-screen bg-white">
      <CursorFollower />
      <Nav />
      <MobileStickyCTA />

      <main className="pb-16 md:pb-0">

        {/* 01 ファーストビュー */}
        <Hero />

        {/* 02 なにをやってみたい？ */}
        <Want />

        {/* 03 5ステップのスクロール体験 */}
        <ChallengeScene />

        {/* 04 技ができる。その先へ。 */}
        <Why />

        {/* 05 教えて終わり、にしない。 */}
        <How />

        {/* 06 指導者 + 安全 + 基本情報 */}
        <TrustService />

        {/* 07 体験の流れ + FAQ + 最終CTA */}
        <TrialFaqCta />

      </main>

      <footer className="bg-[#1a1a2e] text-white/40 text-sm py-10 text-center px-4 border-t border-white/5">
        <p className="text-white/20 text-xs tracking-widest uppercase mb-3">[教室名]</p>
        <p>© [教室名] All rights reserved.</p>
        <p className="mt-2 text-xs opacity-50">プロトタイプ版 — 料金・住所・講師情報は後日更新予定</p>
      </footer>
    </div>
  )
}
