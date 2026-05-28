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
          ? "relative mt-12 overflow-hidden border border-orange-900/20 bg-[#fff7d8] p-6 text-foreground shadow-[0_16px_44px_rgba(51,33,22,0.1)]"
          : "mt-10 border border-orange-900/15 bg-card/80 p-5"
      }
    >
      {isBottom ? (
        <div className="pointer-events-none absolute right-0 top-0 h-full w-28 bg-[repeating-linear-gradient(135deg,rgba(239,106,74,0.16)_0_10px,transparent_10px_20px)]" />
      ) : null}
      <p
        className={
          isBottom
            ? "text-xs font-black uppercase tracking-[0.18em] text-primary"
            : "text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground"
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
              ? "inline-flex h-12 items-center justify-center border border-foreground bg-foreground px-6 text-sm font-bold text-background shadow-[4px_4px_0_rgba(51,33,22,0.18)] transition hover:-translate-y-0.5 hover:bg-primary"
              : "inline-flex h-11 items-center justify-center border border-foreground bg-foreground px-5 text-sm font-semibold text-background transition hover:bg-primary"
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
