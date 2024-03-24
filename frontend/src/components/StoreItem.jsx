import { Card, Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"

// Each StoreItem card receives data from one object from the items.json file.
export function StoreItem({ id, name, price, imgUrl, type }) {
  const { getItemQuantity, increaseCartQuantity } = useShoppingCart()
  const quantity = getItemQuantity(id)
  return <Card className="h-100" bg={"dark"} border="light">
    <Card.Img 
      variant="top" 
      src={imgUrl} 
    />
    <Card.Body className="d-flex flex-column">
      <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
        <span className="ms-2 text-light">{name}</span>
        <span className="ms-2 text-light">€{price}</span>
      </Card.Title>
      <div className="mt-auto">
        {/* Clicking the "Add To Cart" button updates the ShoppingCartContext
        to increase the quantity of a given item id */}
        <Button className="w-100" onClick={() => increaseCartQuantity(id)}>Add To Cart</Button>
      </div>
    </Card.Body>
  </Card>
}