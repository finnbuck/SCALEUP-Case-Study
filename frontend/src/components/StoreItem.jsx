import { Card, Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function StoreItem({ id, name, price, imgUrl }) {
  const { getItemQuantity, increaseCartQuantity } = useShoppingCart()
  const quantity = getItemQuantity(id)
  return <Card className="h-100" bg={"dark"} border="light">
    <Card.Img 
      variant="top" 
      src={imgUrl} 
    />
    <Card.Body className="d-flex flex-column">
      <Card.Title className="d-flex justify-content-betweenremoveFromCart align-items-baseline mb-4">
        <span className="ms-2 text-light">{name}</span>
        <span className="ms-2 text-light">€{price}</span>
      </Card.Title>
      <div className="mt-auto">
        <Button className="w-100" onClick={() => increaseCartQuantity(id)}>Add To Cart</Button>
      </div>
    </Card.Body>
  </Card>
}