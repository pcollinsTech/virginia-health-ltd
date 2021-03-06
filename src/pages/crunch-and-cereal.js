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
import ScrollAnimation from "react-animate-on-scroll"

import nutsSeeds from "../assets/images/ingredients/nutsSeeds.png"
import cerealAndCrunch from "../assets/images/ingredients/cerealAndCrunch.png"
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
    id: "cerealAndCrunch01",
    img: cerealAndCrunch,
    title: "Crunch & Cereals",
  },
  {
    id: "nutsSeeds02",
    img: nutsSeeds,
    title: "Nuts & Seeds",
  },
  {
    id: "fruitsAndBerries03",
    img: fruitsAndBerries,
    title: "Fruits & Berries, Vegetables",
  },

  {
    id: "herbsAndSpices04",
    img: herbsAndSpices,
    title: "Herbs, Spices & Flavours",
  },
  {
    id: "proteins05",
    img: proteins,
    title: "Proteins",
  },
  {
    id: "functional06",
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

const CrunchAndCerealForm = ({ data }) => {
  const img = <Img fluid={data.file.childImageSharp.fluid} />
  return (
    <Layout>
      <SEO title="Crunch and Cereals" />
      <Banner img={img} />
      <Container className="my-5 text-center">
        <ScrollAnimation animateIn="fadeInUp">
          <SelectIngredients data={ingredientsData} />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <UniqueSellingPoints fish={false} />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <SelectPackaging data={packagingData} />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
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
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <Link to="">
              <button className="btn btn-info align-text-bottom">
                Enquire Now
              </button>
            </Link>{" "}
          </form>
        </ScrollAnimation>
      </Container>
      <div id="workWith">
        <ScrollAnimation animateIn="fadeInUp">
          <WorkWith />
        </ScrollAnimation>
      </div>
      <div id="contactUs">
        <ScrollAnimation animateIn="fadeInUp">
          <ContactUs />
        </ScrollAnimation>
      </div>
    </Layout>
  )
}

export default CrunchAndCerealForm

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "crunchCerealsBanner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
