import './globals.css'
import { I18nProvider } from '@/lib/i18n'

export const metadata = {
  title: 'Dany Naser Addin — Senior Software Engineer',
  description:
    'Senior Fullstack Software Engineer with 5+ years at Ubisoft (Rainbow Six Siege, 100M+ players). Distributed systems, live service platforms, XR research. Montréal, QC.',
  openGraph: {
    title: 'Dany Naser Addin — Senior Software Engineer',
    description: '5+ years at Ubisoft · 100M+ players · First-author XR researcher',
    url: 'https://www.dany-naser.com',
    siteName: 'Dany Naser Addin',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,800;0,9..40,900;1,9..40,400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
