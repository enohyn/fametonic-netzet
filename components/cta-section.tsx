import { ChevronRight } from "lucide-react";
export function CTASection() {
  return (
    <div className="font-figtree flex flex-col-reverse max-lg:items-center max-lg:text-center lg:flex-col ">
      <div className="max-lg:py-10 max-lg:px-5 w-[390px] lg:w-[313px]">
        <button className="bg-[#FC004E] flex items-center justify-center font-urbanist lg:font-figtree button-shadow text-white font-bold text-xl w-full py-2 px-10 leading-[100%] rounded-[10px] mb-[10px]">
          GET STARTED
          {/* <span className="text-2xl font-bold -mt-1">
            &gt;
          </span> */}
          <ChevronRight className="-mt-[1px] font-extrabold "/>
        </button>
        <p className="text-xs text-center text-white leading-4 mb-4">1-minute quiz for personalized insights</p>
      </div>
      <div className="flex flex-col items-start gap-3 max-lg:w-[281px]">
        <p className="text-xs font-medium text-[#ABABAB] leading-[100%]">
          By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
        </p>
        <p className="max-lg:text-center w-full text-[10px] font-medium text-[#ABABAB] leading-[100%]">
          Fametonic 2025 ©All Rights Reserved.
        </p>
      </div>
    </div>
  )
}
