import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import vhealth from "../../assets/images/vhealth.png"
import crunch from "../../assets/images/crunch.png"
import squbes from "../../assets/images/squbes.png"

const OurBrands = () => {
  return (
    <div>
      <Container id="ourBrands">
        <h2 className="text-center">Our Brands</h2>
        <Row className="d-flex justify-content-between pb-5">
          <div className="col-sm-4 px-3 brand_item">
            <img src={vhealth} alt="" />
            <h3>Virginia Health</h3>
            <p>
              Virginia Health Our products range from delicious gluten free
              baking mixes to highly nutritious seed mixes for cereal toppings,
              crunch toppings, salad toppings and snacks.
            </p>
            <button className="btn btn-primary">
              <Link to="">Read More</Link>
            </button>
          </div>
          <div className="col-sm-4 px-3 brand_item">
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
          </div>
          <div className="col-sm-4 px-3 brand_item">
            <img src={crunch} alt="" />
            <h3>Crunch &amp; Cereals</h3>
            <p>
              Crunch & Cereals Our products range from delicious gluten free
              baking mixes to highly nutritious seed mixes for cereal toppings,
              crunch toppings, salad toppings and snacks.
            </p>
            <button className="btn btn-primary">
              <Link to="">Read More</Link>
            </button>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default OurBrands
