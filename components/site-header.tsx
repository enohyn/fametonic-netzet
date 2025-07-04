import { Menu } from "lucide-react";
import Image from "next/image";
export function SiteHeader() {
  return (
    <header className="relative text-[#A9A9A9] font-figtree pt-[35px] max-lg:pt-0">
      <div className="container hidden lg:block">
        <nav className="flex justify-between" role="navigation" aria-label="Main navigation">
          <div className="flex justify-start">
            <Image src="/images/fametonic-logo.svg" alt="fametonice" loading="eager" fetchPriority="high" width={174} height={74} className="hidden lg:block" />
          </div>
          <ul className="flex gap-10 list-none text-lg leading-[100%] font-semibold">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="lg:hidden">
        <nav className="flex justify-between" role="navigation" aria-label="Main navigation">
          <div className="flex justify-center h-[46px] w-full mt-4 pr-5 mx-auto">
            <img src="/images/fametonic-logo.svg" alt="fametonice" loading="eager" className="inline lg:hidden w-full h-full" />
            <Menu className="text-white" />
          </div>
        </nav>
      </div>
    </header>
  )
}
