import { Link } from "react-router-dom"

const variants = {
  solid: "bg-leather hover:bg-leather-light text-ink font-semibold",
  ghost: "text-sm font-medium uppercase tracking-wider text-ink/70 hover:text-ink",
  ghostDark:
    "text-sm font-medium uppercase tracking-wider text-bone-dim hover:text-bone",
}

const sizes = {
  md: "px-6 py-3",
  lg: "px-8 py-4",
  none: "",
}

export default function CtaButton({
  to,
  href,
  onClick,
  children,
  variant = "solid",
  size = "md",
  className = "",
}) {
  const paddedSize = variant === "solid" ? sizes[size] : ""
  const cls = `group inline-flex items-center gap-2 transition-colors duration-300 ${variants[variant]} ${paddedSize} ${className}`

  const content = (
    <>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
      >
        →
      </span>
    </>
  )

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={cls}>
        {content}
      </Link>
    )
  }

  return (
    <a href={href} onClick={onClick} className={cls}>
      {content}
    </a>
  )
}
