import SceneKicker from "../components/SceneKicker"
import Reveal from "../components/Reveal"

const info = [
  {
    label: "Téléphone",
    value: "07 60 48 57 61",
    action: "Appeler",
    href: "tel:+33760485761",
  },
  {
    label: "Adresse / Localisation",
    value: "Imp. du Riou, 31700 Blagnac",
    action: "Nous trouver",
    href: "https://www.google.com/maps/search/?api=1&query=Imp.+du+Riou,+31700+Blagnac",
  },
  {
    label: "Horaires",
    value: (
      <>
        Lundi – Samedi · 07h00 – 19h00
        <br />
        Dimanche · Fermé
      </>
    ),
  },
]

export default function Contact() {
  return (
    <div>
      <section className="bg-bone px-6 pt-6 pb-8 md:pt-8 md:pb-10">
        <div className="max-w-4xl mx-auto">
          <SceneKicker
            index="06"
            label="Nous écrire"
            lineClassName="bg-leather-light"
            textClassName="text-leather-light"
          />
          <Reveal type="scale">
            <div className="flex flex-col items-center gap-3 text-center">
              <img
                src="/logo.png"
                alt="MSR Sellerie"
                className="h-20 w-auto object-contain md:h-24"
              />
              <h1 className="font-display font-semibold text-2xl text-ink md:text-3xl">
                Nos coordonnées.
              </h1>
              <p className="max-w-md text-ink/70 leading-relaxed">
                Téléphone, atelier, horaires — tout ce qu'il faut pour nous
                joindre.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16 md:pb-20">
        <div className="divide-y divide-black/10 border-t border-b border-black/10">
          {info.map((item, i) => {
            const Tag = item.href ? "a" : "div"
            return (
              <Reveal key={item.label} delay={i * 80}>
                <Tag
                  href={item.href}
                  className="group grid grid-cols-1 gap-1.5 py-5 md:grid-cols-[11rem_1fr_9rem] md:items-center md:gap-6 md:py-6"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-leather-light">
                    {item.label}
                  </p>
                  <p className="font-display font-semibold text-2xl text-bone md:text-3xl">
                    {item.value}
                  </p>
                  {item.action && (
                    <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-bone-dim transition-colors group-hover:text-leather-light md:justify-self-end">
                      {item.action}
                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  )}
                </Tag>
              </Reveal>
            )
          })}
        </div>
      </section>
    </div>
  )
}
