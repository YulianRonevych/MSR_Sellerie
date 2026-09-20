import { useEffect, useState } from "react"

function imageExists(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
  })
}

export function useAvantApresPairs(folder, prefix, maxCount = 30) {
  const [pairs, setPairs] = useState([])

  useEffect(() => {
    let cancelled = false

    async function discover() {
      const found = []
      for (let i = 1; i <= maxCount; i++) {
        const before = `/${folder}/${prefix}-${i}-avant.jpg`
        const after = `/${folder}/${prefix}-${i}-apres.jpg`
        const [beforeOk, afterOk] = await Promise.all([
          imageExists(before),
          imageExists(after),
        ])
        if (!beforeOk || !afterOk) break
        found.push({ alt: `Réalisation ${i}`, before, after })
      }
      if (!cancelled) setPairs(found)
    }

    discover()
    return () => {
      cancelled = true
    }
  }, [folder, prefix, maxCount])

  return pairs
}
