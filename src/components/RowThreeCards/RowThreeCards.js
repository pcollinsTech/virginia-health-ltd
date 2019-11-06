import React from "react"
import { Row } from "react-bootstrap"
import { Link } from "gatsby"

const Card = ({ data }) => {
  const { img, para, buttonTitle, buttonLink, title } = data

  const button = buttonTitle ? (
    <button className="btn btn-primary">
      {buttonLink.startsWith("http") ? (
        <a href={buttonLink} target="__blank">
          {buttonTitle}
        </a>
      ) : (
        <Link to={`${buttonLink}`}>{buttonTitle}</Link>
      )}
    </button>
  ) : (
    ""
  )
  return (
    <div className="col-sm-4 px-3 brand_item">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{para}</p>
      <div className=" text-center">{button}</div>
    </div>
  )
}

const RowThreeCards = ({ data }) => {
  return (
    <Row className="d-flex justify-content-between pb-5 row_three_cards">
      {data.map((item, index) => {
        return <Card data={item} key={index} />
      })}
    </Row>
  )
}

export default RowThreeCards
