import React from "react"
import Layout from "../layout/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import { Container, Row } from "react-bootstrap"
import HomeCompostablePackaging from "../components/HomeCompostablePackaging"
import ContactUs from "../components/ContactUs"
import ScrollAnimation from "react-animate-on-scroll"

import blankLabel from "../assets/images/blackLabel.png"

class CompostablePackagingPage extends React.Component {
  render() {
    const img = <Img fluid={this.props.data.file.childImageSharp.fluid} />

    return (
      <Layout>
        <SEO title="Home" />
        <Banner
          img={img}
          title="New Home Compostable Packaging"
          subtitle="Quality and the Environment"
        />
        <Container className="my-5 private_label">
          <ScrollAnimation animateIn="fadeInUp">
            <Row>
              <h2 className="py-3">Subtitle here</h2>
              <p className="home_text">
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolore asperiores impedit non consequatur placeat perspiciatis
                aut illo quis et inventore quae, odio id sequi at dolorem
                necessitatibus ratione! Necessitatibus, eum."
              </p>
              <h2 className="py-3">Subtitle here</h2>
              <p className="home_text">
                The overall ambition of the Origin Green programme is that farms
                and food manufacturing businesses throughout Ireland sign up to
                the sustainability agenda, making measurable commitments to
                producing in a sustainable manner, with progress independently
                assessed and verified.
              </p>
            </Row>
          </ScrollAnimation>
        </Container>
        <Container>
          <ScrollAnimation animateIn="fadeInUp">
            <Row className="pb-5">
              <div className="col-sm-6">
                <img src={blankLabel} alt="" />
              </div>
              <div className="col-sm-6">
                <h2 className="py-3">Subtitle here</h2>
                <p className="">
                  The overall ambition of the Origin Green programme is that
                  farms and food manufacturing businesses throughout Ireland
                  sign up to the sustainability agenda, making measurable
                  commitments to producing in a sustainable manner, with
                  progress independently assessed and verified.
                </p>
              </div>
            </Row>
          </ScrollAnimation>
        </Container>
        <div id="qualityAndSustainability">
          <ScrollAnimation animateIn="fadeInUp">
            <HomeCompostablePackaging />
          </ScrollAnimation>
        </div>
        <Container>
          <ScrollAnimation animateIn="fadeInUp">
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
                We, Virginia Health Food Ltd, are committed to working with
                Origin Green to improve sustainable thinking through
                collaboration in this sector.
              </p>
            </Row>
          </ScrollAnimation>
        </Container>
        <Container>
          <ScrollAnimation animateIn="fadeInUp">
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
                We, Virginia Health Food Ltd, are committed to working with
                Origin Green to improve sustainable thinking through
                collaboration in this sector.
              </p>
            </Row>
          </ScrollAnimation>
        </Container>
        <Container>
          <ScrollAnimation animateIn="fadeInUp">
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
                We, Virginia Health Food Ltd, are committed to working with
                Origin Green to improve sustainable thinking through
                collaboration in this sector.
              </p>
            </Row>
          </ScrollAnimation>
        </Container>
        <div id="contactUs">
          <ScrollAnimation animateIn="fadeInUp">
            <ContactUs />
          </ScrollAnimation>
        </div>
      </Layout>
    )
  }
}

export default CompostablePackagingPage

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "compostabePackaging.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
