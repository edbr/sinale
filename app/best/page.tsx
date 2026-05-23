import { SectionPage } from "@/app/section-page"
import { pageMetadata } from "@/lib/seo"
import { bestOfGuides } from "@/lib/site-content"

export const metadata = pageMetadata({
  title: "Best AI Tools by Workflow | Sinale",
  description:
    "Curated best-of AI tool rankings for coding, design, product management, founder workflows, and meeting assistants.",
  path: "/best",
})

export default function BestOfPage() {
  return (
    <SectionPage
      eyebrow="Best Of"
      title="Best AI tools by workflow."
      description="Curated rankings for the jobs people actually hire AI tools to do: coding, design, product management, founder workflows, and meeting notes."
      items={bestOfGuides}
    />
  )
}
