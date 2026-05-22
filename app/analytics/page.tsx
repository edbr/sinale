import { SectionPage } from "@/app/section-page"
import { rolePages } from "@/lib/site-content"

export default function AnalyticsPage() {
  return (
    <SectionPage
      eyebrow="Role Guide"
      {...rolePages.analytics}
      showRoleBrowse
    />
  )
}
