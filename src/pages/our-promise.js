import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import { Container, Row } from "react-bootstrap"
import HomeCompostablePackaging from "../components/HomeCompostablePackaging"
import ContactUs from "../components/ContactUs"
import Img from "gatsby-image"
import { graphql } from "gatsby"

class OurPromisePage extends React.Component {
  render() {
    const img = <Img loading="lazy" fluid={this.props.data.file.childImageSharp.fluid} />
    return (
      <Layout>
        <SEO title="Home" />
        <Banner
          img={img}
          title="Our Promise to you"
          subtitle="Quality and the Environment"
        />
        <Container className="my-5 private_label">
          <Row>
            <p className="home_text">
              Virginia Health Food Ltd creates healthy natural products, grows
              more ingredients locally and supports a nature education community
              through Origin Green, Ireland’s food and drink sustainability
              programme.
            </p>
            <p className="home_text">
              We endeavour to partner with only those who have a verified
              commitment to sustainability.
            </p>
            <p className="home_text">
              This programme brings together our food industry – from farmers to
              food producers, retailers to foodservice operators – with the
              common goal of sustainable food production.
            </p>
            <h2 className="py-3">Quality Products</h2>
            <p className="home_text">
              The overall ambition of the Origin Green programme is that farms
              and food manufacturing businesses throughout Ireland sign up to
              the sustainability agenda, making measurable commitments to
              producing in a sustainable manner, with progress independently
              assessed and verified.
            </p>
            <p className="home_text">
              We, Virginia Health Food Ltd, are committed to working with Origin
              Green to improve sustainable thinking through collaboration in
              this sector.
            </p>
          </Row>
        </Container>

        <div id="qualityAndSustainability">
          <HomeCompostablePackaging />
        </div>
        <Container>
          <Row>
            <h2 className="pt-3">Raw Materials</h2>
            <p className="home_text">
              The overall ambition of the Origin Green programme is that farms
              and food manufacturing businesses throughout Ireland sign up to
              the sustainability agenda, making measurable commitments to
              producing in a sustainable manner, with progress independently
              assessed and verified.
            </p>
            <p className="home_text">
              We, Virginia Health Food Ltd, are committed to working with Origin
              Green to improve sustainable thinking through collaboration in
              this sector.
            </p>
          </Row>
        </Container>
        <Container>
          <Row>
            <h2 className="pt-3">Waste and Recycling</h2>
            <p className="home_text">
              The overall ambition of the Origin Green programme is that farms
              and food manufacturing businesses throughout Ireland sign up to
              the sustainability agenda, making measurable commitments to
              producing in a sustainable manner, with progress independently
              assessed and verified.
            </p>
            <p className="home_text">
              We, Virginia Health Food Ltd, are committed to working with Origin
              Green to improve sustainable thinking through collaboration in
              this sector.
            </p>
          </Row>
        </Container>
        <Container>
          <Row>
            <h2 className="pt-3">Communication</h2>
            <p className="home_text">
              The overall ambition of the Origin Green programme is that farms
              and food manufacturing businesses throughout Ireland sign up to
              the sustainability agenda, making measurable commitments to
              producing in a sustainable manner, with progress independently
              assessed and verified.
            </p>
            <p className="home_text">
              We, Virginia Health Food Ltd, are committed to working with Origin
              Green to improve sustainable thinking through collaboration in
              this sector.
            </p>
          </Row>
        </Container>
        <div id="contactUs">
          <ContactUs />
        </div>
      </Layout>
    )
  }
}

export default OurPromisePage

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "ourPromiseBanner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
