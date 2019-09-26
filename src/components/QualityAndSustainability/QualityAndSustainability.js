import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import squbes from "../../assets/images/squbes.png"

const QualityAndSustainability = () => {
  return (
    <Container className="bg-dark">
      <Row>
        <Col>
          <h3>Virginia Health</h3>
          <p>
            Virginia Health Our products range from delicious gluten free baking
            mixes to highly nutritious seed mixes for cereal toppings, crunch
            toppings, salad toppings and snacks.
          </p>
          <button className="btn btn-primary">
            <Link to="">Read More</Link>
          </button>
        </Col>
        <Col>
          <img src={squbes} alt="" />
          <h3>Squbes</h3>
          <p>
            Squbes Our products range from delicious gluten free baking mixes to
            highly nutritious seed mixes for cereal toppings, crunch toppings,
            salad toppings and snacks.
          </p>
          <button className="btn btn-primary">
            <Link to="">Visit Website</Link>
          </button>
        </Col>
      </Row>
    </Container>
  )
}

export default QualityAndSustainability
