import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import { Container, Row } from "react-bootstrap"
import Img from "gatsby-image"
import { graphql } from "gatsby"

class OurHomeCompostablePackaging extends React.Component {
  render() {
    const img = <Img fluid={this.props.data.file.childImageSharp.fluid} />
    return (
      <Layout>
        <SEO title="Home" />
        <Banner img={img} title="Our Favourite Flaxseed Recipe" />
        <Container className=" my-5">
          <Row>
            <p>
              Our plastic-free Home Compostable Packaging is 100% biodegradable
              and breaks down naturally and easily in the environment. Home
              compostable packaging doesn’t require high temperatures or a lack
              of oxygen to break down, therefore is one of the most
              environmentally friendly ways to package products.
            </p>
            <p>
              We can now benefit from flaxseed’s super nutrients - omega 3,
              gentle fibre, protein and minerals while also caring for our
              earth. We’re super proud to introduce this natural cellulose pack
              as part of our commitment to a sustainable future for us and our
              planet.
            </p>
          </Row>
          <h2 className="text-center my-4">
            Benefits of Home Compostable Packaging Include
          </h2>
          <Row>
            <ul>
              <li>100% environmentally friendly</li>
              <li>
                Appealing to consumers concerned about the environmental impact
              </li>
              <li>Overall smaller carbon footprint</li>
            </ul>
          </Row>
          <Row>
            <p>
              Our packaging will naturally degrade. Please dispose of with your
              normal household waste (UK) or food waste bin (Ireland)
            </p>

            <p>Thank you for choosing the option that leaves no trace. </p>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default OurHomeCompostablePackaging

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "blogs/packaging.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
