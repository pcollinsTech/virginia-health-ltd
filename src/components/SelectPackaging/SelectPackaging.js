import React, { Fragment, useContext } from "react"
import { Row } from "react-bootstrap"

import EnquiryContext from "../../context/enquiry/enquiryContext"
import { containsObject, tick } from "../../helpers/helpers"
const SelectPackaging = ({ data }) => {
  const enquiryContext = useContext(EnquiryContext)

  const { packagings, addPackaging, removePackaging } = enquiryContext

  const handleSelect = packaging => {
    containsObject(packaging, packagings)
      ? removePackaging(packaging)
      : addPackaging(packaging)
  }
  return (
    <Fragment>
      <h2>Select your packaging</h2>
      <p>
        Small sentance here about packaging maybe something about sustainability
        or longevity of product?
      </p>
      <Row className="my-5 justify-content-md-center">
        {data.map(packaging => {
          return (
            <div
              className="col-sm-3 packaging"
              onClick={e => handleSelect(packaging)}
            >
              <img src={packaging.img} alt={packaging.title} />
              {tick(packaging, packagings)}
              <h3>{packaging.title}</h3>
            </div>
          )
        })}
      </Row>
    </Fragment>
  )
}

export default SelectPackaging
