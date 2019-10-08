import React, { Fragment } from "react"
import { Row } from "react-bootstrap"

const SelectPackaging = ({ data }) => {
  return (
    <Fragment>
      <h2>Select your packaging</h2>
      <p>
        Small sentance here about packaging maybe something about sustainability
        or longevity of product?
      </p>
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

export default SelectPackaging
