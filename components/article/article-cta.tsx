type ArticleCtaProps = {
  tool: string
  href: string
  placement: "top" | "mid" | "bottom"
}

const copy = {
  top: {
    label: "Top pick",
    action: "Try",
  },
  mid: {
    label: "Recommended next step",
    action: "Start trial",
  },
  bottom: {
    label: "Ready to try it?",
    action: "Get started with",
  },
}

export function ArticleCta({ tool, href, placement }: ArticleCtaProps) {
  const content = copy[placement]
  const isBottom = placement === "bottom"

  return (
    <aside
      className={
        isBottom
          ? "relative mt-12 overflow-hidden rounded-2xl border bg-secondary/60 p-6 text-foreground shadow-sm"
          : "mt-10 rounded-2xl border bg-card/80 p-5 shadow-sm"
      }
    >
      {isBottom ? (
        <div className="pointer-events-none absolute right-0 top-0 h-full w-28 bg-[radial-gradient(circle_at_center,oklch(100%_0_0/.55)_0_1px,transparent_1px_14px)]" />
      ) : null}
      <p
        className={
          isBottom
            ? "text-sm font-semibold text-primary"
            : "text-sm font-medium text-muted-foreground"
        }
      >
        {content.label}
      </p>
      <div className="relative mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className={isBottom ? "max-w-md text-2xl font-semibold leading-8" : "text-lg font-semibold leading-7"}>
          {placement === "top"
            ? `Try ${tool}`
            : placement === "mid"
              ? `Start your trial with ${tool}`
              : `Get started with ${tool}`}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noreferrer sponsored"
          className={
            isBottom
              ? "inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/90"
              : "inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          }
        >
          {placement === "top"
            ? `Try ${tool}`
            : placement === "mid"
              ? "Start Trial"
              : `Get Started with ${tool}`}
        </a>
      </div>
    </aside>
  )
}
