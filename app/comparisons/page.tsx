import { SectionPage } from "@/app/section-page"
import { comparisons } from "@/lib/site-content"

export default function ComparisonsPage() {
  return (
    <SectionPage
      eyebrow="Comparisons"
      title="Compare AI tools side by side."
      description="Practical breakdowns of competing tools, where each one fits, and which product or team workflow should choose which."
      items={comparisons}
    />
  )
}
