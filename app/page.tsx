import { PromotionalBanner } from "../components/promotional-banner"
import { SiteHeader } from "../components/site-header"
import { HeroSection } from "../components/hero-section"
import { PhoneMockup } from "../components/phone-mockup"
import "./globals.css"
import { Urbanist, Figtree } from 'next/font/google'
const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  weight: ['400', '500', '600', '700', '800'],
})

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  weight: ['400', '500', '600', '700'],
})
export default function FametonicLanding() {
  return (
    <main className={`min-h-screen bg-black text-white overflow-hidden ${urbanist.variable} ${figtree.variable}`} >
      <PromotionalBanner />
      <SiteHeader />
      <div className="lg:container flex lg:flex-row flex-col-reverse items-center justify-between gap-x-[20px] max-lg:px-5 pt-0 lg:pt-[50px] lg:pb-[40px] relative">
        <HeroSection />
        <PhoneMockup />
      </div>
    </main>
  )
}
