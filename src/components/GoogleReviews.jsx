import { useState } from "react"
import Reveal from "./Reveal"
import SceneKicker from "./SceneKicker"

// Avis vérifiés — Google (fiche MSR Sellerie, place_id ChIJYfL0ca2lrhIRK3evyIAOP6E).
// Google ne fournit jamais plus de 5 avis via son API : ce sont ceux renvoyés.
const rating = 5
const reviewCount = 47
const mapsUrl =
  "https://www.google.com/maps/place/?q=place_id:ChIJYfL0ca2lrhIRK3evyIAOP6E"

const reviews = [
  {
    author: "Centre Médical de la Juncasse",
    rating: 5,
    time: "il y a 9 mois",
    photo:
      "https://lh3.googleusercontent.com/a-/ALV-UjWmTj-PblkFtLkd3LizejPmmNHYNbs0RDKCRh5O5T4SCYTrjmIW=s128-c0x00000000-cc-rp-mo",
    text: `Réfection d'une table d'examen de plus de 20 ans à la mousse d'assise fatiguée et au revêtement craquelé. Finitions "sans couture" impeccables, prix tout à fait corrects. Délais de livraison plus longs que prévu en raison de problèmes personnels. Bon contact.`,
  },
  {
    author: "Restaurant N88DLES",
    rating: 5,
    time: "il y a un an",
    photo:
      "https://lh3.googleusercontent.com/a-/ALV-UjWcG-5FjVI3ZcyEK6Sjp-Oruu5fG-Czi1MXLlMdZ1qfxwVoW-0=s128-c0x00000000-cc-rp-mo",
    text: "Un immense merci à Frédéric pour son excellent travail sur nos banquettes, assises et dossiers parfaitement réalisés avec une finition impeccable. Nous sommes ravis et nos clients aussi !",
  },
  {
    author: "Soles Renov",
    rating: 5,
    time: "il y a un an",
    photo:
      "https://lh3.googleusercontent.com/a-/ALV-UjWroMuDb1LbT8pY-zgW71dKGpdZewmU2xQD1wDHqHwuxkVCppGZ=s128-c0x00000000-cc-rp-mo",
    text: "J'ai eu plusieurs occasions de voir le travail de Frédéric dans son atelier, et je suis toujours impressionné par la qualité de son travail. Il est extrêmement soigné et utilise uniquement des matériaux de première qualité. Je recommande vivement ses services à quiconque recherche un travail de qualité avec un souci du détail.",
  },
  {
    author: "Julia Moiroud",
    rating: 5,
    time: "il y a 4 mois",
    photo:
      "https://lh3.googleusercontent.com/a-/ALV-UjXmJHHegECQO0nrzlqr00F82COstZmYN6UqEidH10brbB9rHSw=s128-c0x00000000-cc-rp-mo",
    text: "Réfection de table et tabourets réalisée. Professionnel sérieux, disponible par téléphone et réactif ! Je recommande !",
  },
  {
    author: "Xavier Jacquemet",
    rating: 5,
    time: "il y a 11 mois",
    photo:
      "https://lh3.googleusercontent.com/a-/ALV-UjXfYWeVeJhTmrzUQ6tfWfvVVuPnbot6bIB9lVqeHlKgncmhjTA=s128-c0x00000000-cc-rp-mo",
    text: "J'ai fait appel à MSR Sellerie pour le changement de revêtement de ma table de chiropraxie et je suis entièrement satisfait. Travail très professionnel, réactivité au rendez-vous et un revêtement de très bonne qualité. J'ai également apprécié les conseils personnalisés et adaptés à mes besoins, ce qui fait vraiment la différence. Je recommande vivement !",
  },
]

function Stars({ count }) {
  return (
    <span className="tracking-tight" aria-hidden="true">
      <span className="text-leather-light">{"★".repeat(count)}</span>
      <span className="text-bone-dim/30">{"★".repeat(5 - count)}</span>
    </span>
  )
}

function Avatar({ photo, name }) {
  const [broken, setBroken] = useState(false)
  const initial = name.trim().charAt(0).toUpperCase()

  if (broken) {
    return (
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-leather/20 font-display font-semibold text-leather-light">
        {initial}
      </span>
    )
  }

  return (
    <img
      src={photo}
      alt=""
      referrerPolicy="no-referrer"
      onError={() => setBroken(true)}
      className="h-11 w-11 shrink-0 rounded-full object-cover"
    />
  )
}

export default function GoogleReviews({ index }) {
  return (
    <section className="bg-ink-light py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <SceneKicker index={index} label="Avis clients" />

        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <p className="font-display italic text-2xl md:text-3xl leading-snug text-bone max-w-lg">
              Ce que nos clients en disent.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-bone-dim transition-colors hover:text-leather-light"
            >
              <Stars count={rating} />
              <span>
                {rating.toFixed(1)} sur Google · {reviewCount} avis
              </span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </Reveal>
        </div>

        <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.author} delay={i * 60}>
              <div className="h-full rounded-lg bg-ink p-6 shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-md">
                <div className="mb-3 flex items-center gap-3">
                  <Avatar photo={r.photo} name={r.author} />
                  <div>
                    <p className="font-display font-semibold text-bone text-sm leading-tight">
                      {r.author}
                    </p>
                    <p className="text-xs text-bone-dim">{r.time}</p>
                  </div>
                </div>
                <Stars count={r.rating} />
                <p className="mt-3 text-sm leading-relaxed text-bone-dim">
                  {r.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
