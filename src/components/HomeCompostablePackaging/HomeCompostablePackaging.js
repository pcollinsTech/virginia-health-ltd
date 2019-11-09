import React from "react"
import { Container, Row } from "react-bootstrap"
import homeCompostablePackaging from "../../assets/images/homeCompostablePackaging.png"

const HomeCompostablePackaging = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-between">
        <div className="col-sm-5 pt-2">
          <h2 style={{ color: "white" }}>
            Home <span className="green">Compostable</span> Packaging
          </h2>
          <p>
            We are delighted to introduce our plastic free Home Compostable
            Packaging. It is 100% biodegradable and breaks down naturally and
            easily in the environment.
          </p>
          <p>
            We can now benefit from flaxseed super nutrients - omega 3, gentle
            fibre, protein and minerals which also caring for the earth.
            Introducing this natural cellulose pack is part of out commitment to
            a sustainable future for us and our planet.
          </p>
          <p>Thank you for choosing the option that leaves no trace.</p>
        </div>
        <div className="col-sm-7">
          <img src={homeCompostablePackaging} alt="" />
        </div>
      </Row>
    </Container>
  )
}

export default HomeCompostablePackaging
