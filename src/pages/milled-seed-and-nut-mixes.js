import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
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

import serveSachet from "../assets/images/packaging/serveSachet.png"
import doyPouch from "../assets/images/packaging/doyPouch.png"
import pillowPack from "../assets/images/packaging/pillowPack.png"
import bagInBox from "../assets/images/packaging/bagInBox.png"
import shelfReadyDisplay from "../assets/images/packaging/shelfReadyDisplay.png"
import can from "../assets/images/packaging/can.png"

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
    img: serveSachet,
    title: "Single serve sachet",
  },
  {
    img: doyPouch,
    title: "Sharing doypouch",
  },

  {
    img: pillowPack,
    title: "Sharing pillow pack",
  },
  {
    img: bagInBox,
    title: "Bag in Box",
  },
  {
    img: shelfReadyDisplay,
    title: "Shelf ready display",
  },
  {
    img: can,
    title: "Composite Can",
  },
]

const MixSeedsForm = ({ data }) => {
  const img = <Img fluid={data.file.childImageSharp.fluid} />

  return (
    <Layout>
      <SEO title="Our Brands" />
      <Banner img={img} title="Milled Seed and Nut Mixes" />
      <Container className="my-5 text-center">
        <SelectIngredients data={ingredientsData} />
        <UniqueSellingPoints fish={true} />
        <SelectPackaging data={packagingData} />
        <form className="d-flex justify-content-between flex-column">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div class="row form-group">
            <div class="col">
              <input type="text" class="form-control" placeholder="Company" />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Contact Number"
              />
            </div>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <Link to="">
            <button className="btn btn-info align-text-bottom">
              Enquire Now
            </button>
          </Link>{" "}
        </form>
      </Container>
      <div id="workWith">
        <WorkWith />
      </div>
      <div id="contactUs">
        <ContactUs />
      </div>
    </Layout>
  )
}

export default MixSeedsForm

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "mixSeedsBanner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
