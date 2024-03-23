import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { ShoppingCart } from "./pages/ShoppingCart"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/store" element={<Store />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
  )
}

export default App