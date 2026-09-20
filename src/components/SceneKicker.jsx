import Reveal from "./Reveal"

export default function SceneKicker({
  index,
  label,
  lineClassName = "bg-leather",
  textClassName = "text-leather-light",
}) {
  return (
    <Reveal type="line" className="mb-6 flex items-center gap-4">
      <span className={`h-px w-10 shrink-0 ${lineClassName}`} aria-hidden="true" />
      <span
        className={`font-mono text-xs uppercase tracking-[0.25em] ${textClassName}`}
      >
        {index && <span className="mr-2 opacity-60">{index}</span>}
        {label}
      </span>
    </Reveal>
  )
}
