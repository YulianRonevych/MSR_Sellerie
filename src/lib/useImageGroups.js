import { useEffect, useState } from "react"

function imageExists(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
  })
}

// For index N, looks for a pair `prefix-N-1.jpg` + `prefix-N-2.jpg` (shown
// side by side) or a single `prefix-N.jpg` (shown centered on its own).
// Stops at the first N with neither.
export function useImageGroups(folder, prefix, maxCount = 30) {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    let cancelled = false

    async function discover() {
      const found = []
      for (let i = 1; i <= maxCount; i++) {
        const first = `/${folder}/${prefix}-${i}-1.jpg`
        const second = `/${folder}/${prefix}-${i}-2.jpg`
        const [firstOk, secondOk] = await Promise.all([
          imageExists(first),
          imageExists(second),
        ])

        if (firstOk && secondOk) {
          found.push([first, second])
          continue
        }

        const single = `/${folder}/${prefix}-${i}.jpg`
        if (await imageExists(single)) {
          found.push([single])
          continue
        }

        break
      }
      if (!cancelled) setGroups(found)
    }

    discover()
    return () => {
      cancelled = true
    }
  }, [folder, prefix, maxCount])

  return groups
}
