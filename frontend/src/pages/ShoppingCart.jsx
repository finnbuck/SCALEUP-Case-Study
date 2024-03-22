import storeItems from "../data/items.json"
import { Row } from "react-bootstrap"
import { ShoppingCartItem } from "../components/ShoppingCartItem"

export function ShoppingCart() {
  return <>
    <h1>Shopping Cart</h1>
    <Row className="g-3">
      {storeItems.map(item => (
        <ShoppingCartItem {...item} />
      ))}
    </Row>
  </>
}