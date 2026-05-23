import { SectionPage } from "@/app/section-page"
import { pageMetadata } from "@/lib/seo"
import { designerGuides, rolePages } from "@/lib/site-content"

export const metadata = pageMetadata({
  title: "AI Tools for Designers | Sinale",
  description:
    "Explore AI tools, workflows, reviews, and guides for UX research, interface design, prototyping, design systems, and creative work.",
  path: "/designers",
})

export default function DesignersPage() {
  return (
    <SectionPage
      eyebrow="Role Guide"
      {...rolePages.designers}
      items={designerGuides}
      showRoleBrowse
    />
  )
}
