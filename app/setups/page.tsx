import { SectionPage } from "@/app/section-page"
import { pageMetadata } from "@/lib/seo"
import { setupGuides } from "@/lib/setups"

export const metadata = pageMetadata({
  title: "Work Setups and Desk Gear | Sinale",
  description:
    "Practical setup guides for founders, creators, remote workers, and AI developers choosing reliable hardware and software.",
  path: "/setups",
})

export default function SetupsPage() {
  return (
    <SectionPage
      eyebrow="Setups"
      title="Hardware and desk setups for modern work."
      description="Practical setup guides for founders, creators, remote workers, and AI developers who want less friction in their day."
      items={setupGuides}
      cardVisual="workflow-icons"
    />
  )
}
