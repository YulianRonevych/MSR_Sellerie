import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"

export default function ImageCarousel({ groups, alt, className = "" }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const safeGroups = groups ?? []

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi || safeGroups.length < 2) return
    const interval = setInterval(() => emblaApi.scrollNext(), 5000)
    return () => clearInterval(interval)
  }, [emblaApi, safeGroups.length])

  if (safeGroups.length === 0) return null

  return (
    <div className={className}>
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {safeGroups.map((group, gi) => (
            <div key={group.join("|")} className="flex-[0_0_100%]">
              <div
                className={
                  group.length === 2
                    ? "grid grid-cols-2 gap-3 sm:gap-4"
                    : "flex justify-center"
                }
              >
                {group.map((src, i) => (
                  <div key={src} className={group.length === 1 ? "w-1/2" : ""}>
                    <div className="aspect-4/3 w-full overflow-hidden rounded-2xl bg-ink-light">
                      <img
                        src={src}
                        alt={alt ? `${alt} ${gi + 1}.${i + 1}` : `Photo ${gi + 1}.${i + 1}`}
                        className="h-full w-full rounded-2xl object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {safeGroups.length > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {safeGroups.map((group, gi) => (
            <button
              key={group.join("|")}
              type="button"
              onClick={() => emblaApi?.scrollTo(gi)}
              aria-label={`Aller au groupe de photos ${gi + 1}`}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                gi === selectedIndex ? "bg-leather" : "bg-black/15"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
