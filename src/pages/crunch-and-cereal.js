import React from "react"

import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import { Container, Row } from "react-bootstrap"
import MeetTheExperts from "../components/MeetTheExperts"
import ContactUs from "../components/ContactUs"
import SelectIngredients from "../components/SelectIngredients"
import UniqueSellingPoints from "../components/UniqueSellingPoints"
import SelectPackaging from "../components/SelectPackaging"

import nutsSeeds from "../assets/images/ingredients/nutsSeeds.png"
import fruitsAndBerries from "../assets/images/ingredients/fruitsAndBerries.png"
import functional from "../assets/images/ingredients/functional.png"
import herbsAndSpices from "../assets/images/ingredients/herbsAndSpices.png"
import proteins from "../assets/images/ingredients/proteins.png"
import quality from "../assets/images/quality.png"
import manufacture from "../assets/images/manufacture.png"
import banner from "../assets/images/mixSeedsBanner.png"

const ingredientsData = [
  {
    img: nutsSeeds,
    title: "Nuts & Seeds",
  },
  {
    img: fruitsAndBerries,
    title: "Fruits & Berries, Vegetables",
  },

  {
    img: herbsAndSpices,
    title: "Herbs, Spices & Flavours",
  },
  {
    img: proteins,
    title: "Proteins",
  },
  {
    img: functional,
    title: "Functional Ingredients",
  },
]

const sellingPointsData = [
  {
    img: nutsSeeds,
    title: "Nuts & Seeds",
  },
  {
    img: fruitsAndBerries,
    title: "Fruits & Berries, Vegetables",
  },

  {
    img: herbsAndSpices,
    title: "Herbs, Spices & Flavours",
  },
  {
    img: proteins,
    title: "Proteins",
  },
  {
    img: functional,
    title: "Functional Ingredients",
  },
]

const MixSeedsForm = () => {
  return (
    <Layout>
      <SEO title="Our Brands" />
      <Banner img={banner} title="Milled Seed and Nut Mixes" />
      <Container className="my-5 how_we_do_it">
        <SelectIngredients data={ingredientsData} />
        <UniqueSellingPoints />
        <SelectPackaging data={sellingPointsData} />

        <Row className="mb-5">
          <div className="col-sm-6">
            <h3>Quality</h3>
            <p>
              Superior product quality is built into our development and
              production systems: Only suppliers who have undergone our rigorous
              approval processes are used for all raw materials > We manufacture
              to BRC Global standard Grade A, Version 7 have Organic
              Certification and are verified members of Origin Green
              Sustainability Initiative. Quality is built into our products from
              receipt of raw materials to despatch of finished goods and an
              onsite quality team continuously monitor the process checking
              production against documented specifications.
            </p>
          </div>
          <div className="col-sm-6">
            <img src={quality} alt="Quality" />
          </div>
        </Row>
        <Row className="mb-5">
          <div className="col-sm-6">
            <img src={manufacture} alt="Manufacture" />
          </div>
          <div className="col-sm-6">
            <h3>Manufacture</h3>
            <p>
              Our production process is manned by a highly trained and motivated
              team and takes place in a state of the art, high spec GFSI
              certified production facility using modern manufacturing and
              packing equipment.
            </p>
          </div>
        </Row>
      </Container>
      <div id="qualityAndSustainability">
        <MeetTheExperts />
      </div>
      <div id="contactUs">
        <ContactUs />
      </div>
    </Layout>
  )
}

export default MixSeedsForm
