import React, { Fragment } from "react"
import { Row } from "react-bootstrap"
import { FaCheckCircle } from "react-icons/fa"

const SelectIngredients = ({ data }) => {
  return (
    <Fragment>
      <h2>Select your ingredients</h2>
      <p>Innovative shelf stable Milled Seed, Nut and Protein mixes</p>
      <Row className="my-5 justify-content-md-center">
        {data.map(ingredient => {
          return (
            <div className="col-sm-3 ingredient">
              <img src={ingredient.img} alt={ingredient.title} />
              <FaCheckCircle />
              <h3>{ingredient.title}</h3>
            </div>
          )
        })}
      </Row>
    </Fragment>
  )
}

export default SelectIngredients
