import { SectionPage } from "@/app/section-page"
import { pageMetadata } from "@/lib/seo"
import { reviews } from "@/lib/site-content"

export const metadata = pageMetadata({
  title: "AI Tool Reviews | Sinale",
  description:
    "Read hands-on AI tool reviews covering pricing, strengths, weaknesses, use cases, and practical recommendations.",
  path: "/reviews",
})

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
