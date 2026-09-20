import TricolorBar from "./TricolorBar"

export default function Footer() {
  return (
    <footer className="bg-leather">
      <TricolorBar className="border-t" />
      <div className="max-w-6xl mx-auto px-6 py-8 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <div className="font-display font-bold text-lg text-ink mb-2">
            MSR Sellerie.
          </div>
          <p className="text-ink/75">
            Le savoir-faire se voit. La qualité se ressent.
          </p>
        </div>

        <div className="font-mono text-ink/75 space-y-1">
          <p className="text-ink uppercase tracking-wider text-xs mb-2">Contact</p>
          <p>Imp. du Riou, 31700 Blagnac</p>
          <p>07 60 48 57 61</p>
        </div>

        <div className="font-mono text-ink/75 space-y-1">
          <p className="text-ink uppercase tracking-wider text-xs mb-2">Horaires</p>
          <p>Lun – Sam · 07h00 – 19h00</p>
          <p>Dim · Fermé</p>
        </div>
      </div>
      <div className="text-center text-xs text-ink/60 pb-4 font-mono">
        © {new Date().getFullYear()} MSR Sellerie. Tous droits réservés.
      </div>
    </footer>
  )
}