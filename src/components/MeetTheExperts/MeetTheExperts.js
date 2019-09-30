import React from "react"
import { Container, Row } from "react-bootstrap"
import { Link } from "gatsby"
import meetTheExperts from "../../assets/images/meetTheExperts.png"

const MeetTheExperts = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-between">
        <div className="col-sm-5 pt-5">
          <h2>Meet The Experts</h2>
          <p>
            When it comes to food, Helen and her team use top quality, nutrient
            dense wholesome ingredients, so you won’t find any synthetic
            stabilizers, preservatives or flavourings in any products at
            Virginia Health Food Ltd. In response to the need for easy to use,
            nutritionally valuable foods which do not contain wheat (an
            ingredient that is strongly linked to digestive intolerance),
            Virginia Health Food Ltd has developed a range of products from
            delicious, fuss free wheat free and gluten free home baking mixes
            through to nutritious breakfast seed toppings to boost your
            breakfast.
          </p>
          <button className="btn btn-primary">
            <Link to="">Read More</Link>
          </button>
        </div>
        <div className="col-sm-7">
          <img src={meetTheExperts} alt="Meet The Experts" />
        </div>
      </Row>
    </Container>
  )
}

export default MeetTheExperts
