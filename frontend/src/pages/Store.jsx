import storeItems from "../data/items.json"
import { Row, Col } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"

export function Store() {
  return <>
    {/* Each Store Item will be a bootstrap card
    depending on the screen size there will be either
    4, 3 or 1 cards per row. */}
    <Row md={3} xs={1} lg={4} className="g-3">
      {storeItems.map(item => (
        <Col key={item.id}>
          <StoreItem {...item} />
        </Col>
      ))}
    </Row>
  </>
}