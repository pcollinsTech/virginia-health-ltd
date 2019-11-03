import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import { Container, Row } from "react-bootstrap"

import { graphql } from "gatsby"
import Img from "gatsby-image"
class CookiesPage extends React.Component {
  render() {
    const img = <Img loading="lazy" fluid={this.props.data.file.childImageSharp.fluid} />
    return (
      <Layout>
        <SEO title="Home" />
        <Banner img={img} title="TERMS AND CONDITIONS OF USE" />
        <Container className="text-center my-5">
          <Row>
            <h2>Cookie Policy</h2>
            <p>
              A cookie is a small file that is stored on your computer, which
              allows us to improve the quality of your visit to our Site.
            </p>
            <p>
              They don’t do anything i.e. they are not executable code and can
              only be read by you and the website that created them. You can
              view and edit the cookies on your computer like any other text
              file using a text editor. The website that created the cookie can
              read the contents when you are on their website.
            </p>
            <p>
              Cookies are widely used across the internet: you may have hundreds
              of cookies on your computer at any one time. Each browser has its
              own set of cookies so, if you run multiple browsers, you will have
              multiple sets of cookies on your computer.
            </p>
            <p>
              This site uses two types of cookies: session cookies, which are
              deleted from your computer when you close your web browser; and
              persistent cookies, which remain on your computer until they are
              deleted, or until a specified expiry date/time.
            </p>
            <p>
              None of the cookies we use store any personal information about
              visitors to our site, however they may store information (such as
              a unique identifier) that enables a cookie to be linked to data we
              already store.
            </p>
            <p>
              We use Google Analytics to generate reports on visitors’ use of
              this web site, which relies on a number of persistent and session
              cookies.{" "}
            </p>
            <p>
              Google’s privacy policy is available here:
              <a href="http://www.google.com/privacypolicy.html">
                www.google.com/privacypolicy.html
              </a>
            </p>
            <p>
              Most browsers allow users to control which cookies are accepted
              and to delete existing cookies. Please refer to your browser’s
              ‘Help’ function for further instructions. Refusing to accept
              cookies will, in many circumstances, have a negative impact upon
              the usability of a web site.
            </p>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default CookiesPage

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "bannerOne.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
