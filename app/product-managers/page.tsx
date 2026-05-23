import { SectionPage } from "@/app/section-page"
import { pageMetadata } from "@/lib/seo"
import { productManagerGuides, rolePages } from "@/lib/site-content"

export const metadata = pageMetadata({
  title: "AI Tools for Product Managers | Sinale",
  description:
    "Explore AI tools for product strategy, roadmaps, research synthesis, meeting notes, analytics, prioritization, and documentation.",
  path: "/product-managers",
})

export default function ProductManagersPage() {
  return (
    <SectionPage
      eyebrow="Role Guide"
      {...rolePages["product-managers"]}
      items={productManagerGuides}
      showRoleBrowse
    />
  )
}
