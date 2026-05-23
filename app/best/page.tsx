import { SectionPage } from "@/app/section-page"
import { bestOfGuides } from "@/lib/site-content"

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
