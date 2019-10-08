import React from "react"

import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import { Container } from "react-bootstrap"
import WorkWith from "../components/WorkWith"
import ContactUs from "../components/ContactUs"
import SelectIngredients from "../components/SelectIngredients"
import UniqueSellingPoints from "../components/UniqueSellingPoints"
import SelectPackaging from "../components/SelectPackaging"

import nutsSeeds from "../assets/images/ingredients/nutsSeeds.png"
import fruitsAndBerries from "../assets/images/ingredients/fruitsAndBerries.png"
import functional from "../assets/images/ingredients/functional.png"
import herbsAndSpices from "../assets/images/ingredients/herbsAndSpices.png"
import proteins from "../assets/images/ingredients/proteins.png"
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

const packagingData = [
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
      <Container className="my-5 text-center">
        <SelectIngredients data={ingredientsData} />
        <UniqueSellingPoints fish={true} />
        <SelectPackaging data={packagingData} />
      </Container>
      <div id="qualityAndSustainability">
        <WorkWith />
      </div>
      <div id="contactUs">
        <ContactUs />
      </div>
    </Layout>
  )
}

export default MixSeedsForm
