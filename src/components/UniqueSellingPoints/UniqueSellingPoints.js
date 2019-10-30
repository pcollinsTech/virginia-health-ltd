import React, { Fragment, useContext } from "react"
import { Row } from "react-bootstrap"
import glutenFree from "../../assets/images/selling-points/glutenFree.svg"
import lactoseFree from "../../assets/images/selling-points/lactoseFree.svg"
import vegan from "../../assets/images/selling-points/vegan.svg"
import noAddedSugar from "../../assets/images/selling-points/noAddedSugar.svg"
import refinedSugars from "../../assets/images/selling-points/refinedSugars.svg"
import protein from "../../assets/images/selling-points/protein.svg"
import fibre from "../../assets/images/selling-points/fibre.svg"
import omega3 from "../../assets/images/selling-points/omega3.svg"

import EnquiryContext from "../../context/enquiry/enquiryContext"
import { containsObject, tick } from "../../helpers/helpers"

const data = [
  { img: glutenFree, title: "Gluten Free" },
  { img: lactoseFree, title: "Lactose Free" },
  { img: vegan, title: "Vegan" },
  { img: noAddedSugar, title: "No Added Sugar" },
  { img: refinedSugars, title: "No Refined Sugars" },
  { img: protein, title: "Protein" },
  { img: fibre, title: "Fibre" },
]

const UniqueSellingPoints = ({ fish }) => {
  const enquiryContext = useContext(EnquiryContext)

  const { usps, addUsp, removeUsp } = enquiryContext

  const handleSelect = usp => {
    containsObject(usp, usps) ? removeUsp(usp) : addUsp(usp)
  }
  const fishBox =
    fish === true ? (
      <div className="col-sm-3 ingredient">
        <div className="selling_point">
          <div className="white_circle">
            <img src={omega3} alt="Omega 3" />
          </div>
        </div>
        <h3>Omega 3</h3>
      </div>
    ) : null
  return (
    <Fragment>
      <h2>Select your Unique Selling Points</h2>
      <p>What makes you different? Choose your USP's</p>
      <Row className="my-5 justify-content-md-center">
        {data.map(usp => {
          return (
            <div
              className="col-sm-3 ingredient"
              onClick={e => handleSelect(usp)}
            >
              <div className="selling_point">
                <div className="white_circle">
                  <img src={usp.img} alt="Gluten Free" />
                </div>
                {tick(usp, usps)}
              </div>
              <h3>{usp.title}</h3>
            </div>
          )
        })}

        {fishBox}
      </Row>
    </Fragment>
  )
}

export default UniqueSellingPoints
