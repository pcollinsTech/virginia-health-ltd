import React from "react"
import { Link } from "gatsby"

const BrandHeading = ({ title, instaUrl, faceUrl, twitUrl }) => {
  return (
    <div className="col-sm-4 px-3 brand_item">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{para}</p>
      <button className="btn btn-primary">
        <Link to={buttonLink}>{buttonTitle}</Link>
      </button>
    </div>
  )
}

export default BrandHeading
