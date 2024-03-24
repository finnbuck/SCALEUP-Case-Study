import { Row } from "react-bootstrap"
import { ShoppingCartItem } from "../components/ShoppingCartItem"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function ShoppingCart() {
  const { cartItems } = useShoppingCart()
  return <>
    <h1 className="text-white">Shopping Cart</h1>
    <Row className="g-3">
      {cartItems.map(item => (
        <ShoppingCartItem {...item} />
      ))}
    </Row>
  </>
}