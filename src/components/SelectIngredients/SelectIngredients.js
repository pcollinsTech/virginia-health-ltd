import React, { Fragment, useContext, useEffect } from "react"
import { Row } from "react-bootstrap"
import { FaCheckCircle } from "react-icons/fa"
import EnquiryContext from "../../context/enquiry/enquiryContext"
import containsObject from "../../helpers/containsObject"

const SelectIngredients = ({ data }) => {
  const enquiryContext = useContext(EnquiryContext)

  const { ingredients, addIngredient, removeIngredient } = enquiryContext

  const handleSelect = (event, ingredient) => {
    containsObject(ingredient, ingredients)
      ? removeIngredient(ingredient)
      : addIngredient(ingredient)

    console.log("INGREDIENTS", ingredients)
  }
  const renderIngredients = data => {
    return data.map(ingredient => {
      return (
        <div
          className="col-sm-3 ingredient"
          onClick={e => handleSelect(e, ingredient)}
        >
          <img src={ingredient.img} alt={ingredient.title} />
          {tick(ingredient)}
          <h3>{ingredient.title}</h3>
        </div>
      )
    })
  }
  useEffect(data => {
    // renderIngredients(data)
  }, [])

  const tick = ingredient =>
    containsObject(ingredient, ingredients) ? <FaCheckCircle /> : ""

  return (
    <Fragment>
      <h2>Select your ingredients</h2>
      <p>Innovative shelf stable Milled Seed, Nut and Protein mixes</p>
      <Row className="my-5 justify-content-md-center">
        {renderIngredients(data)}
      </Row>
    </Fragment>
  )
}

export default SelectIngredients
