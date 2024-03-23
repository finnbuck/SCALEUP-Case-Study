import { Card, Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"

export function ShoppingCartItem({ id, quantity }) {
  const { decreaseCartQuantity } = useShoppingCart()
  // The item id is passed to this function and the data for the corresponding items.json object is retrieved.
  const item = storeItems.find(i => i.id == id)
  // If the id is not present then "null" is returned.
  if (item == null) return null
  return (
    <Card>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{item.name}</span>
          <span className="ms-2">€{item.price}</span>
        </Card.Title>
        <div className="d-flex align-items-left column-gap-3">
          <span className="ms-2 my-auto">Quantity: {quantity}</span>
          {/* Pressing the "Remove" button updates the ShoppingCartContext */}
          <Button style={{width: "6rem"}} className="btn-danger btn-sm" onClick={() => decreaseCartQuantity(id)} >
              Remove
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}