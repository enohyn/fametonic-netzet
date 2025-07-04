const features = [
  "Start growing your influence right away—no waiting required!",
  "Create viral TikToks and Reels step by step with easy-to-follow lessons",
  "Use a Personal AI Worker to boost your content",
  "Learn from expert-led courses designed for aspiring influencers",
]

export function FeatureList() {
  return (
    <div className="font-figtree lg:mb-[30px] flex justify-center lg:justify-start">
      <ul className="list-none text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-x-[10px] mb-[13px]">
            <div
              className="flex-shrink-0 size-[22px] font-medium lg:font-semibold leading-[100%] flex items-center justify-center"
              aria-hidden="true"
            >
              ✨
            </div>
            <p className="text-base font-medium lg:font-semibold leading-[22px]">{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
