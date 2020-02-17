import React from "react"
import { Carousel } from "react-bootstrap"
import Img from "gatsby-image"

const BannerCarousel = ({ titleOne, titleTwo, titleThree, images }) => {
  const { img1, img2, img3 } = images
  return (
    <div>
      <Carousel interval="6000">
        <Carousel.Item className="banner_image">
          <Img loading="lazy" fluid={img1} />
          {/* <Carousel.Caption>
            <h2>{titleOne}</h2>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className="banner_image">
          <Img loading="lazy" fluid={img2} />
          {/* <Carousel.Caption>
            <h2>{titleTwo}</h2>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className="banner_image">
          <Img loading="lazy" fluid={img3} />
          {/* <Carousel.Caption>
            <h2>{titleThree}</h2>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default BannerCarousel
