import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function NewsletterCta() {
  return (
    <section className="border-t bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-background/70">
            Sinale newsletter
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
            Get practical AI tool picks and workflows in your inbox.
          </h2>
        </div>
        <Button
          asChild
          variant="secondary"
          size="lg"
          className="h-12 w-fit rounded-full px-5"
        >
          <Link href="https://sinale.beehiiv.com/subscribe">
            Subscribe
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  )
}
