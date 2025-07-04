import { CTASection } from "./cta-section"
import { FeatureList } from "./feature-list"

export function HeroSection() {
  return (
    <section className="relative z-10 max-lg:-top-5 text-center lg:p-0 lg:text-left w-full lg:w-[516px]">
      <h1 id="hero-heading" className="font-urbanist lg:text-[35px] text-[25px] font-extrabold lg:font-bold leading-tight mb-6">
        <span className="lg:whitespace-nowrap">
          Want to Turn Social Media Into a {""}
          <br className="hidden lg:block" />
          Profitable Career?
        </span>
        <br />
        <span className="text-[#00E7F9] drop-shadow-[0px_4px_4px_rgba(252,0,78,1)]">
          Discover your way to success <br className="hidden lg:block" />
          with Fametonic:
        </span>
      </h1>
      <FeatureList />
      <CTASection />
    </section>
  )
}
