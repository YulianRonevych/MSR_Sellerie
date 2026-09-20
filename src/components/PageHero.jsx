import Reveal from "./Reveal"
import SceneKicker from "./SceneKicker"

export default function PageHero({
  index,
  eyebrow,
  title,
  description,
  tone = "light",
}) {
  const dark = tone === "dark"

  return (
    <section className={dark ? "bg-bone" : ""}>
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-8 md:pt-8 md:pb-10">
        {eyebrow && (
          <SceneKicker
            index={index}
            label={eyebrow}
            lineClassName={dark ? "bg-leather-light" : "bg-leather"}
            textClassName={dark ? "text-leather-light" : "text-leather-light"}
          />
        )}
        <Reveal delay={80}>
          <h1
            className={`font-display font-bold text-act max-w-4xl ${
              dark ? "text-ink" : "text-bone"
            }`}
          >
            {title}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p
            className={`text-lg max-w-xl mt-6 leading-relaxed ${
              dark ? "text-ink/70" : "text-bone-dim"
            }`}
          >
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
