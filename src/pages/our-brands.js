import React from "react"

import Layout from "../layout/Layout"
import SEO from "../components/seo"
import BannerCarousel from "../components/BannerCarousel"
import { Container, Row } from "react-bootstrap"
import OurBrands from "../components/OurBrands"
import WorkWith from "../components/WorkWith"
import QualityAndSustainability from "../components/QualityAndSustainability"
import ContactUs from "../components/ContactUs"

import banner from "../assets/images/BannerOurBrands.png"
const OurBrandsPage = () => {
  console.log("IMAGES", banner)
  return (
    <Layout>
      <SEO title="Our Brands" />
      <BannerCarousel
        imgOne={banner}
        imgTwo={banner}
        imgThree={banner}
        titleOne="Our Brands"
        titleTwo="Our Brands"
        titleThree="Our Brands"
      />
      <Container className="text-center my-5">
        <Row>
          <p className="home_text">
            Our Products include highly nutritious, milled and crunchy seed
            toppings, delicious wholesome innovative snacks, low sugar cereals
            and gluten free baking mixes. We weave the valuable properties of
            seeds and cereals such as flaxseed, sunflower seed, pumpkinseed and
            chia , oats, quinoa and amaranth into delicious products using
            technical excellence and a dash of ingenuity to produce products
            that delight our customers.
          </p>
        </Row>
      </Container>
      <OurBrands />
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

export default OurBrandsPage
