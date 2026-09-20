import { Link } from "react-router-dom"

export default function SpecialtyCard({ to, title, description }) {
  return (
    <Link
      to={to}
      className="group flex h-full overflow-hidden rounded-lg bg-ink shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-black/10"
    >
      <div className="w-1.5 shrink-0 bg-[#1B4FA0] transition-colors duration-300 group-hover:bg-[#2660c2]" />
      <div className="flex-1 p-6">
        <h3 className="font-display font-semibold text-xl text-bone mb-2">
          {title}
        </h3>
        <p className="text-bone-dim leading-relaxed">{description}</p>
      </div>
    </Link>
  )
}
