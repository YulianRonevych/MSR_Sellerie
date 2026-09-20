import PageHero from "../components/PageHero"
import SceneKicker from "../components/SceneKicker"
import Reveal from "../components/Reveal"
import CtaButton from "../components/CtaButton"
import BeforeAfterSlider from "../components/BeforeAfterSlider"
import { useAvantApresPairs } from "../lib/useAvantApresPairs"

export default function Plastification() {
  const avantApres = useAvantApresPairs("avant-apres", "plastification")

  return (
    <div>
      <PageHero
        index="04"
        eyebrow="Plastification"
        title="Une protection qu'on ne voit pas. Qu'on ressent."
        description="MSR Sellerie propose également des prestations de plastification adaptées à différents types de supports et d'usages professionnels."
      />

      <section className="max-w-6xl mx-auto px-6 pb-10 md:pb-12">
        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr] md:gap-10 items-center">
          <Reveal type="scale">
            <div className="aspect-square w-full max-w-xs mx-auto overflow-hidden rounded-2xl bg-ink md:max-w-none">
              <img
                src="/avant-apres/plastification-1-apres.jpg"
                alt="Support plastifié par MSR Sellerie"
                className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-display italic text-2xl md:text-3xl leading-snug text-leather-light mb-6">
              Une seconde peau, discrète et solide.
            </p>
            <div className="space-y-4 border-l-2 border-leather/30 pl-6 text-bone-dim leading-relaxed text-lg">
              <p>
                La plastification permet de protéger une surface contre
                l'usure, les salissures, l'humidité et les manipulations
                répétées, tout en{" "}
                <span className="text-bone font-medium">
                  facilitant son entretien
                </span>{" "}
                au quotidien.
              </p>
              <p>
                Chaque réalisation est{" "}
                <span className="text-leather-light font-semibold">
                  effectuée sur mesure
                </span>{" "}
                afin de s'adapter parfaitement aux dimensions et aux
                contraintes du support.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 md:mt-16">
          <SceneKicker label="Une solution pratique et durable" />
          <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:gap-10">
            <Reveal>
              <h2 className="font-display font-semibold text-2xl md:text-3xl leading-snug text-bone">
                Résistant. Propre.{" "}
                <span className="text-leather-light">Facile à vivre.</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="space-y-4 text-bone-dim leading-relaxed text-lg">
                <p>
                  Selon vos besoins, nous pouvons intervenir pour protéger,
                  recouvrir ou remettre en état différents éléments
                  nécessitant une finition résistante et facile à nettoyer.
                </p>
                <p>
                  La plastification est particulièrement adaptée aux
                  environnements professionnels où l'hygiène, la résistance
                  et la simplicité d'entretien sont essentielles. MSR
                  Sellerie vous accompagne avec des solutions sur mesure.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-leather/30 bg-ink-light py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-6">
          <SceneKicker index="05" label="Avant / Après" />
          <Reveal>
            <h2 className="font-display font-bold text-act text-bone mb-4">
              Une couche invisible.
              <br />
              Une différence nette.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="text-bone-dim leading-relaxed max-w-2xl text-lg mb-6">
              Faites glisser pour comparer — des supports plastifiés par MSR
              Sellerie, pour une protection durable et un aspect soigné.
            </p>
          </Reveal>
          <Reveal delay={180} type="scale">
            <BeforeAfterSlider pairs={avantApres} />
          </Reveal>
        </div>
      </section>

      <section className="bg-bone px-6 py-14 text-center md:py-16">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="font-display font-bold text-act text-ink">
              Une protection.
              <br />
              Qui dure.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              Simple à entretenir, résistante au quotidien.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <CtaButton to="/contact" size="lg" className="mt-8">
              Parlons de votre support
            </CtaButton>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
