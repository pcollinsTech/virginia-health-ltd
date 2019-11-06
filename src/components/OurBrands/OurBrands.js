import React from "react"
import { Container } from "react-bootstrap"
import vhealth from "../../assets/images/vhealth.png"
import crunch from "../../assets/images/crunch.png"
import squbes from "../../assets/images/squbes.png"
import RowThreeCards from "../RowThreeCards/RowThreeCards"
const data = [
  {
    img: vhealth,
    para:
      "Virginia Health Our products range from delicious gluten free baking mixes to highly nutritious seed mixes for cereal toppings, crunch toppings, salad toppings and snacks.",
    buttonTitle: "Read More",
    buttonLink: "/virginia-health-flaxseed",
    title: "Virginia Health",
  },
  {
    img: squbes,
    para:
      "Squbes Our products range from delicious gluten free baking mixes to highly nutritious seed mixes for cereal toppings, crunch toppings, salad toppings and snacks.",
    buttonTitle: "Visit Website",
    buttonLink: "http://www.squbes.ie",
    title: "Squbes",
  },
  {
    img: crunch,
    para:
      "Crunch & Cereals Our products range from delicious gluten free baking mixes to highly nutritious seed mixes for cereal toppings, crunch toppings, salad toppings and snacks.",
    buttonTitle: "Read More",
    buttonLink: "/crunch-and-cereal",
    title: "Crunch",
  },
]
const OurBrands = () => {
  return (
    <div>
      <Container id="ourBrands">
        <h2 className="text-center">Our Brands</h2>
        <RowThreeCards data={data} />
      </Container>
    </div>
  )
}

export default OurBrands
