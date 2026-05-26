import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title:
    "How I Added Comments to My Next.js Site with Giscus in Under 30 Minutes | Sinale",
  description:
    "A practical walkthrough of adding GitHub-powered comments to a Next.js site with Giscus, without building authentication or comment infrastructure.",
  path: "/developers/adding-comments-nextjs-giscus",
})

const skippedWork = [
  "Database management",
  "User account infrastructure",
  "Spam prevention systems",
  "Custom moderation tools",
]

const customSystemPros = [
  "Complete control",
  "Custom profiles",
  "Social logins",
  "Voting systems",
  "User dashboards",
]

const customSystemCons = [
  "More development time",
  "Authentication complexity",
  "Spam prevention",
  "Moderation requirements",
]

const giscusBenefits = [
  "Free",
  "Open source",
  "Fast",
  "GitHub-based authentication",
  "Easy moderation through GitHub Discussions",
  "Works well with static sites and Next.js",
]

const learned = [
  "Third-party integrations",
  "Environment variables",
  "GitHub Discussions",
  "React component architecture",
  "Production deployment",
]

const useGiscusIf = [
  "You use GitHub already",
  "Your audience is technical",
  "You want comments without maintaining infrastructure",
  "You prefer open-source tools",
  "You want a free solution",
]

const lookElsewhereIf = [
  "Your audience rarely uses GitHub",
  "You need custom user profiles",
  "You want advanced moderation workflows",
  "You plan to build a community platform",
]

function CheckList({ items }: { items: string[] }) {
  return (
    <div className="mt-4 grid gap-2 text-sm leading-6 text-muted-foreground">
      {items.map((item) => (
        <p key={item} className="flex gap-2">
          <Check className="mt-1 size-4 shrink-0 text-foreground" />
          {item}
        </p>
      ))}
    </div>
  )
}

export default function AddingCommentsNextjsGiscusPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-10 px-0">
          <Link href="/developers">
            <ArrowLeft />
            Developers
          </Link>
        </Button>

        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Developer Guide
        </p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          How I Added Comments to My Next.js Site with Giscus in Under 30
          Minutes
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>Most websites never get comments.</p>
          <p>
            That&apos;s one reason many creators skip adding them altogether.
            Between spam protection, user accounts, moderation, and database
            management, comments often feel like more work than they&apos;re
            worth.
          </p>
          <p>
            When I launched Sinale, I wanted readers to be able to ask
            questions, share experiences, and point out updates to the software
            tools I review. I also didn&apos;t want to build a complete
            authentication system just to support comments.
          </p>
          <p>
            After some research, I landed on Giscus. The setup was surprisingly
            straightforward, and within about 30 minutes I had a fully
            functional discussion system running on my Next.js site.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold tracking-tight">
            What is Giscus?
          </h2>
          <div className="mt-5 space-y-5 leading-7 text-muted-foreground">
            <p>
              Giscus is an open-source commenting system built on GitHub
              Discussions.
            </p>
            <p>
              Instead of storing comments in your own database, Giscus creates
              and manages discussion threads inside a GitHub repository.
              Visitors authenticate with GitHub and comments are synchronized
              automatically.
            </p>
            <p>
              The result is a lightweight commenting system without a lot of
              the usual infrastructure work.
            </p>
          </div>
          <div className="mt-6 rounded-lg border bg-card p-5">
            <h3 className="font-semibold">What you do not have to build</h3>
            <CheckList items={skippedWork} />
          </div>
          <p className="mt-5 leading-7 text-muted-foreground">
            If you already have a GitHub repository, most of the heavy lifting
            is handled for you.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold tracking-tight">
            Why I Chose Giscus
          </h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            I evaluated a few different options before settling on Giscus.
          </p>

          <div className="mt-6 grid gap-4">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="text-xl font-semibold">Building My Own System</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                The most flexible approach would have been building comments
                directly into the application using Supabase.
              </p>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <p className="font-medium">Pros</p>
                  <CheckList items={customSystemPros} />
                </div>
                <div>
                  <p className="font-medium">Cons</p>
                  <CheckList items={customSystemCons} />
                </div>
              </div>
              <p className="mt-5 leading-7 text-muted-foreground">
                For a new content site, it felt like overkill.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h3 className="text-xl font-semibold">
                Traditional Comment Platforms
              </h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Services like Disqus are easy to implement, but introduce
                additional scripts, ads, and third-party dependencies that I
                wanted to avoid.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h3 className="text-xl font-semibold">Giscus</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Giscus offered a simple middle ground.
              </p>
              <CheckList items={giscusBenefits} />
              <p className="mt-5 leading-7 text-muted-foreground">
                For a developer-focused audience, requiring a GitHub account
                felt like a reasonable tradeoff.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold tracking-tight">
            The Setup Process
          </h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            The installation was simpler than expected.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              {
                title: "1. Enable GitHub Discussions",
                body: "Inside the repository settings, I enabled Discussions. This becomes the storage layer for all comments.",
              },
              {
                title: "2. Create a Discussion Category",
                body: "I created a category specifically for article discussions. Every blog post automatically maps to a discussion thread within that category.",
              },
              {
                title: "3. Configure Giscus",
                body: "The Giscus setup page generated the repository name, repository ID, discussion category, and category ID automatically.",
              },
              {
                title: "4. Add the React Component",
                body: "I created a reusable component and rendered it at the bottom of article pages. Once deployed, discussions appeared immediately beneath every article.",
              },
            ].map((step) => (
              <div key={step.title} className="rounded-lg border bg-card p-5">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border bg-foreground p-6 text-background">
            <p className="leading-7">No database migrations.</p>
            <p className="mt-2 leading-7">No backend endpoints.</p>
            <p className="mt-2 leading-7">No user management.</p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold tracking-tight">
            What I Learned
          </h2>
          <div className="mt-5 space-y-5 leading-7 text-muted-foreground">
            <p>
              The technical implementation was useful, but the biggest benefit
              was simply shipping a feature.
            </p>
            <p>Adding comments forced me to work through:</p>
          </div>
          <CheckList items={learned} />
          <div className="mt-6 space-y-5 leading-7 text-muted-foreground">
            <p>Those skills transfer directly to larger product work.</p>
            <p>
              It&apos;s easy to spend days planning features. Sometimes the
              best approach is simply building something useful and learning
              through implementation.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold tracking-tight">
            Limitations of Giscus
          </h2>
          <div className="mt-5 space-y-5 leading-7 text-muted-foreground">
            <p>Giscus is not perfect.</p>
            <p>The biggest limitation is authentication.</p>
            <p>
              Users must have a GitHub account to participate. For developer
              communities, that&apos;s rarely a problem. For broader audiences
              focused on marketing, business, or consumer software, it may
              reduce participation significantly.
            </p>
            <p>
              If Sinale grows beyond a technical audience, I may eventually move
              to a custom solution built on Supabase and social authentication.
              For now, the simplicity outweighs the downside.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold tracking-tight">
            Should You Use Giscus?
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="text-xl font-semibold">Use Giscus if</h3>
              <CheckList items={useGiscusIf} />
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="text-xl font-semibold">Look elsewhere if</h3>
              <CheckList items={lookElsewhereIf} />
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            Final Thoughts
          </h2>
          <div className="mt-5 space-y-5 leading-7 text-muted-foreground">
            <p>
              Adding comments won&apos;t magically increase traffic or
              engagement. But it does something important: it turns a website
              from a one-way publication into a conversation.
            </p>
            <p>Readers can ask questions.</p>
            <p>Users can share experiences.</p>
            <p>Products can be discussed publicly.</p>
            <p>For Sinale, that&apos;s exactly what I wanted.</p>
            <p>
              The implementation took less than half an hour, cost nothing, and
              taught me something new along the way. That&apos;s a worthwhile
              trade for almost any side project.
            </p>
            <p>
              Have you implemented Giscus, Disqus, or a custom commenting
              system on your site? What worked and what didn&apos;t? Join the
              discussion below.
            </p>
          </div>
        </section>

        <GiscusComments />
      </article>
    </main>
  )
}
