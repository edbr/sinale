import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ArticleCta } from "@/components/article/article-cta"
import { GiscusComments } from "@/components/article/giscus-comments"
import { Button } from "@/components/ui/button"
import { toolLinks } from "@/lib/tool-links"

const verdictRows = [
  ["Primary Database Model", "Supabase"],
  ["Mobile App Ecosystem", "Firebase"],
  ["Authentication", "Tie"],
  ["Realtime Features", "Tie"],
  ["SQL and Relational Data", "Supabase"],
  ["NoSQL Document Data", "Firebase"],
  ["Hosting", "Firebase"],
  ["Developer Control", "Supabase"],
  ["Fastest Mobile Backend", "Firebase"],
  ["Overall Recommendation", "Supabase"],
]

const supabaseWins = [
  {
    title: "Real Postgres at the Core",
    body: "Supabase starts with a dedicated Postgres database. That matters if your app needs relational data, joins, SQL, constraints, transactions, migrations, reporting, or portability beyond one vendor's document model.",
  },
  {
    title: "Better Fit for Developer-Led Startups",
    body: "Supabase feels familiar to teams that already think in databases, APIs, SQL, TypeScript, and backend architecture. It gives startups a fast backend without hiding the underlying model too much.",
  },
  {
    title: "Cleaner Path for B2B SaaS",
    body: "Many SaaS apps eventually need organizations, roles, permissions, billing records, audit trails, admin views, analytics, and structured business data. Supabase's Postgres foundation fits that shape naturally.",
  },
  {
    title: "Less Conceptual Lock-In",
    body: "Because Supabase is built around open-source tools and Postgres, it is often easier to reason about exits, self-hosting, database access, backups, extensions, and long-term ownership.",
  },
]

const firebaseWins = [
  {
    title: "Excellent Mobile App Platform",
    body: "Firebase is still one of the fastest ways to build mobile apps with authentication, realtime sync, push notifications, analytics, crash reporting, remote config, hosting, and Google Cloud scale.",
  },
  {
    title: "More Complete App Growth Stack",
    body: "Firebase is not only a backend. It includes tools for app quality, messaging, analytics, experiments, releases, monitoring, and engagement. That is useful for consumer apps and mobile teams.",
  },
  {
    title: "Firestore Is Fast to Build With",
    body: "For apps that fit a document model, Firestore can be extremely productive. Client SDKs, offline support, realtime listeners, and security rules make simple collaborative and mobile experiences quick to ship.",
  },
  {
    title: "Tighter Google Cloud Integration",
    body: "Firebase sits on Google Cloud, so it connects naturally to Cloud Functions, Cloud Run, BigQuery, Cloud Storage, IAM, monitoring, and other infrastructure as apps grow more complex.",
  },
]

const useCases = [
  {
    title: "Choose Supabase if",
    items: [
      "You want Postgres as your source of truth",
      "Your app has relational data or complex permissions",
      "You are building B2B SaaS, internal tools, or dashboards",
      "You want SQL, migrations, database access, and portability",
      "Your team prefers developer control over platform magic",
    ],
  },
  {
    title: "Choose Firebase if",
    items: [
      "You are building a mobile-first or consumer app",
      "You want fast realtime sync with client SDKs",
      "You need hosting, analytics, messaging, and app quality tools",
      "Your data model works well as documents and collections",
      "You are already invested in Google Cloud or Flutter",
    ],
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

export function SupabaseVsFirebaseComparison() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-10 px-0">
          <Link href="/comparisons">
            <ArrowLeft />
            Comparisons
          </Link>
        </Button>

        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Comparison
        </p>
        <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
          Supabase vs Firebase (2026): Which Backend Platform Is Better?
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            Supabase and Firebase are two of the most popular backend platforms
            for startups, indie hackers, product teams, and developers who want
            to ship apps without managing every piece of infrastructure
            themselves.
          </p>
          <p>
            Firebase is the older, broader, and more mature app development
            platform. It is especially strong for mobile apps, realtime
            experiences, hosting, analytics, messaging, and Google Cloud
            integrations.
          </p>
          <p>
            Supabase is the more developer-controlled Postgres platform. It is
            especially strong for relational data, SQL-heavy products, B2B SaaS,
            internal tools, dashboards, and teams that want their backend to
            feel closer to a normal database-driven application.
          </p>
          <p>
            My short answer: choose Supabase for most new web apps and SaaS
            products. Choose Firebase when you are building mobile-first,
            consumer, realtime, or Google-native apps.
          </p>
        </div>

        <ArticleCta tool="Supabase" href={toolLinks.supabase} placement="top" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Quick Verdict</h2>
          <div className="mt-5 divide-y rounded-lg border">
            {verdictRows.map(([category, winner]) => (
              <div
                key={category}
                className="grid grid-cols-[1fr_auto] gap-4 px-4 py-3 text-sm"
              >
                <span className="text-muted-foreground">{category}</span>
                <span className="font-medium">{winner}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for SaaS and SQL:</span>{" "}
              Supabase
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Best for mobile apps:</span>{" "}
              Firebase
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Supabase?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Supabase is a Postgres development platform that bundles a
              managed Postgres database, authentication, storage, realtime
              subscriptions, Edge Functions, database APIs, and developer tools.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              The key idea is simple: keep Postgres at the center, then add the
              backend services modern product teams need around it.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <h2 className="text-2xl font-semibold">What is Firebase?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Firebase is Google&apos;s app development platform for building,
              running, and growing web and mobile apps. It includes products
              like Authentication, Firestore, Realtime Database, Hosting, Cloud
              Functions, Cloud Messaging, analytics, and app quality tools.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Firebase is especially compelling when you want a complete app
              platform rather than only a backend database.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Supabase Wins</h2>
          <div className="mt-5 grid gap-4">
            {supabaseWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Supabase</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Where Firebase Wins</h2>
          <div className="mt-5 grid gap-4">
            {firebaseWins.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-medium">Winner: Firebase</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Supabase vs Firebase for Databases
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            This is the biggest difference. Supabase gives you Postgres as the
            primary database. That means tables, relationships, SQL, joins,
            indexes, constraints, row-level security, extensions, and direct
            database access.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Firebase historically pushed developers toward Firestore or
            Realtime Database, both document-oriented NoSQL databases. In 2026,
            Firebase&apos;s Postgres story is stronger because Data Connect is
            moving toward SQL Connect, but the Firebase center of gravity is
            still its client-friendly app platform.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Choose Supabase if your app naturally wants relational data. Choose
            Firebase if your app naturally wants synced documents, collections,
            and client SDKs.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Authentication</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Both platforms offer strong authentication for common startup app
            needs: email/password, magic links or passwordless flows, social
            providers, session handling, and user management.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Firebase Auth is extremely mature, battle-tested, and integrated
            across the Firebase ecosystem. Supabase Auth is attractive because
            it pairs directly with Postgres and row-level security, which can
            make authorization feel more database-native.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            For most teams, authentication should not be the deciding factor.
            The real decision is how you want auth to connect to your data
            model.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Realtime Features</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Firebase helped define realtime app development. Firestore and
            Realtime Database make it easy to subscribe to client-side updates,
            especially for chat, presence, collaborative interfaces, and mobile
            experiences.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Supabase Realtime is compelling when the realtime state is tied to
            Postgres tables, database changes, channels, or multiplayer-style
            product features. It gives SQL-oriented teams a more familiar
            foundation.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Firebase still feels smoother for mobile-first realtime apps.
            Supabase feels better when realtime is one part of a relational
            product backend.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Hosting and Functions</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Firebase has the stronger built-in hosting story. Firebase Hosting,
            Cloud Functions, App Hosting, previews, and Google Cloud integration
            make it a natural home for teams already building in the Google
            ecosystem.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Supabase offers Edge Functions and storage, but many teams pair
            Supabase with Vercel, Netlify, Cloudflare, or another frontend host.
            That is not a weakness if you like composable infrastructure, but
            it is less all-in-one than Firebase.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Supabase pricing is generally easier to reason about if you think
            in projects, Postgres compute, storage, bandwidth, realtime usage,
            and add-ons. It feels closer to paying for backend infrastructure.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Firebase pricing is built around Spark and Blaze: a no-cost plan
            and a pay-as-you-go plan tied to product usage. That can be great
            at the beginning, but teams need to watch reads, writes, function
            invocations, storage, bandwidth, and Google Cloud-linked services.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Neither platform is automatically cheaper. Supabase is often easier
            to estimate for SQL-backed SaaS. Firebase can be very efficient for
            apps that fit its patterns, but poor data modeling can make usage
            costs harder to predict.
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="rounded-lg border bg-card p-5">
              <h2 className="text-2xl font-semibold">{useCase.title}</h2>
              <CheckList items={useCase.items} />
            </div>
          ))}
        </section>

        <ArticleCta tool="Supabase" href={toolLinks.supabase} placement="mid" />

        <section className="mt-12 rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Verdict</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Supabase is the better choice for most developer-led web apps,
            SaaS products, internal tools, B2B platforms, and startup backends
            where relational data and long-term control matter.
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Firebase is the better choice for mobile-first apps, consumer
            realtime products, Flutter or Google Cloud teams, and apps that
            benefit from Firebase&apos;s broader growth and app quality tooling.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Supabase Rating:</span> 9/10. Best
              for Postgres-backed apps and developer-controlled SaaS backends.
            </p>
            <p className="rounded-lg border bg-background p-4">
              <span className="font-medium">Firebase Rating:</span> 8.5/10.
              Best for mobile, realtime, and Google-native app development.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-lg border bg-foreground p-6 text-background">
          <h2 className="text-xl font-semibold">Bottom line</h2>
          <p className="mt-3 leading-7">
            Choose Supabase if you want your backend to feel like Postgres with
            modern app services around it. Choose Firebase if you want a
            complete app platform with excellent mobile, realtime, hosting, and
            Google Cloud integration.
          </p>
        </section>

        <ArticleCta
          tool="Supabase"
          href={toolLinks.supabase}
          placement="bottom"
        />

        <GiscusComments />
      </article>
    </main>
  )
}
