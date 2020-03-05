import React from "react"
import { Container } from "react-bootstrap"
import vhealth from "../../assets/images/vhealth.png"
import crunch from "../../assets/images/helensFront.png"
import squbes from "../../assets/images/squbes.png"
import RowThreeCards from "../RowThreeCards/RowThreeCards"
const data = [
  {
    img: vhealth,
    para:
      "Highly nutritious milled seed mixes and crunchy seed and nut toppings for cereals, fruit, yoghurt and salads",
    buttonTitle: "Read More",
    buttonLink: "/virginia-health-flaxseed",
    title: "Milled Seeds & Seed and Nut Crunches",
  },
  {
    img: squbes,
    para:
      "Delicious wholefood light snacks made with seeds, nuts, fruits, and wholegrain cereals. No refined sugar. Balanced nutritional profile",
    buttonTitle: "Visit Website",
    buttonLink: "http://www.squbes.ie",
    title: "Healthy Snacks",
  },
  {
    img: crunch,
    para:
      "Gluten and wheat free baking mixes with no artificial stabilisers or modified starches, that taste great!",
    buttonTitle: "Read More",
    buttonLink: "/crunch-and-cereal",
    title: "Gluten Free Baking mixes",
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
