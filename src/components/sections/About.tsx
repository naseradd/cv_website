'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Globe, Briefcase } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { personal } from '@/data/personal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal, StaggerReveal, StaggerItem } from '@/components/ui/Reveal'

const ease = [0.16, 1, 0.3, 1] as const

export function About() {
  const { t, lang } = useLang()

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="border-t border-[#1e1e1e] pt-12 grid md:grid-cols-[1fr_360px] gap-16 md:gap-20 items-start">

          {/* Left — text */}
          <div>
            <Reveal delay={0}>
              <SectionLabel>{t('about.label')}</SectionLabel>
            </Reveal>
            <Reveal delay={0.07}>
              <h2 className="font-display text-[clamp(32px,4.5vw,58px)] font-black tracking-[-0.03em] leading-[1.05] text-[#f5f5f0] mb-10 whitespace-pre-line">
                {t('about.title')}
              </h2>
            </Reveal>

            <StaggerReveal className="space-y-5 text-[15px] text-[#666] leading-[1.8] max-w-[600px]" stagger={0.1} delay={0.08}>
              <StaggerItem><p>{t('about.bio1')}</p></StaggerItem>
              <StaggerItem><p>{t('about.bio2')}</p></StaggerItem>
              <StaggerItem><p>{t('about.bio3')}</p></StaggerItem>
            </StaggerReveal>

            {/* Meta chips */}
            <StaggerReveal className="mt-10 flex flex-wrap gap-3" stagger={0.08} delay={0.1}>
              <StaggerItem>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#141414] border border-[#1e1e1e] text-xs text-[#666]">
                  <MapPin size={12} className="text-[#7c3aed]" />
                  {t('about.location')}
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#141414] border border-[#1e1e1e] text-xs text-[#666]">
                  <Globe size={12} className="text-[#7c3aed]" />
                  {t('about.languages')}
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#141414] border border-[#1e1e1e] text-xs text-[#666]">
                  <Briefcase size={12} className="text-[#7c3aed]" />
                  {t('about.open')}
                </div>
              </StaggerItem>
            </StaggerReveal>
          </div>

          {/* Right — profile photo placeholder */}
          <Reveal direction="right" delay={0.1} className="flex flex-col gap-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#141414] border border-[#1e1e1e]">
              <Image
                src={personal.photo}
                alt="Dany Naser Addin"
                fill
                className="object-cover object-top"
                unoptimized
                priority
              />
              {/* Gradient overlay — bottom only */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,12,12,0.5)] via-transparent to-transparent" />
              {/* Subtle violet shimmer on border */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[rgba(124,58,237,0.15)]" />
            </div>

            {/* Quick stats card */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: '5+', en: 'Years production', fr: 'Ans en prod', color: 'text-[#a78bfa]' },
                { value: '5+', en: 'Microservices', fr: 'Microservices', color: 'text-[#818cf8]' },
                { value: '3+', en: 'Mentored devs', fr: 'Devs mentorés', color: 'text-[#a78bfa]' },
                { value: '1', en: 'Publication', fr: 'Publication', color: 'text-[#818cf8]' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="p-4 rounded-xl bg-[#141414] border border-[#1e1e1e] text-center"
                  initial={{ opacity: 0, y: 20, scale: 0.9, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease }}
                >
                  <div className={`font-display text-2xl font-black mb-0.5 ${s.color}`}>{s.value}</div>
                  <div className="text-[11px] text-[#555]">{lang === 'en' ? s.en : s.fr}</div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
