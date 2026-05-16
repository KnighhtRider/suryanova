import type { Metadata } from 'next'
import { Syne, DM_Sans, Noto_Sans_Devanagari } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const syne = Syne({ 
  subsets: ["latin"],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
})

const notoDevanagari = Noto_Sans_Devanagari({ 
  subsets: ["devanagari"],
  variable: '--font-noto-sans-devanagari',
  display: 'swap',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Surynova Energy | सूर्यनोवा एनर्जी - PM Surya Ghar Rooftop Solar',
  description: 'India\'s trusted rooftop solar installation partner. Get up to ₹78,000 subsidy under PM Surya Ghar Muft Bijli Yojana. MNRE empanelled, government-affiliated solar solutions for homes.',
  keywords: 'solar panel, rooftop solar, PM Surya Ghar, solar subsidy, MNRE, solar installation India, सोलर पैनल, छत पर सोलर',
  authors: [{ name: 'Surynova Energy Efficiency Pvt. Ltd.' }],
  openGraph: {
    title: 'Surynova Energy | PM Surya Ghar Rooftop Solar Solutions',
    description: 'Get up to ₹78,000 subsidy under PM Surya Ghar scheme. MNRE empanelled solar installation partner.',
    type: 'website',
    locale: 'en_IN',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${notoDevanagari.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
