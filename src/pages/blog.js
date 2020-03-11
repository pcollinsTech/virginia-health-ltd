import React from "react"
import Layout from "../layout/Layout"
import Banner from "../components/Banner"
import SEO from "../components/seo"
import FeaturedBlog from "../components/FeaturedBlog"
import BlogCard from "../components/InTheNews/BlogCard"
import ScrollAnimation from "react-animate-on-scroll"
import { graphql } from "gatsby"
import { Row, Container } from "react-bootstrap"
import Img from "gatsby-image"
class Blog extends React.Component {
  render() {
    const img = (
      <Img
        fluid={this.props.data.file.childImageSharp.fluid}
        placeholderStyle={{ backgroundColor: `black` }}
      />
    )
    return (
      <Layout>
        <SEO title="Blog" />
        <Banner title="In The News" img={img} />
        <Container>
          <Row>
            <div id="main">
              <div id="in_the_news">
                <ScrollAnimation animateIn="fadeInUp">
                  <h2 className="my-5">Welcome To The Blog</h2>
                  <p>
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde illum, ut quos omnis delectus facere labore pariatur
                    recusandae sint voluptatum minus accusamus sit, molestiae
                    tempora aut temporibus consequuntur neque architecto!"
                  </p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp">
                  <div className="row">
                    <div className="container">
                      <FeaturedBlog />
                    </div>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp">
                  <div className="container">
                    <div className="row blog__container">
                      {this.props.data.allWordpressPost.edges.map(post => {
                        return <BlogCard post={post} key={post.id} />
                      })}
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    allWordpressPost(limit: 3) {
      edges {
        node {
          id
          date(formatString: "DD / MMMM / YYYY")
          slug
          title
          wordpress_id
          excerpt
          featured_media {
            source_url
          }
        }
      }
    }
    file(relativePath: { eq: "BlogBanner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
