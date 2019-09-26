import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ocado from "../../assets/images/client-logos/ocado.png"
import sainsburys from "../../assets/images/client-logos/sainsburys.png"
import asda from "../../assets/images/client-logos/asda.png"
import aldi from "../../assets/images/client-logos/aldi.png"
import rossman from "../../assets/images/client-logos/rossman.png"
import londis from "../../assets/images/client-logos/londis.png"
import waitrose from "../../assets/images/client-logos/waitrose.png"
import lidl from "../../assets/images/client-logos/lidl.svg"
import spar from "../../assets/images/client-logos/spar.svg"
import supervalue from "../../assets/images/client-logos/supervalue.png"
import edeka from "../../assets/images/client-logos/edeka.png"
import bwg from "../../assets/images/client-logos/bwg.png"
import mace from "../../assets/images/client-logos/mace.png"
import rewe from "../../assets/images/client-logos/rewe.png"
import inish from "../../assets/images/client-logos/inish.png"

const WorkWith = () => {
  return (
    <div>
      <Container>
        <h2 className="text-center">Who We Work With</h2>
        <Row>
          <Col>
            <img src={ocado} alt="Ocado" />
          </Col>
          <Col>
            <img src={sainsburys} alt="Sainsbury's" />
          </Col>
          <Col>
            <img src={asda} alt="Asda" />
          </Col>
          <Col>
            <img src={rossman} alt="Rossman" />
          </Col>
          <Col>
            <img src={londis} alt="Londis" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={waitrose} alt="Waitrose" />
          </Col>
          <Col>
            <img src={lidl} alt="Lidl" />
          </Col>
          <Col>
            <img src={supervalue} alt="Supervalue" />
          </Col>
          <Col>
            <img src={aldi} alt="Aldi" />
          </Col>
          <Col>
            <img src={edeka} alt="Edeka" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={spar} alt="Spar" />
          </Col>
          <Col>
            <img src={bwg} alt="BWG" />
          </Col>
          <Col>
            <img src={mace} alt="Mace" />
          </Col>
          <Col>
            <img src={rewe} alt="REWE" />
          </Col>
          <Col>
            <img src={inish} alt="Inish Pharmacy" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WorkWith
