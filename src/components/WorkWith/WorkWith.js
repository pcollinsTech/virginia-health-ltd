import React from "react"
import { Container, Row } from "react-bootstrap"
import ocado from "../../assets/images/client-logos/ocado.png"
import sainsburys from "../../assets/images/client-logos/sainsburys.png"
import asda from "../../assets/images/client-logos/asda.png"
import aldi from "../../assets/images/client-logos/aldi.png"
import rossman from "../../assets/images/client-logos/rossman.png"
import londis from "../../assets/images/client-logos/londis.png"
import waitrose from "../../assets/images/client-logos/waitrose.png"
import lidl from "../../assets/images/client-logos/lidl.png"
import spar from "../../assets/images/client-logos/spar.png"
import supervalue from "../../assets/images/client-logos/supervalue.png"
import edeka from "../../assets/images/client-logos/edeka.png"
import bwg from "../../assets/images/client-logos/bwg.png"
import mace from "../../assets/images/client-logos/mace.png"
import rewe from "../../assets/images/client-logos/rewe.png"
import inish from "../../assets/images/client-logos/inish.png"

const WorkWith = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center">Who We Work With</h2>
      <Row>
        <div className="col-sm-5ths">
          <img src={ocado} alt="Ocado" />
        </div>
        <div className="col-sm-5ths">
          <img src={sainsburys} alt="Sainsbury's" />
        </div>
        <div className="col-sm-5ths">
          <img src={asda} alt="Asda" />
        </div>
        <div className="col-sm-5ths">
          <img src={rossman} alt="Rossman" />
        </div>
        <div className="col-sm-5ths">
          <img src={londis} alt="Londis" />
        </div>
        <div className="col-sm-5ths">
          <img src={waitrose} alt="Waitrose" />
        </div>
        <div className="col-sm-5ths">
          <img src={lidl} alt="Lidl" />
        </div>
        <div className="col-sm-5ths">
          <img src={supervalue} alt="Supervalue" />
        </div>
        <div className="col-sm-5ths">
          <img src={aldi} alt="Aldi" />
        </div>
        <div className="col-sm-5ths">
          <img src={edeka} alt="Edeka" />
        </div>
        <div className="col-sm-5ths">
          <img src={spar} alt="Spar" />
        </div>
        <div className="col-sm-5ths">
          <img src={bwg} alt="BWG" />
        </div>
        <div className="col-sm-5ths">
          <img src={mace} alt="Mace" />
        </div>
        <div className="col-sm-5ths">
          <img src={rewe} alt="REWE" />
        </div>
        <div className="col-sm-5ths">
          <img src={inish} alt="Inish Pharmacy" />
        </div>
      </Row>
    </Container>
  )
}

export default WorkWith
