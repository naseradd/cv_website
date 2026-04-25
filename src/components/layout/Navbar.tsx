'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { useMagnetic } from '@/lib/hooks/useMagnetic'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.research', href: '#research' },
  { key: 'nav.education', href: '#education' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.contact', href: '#contact' },
]

export function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const ctaRef = useMagnetic<HTMLAnchorElement>(6, 32)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[rgba(12,12,12,0.92)] backdrop-blur-md border-b border-[#1e1e1e]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-2 group"
          >
            <span className="font-display text-sm font-bold text-[#f5f5f0] tracking-tight">
              Dany Naser Addin
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] group-hover:bg-[#a78bfa] transition-colors" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  'px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-150',
                  'text-[#888] hover:text-[#f5f5f0] hover:bg-[#1a1a1a]'
                )}
              >
                {t(item.key)}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Lang toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              className="flex items-center gap-0 text-xs font-semibold text-[#888] hover:text-[#f5f5f0] transition-colors tracking-widest"
              aria-label={`EN/FR language toggle — currently ${lang === 'en' ? 'EN' : 'FR'}`}
            >
              <span className={cn('transition-colors', lang === 'en' ? 'text-[#a78bfa]' : 'text-[#888]')}>EN</span>
              <span className="mx-1 text-[#3a3a3a]">/</span>
              <span className={cn('transition-colors', lang === 'fr' ? 'text-[#a78bfa]' : 'text-[#888]')}>FR</span>
            </button>

            {/* CTA */}
            <a
              ref={ctaRef}
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="px-4 py-1.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-xs font-bold rounded-lg transition-[box-shadow,background-color] duration-200 hover:shadow-[0_4px_20px_rgba(124,58,237,0.4)] will-change-transform"
            >
              {t('nav.cta')}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden -mr-2 inline-flex items-center justify-center min-w-[44px] min-h-[44px] text-[#888] hover:text-[#f5f5f0] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-14 left-0 right-0 bg-[#141414] border-b border-[#1e1e1e] py-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left px-6 py-3 text-sm font-medium text-[#888] hover:text-[#f5f5f0] hover:bg-[#1a1a1a] transition-colors"
              >
                {t(item.key)}
              </button>
            ))}
            <div className="px-6 pt-4 pb-2 flex items-center gap-4 border-t border-[#1e1e1e] mt-2">
              <button
                onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
                className="text-xs font-semibold text-[#888] tracking-widest"
              >
                <span className={lang === 'en' ? 'text-[#a78bfa]' : ''}>EN</span>
                <span className="mx-1 text-[#888]">/</span>
                <span className={lang === 'fr' ? 'text-[#a78bfa]' : ''}>FR</span>
              </button>
              <a
                href="mailto:contact@dany-naser.com"
                className="flex-1 text-center py-2 bg-[#7c3aed] text-white text-xs font-bold rounded-lg"
              >
                {t('nav.cta')}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
