import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import { Container, Row } from "react-bootstrap"
import OurBrands from "../components/OurBrands"
import WorkWith from "../components/WorkWith"
import QualityAndSustainability from "../components/QualityAndSustainability"
import ContactUs from "../components/ContactUs"
import InTheNews from "../components/InTheNews"
import ScrollAnimation from "react-animate-on-scroll"

const OurBrandsPage = ({ data }) => {
  const img = <Img fluid={data.file.childImageSharp.fluid} />

  return (
    <Layout>
      <SEO title="Our Brands" />
      <Banner img={img} title="Our Brands" />
      <Container className="text-center my-5">
        <ScrollAnimation animateIn="fadeInUp">
          <Row>
            <p className="home_text">
              Our Products include highly nutritious, milled and crunchy seed
              toppings, delicious wholesome innovative snacks, low sugar cereals
              and gluten free baking mixes. We weave the valuable properties of
              seeds and cereals such as flaxseed, sunflower seed, pumpkinseed
              and chia , oats, quinoa and amaranth into delicious products using
              technical excellence and a dash of ingenuity to produce products
              that delight our customers.
            </p>
          </Row>
        </ScrollAnimation>
      </Container>
      <ScrollAnimation animateIn="fadeInUp">
        <OurBrands />
      </ScrollAnimation>
      <div id="qualityAndSustainability">
        <ScrollAnimation animateIn="fadeInUp">
          <QualityAndSustainability />
        </ScrollAnimation>
      </div>
      <div id="WorkWith">
        <ScrollAnimation animateIn="fadeInUp">
          <WorkWith />
        </ScrollAnimation>
      </div>
      <div id="InTheNews">
        <ScrollAnimation animateIn="fadeInUp">
          <InTheNews />
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

export default OurBrandsPage

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "bannerOurBrands.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
