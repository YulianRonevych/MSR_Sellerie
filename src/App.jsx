import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import Accueil from "./pages/Accueil"
import SellerieMedicale from "./pages/SellerieMedicale"
import SellerieAuto from "./pages/SellerieAuto"
import SellerieSport from "./pages/SellerieSport"
import Plastification from "./pages/Plastification"
import Contact from "./pages/Contact"

function AnimatedRoutes() {
  const { pathname } = useLocation()
  const isHome = pathname === "/"

  return (
    <main
      key={pathname}
      className={`animate-fade-in ${isHome ? "" : "pt-30"}`}
    >
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/sellerie-medicale" element={<SellerieMedicale />} />
        <Route path="/sellerie-auto" element={<SellerieAuto />} />
        <Route path="/sellerie-sport" element={<SellerieSport />} />
        <Route path="/plastification" element={<Plastification />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
