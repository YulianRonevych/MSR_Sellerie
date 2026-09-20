import { useRef } from "react"
import ClientsCloud from "../components/ClientsCloud"
import SpecialtyCard from "../components/SpecialtyCard"
import GoogleReviews from "../components/GoogleReviews"
import SceneKicker from "../components/SceneKicker"
import Reveal from "../components/Reveal"
import CtaButton from "../components/CtaButton"
import BeforeAfterSlider from "../components/BeforeAfterSlider"
import { useAvantApresPairs } from "../lib/useAvantApresPairs"
import { lenis } from "../lib/smoothScroll"

const specialties = [
  {
    to: "/sellerie-medicale",
    title: "Médical",
    description:
      "Fauteuils, tables d'examen et mobilier de soin recouverts pour un usage quotidien en toute hygiène.",
  },
  {
    to: "/sellerie-auto",
    title: "Auto",
    description:
      "Rénovation et remise en état de ciels de toit automobiles. Nous redonnons à l'habitacle une finition propre et soignée grâce à un travail précis, adapté à chaque véhicule.",
  },
  {
    to: "/sellerie-sport",
    title: "Salle de sport",
    description:
      "Bancs de musculation, machines guidées et équipements rembourrés remis en état pour un usage intensif.",
  },
  {
    to: "/plastification",
    title: "Plastification",
    description:
      "Protection durable de vos équipements et surfaces contre l'usure, les salissures et l'humidité.",
  },
]

export default function Accueil() {
  const medical = useAvantApresPairs("avant-apres", "medical")
  const auto = useAvantApresPairs("avant-apres", "auto")
  const sport = useAvantApresPairs("avant-apres", "sport")
  const plastification = useAvantApresPairs("avant-apres", "plastification")
  const featured = [...medical, ...auto, ...sport, ...plastification]
  const parallaxRef = useRef(null)
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  function handleHeroMouseMove(e) {
    if (reducedMotion || !parallaxRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    parallaxRef.current.style.transform = `translate(${x * -14}px, ${y * -14}px)`
  }

  function handleHeroMouseLeave() {
    if (!parallaxRef.current) return
    parallaxRef.current.style.transform = "translate(0, 0)"
  }

  return (
    <div>
      {/* SCÈNE 01 — OUVERTURE */}
      <section
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative bg-bone px-6 pt-36 pb-12 md:pb-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 0, transparent 45%), radial-gradient(circle at 80% 60%, white 0, transparent 40%)",
          }}
        />
        {/* Texte : conteneur indépendant, sans grid partagé avec les cercles. */}
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <SceneKicker
              label="MSR Sellerie — atelier de rénovation"
              lineClassName="bg-leather-light"
              textClassName="text-leather-light"
            />
            <Reveal delay={60}>
              <h1 className="font-display font-bold text-mega text-ink">
                Donner une
                <br />
                seconde vie
                <br />
                à ce qui vous
                <br />
                accompagne.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
                Sellerie médicale, automobile, sport et plastification — un
                savoir-faire artisanal au service des professionnels qui ne
                veulent pas jeter ce qui fonctionne encore.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <CtaButton
                  href="#specialites"
                  onClick={(e) => {
                    e.preventDefault()
                    lenis.scrollTo("#specialites", { offset: -110 })
                  }}
                >
                  Découvrir notre savoir-faire
                </CtaButton>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Cercles clients : conteneur totalement indépendant du texte.
            Mobile : flux normal, sous le texte. Desktop : détaché du flux
            (position absolute) et posé au-dessus de tout, sans jamais être
            piégé par un ancêtre — z-index très élevé, aucun overflow-hidden
            ni clip-path sur les parents. */}
        <div className="pointer-events-none relative z-9999 mt-10 md:absolute md:inset-0 md:mt-0 md:flex md:items-center">
          <div className="mx-auto w-full max-w-7xl px-0 md:flex md:justify-end md:px-6">
            <div className="pointer-events-auto mx-auto w-full max-w-xs md:mx-0 md:max-w-md min-[1460px]:translate-x-25 xl:max-w-3xl min-[1650px]:max-w-242!">
              <Reveal delay={160} type="scale">
                <div
                  ref={parallaxRef}
                  className="transition-transform duration-300 ease-out"
                >
                  <p className="mb-4 text-center font-mono text-xs uppercase tracking-[0.25em] text-ink/50">
                    Ils nous font confiance
                  </p>
                  <ClientsCloud />
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <Reveal
          type="line"
          delay={120}
          className="relative mx-auto mt-10 flex h-px w-full max-w-7xl"
        >
          <span className="h-full flex-1 bg-[#1B4FA0]" />
          <span className="h-full flex-1 bg-ink" />
          <span className="h-full flex-1 bg-[#C8102E]" />
        </Reveal>

        <button
          type="button"
          onClick={() => lenis.scrollTo("#philosophie", { offset: -100 })}
          aria-label="Découvrir la suite"
          className="group relative z-10 mx-auto mt-8 flex flex-col items-center gap-2 text-ink/50 transition-colors hover:text-ink"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em]">
            Découvrir
          </span>
          <span aria-hidden="true" className="animate-bounce-soft text-lg">
            ↓
          </span>
        </button>
      </section>

      {/* SCÈNE 02 — AVIS CLIENTS */}
      <GoogleReviews index="02" />

      {/* SCÈNE 03 — LA PHILOSOPHIE */}
      <section id="philosophie" className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <SceneKicker index="03" label="Notre philosophie" />
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <Reveal>
            <h2 className="font-display font-bold text-act text-bone">
              L'art du détail.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <div className="space-y-4 text-lg leading-relaxed text-bone-dim">
              <p>
                Plutôt que de remplacer un mobilier encore parfaitement
                fonctionnel, nous intervenons directement sur son revêtement
                pour lui offrir une seconde vie — propre, confortable et
                durable.
              </p>
              <p>
                Chaque intervention est réalisée sur mesure, selon la forme,
                les dimensions et l'usage de votre équipement, avec un soin
                particulier apporté aux finitions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SCÈNE 04 — LES UNIVERS */}
      <section id="specialites" className="bg-ink-light py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SceneKicker index="04" label="Nos univers" />
          <Reveal>
            <h2 className="font-display font-bold text-act text-bone mb-6 max-w-2xl">
              Un métier,
              <br />
              quatre univers.
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map((s, i) => (
              <Reveal key={s.to} delay={i * 50} className="h-full">
                <SpecialtyCard {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SCÈNE 05 — LA TRANSFORMATION */}
      {featured.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-12 md:py-16">
          <SceneKicker index="05" label="La transformation" />
          <Reveal>
            <h2 className="font-display font-bold text-act text-bone mb-3">
              Une transformation visible.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="mb-6 max-w-xl text-lg leading-relaxed text-bone-dim">
              Faites glisser pour comparer — la même pièce, avant et après
              notre intervention.
            </p>
          </Reveal>
          <Reveal delay={100} type="scale">
            <BeforeAfterSlider pairs={featured} />
          </Reveal>
        </section>
      )}

      {/* SCÈNE 06 — LE SAVOIR-FAIRE */}
      <section className="bg-ink-light py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SceneKicker index="06" label="Le savoir-faire" />
          <Reveal>
            <h2 className="font-display font-bold text-act text-bone mb-8 max-w-2xl">
              Le détail
              <br />
              change tout.
            </h2>
          </Reveal>

          <div className="space-y-8">
            <div className="grid items-center gap-6 md:grid-cols-[2fr_3fr] md:gap-10">
              <Reveal type="scale">
                <div className="aspect-4/3 w-full overflow-hidden rounded-2xl bg-ink">
                  <img
                    src="/sur-mesure/sur-mesure-1.jpg"
                    alt="Matériaux découpés à l'atelier"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />
                </div>
              </Reveal>
              <Reveal delay={60}>
                <h3 className="font-display font-semibold text-2xl text-bone mb-2">
                  Adapté à votre projet
                </h3>
                <p className="text-bone-dim text-lg leading-relaxed">
                  Chaque projet est unique. Nous concevons et réalisons vos
                  pièces selon vos dimensions, vos matières et votre usage,
                  qu'il s'agisse d'une pièce unique ou d'une petite série.
                </p>
              </Reveal>
            </div>

            <div className="grid items-center gap-6 md:grid-cols-[3fr_2fr] md:gap-10">
              <Reveal>
                <h3 className="font-display font-semibold text-2xl text-bone mb-2">
                  Le soin du détail
                </h3>
                <p className="text-bone-dim text-lg leading-relaxed">
                  Forme, couleur, finition : nous étudions avec vous chaque
                  détail afin d'obtenir un résultat parfaitement adapté à
                  votre besoin.
                </p>
              </Reveal>
              <Reveal delay={60} type="scale">
                <div className="aspect-4/3 w-full overflow-hidden rounded-2xl bg-ink">
                  <img
                    src="/sur-mesure/sur-mesure-2.jpg"
                    alt="Réserve de matières à l'atelier"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SCÈNE 07 — STATEMENT FINAL */}
      <section className="bg-bone px-6 py-16 text-center md:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-display font-bold text-act text-ink">
              Votre projet mérite
              <br />
              plus qu'une rénovation.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="mt-3 font-display italic text-2xl text-leather-light">
              Il mérite une signature.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <CtaButton to="/contact" size="lg" className="mt-8">
              Parlons de votre projet
            </CtaButton>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
