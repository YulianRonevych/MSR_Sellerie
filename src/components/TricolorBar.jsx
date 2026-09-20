export default function TricolorBar({ className = "" }) {
  return (
    <div
      className={`flex h-1 w-full border-black/15 ${className}`}
      aria-hidden="true"
    >
      <div className="flex-1 bg-[#1B4FA0]" />
      <div className="flex-1 bg-white" />
      <div className="flex-1 bg-[#C8102E]" />
    </div>
  )
}