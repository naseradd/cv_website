import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import { I18nProvider } from '@/lib/i18n'

// Self-hosted, latin-only, no italic, trimmed weights — ~60% smaller payload than CDN.
const display = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-display',
})

const body = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-body',
})

const SITE_URL = 'https://www.dany-naser.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Dany Naser Addin — Senior Software Engineer',
  description:
    'Senior Fullstack Software Engineer with 5+ years at Ubisoft (Rainbow Six Siege, 100M+ players). Distributed systems, live service platforms, XR research. Montréal, QC.',
  keywords: [
    'Senior Software Engineer',
    'Fullstack Developer',
    'Distributed Systems',
    'Live Service',
    'Ubisoft',
    'Rainbow Six Siege',
    'XR',
    'Augmented Reality',
    'TypeScript',
    'Go',
    'C#',
    'Montréal',
    'Freelance',
  ],
  authors: [{ name: 'Dany Naser Addin', url: SITE_URL }],
  creator: 'Dany Naser Addin',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: 'Dany Naser Addin — Senior Software Engineer',
    description: '5+ years at Ubisoft · 100M+ players · First-author XR researcher',
    url: SITE_URL,
    siteName: 'Dany Naser Addin',
    type: 'website',
    locale: 'en_CA',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Dany Naser Addin — Senior Software Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dany Naser Addin — Senior Software Engineer',
    description: '5+ years at Ubisoft · 100M+ players · First-author XR researcher',
    images: ['/og.png'],
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dany Naser Addin',
  url: SITE_URL,
  jobTitle: 'Senior Software Engineer',
  worksFor: { '@type': 'Organization', name: 'Ubisoft' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Polytechnique Montréal' },
    { '@type': 'CollegeOrUniversity', name: 'Esisar — Grenoble INP' },
  ],
  sameAs: [
    'https://www.linkedin.com/in/dany-naser-addin',
    'https://github.com/dany-naser',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Montréal',
    addressRegion: 'QC',
    addressCountry: 'CA',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${display.variable} ${body.variable}`}>
      <body>
        {/* Skip-to-content for keyboard users (#15) */}
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#7c3aed] focus:text-white focus:text-sm focus:font-semibold focus:shadow-lg"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
