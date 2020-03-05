import React from "react"
import { Container, Row } from "react-bootstrap"
import { Link } from "gatsby"
import grass from "../../assets/images/grass.png"

const QualityAndSustainability = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-between">
        <div className="col-sm-5 py-5">
          <h2 style={{ color: "white" }}>Quality and Sustainability</h2>
          <p>
            Sustainability ‘It is of paramount importance to us that we do our
            best to care for the natural world that provides us with such an
            abundance of wonderful health-giving foods. We create healthy
            natural products with wholefood ingredients. We are members of
            Origin Green, Ireland’s food and drink sustainability programme,
            through which, our active measures to reduce negative environmental
            impact and promote positive changes to how we work, including our
            commitments to our local community, are annually audited.
          </p>
          <button className="btn btn-primary">
            <Link to="/virginia-health-flaxseed">Read More</Link>
          </button>
        </div>
        <div className="col-sm-7">
          <img src={grass} alt="" />
        </div>
      </Row>
    </Container>
  )
}

export default QualityAndSustainability
