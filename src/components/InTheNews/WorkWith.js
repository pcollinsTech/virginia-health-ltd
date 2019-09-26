import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import squbes from "../../assets/images/squbes.png"

const InTheNews = () => {
  return (
    <div>
      <Container>
        <h2 className="text-center">In The News</h2>
        <Row>
          <Col>
            <h3>Virginia Health</h3>
            <p>
              Virginia Health Our products range from delicious gluten free
              baking mixes to highly nutritious seed mixes for cereal toppings,
              crunch toppings, salad toppings and snacks.
            </p>
            <button className="btn btn-primary">
              <Link to="">Read More</Link>
            </button>
          </Col>
          <Col>
            <img src={squbes} alt="" />
            <h3>Squbes</h3>
            <p>
              Squbes Our products range from delicious gluten free baking mixes
              to highly nutritious seed mixes for cereal toppings, crunch
              toppings, salad toppings and snacks.
            </p>
            <button className="btn btn-primary">
              <Link to="">Visit Website</Link>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default InTheNews
