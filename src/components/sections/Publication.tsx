'use client'

import { motion } from 'framer-motion'
import { ExternalLink, BookOpen, Newspaper } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { personal } from '@/data/personal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'

const ease = [0.22, 1, 0.36, 1] as const

export function Publication() {
  const { t } = useLang()

  return (
    <section id="research" className="py-16 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="border-t border-[#1e1e1e] pt-8 md:pt-12">

          <Reveal delay={0}>
            <SectionLabel>{t('pub.label')}</SectionLabel>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="font-display text-[clamp(32px,4.5vw,58px)] font-black tracking-[-0.03em] text-[#f5f5f0] mb-12">
              {t('pub.title')}
            </h2>
          </Reveal>

          {/* Publication card */}
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-[rgba(124,58,237,0.2)] bg-[#0f0f0f]"
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
          >
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent" />

            {/* Faint glow */}
            <div className="absolute top-0 left-1/4 w-1/2 h-32 bg-[rgba(124,58,237,0.05)] rounded-full blur-3xl pointer-events-none" />

            <div className="relative p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
              {/* Content */}
              <div>
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.2)] text-[11px] font-bold text-[#a78bfa] tracking-wide mb-6"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25, ease }}
                >
                  <span className="w-1 h-1 rounded-full bg-[#a78bfa]" />
                  {t('pub.badge')}
                </motion.div>

                {/* Title */}
                <h3 className="font-display text-lg md:text-2xl font-bold text-[#f5f5f0] leading-snug mb-4 max-w-[680px]">
                  Design and Test of an Adaptive Augmented Reality Interface to Manage Systems to Assist Critical Missions
                </h3>

                {/* Authors + ref */}
                <p className="text-sm text-[#888] mb-2">{t('pub.authors')}</p>
                <p className="text-xs font-mono text-[#888] mb-6">arXiv:2103.14160</p>

                {/* Summary */}
                <p className="text-sm text-[#888] leading-relaxed max-w-[620px] mb-8">
                  {t('pub.summary')}
                </p>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={personal.arxiv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-lg bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(124,58,237,0.35)]"
                  >
                    <BookOpen size={14} />
                    {t('pub.read')}
                    <ExternalLink size={11} />
                  </a>
                  <a
                    href={personal.techxplore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-lg bg-[#141414] hover:bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#333] text-[#888] hover:text-[#f5f5f0] text-sm font-semibold transition-all duration-200"
                  >
                    <Newspaper size={14} />
                    {t('pub.press')}
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>

              {/* Right — decorative stat */}
              <motion.div
                className="hidden md:flex flex-col items-center justify-center w-40 h-40 rounded-2xl bg-[rgba(124,58,237,0.07)] border border-[rgba(124,58,237,0.15)] flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.3, ease }}
              >
                <span className="font-display text-5xl font-black text-[#a78bfa] leading-none mb-1">1st</span>
                <span className="text-[10px] font-semibold text-[#888] text-center uppercase tracking-widest leading-snug">
                  Author<br />arXiv
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
