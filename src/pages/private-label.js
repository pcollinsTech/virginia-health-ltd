import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Container, Row } from "react-bootstrap"
import WorkWith from "../components/WorkWith"
import QualityAndSustainability from "../components/QualityAndSustainability"
import ContactUs from "../components/ContactUs"

import blankLabel from "../assets/images/blackLabel.png"
import seeds from "../assets/images/seeds.png"
import bowlCereal from "../assets/images/bowlCereal.png"
import biscuit from "../assets/images/biscuit.png"
import RowThreeCards from "../components/RowThreeCards"

const formData = [
  {
    img: seeds,
    para:
      "Bespoke New Product Development of nutritious snacks and mixes to offer innovative quality products to your customers.",
    buttonTitle: "Select Your Options",
    buttonLink: "/milled-seed-and-nut-mixes",
    title: "Milled Seed and Nut Mixes",
  },
  {
    img: biscuit,
    para:
      "Bespoke New Product Development of nutritious Innovative shelf stable sweet or savoury snacks in various shapes-wheat free and peanut free.",
    buttonTitle: "Select Your Options",
    buttonLink: "/snacks",
    title: "Snacks",
  },
  {
    img: bowlCereal,
    para:
      "Bespoke New Product Development of nutritious Innovative shelf stable sweet or savoury snacks in various shapes-wheat free and peanut free.",
    buttonTitle: "Select Your Options",
    buttonLink: "/cereal-and-crunch",
    title: "Crunch and Cereals",
  },
]
const PrivateIndex = ({ data }) => {
  const img = <Img fluid={data.file.childImageSharp.fluid} />

  return (
    <Layout>
      <SEO title="Private Label" />
      <Banner img={img} title="Private Label" />
      <Container className="my-5 private_label">
        <Row>
          <div className="col-sm-6">
            <img src={blankLabel} alt="Blank Label" />
          </div>
          <div className="col-sm-6">
            <p className="my-5" style={{ fontSize: "18px" }}>
              Let us help you to create value in your business <br /> <br />
              By developing manufacturing and monitoring foods to the highest
              standards, we ensure that your inspiration leads to consistent,
              reliable products that you and your customers can trust. <br />
              <br />
              Our documented project management timeline allows you clear
              planning visibility and deadlines. This gives reassurance on
              project progress to all stakeholders during the development and
              launch process.
            </p>
          </div>
        </Row>
      </Container>
      <Container>
        <RowThreeCards data={formData} />
      </Container>
      <div id="qualityAndSustainability">
        <QualityAndSustainability />
      </div>
      <div id="WorkWith">
        <WorkWith />
      </div>
      <div id="contactUs">
        <ContactUs />
      </div>
    </Layout>
  )
}

export default PrivateIndex

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "privateLabelBanner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
