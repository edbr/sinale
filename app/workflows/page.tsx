import { SectionPage } from "@/app/section-page"
import { pageMetadata } from "@/lib/seo"
import { workflows } from "@/lib/site-content"

export const metadata = pageMetadata({
  title: "AI Workflows | Sinale",
  description:
    "Explore practical AI workflows for product design, coding, research, analytics, startup execution, and SaaS MVPs.",
  path: "/workflows",
})

export default function WorkflowsPage() {
  return (
    <SectionPage
      eyebrow="Workflows"
      title="AI workflows for real product work."
      description="Practical stacks for design, coding, research, analytics, and startup execution."
      items={workflows}
      cardVisual="workflow-icons"
    />
  )
}
