import PageHero from "../components/PageHero"
import SceneKicker from "../components/SceneKicker"
import Reveal from "../components/Reveal"
import CtaButton from "../components/CtaButton"
import BeforeAfterSlider from "../components/BeforeAfterSlider"
import { useAvantApresPairs } from "../lib/useAvantApresPairs"

const prestations = [
  {
    title: "Ciel de toit décollé",
    description: "Remise en état du revêtement.",
  },
  {
    title: "Finition soignée",
    description: "Pose propre et adaptée à l'habitacle.",
  },
  {
    title: "Une seconde vie",
    description: "Rénovation plutôt que remplacement complet.",
  },
]

export default function SellerieAuto() {
  const avantApres = useAvantApresPairs("avant-apres", "auto")

  return (
    <div>
      <PageHero
        index="02"
        tone="dark"
        eyebrow="Sellerie auto"
        title="La route use tout. Sauf le savoir-faire."
        description="MSR Sellerie intervient sur le ciel de toit de votre véhicule pour lui redonner un intérieur net et durable."
      />

      <section className="max-w-6xl mx-auto px-6 pt-10 pb-10 md:pt-12 md:pb-12">
        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-12 items-center">
          <Reveal type="scale">
            <div className="aspect-4/5 w-full overflow-hidden rounded-2xl bg-ink">
              <img
                src="/avant-apres/auto-1-apres.jpg"
                alt="Ciel de toit automobile rénové par MSR Sellerie"
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="font-display italic text-2xl md:text-3xl leading-snug text-leather-light mb-6">
              Redonnez à votre habitacle son aspect d'origine.
            </p>
            <div className="space-y-4 border-l-2 border-leather/30 pl-6 text-bone-dim leading-relaxed text-lg">
              <p>
                Avec le temps, le ciel de toit peut se décoller, se
                détendre ou se détériorer. MSR Sellerie intervient pour sa{" "}
                <span className="text-bone font-medium">
                  rénovation complète
                </span>
                , avec une finition propre et soignée, adaptée à votre
                véhicule.
              </p>
              <p>
                Une intervention ciblée qui permet de retrouver un
                intérieur net, confortable et durable, sans{" "}
                <span className="text-leather-light font-semibold">
                  remplacer inutilement les éléments d'origine
                </span>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bone py-4 md:py-8">
        <div className="max-w-6xl mx-auto px-6">
          {prestations.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-ink/10 py-8 last:border-b md:grid-cols-[3rem_1fr_2fr] md:gap-10">
                <span className="font-mono text-sm text-leather-light">
                  0{i + 1}
                </span>
                <h3 className="font-display font-semibold text-xl text-ink transition-colors group-hover:text-leather-light md:text-2xl">
                  {p.title}
                </h3>
                <p className="text-ink/60 leading-relaxed md:max-w-md">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10 md:py-12">
        <SceneKicker label="Avant / Après" />
        <Reveal>
          <h2 className="font-display font-bold text-act text-bone mb-4">
            Même support.
            <br />
            Nouvelle allure.
          </h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="text-bone-dim leading-relaxed max-w-2xl text-lg mb-6">
            Faites glisser pour comparer — ciels de toit rénovés par MSR
            Sellerie, sans changer la structure d'origine du véhicule.
          </p>
        </Reveal>
        <Reveal delay={180} type="scale">
          <BeforeAfterSlider pairs={avantApres} />
        </Reveal>
      </section>

      <section className="bg-bone px-6 py-14 text-center md:py-16">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="font-display font-bold text-act text-ink">
              Un ciel de toit.
              <br />
              Comme neuf.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              Une finition nette, sans remplacer tout l'habitacle.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <CtaButton to="/contact" size="lg" className="mt-8">
              Parlons de votre véhicule
            </CtaButton>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
