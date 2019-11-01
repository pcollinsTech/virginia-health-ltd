import React, { Fragment, useContext } from "react"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"
import { Container, Row } from "react-bootstrap"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import WorkWith from "../components/WorkWith"
import ContactUs from "../components/ContactUs"
import SelectIngredients from "../components/SelectIngredients"
import UniqueSellingPoints from "../components/UniqueSellingPoints"
import SelectPackaging from "../components/SelectPackaging"

import nutsSeeds from "../assets/images/ingredients/nutsSeeds.png"
import cereals from "../assets/images/ingredients/cereals.png"
import chocolate from "../assets/images/ingredients/chocolate.png"
import fruitsAndBerries from "../assets/images/ingredients/fruitsAndBerries.png"
import functional from "../assets/images/ingredients/functional.png"
import herbsAndSpices from "../assets/images/ingredients/herbsAndSpices.png"
import proteins from "../assets/images/ingredients/proteins.png"

import serveSachet from "../assets/images/packaging/serveSachet.png"
import doyPouch from "../assets/images/packaging/doyPouch.png"
import pillowPack from "../assets/images/packaging/pillowPack.png"
import shelfReadyDisplay from "../assets/images/packaging/shelfReadyDisplay.png"

import balls from "../assets/images/shapes/ball.png"
import bites from "../assets/images/shapes/cube.png"
import discs from "../assets/images/shapes/cube.png"

import EnquiryContext from "../context/enquiry/enquiryContext"
import { containsObject, tick } from "../helpers/helpers"

const ingredientsData = [
  {
    img: nutsSeeds,
    title: "Nuts & Seeds",
  },
  {
    img: cereals,
    title: "Cereals",
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
  {
    img: chocolate,
    title: "Chocolate & Caramel",
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
    img: shelfReadyDisplay,
    title: "Shelf ready display",
  },
]

const textureData = [
  { img: bites, title: "Bites" },
  { img: balls, title: "Balls" },
  { img: discs, title: "Discs" },
]

const shapeData = [{ title: "Crunchy" }, { title: "Chewy" }, { title: "Soft" }]
const SnacksForm = () => {
  const enquiryContext = useContext(EnquiryContext)

  const {
    shapes,
    textures,
    addShape,
    removeShape,
    addTexture,
    removeTexture,
  } = enquiryContext

  const handleShapeSelect = shape => {
    containsObject(shape, shapes) ? removeShape(shape) : addShape(shape)
  }

  const handleTextureSelect = texture => {
    containsObject(texture, textures)
      ? removeTexture(texture)
      : addTexture(texture)
  }
  const img = <Img fluid={this.props.data.file.childImageSharp.fluid} />
  return (
    <Layout>
      <SEO title="Snacks" />
      <Banner img={img} title="Snacks of all Shapes and Sizes" />
      <Container className="my-5 text-center">
        <SelectIngredients data={ingredientsData} />
        <UniqueSellingPoints fish={false} />
        <Fragment>
          <h2>Select your Unique Shape</h2>
          <Row className="my-5 justify-content-md-center">
            {textureData.map(texture => {
              return (
                <div
                  className="col-sm-3 ingredient"
                  onClick={e => handleTextureSelect(texture)}
                >
                  <img src={texture.img} alt="" />
                  {tick(texture, textures)}
                  <h3>{texture.title}</h3>
                </div>
              )
            })}
          </Row>
        </Fragment>
        <Fragment>
          <h2>Select your Texture</h2>
          <Row className="my-5 justify-content-md-center">
            {shapeData.map(shape => {
              return (
                <div
                  className="col-sm-3 ingredient"
                  onClick={e => handleShapeSelect(shape)}
                >
                  <div className="blue_square">
                    <h2>{shape.title}</h2>
                  </div>
                  {tick(shape, shapes)}
                </div>
              )
            })}
          </Row>
        </Fragment>
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

export default SnacksForm

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "snacksBanner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
