import { NavLink } from "react-router-dom"
import { useState } from "react"
import TricolorBar from "./TricolorBar"

const links = [
  { to: "/", label: "Accueil" },
  { to: "/sellerie-medicale", label: "Médical" },
  { to: "/sellerie-auto", label: "Auto" },
  { to: "/sellerie-sport", label: "Salle de sport" },
  { to: "/plastification", label: "Plastification" },
  { to: "/contact", label: "Contact" },
]

function NavItem({ to, label, onClick, dark }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      onClick={onClick}
      className={({ isActive }) =>
        `group relative py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
          isActive
            ? "text-ink"
            : dark
              ? "text-ink/70 hover:text-ink"
              : "text-ink/75 hover:text-ink"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {label}
          <span
            aria-hidden="true"
            className={`absolute -bottom-0.5 left-0 right-0 h-0.5 origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out group-hover:scale-x-100 ${
              isActive ? "scale-x-100" : ""
            }`}
          />
        </>
      )}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-leather/95 backdrop-blur">
      <TricolorBar className="border-b" />
      <div className="max-w-7xl pl-31.25 pr-6">
        <div className="flex items-center h-[7.5rem]">
          <div className="flex items-center h-full py-3">
            <NavLink to="/" className="flex items-center h-full">
              <img
                src="/logo.png"
                alt="MSR Sellerie"
                className="h-full w-auto object-contain"
              />
            </NavLink>
          </div>

          <nav className="hidden md:flex flex-1 items-center justify-between ml-31.25">
            {links.map((l) => (
              <NavItem key={l.to} {...l} />
            ))}
          </nav>

          <button
            className="md:hidden ml-auto text-ink p-2"
            onClick={() => setOpen(!open)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
          >
            <span className="block w-6 h-0.5 bg-ink mb-1.5" />
            <span className="block w-6 h-0.5 bg-ink mb-1.5" />
            <span className="block w-6 h-0.5 bg-ink" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 bg-leather/95 backdrop-blur px-6 pb-6 border-t border-black/10 pt-4">
          {links.map((l) => (
            <NavItem key={l.to} {...l} onClick={() => setOpen(false)} />
          ))}
        </nav>
      )}

      <div className="pointer-events-none absolute inset-x-0 top-full h-6 bg-linear-to-b from-leather/40 to-transparent" />
    </header>
  )
}
