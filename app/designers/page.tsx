import { SectionPage } from "@/app/section-page"
import { designerGuides, rolePages } from "@/lib/site-content"

export default function DesignersPage() {
  return (
    <SectionPage
      eyebrow="Role Guide"
      {...rolePages.designers}
      items={designerGuides}
      showRoleBrowse
    />
  )
}
