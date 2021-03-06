import React from "react"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"
import { Container, Row } from "react-bootstrap"
import ScrollAnimation from "react-animate-on-scroll"

import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import WorkWith from "../components/WorkWith"
import HomeCompostablePackaging from "../components/HomeCompostablePackaging"
import ContactUs from "../components/ContactUs"

import RowThreeCards from "../components/RowThreeCards"

import nutty from "../assets/images/nutty.png"
import raspberryHemp from "../assets/images/raspberryHemp.png"
import turmericOrange from "../assets/images/turmericOrange.png"
import ocadoReview from "../assets/images/ocadoQuote.png"
const productData = [
  {
    img: nutty,
    para:
      "Our products range from delicious gluten free baking mixes to highly nutritious seed mixes for cereal toppings, crunch toppings, salad toppings and snacks.",
    title: "Original Nutty Flavour",
  },
  {
    img: raspberryHemp,
    para:
      "Our products range from delicious gluten free baking mixes to highly nutritious seed mixes for cereal toppings, crunch toppings, salad toppings and snacks.",
    title: "Raspberry & Hemp - Coming Soon",
  },
  {
    img: turmericOrange,
    para:
      "Our products range from delicious gluten free baking mixes to highly nutritious seed mixes for cereal toppings, crunch toppings, salad toppings and snacks.",
    title: "Turmeric & Orange - Coming Soon",
  },
]

const VirginiaHealthPage = ({ data }) => {
  const img = <Img fluid={data.file.childImageSharp.fluid} />
  return (
    <Layout>
      <SEO title="Virginia Harvest" />
      <Banner img={img} />
      <Container className="text-center my-5 virginia_harvest">
        <ScrollAnimation animateIn="fadeInUp">
          <Row>
            <div className="col-sm-4">
              <h2 className="green">Virginia Harvest</h2>
            </div>
            <div className="col-sm-8">
              <hr style={{ borderBottom: " solid 1px #aec237" }} />
              <div className="row d-flex text-right green justify-content-around">
                <h5 className="col-xs-2">Follow Virginia Health Flaxseed</h5>
                <div className="col-xs-2 d-flex text-right green justify-content-around brand_social_links">
                  <Link to="https://www.facebook.com/virginiahealthfood/">
                    <FaInstagram />
                  </Link>
                  <Link to="https://www.instagram.com/virginiaflaxseed/">
                    <FaFacebookF />
                  </Link>
                </div>
              </div>
            </div>
          </Row>
        </ScrollAnimation>
      </Container>
      <Container>
        <ScrollAnimation animateIn="fadeInUp">
          <Row>
            <p>
              To ensure a healthy daily dose of Omega 3, it is not necessary to
              eat fish. Whether following a meat free diet or not, adding milled
              flaxseed to your daily diet ensures you get an abundance of Omega
              3 to maintain health.. Virginia Health range of milled flaxseed
              products are high in Omega 3, fibre and are gluten free.
            </p>
            <p>
              The nutrients in whole flaxseed are not easy to absorb due to the
              seed’s tough coat so we mill the seeds gently to make those
              wonderful nutrients more accessible protecting the omega 3 from
              damage and helping you to maximise their nutritional value in your
              daily diet. Use 2 tablespoons each day in cereals, juices,
              yogurts, smoothies or salads.
            </p>
            <p>
              The Omega 3 in flaxseed is also scientifically proven to help
              maintain normal cholesterol levels. The beneficial effect is
              obtained with a daily intake of 2g of Omega 3 (ALA). 2 tablespoons
              of flaxseed provides around 6 g of Omega 3. It is important to
              maintain a varied and balanced diet and healthy lifestyle.
            </p>
          </Row>
        </ScrollAnimation>
      </Container>
      <Container>
        <ScrollAnimation animateIn="fadeInUp">
          <RowThreeCards data={productData} />
        </ScrollAnimation>
      </Container>
      <Container>
        <ScrollAnimation animateIn="fadeInUp">
          <h2 className="text-center">
            <span className="green">Flaxseed: </span>The Benefits
          </h2>
          <Row className="my-5">
            <p>
              Flaxseed for weight loss Did you know that many nutritionists view
              flaxseed as an essential ingredient in any healthy weight loss
              diet ? Unlike many other high fibre foods it is extremely low in
              the simple carbs you need to avoid when trying to loose weight.
              It’s high levels of fibre keep you fuller for longer avoiding
              those sugar lows that give you hunger pangs. Flaxseed is a gentle
              laxative, balancing your digestion and helping the body to
              eliminate the toxins that accumulate from poor dietary habits .
              Flaxseed contains high levels of Omega 3 essential fatty acids
              which make your cell membranes more pliable so they are better
              able to remove any fatty deposits from inside your cells .
              Flaxseed also contains significant levels of protein , zinc,
              magnesium and calcium all essential for a healthy metabolism.
            </p>

            <div className="col-sm-4 offset-sm-2">
              <ul>
                <li>Loaded With Nutrients</li>
                <li>High in Omega-3 Fats</li>
                <li>Rich Source of Lignans, Reducing Cancer Risk</li>
                <li>Rich in Dierary Fibre</li>
                <li>May Improve Cholesterol</li>
              </ul>
            </div>
            <div className="col-sm-4">
              <ul>
                <li>May Lower Blood Pressure</li>
                <li>They Contain High-Quality Protein</li>
                <li>May Help Control Blood Sugar</li>
                <li>Keep Hunger at Bay Aiding Weight Control</li>
                <li>Versatile Ingredient</li>
              </ul>
            </div>
          </Row>
        </ScrollAnimation>
      </Container>
      <Container>
        <ScrollAnimation animateIn="fadeInUp">
          <Row className="py-5">
            <div className="col-md-4">
              <img src={ocadoReview} alt="" />
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </Row>
        </ScrollAnimation>
      </Container>
      <div id="qualityAndSustainability">
        <ScrollAnimation animateIn="fadeInUp">
          <HomeCompostablePackaging />
        </ScrollAnimation>
      </div>
      <div id="WorkWith">
        <ScrollAnimation animateIn="fadeInUp">
          <WorkWith />
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
export default VirginiaHealthPage

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "virginiaBanner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
