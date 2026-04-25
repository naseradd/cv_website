'use client'

import { motion } from 'framer-motion'
import { CalendarDays, Award, Handshake } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { personal } from '@/data/personal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'

const ease = [0.16, 1, 0.3, 1] as const

// One distinct icon + accent color per card
const cardMeta = [
  {
    Icon: CalendarDays,
    color: 'text-[#a78bfa]',
    bg: 'bg-[rgba(124,58,237,0.1)]',
    bgHover: 'group-hover:bg-[rgba(124,58,237,0.18)]',
    border: 'border-[rgba(124,58,237,0.18)]',
  },
  {
    Icon: Award,
    color: 'text-[#818cf8]',
    bg: 'bg-[rgba(79,70,229,0.1)]',
    bgHover: 'group-hover:bg-[rgba(79,70,229,0.18)]',
    border: 'border-[rgba(79,70,229,0.18)]',
  },
  {
    Icon: Handshake,
    color: 'text-[#a78bfa]',
    bg: 'bg-[rgba(124,58,237,0.1)]',
    bgHover: 'group-hover:bg-[rgba(124,58,237,0.18)]',
    border: 'border-[rgba(124,58,237,0.18)]',
  },
]

export function Leadership() {
  const { t, lang } = useLang()

  return (
    <section id="leadership" className="py-16 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="border-t border-[#1e1e1e] pt-8 md:pt-12">

          <Reveal delay={0}>
            <SectionLabel>{t('leadership.label')}</SectionLabel>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-black tracking-[-0.03em] text-[#f5f5f0] mb-10">
              {t('leadership.title')}
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {personal.leadership.map((item, i) => {
              const { Icon, color, bg, bgHover, border } = cardMeta[i]
              return (
                <motion.div
                  key={i}
                  className="p-6 rounded-2xl bg-[#141414] border border-[#1e1e1e] hover:border-[#2a2a2a] transition-colors group"
                  initial={{ opacity: 0, y: 56, scale: 0.96, filter: 'blur(8px)' }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.75, delay: i * 0.12, ease }}
                >
                  <div className={`w-9 h-9 rounded-xl ${bg} border ${border} flex items-center justify-center mb-5 ${bgHover} transition-colors`}>
                    <Icon size={16} className={color} />
                  </div>
                  <p className="text-sm text-[#888] leading-relaxed">
                    {item[lang]}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
