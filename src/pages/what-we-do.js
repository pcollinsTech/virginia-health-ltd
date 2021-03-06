import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import { Container, Row } from "react-bootstrap"
import MeetTheExperts from "../components/MeetTheExperts"
import ContactUs from "../components/ContactUs"
import ScrollAnimation from "react-animate-on-scroll"

import quality from "../assets/images/quality.jpeg"
import manufacture from "../assets/images/manufacture.jpeg"
import productDevelopment from "../assets/images/new.jpeg"
import brandHere from "../assets/images/brandHere.png"

const WhatWeDoPage = ({ data }) => {
  const img = <Img fluid={data.file.childImageSharp.fluid} />
  return (
    <Layout>
      <SEO title="What We Do" />
      <Banner img={img} />
      <Container className="my-5 how_we_do_it">
        <ScrollAnimation animateIn="fadeInUp">
          <h2 className="text-center">How We Do It</h2>
          <Row className="mb-5">
            <p className="home_text text-center">
              Using our nutritional and technical knowledge, and our sourcing
              and project management experience we develop and produce healthy
              wholesome and convenient products that you can trust , designed
              for you and your customers at prices you can afford.
            </p>
          </Row>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <Row className="mb-5">
            <div className="col-sm-6">
              <img src={productDevelopment} alt="Product Development" />
            </div>
            <div className="col-sm-6">
              <h3>Product Development</h3>
              <p>
                New Product Development : Our highly skilled product development
                team work to specific briefs to create products with specific
                nutritional profiles that meet legal and customer requirements
                for healthy products, and the sensory profiles required by the
                markets we serve. Working along with our quality and production
                teams the NPD team then scale up and monitor the process to
                ensure consistency with agreed finished product specifications.
              </p>
            </div>
          </Row>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <Row className="mb-5 mobile_up">
            <div className="col-sm-6 col-md-pull-6">
              <h3>Quality</h3>
              <p>
                Superior product quality is built into our development and
                production systems: Only suppliers who have undergone our
                rigorous approval processes are used for all raw materials > We
                manufacture to BRC Global standard Grade A, Version 7 have
                Organic Certification and are verified members of Origin Green
                Sustainability Initiative. Quality is built into our products
                from receipt of raw materials to despatch of finished goods and
                an onsite quality team continuously monitor the process checking
                production against documented specifications.
              </p>
            </div>
            <div className="col-sm-6 col-md-push-6">
              <img src={quality} alt="Quality" />
            </div>
          </Row>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <Row className="mb-5">
            <div className="col-sm-6">
              <img src={manufacture} alt="Manufacture" />
            </div>
            <div className="col-sm-6">
              <h3>Manufacture</h3>
              <p>
                Our production process is manned by a highly trained and
                motivated team and takes place in a state of the art, high spec
                GFSI certified production facility using modern manufacturing
                and packing equipment.
              </p>
            </div>
          </Row>
        </ScrollAnimation>
      </Container>
      <div id="qualityAndSustainability">
        <ScrollAnimation animateIn="fadeInUp">
          <MeetTheExperts />
        </ScrollAnimation>
      </div>
      <div id="privateLabel">
        <ScrollAnimation animateIn="fadeInUp">
          <Container>
            <Row>
              <div className="col-sm-6">
                <img src={brandHere} alt="" />
              </div>
              <div className="col-sm-6">
                {" "}
                <h2>Private Label</h2>
                <p>
                  When it comes to food, Helen and her team use top quality,
                  nutrient dense wholesome ingredients, so you won’t find any
                  synthetic stabilizers, preservatives or flavourings in any
                  products at Virginia Health Food Ltd. <br />
                  In response to the need for easy to use, nutritionally
                  valuable foods which do not contain wheat (an ingredient that
                  is strongly linked to digestive intolerance), Virginia Health
                  Food Ltd has developed a range of products from delicious,
                  fuss free wheat free and gluten free home baking mixes through
                  to nutritious breakfast seed toppings to boost your breakfast.
                </p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </Row>
          </Container>
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

export default WhatWeDoPage

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "whatWeDoBanner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
