import PageHero from "../components/PageHero"
import SceneKicker from "../components/SceneKicker"
import Reveal from "../components/Reveal"
import CtaButton from "../components/CtaButton"
import BeforeAfterSlider from "../components/BeforeAfterSlider"
import ImageCarousel from "../components/ImageCarousel"
import { useAvantApresPairs } from "../lib/useAvantApresPairs"
import { useImageGroups } from "../lib/useImageGroups"

const clientele = [
  "Cabinets médicaux",
  "Kinésithérapeutes",
  "Ostéopathes",
  "Infirmiers et professionnels de santé",
  "Cliniques et centres médicaux",
  "Professionnels disposant de mobilier de soin ou d'examen",
]

export default function SellerieMedicale() {
  const avantApres = useAvantApresPairs("avant-apres", "medical")
  const salleAttenteGroups = useImageGroups("salle-attente", "salle-attente")

  return (
    <div>
      <PageHero
        index="01"
        eyebrow="Sellerie médicale"
        title="La précision se porte aussi sur les matériaux."
        description="MSR Sellerie est spécialisée dans la rénovation et la restauration de mobilier destiné aux professionnels de santé — sans jamais compromettre l'hygiène."
      />

      <section className="max-w-6xl mx-auto px-6 pb-10 md:pb-12">
        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-12 items-center">
          <Reveal type="scale">
            <div className="aspect-4/5 w-full overflow-hidden rounded-2xl bg-ink">
              <img
                src="/avant-apres/medical-1-apres.jpg"
                alt="Fauteuil médical rénové par MSR Sellerie"
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="font-display italic text-2xl md:text-3xl leading-snug text-leather-light mb-6">
              Remis à neuf, jamais remplacé.
            </p>
            <div className="space-y-4 border-l-2 border-leather/30 pl-6 text-bone-dim leading-relaxed text-lg">
              <p>
                Tables d'examen, fauteuils médicaux, tabourets, sièges et
                différents équipements peuvent être{" "}
                <span className="text-bone font-medium">
                  entièrement remis en état
                </span>{" "}
                afin de retrouver une finition propre, confortable et
                professionnelle.
              </p>
              <p>
                Plutôt que de remplacer un mobilier encore parfaitement
                fonctionnel, nous intervenons directement sur son revêtement
                afin de lui offrir{" "}
                <span className="text-leather-light font-semibold">
                  une seconde vie
                </span>
                .
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 md:mt-16">
          <SceneKicker label="Une rénovation adaptée" />
          <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:gap-10">
            <Reveal>
              <h2 className="font-display font-semibold text-2xl md:text-3xl leading-snug text-bone">
                Fait pour être désinfecté.{" "}
                <span className="text-leather-light">Pensé pour durer.</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="space-y-4 text-bone-dim leading-relaxed text-lg">
                <p>
                  Chaque intervention est réalisée sur mesure selon la forme,
                  les dimensions et l'utilisation de votre équipement.
                </p>
                <p>
                  Nous remplaçons les revêtements usés, déchirés, tachés ou
                  détériorés et apportons un soin particulier aux finitions
                  afin d'obtenir un résultat esthétique et durable.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-10 md:mt-12">
          <SceneKicker label="Nos prestations s'adressent notamment aux" />
          <ul className="grid gap-3 sm:grid-cols-2 max-w-2xl">
            {clientele.map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <li className="flex items-start gap-3 text-bone-dim text-lg">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leather" />
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid md:grid-cols-[2fr_3fr] gap-6 md:gap-10 items-center md:mt-12">
          <Reveal type="scale">
            <ImageCarousel groups={salleAttenteGroups} alt="Chaise de salle d'attente" />
          </Reveal>
          <Reveal delay={100}>
            <SceneKicker label="Et aussi" />
            <h3 className="font-display font-semibold text-xl text-bone mb-2">
              Chaise et matériaux de salle d'attente
            </h3>
            <p className="text-bone-dim leading-relaxed">
              Nous prenons également en charge les chaises et matériaux de
              vos espaces d'attente : recouvrement des assises, remplacement
              des mousses et choix de tissus faciles à entretenir, pour un
              espace accueillant et cohérent avec le reste de votre cabinet.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-leather/30 bg-ink-light py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-6">
          <SceneKicker index="02" label="Avant / Après" />
          <Reveal>
            <h2 className="font-display font-bold text-act text-bone mb-4">
              Le même fauteuil.
              <br />
              Une autre présence.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-bone-dim leading-relaxed max-w-2xl text-lg mb-6">
              Faites glisser pour comparer — chaque rénovation transforme un
              mobilier abîmé ou vieillissant tout en conservant sa structure
              d'origine.
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
              Un mobilier sain.
              <br />
              Pensé pour durer.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              Des finitions propres et hygiéniques, pensées pour vos
              patients.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <CtaButton to="/contact" size="lg" className="mt-8">
              Parlons de votre cabinet
            </CtaButton>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
