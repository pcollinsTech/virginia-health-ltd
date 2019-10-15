import React, { Fragment } from "react"
import { Row } from "react-bootstrap"

import glutenFree from "../../assets/images/selling-points/glutenFree.svg"
import lactoseFree from "../../assets/images/selling-points/lactoseFree.svg"
import vegan from "../../assets/images/selling-points/vegan.svg"
import noAddedSugar from "../../assets/images/selling-points/noAddedSugar.svg"
import refinedSugars from "../../assets/images/selling-points/refinedSugars.svg"
import protein from "../../assets/images/selling-points/protein.svg"
import fibre from "../../assets/images/selling-points/fibre.svg"
import omega3 from "../../assets/images/selling-points/omega3.svg"

const UniqueSellingPoints = ({ fish }) => {
  const fishBox =
    fish === true ? (
      <div className="col-sm-3">
        <div className="selling_point">
          <div className="white_circle">
            <img src={omega3} alt="Omega 3" />
          </div>
        </div>
        <h2>Omega 3</h2>
      </div>
    ) : null
  return (
    <Fragment>
      <h2>Select your Unique Selling Points</h2>
      <p>What makes you different? Choose your USP's</p>
      <Row className="my-5">
        <div className="col-sm-3">
          <div className="selling_point">
            <div className="white_circle">
              <img src={glutenFree} alt="Gluten Free" />
            </div>
          </div>
          <h2>Gluten Free</h2>
        </div>
        <div className="col-sm-3">
          <div className="selling_point">
            <div className="white_circle">
              <img src={lactoseFree} alt="Lactose Free" />
            </div>
          </div>
          <h2>Lactose Free</h2>
        </div>
        <div className="col-sm-3">
          <div className="selling_point">
            <div className="white_circle">
              <img src={vegan} alt="Vegan" />
            </div>
          </div>
          <h2>Vegan</h2>
        </div>
        <div className="col-sm-3">
          <div className="selling_point">
            <div className="white_circle">
              <img src={noAddedSugar} alt="No added Sugar" />
            </div>
          </div>
          <h2>No added Sugar</h2>
        </div>
        <div className="col-sm-3">
          <div className="selling_point">
            <div className="white_circle">
              <img src={refinedSugars} alt="No refined sugars" />
            </div>
          </div>
          <h2>No refined sugars</h2>
        </div>
        <div className="col-sm-3">
          <div className="selling_point">
            <div className="white_circle">
              <img src={protein} alt="Protein" />
            </div>
          </div>
          <h2>Protein</h2>
        </div>
        <div className="col-sm-3">
          <div className="selling_point">
            <div className="white_circle">
              <img src={fibre} alt="Fibre" />
            </div>
          </div>
          <h2>Fibre</h2>
        </div>
        {fishBox}
      </Row>
    </Fragment>
  )
}

export default UniqueSellingPoints
