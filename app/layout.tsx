import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fametonic | A Netzet Assestment',
  description: 'Brought to you by the Netzet',
  generator: 'Shayok Ullah',
  openGraph:{
    title: 'Fametonic | A Netzet Assestment',
    description: 'Brought to you by the Netzet',
    url: 'https://fametonic-netzet.vercel.app',
    siteName: 'Fametonic',
    images: [
      {
        url: '/images/fametonic-mobile-art.png',
        width: 630,
        height: 800,
        alt: 'Fametonic OG Image',
      },
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
