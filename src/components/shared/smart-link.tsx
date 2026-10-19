import type { ComponentProps } from "react"
import { trackLinkClick } from "@/lib/analytics"

/** Âncora que abre links http(s) em nova aba, com rel seguro, e conta o clique no GoatCounter. */
export function SmartLink({ href = "", onClick, ...props }: ComponentProps<"a">) {
  const isExternal = href.startsWith("http")

  return (
    <a
      href={href}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      onClick={(event) => {
        trackLinkClick(href, event.currentTarget.getAttribute("aria-label") ?? event.currentTarget.textContent ?? undefined)
        onClick?.(event)
      }}
      {...props}
    />
  )
}
