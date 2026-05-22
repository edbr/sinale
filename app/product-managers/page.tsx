import { SectionPage } from "@/app/section-page"
import { productManagerGuides, rolePages } from "@/lib/site-content"

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
