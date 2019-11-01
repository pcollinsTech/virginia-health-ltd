import React from "react"
import { Carousel } from "react-bootstrap"

const BannerCarousel = ({
  imgOne,
  imgTwo,
  imgThree,
  titleOne,
  titleTwo,
  titleThree,
}) => {
  return (
    <div>
      <Carousel interval="6000">
        <Carousel.Item>
          {imgOne}
          <Carousel.Caption>
            <h2>{titleOne}</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {imgTwo}
          <Carousel.Caption>
            <h2>{titleTwo}</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {imgThree}
          <Carousel.Caption>
            <h2>{titleThree}</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default BannerCarousel
