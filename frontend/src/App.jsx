import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Store } from "./pages/Store"
import { ShoppingCart } from "./pages/ShoppingCart"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
      // The shopping card provider allows information about
      // the shopping cart to be accessed throughout the site.
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            {/* The "store" page is the main landing page*/}
            <Route path="/" element={<Store />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
  )
}

export default App
