import React, { Fragment } from "react"
import { Link } from "gatsby"
import { FaCheckCircle } from "react-icons/fa"
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

import banner from "../assets/images/snacksBanner.png"

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

const SnacksForm = () => {
  return (
    <Layout>
      <SEO title="Snacks" />
      <Banner img={banner} title="Snacks of all Shapes and Sizes" />
      <Container className="my-5 text-center">
        <SelectIngredients data={ingredientsData} />
        <UniqueSellingPoints fish={false} />
        <Fragment>
          <h2>Select your Unique Shape</h2>
          <Row className="my-5 justify-content-md-center">
            <div className="col-sm-3 ingredient">
              <img src={bites} alt="" />
              <FaCheckCircle />
              <h3>Bites</h3>
            </div>
            <div className="col-sm-3 ingredient">
              <img src={balls} alt="" />
              <FaCheckCircle />
              <h3>Balls</h3>
            </div>
            <div className="col-sm-3 ingredient">
              <img src={discs} alt="" />
              <FaCheckCircle />
              <h3>Discs</h3>
            </div>
          </Row>
        </Fragment>
        <Fragment>
          <h2>Select your Texture</h2>
          <Row className="my-5 justify-content-md-center">
            <div className="col-sm-3 ingredient">
              <div className="blue_square">
                <h2>Crunchy</h2>
              </div>
              <FaCheckCircle />
            </div>
            <div className="col-sm-3 ingredient">
              <div className="blue_square">
                <h2>Chewy</h2>
              </div>
              <FaCheckCircle />
            </div>
            <div className="col-sm-3 ingredient">
              <div className="blue_square">
                <h2>Soft</h2>
              </div>
              <FaCheckCircle />
            </div>
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
