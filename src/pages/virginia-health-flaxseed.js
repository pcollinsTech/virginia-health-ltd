import React from "react"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Container, Row } from "react-bootstrap"

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

const productData = [
  {
    img: nutty,
    para:
      "Our products range from delicious gluten free baking mixes to highly nutritious seed mixes for cereal toppings, crunch toppings, salad toppings and snacks.",
    buttonTitle: "Buy Now",
    buttonLink: "#",
    title: "Original Nutty Flavour",
  },
  {
    img: raspberryHemp,
    para:
      "Our products range from delicious gluten free baking mixes to highly nutritious seed mixes for cereal toppings, crunch toppings, salad toppings and snacks.",
    buttonTitle: "Buy Now",
    buttonLink: "#",
    title: "Raspberry & Hemp - Coming Soon",
  },
  {
    img: turmericOrange,
    para:
      "Our products range from delicious gluten free baking mixes to highly nutritious seed mixes for cereal toppings, crunch toppings, salad toppings and snacks.",
    buttonTitle: "Buy Now",
    buttonLink: "#",
    title: "Turmeric & Orange - Coming Soon",
  },
]

const VirginiaHealthPage = ({ data }) => {
  const img = <Img loading="lazy" fluid={data.file.childImageSharp.fluid} />
  return (
    <Layout>
      <SEO title="Our Brands" />
      <Banner img={img} title="Health Food With a Difference" />
      <Container className="text-center my-5">
        <Row>
          <div className="col-sm-4">
            <h2 className="green">Virginia Health Flaxseed</h2>
          </div>
          <div className="col-sm-8">
            <hr style={{ borderBottom: " solid 1px #aec237" }} />
            <div className="row d-flex text-right green justify-content-between">
              <h5 className="col-sm-4">Follow Virginia Health Flaxseed</h5>
              <div className="col-sm-2 d-flex text-right green justify-content-around brand_social_links">
                <FaInstagram />
                <FaTwitter />
                <FaFacebookF />
              </div>
            </div>
          </div>
        </Row>
      </Container>
      <Container>
        <Row>
          <p>
            Virginia Harvest is a range of milled flaxseed products that are
            high in fibre, High in Omega 3 (ALA) and gluten free.
          </p>
          <p>
            The nutrients in whole flaxseed are not easy to absorb due to the
            seed’s tough coat so we mill the seeds gently to make those
            wonderful nutrients more accessible protecting the omega 3 from
            damage and helping you to maximise their nutritional value in your
            daily diet. Use 2 tablespoons each day in cereals, juices, yogurts,
            smoothies or salads.
          </p>
          <p>
            Our flaxseed is grown on a single farm from premium certified seeds
            of the “Golden Omega” variety so its origin is guaranteed.
          </p>
          <p>
            It is high in Omega 3 (Alpha Linolenic Acid) and thereby is
            scientifically proven to help maintain normal cholesterol levels.
            The beneficial effect is obtained with a daily intake of 2g ALA. It
            is important to maintain a varied and balanced diet and healthy
            lifestyle.
          </p>
        </Row>
      </Container>
      <Container>
        <RowThreeCards data={productData} />
      </Container>
      <Container>
        <h2 className="text-center">
          <span className="green">Flaxseed: </span>The Benefits
        </h2>
        <Row className="my-5">
          <p>
            Flaxseed for weight loss Did you know that many nutritionists view
            flaxseed as an essential ingredient in any healthy weight loss diet
            ? Unlike many other high fibre foods it is extremely low in the
            simple carbs you need to avoid when trying to loose weight. It’s
            high levels of fibre keep you fuller for longer avoiding those sugar
            lows that give you hunger pangs. Flaxseed is a gentle laxative,
            balancing your digestion and helping the body to eliminate the
            toxins that accumulate from poor dietary habits . Flaxseed contains
            high levels of Omega 3 essential fatty acids which make your cell
            membranes more pliable so they are better able to remove any fatty
            deposits from inside your cells . Flaxseed also contains significant
            levels of protein , zinc, magnesium and calcium all essential for a
            healthy metabolism.
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
      </Container>
      <div id="qualityAndSustainability">
        <HomeCompostablePackaging />
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
export default VirginiaHealthPage

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "virginiaBanner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
