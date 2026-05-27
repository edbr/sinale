"use client"

import Image from "next/image"
import { useState } from "react"

import { getLogoDevUrl, getToolDomain } from "@/lib/tool-logos"
import { cn } from "@/lib/utils"

type ToolLogoProps = {
  name: string
  domain?: string
  logo?: string
  className?: string
}

export function ToolLogo({ name, domain, logo, className }: ToolLogoProps) {
  const [hasError, setHasError] = useState(false)
  const logoDomain = domain ?? getToolDomain(name)
  const src = logo ?? getLogoDevUrl(logoDomain)
  const initials = name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  if (!src || hasError) {
    return (
      <span
        aria-hidden="true"
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-md border bg-secondary p-1 text-xs font-semibold text-secondary-foreground",
          className
        )}
      >
        {initials}
      </span>
    )
  }

  return (
    <Image
      src={src}
      alt={`${name} logo`}
      width={64}
      height={64}
      className={cn(
        "size-8 shrink-0 rounded-md border bg-background object-contain p-1",
        className
      )}
      loading="lazy"
      unoptimized
      onError={() => setHasError(true)}
    />
  )
}
