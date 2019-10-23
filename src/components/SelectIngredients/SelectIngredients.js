import React, { Fragment } from "react"
import { Row } from "react-bootstrap"
import { FaRegCheckCircle } from "react-icons/fa"

const SelectIngredients = ({ data }) => {
  return (
    <Fragment>
      <h2>Select your ingredients</h2>
      <p>Innovative shelf stable Milled Seed, Nut and Protein mixes</p>
      <Row className="my-5">
        {data.map(ingredient => {
          return (
            <div className="col-sm ingredient">
              <img src={ingredient.img} alt={ingredient.title} />
              <div className="tickIcon checked">
                <FaRegCheckCircle />
              </div>
              <h3>{ingredient.title}</h3>
            </div>
          )
        })}
      </Row>
    </Fragment>
  )
}

export default SelectIngredients
