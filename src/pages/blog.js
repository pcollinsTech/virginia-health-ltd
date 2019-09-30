import React from "react"
import Layout from "../layout/Layout"
import Banner from "../components/Banner"
import SEO from "../components/seo"
import FeaturedBlog from "../components/FeaturedBlog"
import BlogCard from "../components/InTheNews/BlogCard"
import banner from "../assets/images/BlogBanner.png"
import { graphql } from "gatsby"
import { Row, Container } from "react-bootstrap"
class Blog extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Banner title="In The News" img={banner} />
        <Container>
          <Row>
            <div id="main">
              <div id="in_the_news">
                <h2 className="my-5">Welcome To The Blog</h2>
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  illum, ut quos omnis delectus facere labore pariatur
                  recusandae sint voluptatum minus accusamus sit, molestiae
                  tempora aut temporibus consequuntur neque architecto!"
                </p>
                <div className="row">
                  <div className="container">
                    <FeaturedBlog />
                  </div>
                </div>
                <div className="container">
                  <div className="row blog__container">
                    {this.props.data.allWordpressPost.edges.map(post => {
                      return <BlogCard post={post} />
                    })}
                  </div>
                </div>
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
    allWordpressPost {
      edges {
        node {
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
  }
`
