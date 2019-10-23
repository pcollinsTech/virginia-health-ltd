import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Banner from "../components/BannerCarousel"
import { Container, Row } from "react-bootstrap"
import WorkWith from "../components/WorkWith"
import QualityAndSustainability from "../components/QualityAndSustainability"
import ContactUs from "../components/ContactUs"

import banner from "../assets/images/privateLabelBanner.png"
import blankLabel from "../assets/images/blackLabel.png"
import seeds from "../assets/images/seeds.png"
import bowlCereal from "../assets/images/bowlCereal.png"
import biscuit from "../assets/images/biscuit.png"
import RowThreeCards from "../components/RowThreeCards"

const data = [
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
    buttonTitle: "Visit Website",
    buttonLink: "/snacks",
    title: "Snacks",
  },
  {
    img: bowlCereal,
    para:
      "Bespoke New Product Development of nutritious Innovative shelf stable sweet or savoury snacks in various shapes-wheat free and peanut free.",
    buttonTitle: "Select Your Options",
    buttonLink: "/crunch-and-cereal",
    title: "Crunch and Cereals",
  },
]
class PrivateIndex extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Private Label" />
        <Banner
          imgOne={banner}
          imgTwo={banner}
          imgThree={banner}
          titleOne="Private Label"
          titleTwo="Private Label"
          titleThree="Private Label"
        />
        <Container className="my-5 private_label">
          <Row>
            <div className="col-sm-6">
              <img src={blankLabel} alt="Blank Label" />
            </div>
            <div className="col-sm-6">
              <p className="my-5" style={{ fontSize: "18px" }}>
                We use the expertise and know how of our technical, quality and
                production teams to create value in your business. By developing
                manufacturing and monitoring foods to the highest standards, we
                ensure that your inspiration leads to consistent, reliable
                products that you and your customers can trust. Our documented
                project management timeline allows you clear planning visibility
                and deadlines. This gives reassurance on project progress to all
                stakeholders during the development and launch process.
              </p>
            </div>
          </Row>
        </Container>
        <Container>
          <RowThreeCards data={data} />
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
}

export default PrivateIndex
