'use client'
import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'
import Image from 'next/image'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { personal } from '@/data/personal'
import { site } from '@/data/site'
import { useLang } from '@/lib/i18n'

export function Hero() {
  const { lang } = useLang()
  const copy = site[lang]
  const reduced = useReducedMotion()
  const name = personal.lastName.toUpperCase()
  const [displayName, setDisplayName] = useState(name)
  const section = useRef<HTMLElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(y, { stiffness: 100, damping: 25 })
  const rotateY = useSpring(x, { stiffness: 100, damping: 25 })
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return
    const started = performance.now()
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const interval = window.setInterval(() => {
      const progress = media.matches
        ? 1
        : Math.min((performance.now() - started) / 650, 1)
      setDisplayName(
        name
          .split('')
          .map((letter, i) =>
            letter === ' ' || i < progress * name.length
              ? letter
              : characters[Math.floor(Math.random() * characters.length)],
          )
          .join(''),
      )
      if (progress === 1) window.clearInterval(interval)
    }, 45)
    return () => window.clearInterval(interval)
  }, [name])
  useEffect(() => {
    const element = section.current
    if (!element) return
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    const move = (event: PointerEvent) => {
      if (!fine.matches || preference.matches) return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect()
        const px = event.clientX - rect.left,
          py = event.clientY - rect.top
        element.style.setProperty('--pointer-x', `${px}px`)
        element.style.setProperty('--pointer-y', `${py}px`)
        x.set((px / rect.width - 0.5) * 5)
        y.set((0.5 - py / rect.height) * 5)
      })
    }
    const reset = () => {
      cancelAnimationFrame(frame)
      x.set(0)
      y.set(0)
    }
    element.addEventListener('pointermove', move, { passive: true })
    element.addEventListener('pointerleave', reset)
    preference.addEventListener('change', reset)
    return () => {
      cancelAnimationFrame(frame)
      element.removeEventListener('pointermove', move)
      element.removeEventListener('pointerleave', reset)
      preference.removeEventListener('change', reset)
    }
  }, [x, y])
  return (
    <section id="hero" ref={section} className="hero">
      <div className="hero-spotlight" aria-hidden="true" />
      <div className="shell hero-inner">
        <div className="hero-topline">
          <span className="availability">
            <span />
            {copy.availability}
          </span>
          <span className="location-label">{copy.location}</span>
        </div>
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker">
              SOFTWARE ENGINEERING & AGENTIC AI
            </p>
            <h1>
              <span className="sr-only">{personal.name}</span>
              <span aria-hidden="true" className="first-name">
                Dany<span className="name-period">.</span>
              </span>
              <span aria-hidden="true" className="outlined-name">
                {displayName}
              </span>
            </h1>
            <p className="hero-role">{copy.heroRole}</p>
            <p className="hero-subtitle">{copy.heroSubtitle}</p>
            <p className="hero-bio">{copy.heroBio}</p>
            <div className="hero-actions">
              <a className="button-primary" href="#contact">
                {copy.cta}
                <ArrowUpRight size={18} />
              </a>
              <a className="text-link" href="#projects">
                {copy.workCta}
                <ArrowDown size={16} />
              </a>
            </div>
          </div>
          <motion.div
            className="hero-portrait"
            style={reduced ? undefined : { rotateX, rotateY }}
          >
            <div className="portrait-orbit" aria-hidden="true">
              <svg viewBox="0 0 500 640" fill="none">
                <path d="M40 110H390L470 190V480L385 565H85L25 505V300" />
                <path d="M85 70H430V390" />
                <circle cx="40" cy="110" r="5" />
                <circle cx="25" cy="300" r="5" />
                <circle cx="430" cy="390" r="5" />
              </svg>
            </div>
            <div className="portrait-frame">
              <Image
                src="/images/profile/dany.webp"
                alt="Dany Naser Addin"
                fill
                priority
                sizes="(max-width: 767px) 85vw, (max-width: 1100px) 35vw, 420px"
                className="portrait-image"
              />
              <div className="portrait-shade" />
              <div className="portrait-caption">
                <span>DANY / MONTRÉAL</span>
                <p>{copy.portraitCaption}</p>
              </div>
            </div>
            <div className="portrait-tag">
              <span className="brand-dot" />
              HUMAN FIRST. AI EMPOWERED.
            </div>
          </motion.div>
        </div>
        <div className="hero-proof">
          {copy.proof.map(([label, value], index) => (
            <div key={label}>
              <span className="proof-index">0{index + 1}</span>
              <div>
                <span className="proof-label">{label}</span>
                <strong>{value}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tech-ribbon" aria-hidden="true">
        <div>
          {[0, 1].map((repeat) => (
            <div className="ribbon-group" key={repeat}>
              {[
                'TYPESCRIPT',
                'GO',
                'C# / .NET',
                'VUE.JS',
                'DISTRIBUTED SYSTEMS',
                'CODEX',
                'CLAUDE CODE',
                'MCP',
              ].map((label) => (
                <span key={label}>
                  {label}
                  <span className="ribbon-star">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
