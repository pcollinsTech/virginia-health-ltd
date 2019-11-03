import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import { Container, Row } from "react-bootstrap"

class TermsAndConditions extends React.Component {
  render() {
    const img = <Img loading="lazy" fluid={this.props.data.file.childImageSharp.fluid} />
    return (
      <Layout>
        <SEO title="Home" />
        <Banner img={img} title="TERMS AND CONDITIONS OF USE" />
        <Container className="text-center my-5">
          <Row>
            <p className="home_text">
              Access to this website and the use of information on it is subject
              to the following Terms and Conditions of Use. Please read
              carefully. If you do not wish to accept these conditions then you
              may not use this site.
            </p>
            <h2>DEFINITIONS’</h2>
            <p>
              In these Terms, “the Company” means Virginia Health Food Ltd.(
              ‘We’ , ‘Us’ or ‘Our ‘), having its registered office in
              Carrigaline Business Park, Kilnagleary Road, Cork. P43 XP89 and
              the ‘user ‘ means any person or entity who accesses the website .
            </p>
            <h2>GOVERNING LAW AND JURISDICTION</h2>
            <p>
              Information on this website is provided in accordance with and
              subject to the laws of the Republic of Ireland. The courts of the
              Republic of Ireland have exclusive jurisdiction over all claims or
              disputes arising in connection with these Terms and Conditions of
              use, the information contained on this website, and any use made
              of that information. Any such claims or disputes shall be resolved
              in accordance with the laws of the Republic of Ireland.
            </p>
            <h2>PRIVACY STATEMENT</h2>
            <p>
              We will use your personal data only in the manner set out in our
              Privacy Statement
            </p>
            <h2>USE OF CONTENT AND COPYRIGHT</h2>
            <p>
              The content of this website including but not limited to: logos,
              trademarks, text, code, software, videos, articles, images,
              photos, artwork, graphics, files etc are protected by copyright,
              trademarks and other rights of intellectual property owned by us.
              You may not sell or modify the content (in whole or part ) or
              reproduce, display, distribute, or otherwise use the content in
              any way for any public or commercial purpose. Password-protected
              and administrative sections of this website are not provided for
              public use, and you may be committing a criminal offence if you
              try to circumvent this site's security.
            </p>
            <h2>NO WARRANTIES</h2>
            <p>
              This site and it content excludes warranties of any kind, either
              expressed or implied, to the fullest extent permissible under law.
              We make no warranty that the site will operate error-free or that
              any defect will be corrected. Neither do we warrant that the site
              is compatible with your technology or that the site or its server
              is free of errors, viruses, worms etc We shall not be liable for
              any damage you may suffer as a result of such entities. Links to
              other websites (Other than websites that are operated by us) are
              for information only and have not been reviewed by us. We have no
              responsibility for the content of such websites or pages and
              accept no liability for any losses whatsoever that may be incurred
              as a result of linking to same.
            </p>
            <h2>AMENDMENTS</h2>
            <p>
              The contents of this website including the information contained
              therein, our Terms and Conditions of use and our Privacy Policy
              are subject to change without notice from time to time.
            </p>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default TermsAndConditions

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
