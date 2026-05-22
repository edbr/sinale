import { SectionPage } from "@/app/section-page"
import { founderGuides, rolePages } from "@/lib/site-content"

export default function FoundersPage() {
  return (
    <SectionPage
      eyebrow="Role Guide"
      {...rolePages.founders}
      items={founderGuides}
      showRoleBrowse
    />
  )
}
