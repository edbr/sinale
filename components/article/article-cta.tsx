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

  return (
    <aside
      className={
        placement === "bottom"
          ? "mt-12 rounded-lg border bg-foreground p-6 text-background"
          : "mt-10 rounded-lg border bg-card p-5"
      }
    >
      <p
        className={
          placement === "bottom"
            ? "text-sm font-medium text-background/70"
            : "text-sm font-medium text-muted-foreground"
        }
      >
        {content.label}
      </p>
      <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg font-semibold">
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
            placement === "bottom"
              ? "inline-flex h-11 items-center justify-center rounded-full bg-background px-5 text-sm font-medium text-foreground transition hover:bg-background/90"
              : "inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition hover:bg-foreground/90"
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
