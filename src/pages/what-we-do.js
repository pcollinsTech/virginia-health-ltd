import React from "react"

import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import { Container, Row } from "react-bootstrap"
import MeetTheExperts from "../components/MeetTheExperts"
import ContactUs from "../components/ContactUs"

import quality from "../assets/images/quality.png"
import manufacture from "../assets/images/manufacture.png"
import productDevelopment from "../assets/images/productDevelopment.png"
import banner from "../assets/images/bannerOne.png"

const WhatWeDoPage = () => (
  <Layout>
    <SEO title="Our Brands" />
    <Banner
      imgOne={banner}
      imgTwo={banner}
      imgThree={banner}
      titleOne="Health Food With a Difference"
      titleTwo="Health Food With a Difference"
      titleThree="Health Food With a Difference"
    />
    <Container className="my-5 how_we_do_it">
      <h2 className="text-center">How We Do It</h2>
      <Row>
        <p className="home_text">
          Using our nutritional and technical knowledge, and our sourcing and
          project management experience we develop and produce healthy wholesome
          and convenient products that you can trust , designed for you and your
          customers at prices you can afford.
        </p>
      </Row>
      <Row>
        <div className="col-sm-6">
          <img src={productDevelopment} alt="Product Development" />
        </div>
        <div className="col-sm-6">
          <h3>Product Development</h3>
          <p>
            New Product Development : Our highly skilled product development
            team work to specific briefs to create products with specific
            nutritional profiles that meet legal and customer requirements for
            healthy products, and the sensory profiles required by the markets
            we serve. Working along with our quality and production teams the
            NPD team then scale up and monitor the process to ensure consistency
            with agreed finished product specifications.
          </p>
        </div>

        <div className="col-sm-6">
          <h3>Quality</h3>
          <p>
            Superior product quality is built into our development and
            production systems: Only suppliers who have undergone our rigorous
            approval processes are used for all raw materials > We manufacture
            to BRC Global standard Grade A, Version 7 have Organic Certification
            and are verified members of Origin Green Sustainability Initiative.
            Quality is built into our products from receipt of raw materials to
            despatch of finished goods and an onsite quality team continuously
            monitor the process checking production against documented
            specifications.
          </p>
        </div>
        <div className="col-sm-6">
          <img src={quality} alt="Quality" />
        </div>
        <div className="col-sm-6">
          <img src={manufacture} alt="Manufacture" />
        </div>
        <div className="col-sm-6">
          <h3>Manufacture</h3>
          <p>
            Our production process is manned by a highly trained and motivated
            team and takes place in a state of the art, high spec GFSI certified
            production facility using modern manufacturing and packing
            equipment.
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

export default WhatWeDoPage
