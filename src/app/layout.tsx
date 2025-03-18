import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/site-header'
import { Footer } from '@/components/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Tico blog',
    default: 'Dog lyfe',
  },
  description: 'Dog blog',
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Tico blog ',
    title: 'Dog food blog',
    description: 'dog food blog',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My Personal Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Personal Blog',
    description: 'A personal blog built with Next.js and Supabase',
    images: ['/og-image.jpg'],
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
