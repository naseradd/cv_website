import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import { I18nProvider } from '@/lib/i18n'
import { personal } from '@/data/personal'

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
const title = 'Dany Naser Addin — Engineering Team Lead'
const description =
  'Engineering Team Lead at Ubisoft and freelance software developer in Montréal. Web applications, business tools and AI integrations. Available in French and English.'

export const metadata: Metadata = {
  metadataBase: new URL(personal.website),
  title,
  description,
  authors: [{ name: personal.name, url: personal.website }],
  creator: personal.name,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.png' },
  openGraph: {
    title,
    description,
    url: personal.website,
    siteName: personal.name,
    type: 'website',
    locale: 'en_CA',
    alternateLocale: ['fr_CA'],
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Dany Naser Addin — Software engineering & agentic AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personal.name,
  url: personal.website,
  image: `${personal.website}/images/profile/dany.webp`,
  jobTitle: 'Engineering Team Lead',
  worksFor: { '@type': 'Organization', name: 'Ubisoft' },
  knowsAbout: [
    'Software Engineering',
    'Distributed Systems',
    'Agentic AI',
    'Technical Leadership',
  ],
  knowsLanguage: ['French', 'English'],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Polytechnique Montréal' },
    { '@type': 'CollegeOrUniversity', name: 'Polytechnique Grenoble' },
  ],
  sameAs: [personal.linkedin],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Montréal',
    addressRegion: 'QC',
    addressCountry: 'CA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
