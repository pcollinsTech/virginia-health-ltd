import React from "react"
import { Row } from "react-bootstrap"
import Card from "./Card"
const RowThreeCards = ({ data }) => {
  return (
    <Row className="d-flex justify-content-between pb-5 row_three_cards">
      {data.map((item, index) => {
        return (
          <Card
            img={item.img}
            para={item.para}
            buttonTitle={item.buttonTitle}
            buttonLink={item.buttonLink}
            title={item.title}
            key={index}
          />
        )
      })}
    </Row>
  )
}

export default RowThreeCards
