'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Mail, Linkedin, MapPin, ArrowUpRight, Handshake, Zap, Code2 } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { personal } from '@/data/personal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal, StaggerReveal, StaggerItem } from '@/components/ui/Reveal'
import { ease } from '@/lib/motion'

// ─── Scramble text hook ──────────────────────────────────────────────────────
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$_<>/\\'

function useScramble(text: string, trigger: boolean) {
  const [display, setDisplay] = useState(text)

  useEffect(() => {
    if (!trigger) return
    const DURATION = 1500
    const start = Date.now()

    const id = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / DURATION, 1)
      const revealedUpTo = Math.floor(progress * text.length)

      setDisplay(
        text
          .split('')
          .map((ch, i) => {
            if (ch === '\n' || ch === ' ' || ch === '.') return ch
            if (i < revealedUpTo) return ch
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
          })
          .join('')
      )

      if (progress >= 1) clearInterval(id)
    }, 35)

    return () => clearInterval(id)
  }, [trigger, text])

  return display
}

// ─── Freelance contract card ──────────────────────────────────────────────────
function ContractCard({ lang }: { lang: 'en' | 'fr' }) {
  const services =
    lang === 'en'
      ? ['Fullstack Development', 'System Architecture', 'Tech Consulting']
      : ['Développement Fullstack', 'Architecture Système', 'Conseil Technique']

  return (
    <div className="relative w-full max-w-[300px] rounded-2xl border border-[rgba(124,58,237,0.28)] bg-[#0d0d0d] p-6 overflow-hidden">
      {/* Accent top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent" />
      {/* Glows */}
      <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-[rgba(124,58,237,0.1)] rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-[rgba(79,70,229,0.06)] rounded-full blur-xl pointer-events-none" />

      <div className="relative">
        {/* Big icon */}
        <motion.div
          className="w-14 h-14 rounded-2xl bg-[rgba(124,58,237,0.12)] border border-[rgba(124,58,237,0.22)] flex items-center justify-center mb-5"
          initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
          whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: ease.spring }}
        >
          <Handshake size={28} className="text-[#a78bfa]" strokeWidth={1.5} />
        </motion.div>

        {/* Live status */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulseDot flex-shrink-0" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#22c55e]">
            {lang === 'en' ? 'Available now' : 'Disponible'}
          </span>
        </div>

        {/* Title */}
        <p className="font-display text-[17px] font-bold text-[#f5f5f0] leading-snug mb-1">
          {lang === 'en' ? 'Freelance Contracts' : 'Contrats Freelance'}
        </p>
        <p className="text-xs text-[#888] mb-5">Remote · Montréal</p>

        {/* Services */}
        <div className="space-y-2 mb-5">
          {services.map((s, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[#7c3aed] flex-shrink-0" />
              <span className="text-[11px] text-[#888]">{s}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#1a1a1a] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Zap size={10} className="text-[#7c3aed]" />
            <span className="text-[10px] font-semibold text-[#888] uppercase tracking-widest">
              {lang === 'en' ? 'Response' : 'Réponse'}
            </span>
          </div>
          <span className="font-display text-sm font-black text-[#a78bfa]">{'< 48h'}</span>
        </div>
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function Contact() {
  const { t, lang } = useLang()
  const reduced = useReducedMotion() ?? false

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

  // Scramble trigger
  const triggerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(triggerRef, { once: true, margin: '-120px' })
  const rawTitle = t('contact.title')
  const scrambledTitle = useScramble(rawTitle, isInView)

  const mx = `${mouse.x * 100}%`
  const my = `${mouse.y * 100}%`

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-36 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* ── Cursor spotlight glow ─────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: hasHovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
          background: `radial-gradient(circle 700px at ${mx} ${my}, rgba(124,58,237,0.07) 0%, transparent 65%)`,
        }}
      />

      {/* ── Dot grid revealed by spotlight ───────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: hasHovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(124,58,237,0.2) 1px, transparent 0)',
          backgroundSize: '28px 28px',
          WebkitMaskImage: `radial-gradient(circle 480px at ${mx} ${my}, black 0%, transparent 70%)`,
          maskImage: `radial-gradient(circle 480px at ${mx} ${my}, black 0%, transparent 70%)`,
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="border-t border-[#1e1e1e] pt-12">

          {/* Trigger ref for scramble */}
          <div ref={triggerRef} />

          <Reveal delay={0}>
            <SectionLabel>{t('contact.label')}</SectionLabel>
          </Reveal>

          {/* ── Desktop: 2-col layout ──────────────────────────────────────── */}
          <div className="hidden md:grid md:grid-cols-[1fr_320px] gap-16 items-start mt-0">

            {/* Left — text + contact links */}
            <div>
              {/* Scrambled title */}
              <motion.h2
                className="font-display text-[clamp(40px,5.5vw,82px)] font-black tracking-[-0.04em] leading-[1.02] text-[#f5f5f0] mb-6 whitespace-pre-line"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: ease.spring }}
              >
                {scrambledTitle || rawTitle}
              </motion.h2>

              <Reveal delay={0.15}>
                <p className="text-base text-[#888] max-w-[480px] leading-relaxed mb-10">
                  {t('contact.subtitle')}
                </p>
              </Reveal>

              <StaggerReveal className="flex flex-col gap-4" stagger={0.1} delay={0.22}>
                <StaggerItem>
                  <a
                    href={`mailto:${personal.email}`}
                    className="group inline-flex items-center gap-4 p-5 rounded-xl bg-[#141414] border border-[#1e1e1e] hover:border-[#7c3aed] hover:bg-[rgba(124,58,237,0.05)] transition-all duration-200 max-w-[420px]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.18)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(124,58,237,0.2)] transition-colors">
                      <Mail size={16} className="text-[#a78bfa]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#888] mb-0.5 uppercase tracking-widest font-semibold">{t('contact.email')}</p>
                      <p className="text-sm text-[#888] group-hover:text-[#f5f5f0] transition-colors truncate font-medium">{personal.email}</p>
                    </div>
                    <ArrowUpRight size={14} className="text-[#333] group-hover:text-[#7c3aed] transition-colors flex-shrink-0" />
                  </a>
                </StaggerItem>

                <StaggerItem>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-4 p-5 rounded-xl bg-[#141414] border border-[#1e1e1e] hover:border-[#4f46e5] hover:bg-[rgba(79,70,229,0.05)] transition-all duration-200 max-w-[420px]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[rgba(79,70,229,0.1)] border border-[rgba(79,70,229,0.18)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(79,70,229,0.2)] transition-colors">
                      <Linkedin size={16} className="text-[#818cf8]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#888] mb-0.5 uppercase tracking-widest font-semibold">{t('contact.linkedin')}</p>
                      <p className="text-sm text-[#888] group-hover:text-[#f5f5f0] transition-colors font-medium">dany-naser-addin</p>
                    </div>
                    <ArrowUpRight size={14} className="text-[#333] group-hover:text-[#4f46e5] transition-colors flex-shrink-0" />
                  </a>
                </StaggerItem>
              </StaggerReveal>

              {/* Code decoration */}
              <Reveal delay={0.38} direction="fade">
                <div className="mt-8 flex items-center gap-2 opacity-20">
                  <Code2 size={11} className="text-[#7c3aed]" />
                  <span className="text-[10px] font-mono text-[#888] tracking-widest">available_for_contract = true</span>
                </div>
              </Reveal>
            </div>

            {/* Right — contract card */}
            <motion.div
              className="flex flex-col gap-4 pt-2"
              initial={{ opacity: 0, y: 48, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: ease.spring }}
            >
              <div className="flex items-center gap-2 text-xs text-[#333]">
                <MapPin size={11} className="text-[#7c3aed]" />
                {t('contact.location')}
              </div>
              <ContractCard lang={lang} />
            </motion.div>
          </div>

          {/* ── Mobile: single column ─────────────────────────────────────── */}
          <div className="md:hidden mt-0">
            <motion.h2
              className="font-display text-[clamp(38px,10vw,64px)] font-black tracking-[-0.04em] leading-[1.02] text-[#f5f5f0] mb-5 whitespace-pre-line"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.07, ease: ease.spring }}
            >
              {scrambledTitle || rawTitle}
            </motion.h2>

            <Reveal delay={0.13}>
              <p className="text-sm text-[#888] leading-relaxed mb-8">
                {t('contact.subtitle')}
              </p>
            </Reveal>

            {/* Mobile contact links */}
            <StaggerReveal className="flex flex-col gap-3 mb-8" stagger={0.1} delay={0.18}>
              <StaggerItem>
                <a
                  href={`mailto:${personal.email}`}
                  className="group flex items-center gap-3 p-4 rounded-xl bg-[#141414] border border-[#1e1e1e] hover:border-[#7c3aed] transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.18)] flex items-center justify-center flex-shrink-0">
                    <Mail size={15} className="text-[#a78bfa]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-[#888] uppercase tracking-widest font-semibold mb-0.5">{t('contact.email')}</p>
                    <p className="text-xs text-[#888] truncate font-medium">{personal.email}</p>
                  </div>
                  <ArrowUpRight size={13} className="text-[#333] flex-shrink-0" />
                </a>
              </StaggerItem>
              <StaggerItem>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-xl bg-[#141414] border border-[#1e1e1e] hover:border-[#4f46e5] transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-[rgba(79,70,229,0.1)] border border-[rgba(79,70,229,0.18)] flex items-center justify-center flex-shrink-0">
                    <Linkedin size={15} className="text-[#818cf8]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-[#888] uppercase tracking-widest font-semibold mb-0.5">{t('contact.linkedin')}</p>
                    <p className="text-xs text-[#888] font-medium">dany-naser-addin</p>
                  </div>
                  <ArrowUpRight size={13} className="text-[#333] flex-shrink-0" />
                </a>
              </StaggerItem>
            </StaggerReveal>

            {/* Mobile contract card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: ease.spring }}
              className="max-w-sm"
            >
              <ContractCard lang={lang} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
