'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, ExternalLink } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { personal } from '@/data/personal'
import { marqueeItems } from '@/data/skills'
import { LiveBadge } from '@/components/ui/Badge'

// ─── Motion config ────────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
})

const accentClass = (a: string) =>
  a === 'violet' ? 'text-[#a78bfa]' : 'text-[#818cf8]'

// ─── Scramble hook ────────────────────────────────────────────────────────────
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$_<>/\\'

function useScramble(text: string, trigger: boolean, duration = 1400) {
  const [display, setDisplay] = useState(text)

  useEffect(() => {
    if (!trigger) return
    const start = Date.now()

    const id = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const revealedUpTo = Math.floor(progress * text.length)

      setDisplay(
        text
          .split('')
          .map((ch, i) => {
            if (ch === ' ' || ch === '\n') return ch
            if (i < revealedUpTo) return ch
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
          })
          .join('')
      )
      if (progress >= 1) clearInterval(id)
    }, 35)

    return () => clearInterval(id)
  }, [trigger, text, duration])

  return display
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export function Hero() {
  const { t } = useLang()

  // Cursor spotlight
  const sectionRef = useRef<HTMLElement>(null)
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })
  const [hasHovered, setHasHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    if (!hasHovered) setHasHovered(true)
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  // Scramble on mount — slight delay so fade-in starts first
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 350)
    return () => clearTimeout(id)
  }, [])

  const scrambledLast = useScramble(personal.lastName.toUpperCase(), mounted, 1600)

  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const mx = `${mouse.x * 100}%`
  const my = `${mouse.y * 100}%`

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative pt-20 pb-0 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* ── Cursor spotlight glow ─────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: hasHovered ? 1 : 0,
          transition: 'opacity 0.5s ease',
          background: `radial-gradient(circle 800px at ${mx} ${my}, rgba(124,58,237,0.07) 0%, transparent 65%)`,
        }}
      />

      {/* ── Dot grid revealed by spotlight ───────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: hasHovered ? 1 : 0,
          transition: 'opacity 0.5s ease',
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(124,58,237,0.18) 1px, transparent 0)',
          backgroundSize: '28px 28px',
          WebkitMaskImage: `radial-gradient(circle 520px at ${mx} ${my}, black 0%, transparent 70%)`,
          maskImage: `radial-gradient(circle 520px at ${mx} ${my}, black 0%, transparent 70%)`,
        }}
      />

      {/* Faint background watermark */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-[-40px] top-8 font-display text-[clamp(180px,22vw,340px)] font-black leading-none"
        style={{ color: 'transparent', WebkitTextStroke: '1px rgba(124,58,237,0.07)' }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 0.2, ease }}
      >
        5+
      </motion.div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Top row */}
        <div className="border-t border-[#1e1e1e] pt-12 md:pt-16 grid md:grid-cols-[1fr_auto] gap-8 items-start">
          <div>
            {/* Badge */}
            <motion.div {...fadeUp(0.05)}>
              <LiveBadge className="mb-7">{t('hero.badge')}</LiveBadge>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="font-display leading-[0.9] tracking-[-0.04em] mb-6"
              {...fadeUp(0.15)}
            >
              <span className="block text-[clamp(52px,8.5vw,118px)] font-black text-[#f5f5f0]">
                {personal.firstName}
              </span>
              {/* Scrambled last name — outlined stroke */}
              <span
                className="block text-[clamp(52px,8.5vw,118px)] font-black"
                style={{ WebkitTextStroke: '2px #7c3aed', color: 'transparent' }}
              >
                {scrambledLast || personal.lastName.toUpperCase()}
              </span>
            </motion.h1>

            <motion.p
              className="text-[clamp(14px,1.5vw,18px)] font-semibold text-[#f5f5f0] mb-1"
              {...fadeUp(0.25)}
            >
              {t('hero.role')}
            </motion.p>
            <motion.p
              className="text-sm text-[#555] mb-8 font-medium"
              {...fadeUp(0.3)}
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.p
              className="text-sm text-[#666] max-w-[540px] leading-relaxed mb-10"
              {...fadeUp(0.35)}
            >
              {t('hero.bio')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-3 mb-10"
              {...fadeUp(0.42)}
            >
              <button
                onClick={() => scrollTo('#experience')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#7c3aed] text-white rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-[#6d28d9] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(124,58,237,0.35)]"
              >
                {t('hero.cta.work')}
                <ArrowRight size={15} />
              </button>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent text-[#f5f5f0] rounded-lg text-sm font-semibold border border-[#2a2a2a] hover:bg-[#1a1a1a] hover:border-[#3a3a3a] transition-all duration-200"
              >
                <Mail size={15} />
                {t('hero.cta.contact')}
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#555] hover:text-[#888] transition-colors"
              >
                LinkedIn
                <ExternalLink size={11} />
              </a>
            </motion.div>
          </div>

          {/* Vertical label desktop */}
          <motion.div
            className="hidden md:flex items-start pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p
              className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#333]"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              Fullstack · Distributed Systems · XR Research
            </p>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="mt-8 grid grid-cols-2 md:grid-cols-4 border border-[#1e1e1e] rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52, ease }}
        >
          {personal.stats.map((stat, i) => (
            <div
              key={i}
              className="group relative px-4 md:px-6 py-5 md:py-7 border-r border-[#1e1e1e] last:border-r-0 transition-colors duration-200 hover:bg-[#141414] overflow-hidden"
            >
              <div className="absolute bottom-0 left-4 right-4 h-px bg-[#7c3aed] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className={`font-display text-[clamp(20px,2.8vw,34px)] font-black tracking-tight leading-none mb-1.5 ${accentClass(stat.accent)}`}>
                {stat.value}
              </div>
              <div className="text-[11px] text-[#555] leading-snug">{t(stat.labelKey)}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        className="mt-10 border-y border-[#1e1e1e] py-3.5 overflow-hidden bg-[#0f0f0f]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-3 text-[11px] font-bold tracking-[0.12em] uppercase text-[#333]">
              {item}
              <span className="w-1 h-1 rounded-full bg-[#7c3aed] opacity-60" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
