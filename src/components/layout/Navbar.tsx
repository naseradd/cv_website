'use client'
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { site } from '@/data/site'
import { ResumeButton } from '@/components/ui/Resume'

const anchors = ['#expertise', '#projects', '#experience', '#contact']
export function Navbar() {
  const { lang, setLang } = useLang()
  const copy = site[lang]
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const menuButton = useRef<HTMLButtonElement>(null)
  const nav = useRef<HTMLElement>(null)
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !document.querySelector('dialog[open]')) {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    const outside = (event: PointerEvent) => {
      if (!nav.current?.contains(event.target as Node)) setOpen(false)
    }
    const media = window.matchMedia('(min-width: 1000px)')
    const resize = () => {
      if (media.matches) setOpen(false)
    }
    document.addEventListener('keydown', close)
    document.addEventListener('pointerdown', outside)
    media.addEventListener('change', resize)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-15% 0px -65% 0px' },
    )
    anchors.forEach((anchor) => {
      const el = document.querySelector(anchor)
      if (el) observer.observe(el)
    })
    return () => {
      document.removeEventListener('keydown', close)
      document.removeEventListener('pointerdown', outside)
      media.removeEventListener('change', resize)
      observer.disconnect()
    }
  }, [])
  return (
    <>
      <a className="skip-link" href="#main">
        {copy.skip}
      </a>
      <nav
        ref={nav}
        className="site-nav"
        aria-label={lang === 'fr' ? 'Navigation principale' : 'Main navigation'}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node))
            setOpen(false)
        }}
      >
        <div className="nav-inner">
          <a href="#hero" className="wordmark" onClick={() => setOpen(false)}>
            Dany<span className="wordmark-rest"> Naser Addin</span>
            <span className="brand-dot" />
          </a>
          <div className="desktop-links">
            {anchors.map((href, i) => (
              <a
                key={href}
                href={href}
                aria-current={active === href ? 'location' : undefined}
              >
                {copy.nav[i]}
              </a>
            ))}
          </div>
          <div className="nav-controls">
            <div
              className="language-switch"
              role="group"
              aria-label={lang === 'fr' ? 'Langue' : 'Language'}
            >
              {(['en', 'fr'] as const).map((value) => (
                <button
                  key={value}
                  aria-pressed={lang === value}
                  aria-label={value === 'en' ? 'English' : 'Français'}
                  onClick={() => setLang(value)}
                >
                  {value.toUpperCase()}
                </button>
              ))}
            </div>
            <ResumeButton />
            <button
              ref={menuButton}
              className="mobile-toggle icon-button"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? copy.close : copy.menu}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        <div className="mobile-links" id="mobile-navigation" hidden={!open}>
          {anchors.map((href, i) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {copy.nav[i]}
              <span>0{i + 1}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}
