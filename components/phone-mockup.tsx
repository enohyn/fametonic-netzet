import Image from "next/image";

export function PhoneMockup() {
  return (
    <section className="h-full w-full">
      <Image src="/images/fametonic-mobile-art.png" alt="Phone Mockup" width={666} height={679} className="absolute -top-8 left-[495px] hidden lg:block" />
      <div className="flex justify-center lg:hidden">
        <Image src="/images/fametonic-mobile-art.png" alt="Phone Mockup" width={390} height={426} objectFit="cover" />
      </div>
    </section>
  )
}
