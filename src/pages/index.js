import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import BannerCarousel from "../components/BannerCarousel"
import { Container, Row } from "react-bootstrap"
import OurBrands from "../components/OurBrands"
import WorkWith from "../components/WorkWith"
import QualityAndSustainability from "../components/QualityAndSustainability"
import ContactUs from "../components/ContactUs"
import InTheNews from "../components/InTheNews"
import ScrollAnimation from "react-animate-on-scroll"

import seeds from "../assets/images/seeds.png"
import bowlCereal from "../assets/images/bowlCereal.png"
import biscuit from "../assets/images/biscuit.png"
import RowThreeCards from "../components/RowThreeCards"

const formData = [
  {
    img: seeds,
    para:
      "Nutrition and Technical expertise. Regulatory Compliance Project Management BRC Grade AA manufacturing Manufacturing Excellence Products you can trust",
    buttonTitle: "Select Your Options",
    buttonLink: "/milled-seed-and-nut-mixes",
    title: "Milled Seed and Nut Mixes",
  },
  {
    img: biscuit,
    para:
      "Nutrition and Technical expertise. Regulatory Compliance Project Management BRC Grade AA manufacturing Manufacturing Excellence Products you can trust",
    buttonTitle: "Select Your Options",
    buttonLink: "/snacks",
    title: "Snacks",
  },
  {
    img: bowlCereal,
    para:
      "Nutrition and Technical expertise. Regulatory Compliance Project Management BRC Grade AA manufacturing Manufacturing Excellence Products you can trust",
    buttonTitle: "Select Your Options",
    buttonLink: "/cereal-and-crunch",
    title: "Crunch and Cereals",
  },
]

const HomeIndex = props => {
  const [promos, setPromo] = useState("ourBrands")
  var images = {
    img1: props.data.img1.childImageSharp.fluid,
    img2: props.data.img2.childImageSharp.fluid,
    img3: props.data.img3.childImageSharp.fluid,
  }
  return (
    <Layout>
      <SEO title="Home" />
      <BannerCarousel
        images={images}
        titleOne="Health Food With a Difference"
        titleTwo="Health Food With a Difference"
        titleThree="Health Food With a Difference"
      />
      <Container className="text-center my-5">
        <ScrollAnimation animateIn="fadeInUp">
          <h2 className="">
            We develop and manufacture genuinely healthy foods that taste great!
          </h2>
          <Row className="home_button">
            <div className="col-sm-6">
              <button
                className={`btn ${
                  promos === "ourBrands" ? "btn-primary" : "btn-info"
                }`}
                onClick={() => setPromo("ourBrands")}
              >
                Our Brands
              </button>
            </div>
            <div className="col-sm-6">
              <button
                className={`btn ${
                  promos === "privateLabel" ? "btn-primary" : "btn-info"
                }`}
                onClick={() => setPromo("privateLabel")}
              >
                Private Label
              </button>
            </div>
          </Row>
        </ScrollAnimation>
      </Container>
      <ScrollAnimation animateIn="fadeInUp">
        {promos == "ourBrands" && <OurBrands />}
        {promos == "privateLabel" && (
          <Container>
            <RowThreeCards data={formData} />
          </Container>
        )}
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

export default HomeIndex

export const pageQuery = graphql`
  query {
    img1: file(relativePath: { eq: "bannerOne.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "bannerTwo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "bannerThree.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
