import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { ShoppingCart } from "./pages/ShoppingCart"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
