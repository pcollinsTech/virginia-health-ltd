import React from "react"

const BannerCarousel = ({ img, title }) => {
  return (
    <div className="banner_image">
      <img className="d-block w-100" src={img} alt="First slide" />
      <h2>{title}</h2>
    </div>
  )
}

export default BannerCarousel
