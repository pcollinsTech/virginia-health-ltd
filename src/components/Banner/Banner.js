import React from "react"
import { Carousel } from "react-bootstrap"

const Banner = ({
  imageOne,
  imageTwo,
  imageThree,
  titleOne,
  titleTwo,
  titleThree,
}) => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={imageOne} alt="First slide" />
          <Carousel.Caption>
            <h2>{titleOne}</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imageTwo} alt="First slide" />
          <Carousel.Caption>
            <h2>{titleTwo}</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imageThree} alt="First slide" />
          <Carousel.Caption>
            <h2>{titleThree}</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Banner
