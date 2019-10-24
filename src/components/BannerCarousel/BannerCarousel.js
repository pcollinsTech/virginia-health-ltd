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
          <img className="d-block w-100" src={imgOne} alt="First slide" />
          <Carousel.Caption>
            <h2>{titleOne}</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imgTwo} alt="Second slide" />
          <Carousel.Caption>
            <h2>{titleTwo}</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imgThree} alt="Third slide" />
          <Carousel.Caption>
            <h2>{titleThree}</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default BannerCarousel
