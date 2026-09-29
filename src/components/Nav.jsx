import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <span
          className={`font-bold tracking-widest text-sm uppercase transition-colors duration-400 ${
            scrolled ? 'text-[#1a1a2e]' : 'text-white'
          }`}
        >
          [教室名]
        </span>
        <a
          href="#trial"
          className="text-sm font-bold bg-[#FF9F1C] text-white px-5 py-2.5 rounded-full hover:bg-[#e8900f] transition-colors duration-200 shadow-sm"
        >
          無料体験に申し込む
        </a>
      </div>
    </nav>
  )
}
