import { SectionPage } from "@/app/section-page"
import { workflows } from "@/lib/site-content"

export default function WorkflowsPage() {
  return (
    <SectionPage
      eyebrow="Workflows"
      title="AI workflows for real product work."
      description="Practical stacks for design, coding, research, analytics, and startup execution."
      items={workflows}
    />
  )
}
