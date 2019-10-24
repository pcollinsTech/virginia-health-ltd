import React from "react"
import { Link } from "gatsby"

const RowThreeCards = ({ img, para, buttonTitle, buttonLink, title }) => {
  const link = buttonLink.startsWith("http") ? (
    <a href={buttonLink} target="__blank">
      {buttonTitle}
    </a>
  ) : (
    <Link to={`${buttonLink}`}>{buttonTitle}</Link>
  )
  return (
    <div className="col-sm-4 px-3 brand_item">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{para}</p>
      <button className="btn btn-primary">{link}</button>
    </div>
  )
}

export default RowThreeCards
