import React from "react"
import { Carousel } from "react-bootstrap"
import Img from "gatsby-image"

const BannerCarousel = ({ titleOne, titleTwo, titleThree, img }) => {
  return (
    <div>
      <Carousel interval="6000">
        <Carousel.Item className="banner_image">
          <Img loading="lazy" fluid={img} />
          <Carousel.Caption>
            <h2>{titleOne}</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="banner_image">
          <Img loading="lazy" fluid={img} />
          <Carousel.Caption>
            <h2>{titleTwo}</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="banner_image">
          <Img loading="lazy" fluid={img} />
          <Carousel.Caption>
            <h2>{titleThree}</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default BannerCarousel
