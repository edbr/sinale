import { SectionPage } from "@/app/section-page"
import { reviews } from "@/lib/site-content"

export default function ReviewsPage() {
  return (
    <SectionPage
      eyebrow="Reviews"
      title="Hands-on AI tool reviews."
      description="Evaluations of pricing, strengths, weaknesses, best-fit use cases, and practical recommendations."
      items={reviews}
    />
  )
}
