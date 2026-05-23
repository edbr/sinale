import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Sinale",
  description:
    "Contact Sinale for questions, feedback, partnerships, affiliate programs, or AI tool recommendations.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Contact
        </p>
        <h1 className="text-5xl font-heading font-extrabold leading-[0.95] tracking-[-0.05em] md:text-7xl">
          Questions, feedback, partnership opportunities, or tool
          recommendations?
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          I&apos;d love to hear from you.
        </p>

        <div className="mt-12 grid gap-6">
          <section className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold">General inquiries</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Email:{" "}
              <a className="font-medium text-foreground" href="mailto:hello@sinale.cc">
                hello@sinale.cc
              </a>
            </p>
          </section>

          <section className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold">
              Partnerships & Affiliate Programs
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Email:{" "}
              <a className="font-medium text-foreground" href="mailto:eddy@sinale.cc">
                eddy@sinale.cc
              </a>
            </p>
          </section>

          <section className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold">Connect</h2>
            <div className="mt-3 grid gap-2 text-sm leading-6 text-muted-foreground">
              <p>
                LinkedIn:{" "}
                <a
                  className="font-medium text-foreground"
                  href="https://www.linkedin.com/in/edbelluti/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/edbelluti
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a
                  className="font-medium text-foreground"
                  href="https://github.com/edbr"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/edbr
                </a>
              </p>
            </div>
          </section>

          <section className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold">About Sinale</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Sinale is an independent publication covering AI tools for
              developers, designers, product managers, analysts, and founders.
              We publish reviews, comparisons, workflows, and practical guides
              to help professionals make better software decisions.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
