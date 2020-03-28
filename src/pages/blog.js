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
import flaxseed from "../assets/images/blogs/flaxseed.jpg"
import packaging from "../assets/images/blogs/packaging.jpg"
const posts = [
  {
    id: 1,
    slug: "/our-favourite-flaxseed-recipe",
    title: "Our Favourite Flaxseed Recipe",
    excerpt:
      "Flaxseed is an extremely versatile ingredient to add to your baking. You can use it in nearly everything, from cookies, to cakes and bread and it adds that extra bit of nutrients.\nOur ultimate, favourite recipe to follow is our delicious raisin flaxseed cookies. Check out our recipe below and let us know what you think!",
    date: "Jan 2020",
    img: flaxseed,
  },
  {
    id: 2,
    slug: "/our-home-compostable-packaging",
    title: "Our Home Compostable Packaging",
    excerpt:
      "Our plastic-free Home Compostable Packaging is 100% biodegradable and breaks down naturally and easily in the environment. Home compostable packaging doesn’t require high temperatures or a lack of oxygen to break down, therefore is one of the most environmentally friendly ways to package products.",
    date: "Feb 2020",
    img: packaging,
  },
]

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
                      {posts.map(post => {
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
    file(relativePath: { eq: "BlogBanner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
