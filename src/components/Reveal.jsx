import { useInView } from "../hooks/useInView"

export default function Reveal({
  as: Tag = "div",
  type = "up",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      data-reveal={type === "up" ? "" : type}
      data-revealed={inView ? "true" : "false"}
      style={{ "--reveal-delay": `${delay}ms` }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )
}
