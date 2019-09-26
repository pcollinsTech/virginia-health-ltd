import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

const OurBrands = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {/* <img src={one} alt="" /> */}
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
            {/* <img src={two} alt="" /> */}
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
          <Col>
            {/* <img src={three} alt="" /> */}
            <h3>Crunch &amp; Cereals</h3>
            <p>
              Crunch & Cereals Our products range from delicious gluten free
              baking mixes to highly nutritious seed mixes for cereal toppings,
              crunch toppings, salad toppings and snacks.
            </p>
            <button className="btn btn-primary">
              <Link to="">Read More</Link>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default OurBrands
