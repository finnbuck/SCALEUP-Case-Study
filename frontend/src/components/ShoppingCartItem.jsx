import { Card, Button } from "react-bootstrap"

export function ShoppingCartItem({ id, name, price, imgUrl }) {
  return <Card>
    <Card.Body className="d-flex flex-column">
      <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
        <span className="fs-2">{name}</span>
        <span className="ms-2">€{price}</span>
      </Card.Title>
      <div className="d-flex align-items-left">
        <Button style={{width: "6rem"}} className="btn-danger">Remove</Button>
      </div>
    </Card.Body>
  </Card>
}