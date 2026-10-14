import type { ComponentProps } from "react"

/** Âncora que abre links http(s) em nova aba, com rel seguro. */
export function SmartLink({ href = "", ...props }: ComponentProps<"a">) {
  const isExternal = href.startsWith("http")

  return (
    <a
      href={href}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    />
  )
}
