import React, { Fragment, useContext } from "react"
import { Row } from "react-bootstrap"

import EnquiryContext from "../../context/enquiry/enquiryContext"
import { containsObject, tick } from "../../helpers/helpers"

const SelectIngredients = ({ data }) => {
  const enquiryContext = useContext(EnquiryContext)

  const { ingredients, addIngredient, removeIngredient } = enquiryContext

  const handleSelect = ingredient => {
    containsObject(ingredient, ingredients)
      ? removeIngredient(ingredient)
      : addIngredient(ingredient)
  }

  return (
    <Fragment>
      <h2>Select your ingredients</h2>
      <p>Innovative shelf stable Milled Seed, Nut and Protein mixes</p>
      <Row className="my-5 justify-content-md-center">
        {data.map(ingredient => {
          return (
            <div
              className="col-sm-3 ingredient"
              onClick={e => handleSelect(ingredient)}
            >
              <img src={ingredient.img} alt={ingredient.title} />
              {tick(ingredient, ingredients)}
              <h3>{ingredient.title}</h3>
            </div>
          )
        })}
      </Row>
    </Fragment>
  )
}

export default SelectIngredients
