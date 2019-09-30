import React from "react"
import { Container, Row } from "react-bootstrap"
import { Link } from "gatsby"
import qualityAndSustainability from "../../assets/images/qualityAndSustainability.png"

const QualityAndSustainability = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-between">
        <div className="col-sm-5 pt-5">
          <h2 style={{ color: "white" }}>Quality and Sustainability</h2>
          <p>
            We use the expertise and know how of our technical, quality and
            production teams to create value in your business. By developing
            manufacturing and monitoring foods to the highest standards, we
            ensure that your inspiration leads to consistent, reliable products
            that you and your customers can trust. Our documented project
            management timelines allows you clear planning visibility and
            deadlines. This gives reassurance on project progress to all
            stakeholders during the development and launch process.
          </p>
          <button className="btn btn-primary">
            <Link to="">Read More</Link>
          </button>
        </div>
        <div className="col-sm-7">
          <img src={qualityAndSustainability} alt="" />
        </div>
      </Row>
    </Container>
  )
}

export default QualityAndSustainability
