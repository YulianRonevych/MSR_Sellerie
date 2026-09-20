const sizes = [
  "w-20 h-20 md:w-28 md:h-28",
  "w-28 h-28 md:w-40 md:h-40",
  "w-16 h-16 md:w-24 md:h-24",
  "w-24 h-24 md:w-32 md:h-32",
]
const offsets = [
  "mt-0", "mt-3", "-mt-2", "mt-2", "-mt-3", "mt-3",
  "mt-1", "-mt-3", "mt-2", "-mt-1", "mt-3", "mt-0",
]

// float: [x, y, duration(s), delay(s)] — donne à chaque bulle son propre mouvement
const float = [
  [5, -8, 3.8, 0],
  [-6, 7, 4.4, 0.3],
  [7, 6, 3.5, 0.6],
  [-5, -7, 4.8, 0.1],
  [6, -6, 4, 0.5],
  [-7, 8, 3.6, 0.2],
  [4, 8, 4.6, 0.4],
  [-6, -5, 3.9, 0.7],
  [8, -5, 4.2, 0.15],
  [-4, 6, 3.7, 0.35],
  [5, 7, 4.5, 0.25],
  [-8, -6, 4.1, 0.55],
]

// Remplacez chaque "logoN.png" par le fichier du client dans public/clients/
const clients = Array.from({ length: 12 }, (_, i) => ({
  name: `Client ${i + 1}`,
  logo: `/clients/logo${i + 1}.png`,
}))

export default function ClientsCloud() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
      {clients.map((c, i) => {
        const [x, y, duration, delay] = float[i % float.length]
        return (
          <div
            key={c.name}
            className="relative animate-float hover:z-10"
            style={{
              "--float-x": `${x}px`,
              "--float-y": `${y}px`,
              "--float-duration": `${duration}s`,
              "--float-delay": `${delay}s`,
            }}
          >
            <div
              className={`${sizes[i % sizes.length]} ${offsets[i % offsets.length]} rounded-full bg-ink-light border border-black/10 overflow-hidden flex items-center justify-center shadow-lg shadow-black/40 transition-all duration-300 ease-out hover:scale-110 hover:border-leather-light hover:shadow-xl hover:shadow-black/60 cursor-pointer`}
            >
              <img
                src={c.logo}
                alt={c.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
