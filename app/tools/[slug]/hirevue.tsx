import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { RelatedContent } from "@/components/article/related-content"
import { ToolLogo } from "@/components/site/tool-logo"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"
import type { CardItem } from "@/lib/site-content"

const bestFor = [
  "Enterprise and high-volume recruiting teams",
  "Organizations hiring for roles where structured assessments matter",
  "Early talent, campus, retail, hourly, technical, and frontline hiring programs",
  "Teams that need video interviewing, assessments, scheduling, and candidate engagement together",
  "Companies with compliance, auditability, and candidate-experience requirements",
]

const notFor = [
  "Small teams that only need simple interview scheduling",
  "Startups looking for low-cost self-serve recruiting software",
  "Teams that want a lightweight async video tool without assessments",
  "Hiring workflows where human review and live interviews are the only acceptable screen",
  "Organizations not ready to manage AI, fairness, accessibility, and candidate trust concerns",
]

const features = [
  {
    title: "Video Interviewing",
    body: "HireVue supports on-demand and live video interviewing so candidates can complete structured interviews asynchronously or meet with hiring teams in real time.",
  },
  {
    title: "Assessments",
    body: "HireVue offers pre-hire assessments, virtual job tryouts, game-based assessments, technical assessments, language proficiency tests, and job-relevant skill validation.",
  },
  {
    title: "Conversational AI",
    body: "The platform includes conversational AI and text automation for candidate engagement, screening support, reminders, and communication across hiring workflows.",
  },
  {
    title: "Scheduling Automation",
    body: "HireVue can automate interview coordination, reduce back-and-forth scheduling, and help candidates choose times that work for them.",
  },
  {
    title: "Interview Insights",
    body: "HireVue uses transcription and generative AI in Interview Insights to help analyze live and on-demand interviews and surface structured information for review.",
  },
  {
    title: "Enterprise Readiness",
    body: "HireVue emphasizes enterprise hiring needs, including integrations, structured workflows, analytics, compliance considerations, and FedRAMP certification.",
  },
]

function CheckList({ items }: { items: string[] }) {
  return (
    <div className="mt-4 grid gap-2 text-sm">
      {items.map((item) => (
        <p key={item} className="flex gap-2">
          <Check className="mt-0.5 size-4 shrink-0" />
          <span>{item}</span>
        </p>
      ))}
    </div>
  )
}

export function HirevueToolPage({ relatedItems }: { relatedItems: CardItem[] }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-10 px-0">
          <Link href="/tools">
            <ArrowLeft />
            Tools
          </Link>
        </Button>

        <p className="mb-4 text-sm font-medium text-muted-foreground">Tools</p>
        <ToolLogo name="HireVue" className="mb-5 size-12 rounded-lg" />
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          HireVue
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          HireVue is listed in Sinale&apos;s AI recruiting directory for video
          interviewing, skill validation, pre-hire assessments, conversational
          AI, interview scheduling, candidate engagement, and high-volume hiring.
        </p>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            HireVue is an enterprise hiring platform built around skill
            validation. It combines video interviewing, structured assessments,
            conversational AI, scheduling automation, technical assessments,
            language testing, and candidate engagement in one recruiting
            workflow.
          </p>
          <p>
            The core value is scale. Recruiters can standardize early screening,
            let candidates complete interviews and assessments on their own
            schedule, and use structured signals to decide who should move
            forward faster than a manual phone-screen process.
          </p>
          <p>
            The tradeoff is that HireVue is not a casual hiring widget. It works
            best when a company is ready to define job-relevant criteria,
            communicate the process clearly to candidates, review fairness and
            accessibility, and govern how AI-generated insights influence
            hiring decisions.
          </p>
        </div>

        <ArticleCta tool="HireVue" href={toolLinks.hirevue} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            HireVue is best for larger recruiting teams that need structured
            screening at volume. It is especially relevant for early talent,
            hourly, frontline, technical, and distributed hiring where candidate
            throughput and consistency matter.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Smaller teams should be careful. If you only need scheduling, a
            simple applicant tracking workflow, or occasional async video
            interviews, HireVue may be heavier than the problem requires.
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">Best For</h2>
            <CheckList items={bestFor} />
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">Not Best For</h2>
            <CheckList items={notFor} />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What HireVue Does</h2>
          <div className="mt-5 grid gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            HireVue for Video Interviewing
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            HireVue&apos;s video interviewing workflow is useful when recruiters
            need structured candidate responses without scheduling every first
            conversation live. Candidates can answer consistent questions, while
            recruiters and hiring managers review responses when they have time.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            The candidate experience matters. Teams should explain why the video
            interview is being used, offer accessibility support, keep questions
            job-relevant, and avoid treating recorded interviews as a replacement
            for human judgment.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            HireVue for Skill Validation
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            HireVue&apos;s bigger value is assessment design. The platform can
            combine interviews with job-related assessments, technical
            exercises, language tests, and virtual job tryouts so teams are not
            relying only on resumes or unstructured interviews.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            That makes it strongest when hiring leaders know what skills predict
            success in the role. The assessment should validate the work, not
            create unnecessary friction or screen for polish unrelated to job
            performance.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">AI and Governance Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            HireVue uses AI across parts of its platform, including
            conversational automation, transcription, interview insights, and
            assessment workflows. That can improve recruiter productivity, but
            it also requires clear governance.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Before rolling it out, define what AI is allowed to summarize,
            score, recommend, or automate. Document human review points, adverse
            impact monitoring, accessibility accommodations, consent language,
            and how candidates can get support if the process does not work for
            them.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing Notes</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            HireVue does not publish simple self-serve pricing. Its official
            pricing page routes buyers through a quote request, which is typical
            for enterprise recruiting platforms with modules, volume, services,
            integrations, and compliance requirements.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Budget for more than the software line item. The real cost can
            include implementation, assessment design, ATS integrations,
            recruiter training, candidate support, legal or compliance review,
            and ongoing optimization of hiring workflows.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Final Recommendation</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose HireVue if you need a serious enterprise platform for
            structured interviews, assessments, candidate engagement, and
            high-volume recruiting. It is strongest when scale, consistency, and
            job-relevant skill validation are more important than lightweight
            setup.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Do not buy it just because AI screening sounds efficient. Start with
            the roles, skills, candidate volume, compliance expectations, and
            human review process. HireVue is most valuable when it supports a
            well-designed hiring system rather than replacing one.
          </p>
        </section>

        <ArticleCta tool="HireVue" href={toolLinks.hirevue} placement="bottom" />

        <RelatedContent title="More tools" items={relatedItems} />

        <GiscusComments />
      </article>
    </main>
  )
}
