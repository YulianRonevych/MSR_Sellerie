import { useState } from "react"

export default function BeforeAfterSlider({ pairs }) {
  const [index, setIndex] = useState(0)
  const [pos, setPos] = useState(50)

  if (!pairs || pairs.length === 0) return null

  const count = pairs.length
  const pair = pairs[index % count]

  function goTo(i) {
    setIndex((i + count) % count)
    setPos(50)
  }

  return (
    <div className="mx-auto max-w-md">
      <div
        key={index}
        className="animate-fade-in relative aspect-4/3 w-full select-none"
      >
        {/* Clipping layer: only what must be cropped for the reveal effect
            lives here, so the handle below is never cut off. */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl bg-ink-light">
          <img
            src={pair.after}
            alt={`${pair.alt} — après rénovation`}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            draggable="false"
          />
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <img
              src={pair.before}
              alt={`${pair.alt} — avant rénovation`}
              className="h-full w-full object-cover"
              draggable="false"
            />
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-ink"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink/70 bg-leather text-ink shadow-lg transition-transform duration-200 hover:scale-110">
            <span aria-hidden="true" className="text-xs tracking-widest">
              ↔
            </span>
          </div>
        </div>

        <span className="pointer-events-none absolute bottom-3 left-3 rounded-sm bg-bone/70 px-2.5 py-1 text-xs font-medium uppercase tracking-widest text-ink">
          Avant
        </span>
        <span className="pointer-events-none absolute right-3 bottom-3 rounded-sm bg-bone/70 px-2.5 py-1 text-xs font-medium uppercase tracking-widest text-ink">
          Après
        </span>

        <input
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Faites glisser pour comparer avant et après"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      {count > 1 && (
        <div className="mt-4 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Réalisation précédente"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-bone transition-all duration-200 hover:-translate-x-0.5 hover:border-leather hover:text-leather-light"
          >
            ←
          </button>
          <span className="font-mono text-xs tracking-widest text-bone-dim">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Réalisation suivante"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-bone transition-all duration-200 hover:translate-x-0.5 hover:border-leather hover:text-leather-light"
          >
            →
          </button>
        </div>
      )}
    </div>
  )
}
