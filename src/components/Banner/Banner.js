import React from "react"
import { Carousel } from "react-bootstrap"

import banner from "../../assets/images/bannerOne.png"

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner} alt="First slide" />
          <Carousel.Caption>
            <h2>Health Food With a Difference</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner} alt="First slide" />
          <Carousel.Caption>
            <h2>Second slide label</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner} alt="First slide" />
          <Carousel.Caption>
            <h2>Third slide label</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Banner
