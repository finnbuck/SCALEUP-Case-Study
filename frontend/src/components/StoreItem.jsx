import { Card, Button } from "react-bootstrap"

export function StoreItem({ id, name, price, imgUrl }) {
  const quantity = 0
  return <Card className="h-100">
    <Card.Img 
      variant="top" 
      src={imgUrl} 
    />
    <Card.Body className="d-flex flex-column">
      <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
        <span className="fs-2">{name}</span>
        <span className="ms-2">€{price}</span>
      </Card.Title>
      <div className="mt-auto">
        <Button className="w-100">Add To Cart</Button>
      </div>
    </Card.Body>
  </Card>
}