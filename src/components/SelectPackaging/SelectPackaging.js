import React, { Fragment } from "react"
import { Row } from "react-bootstrap"
import { FaCheckCircle } from "react-icons/fa"

const SelectPackaging = ({ data }) => {
  return (
    <Fragment>
      <h2>Select your packaging</h2>
      <p>
        Small sentance here about packaging maybe something about sustainability
        or longevity of product?
      </p>
      <Row className="my-5 justify-content-md-center">
        {data.map(ingredient => {
          return (
            <div className="col-sm-3 packaging">
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

export default SelectPackaging
