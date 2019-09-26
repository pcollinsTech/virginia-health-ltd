import React from "react"

import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import { Container, Row } from "react-bootstrap"
import OurBrands from "../components/OurBrands"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <Container>
      <Row>
        <p>
          Our Products include highly nutritious, milled and crunchy seed
          toppings, delicious wholesome innovative snacks, low sugar cereals and
          gluten free baking mixes. We weave the valuable properties of seeds
          and cereals such as flaxseed, sunflower seed, pumpkinseed and chia,
          oats, quinoa and amaranth into delicious products using technical
          excellence and a dash of ingenuity to produce products that delight
          our customers.
        </p>
      </Row>
    </Container>
    <OurBrands />
  </Layout>
)

export default IndexPage
