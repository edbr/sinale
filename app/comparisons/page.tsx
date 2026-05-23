import { SectionPage } from "@/app/section-page"
import { pageMetadata } from "@/lib/seo"
import { comparisons } from "@/lib/site-content"

export const metadata = pageMetadata({
  title: "AI Tool Comparisons | Sinale",
  description:
    "Compare AI tools side by side with practical breakdowns for product teams, founders, designers, developers, and operators.",
  path: "/comparisons",
})

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
