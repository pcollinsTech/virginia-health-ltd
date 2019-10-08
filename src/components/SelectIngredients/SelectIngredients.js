import React, { Fragment } from "react"
import { Row } from "react-bootstrap"

const SelectIngredients = ({ data }) => {
  return (
    <Fragment>
      <h2>Select your ingredients</h2>
      <p>Innovative shelf stable Milled Seed, Nut and Protein mixes</p>
      <Row className="my-5">
        {data.map(ingredient => {
          return (
            <div className="col-sm">
              <img src={ingredient.img} alt={ingredient.title} />
              <h2>{ingredient.title}</h2>
            </div>
          )
        })}
      </Row>
    </Fragment>
  )
}

export default SelectIngredients
