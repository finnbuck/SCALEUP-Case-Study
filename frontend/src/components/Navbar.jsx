import { Navbar as BootstrapNavbar, Container, Nav, Button} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar() {
  const { cartQuantity } = useShoppingCart()
  return (
    <BootstrapNavbar sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
        </Nav>
        <Nav.Link 
          style={{width: "3rem", height: "3rem", position: "relative" }}
          className="rounded-circle btn btn-outline-primary active d-flex align-items-center justify-content-center"
          to="/shopping-cart" as={NavLink}
        >
          <svg class="w-50 h-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
          </svg>

          <div 
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white", 
              width: "1.5rem", 
              height: "1.5rem", 
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)"
            }}
            >
              { cartQuantity }
          </div>
        </Nav.Link>
      </Container>
    </BootstrapNavbar>
  )
}