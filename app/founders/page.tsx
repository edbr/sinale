import { SectionPage } from "@/app/section-page"
import { pageMetadata } from "@/lib/seo"
import { founderGuides, rolePages } from "@/lib/site-content"

export const metadata = pageMetadata({
  title: "AI Tools for Founders | Sinale",
  description:
    "Explore AI tools for startup research, product strategy, MVP development, automation, analytics, support, marketing, and operations.",
  path: "/founders",
})

export default function FoundersPage() {
  return (
    <SectionPage
      eyebrow="Role Guide"
      {...rolePages.founders}
      items={founderGuides}
      showRoleBrowse
    />
  )
}
