import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import { Container, Row } from "react-bootstrap"
import Img from "gatsby-image"
import { graphql } from "gatsby"

class OurFavouriteFlaxseedRecipe extends React.Component {
  render() {
    const img = <Img fluid={this.props.data.file.childImageSharp.fluid} />
    return (
      <Layout>
        <SEO title="Home" />
        <Banner img={img} title="Our Favourite Flaxseed Recipe" />
        <Container className=" my-5">
          <Row>
            <p className="">
              Flaxseed is an extremely versatile ingredient to add to your
              baking. You can use it in nearly everything, from cookies, to
              cakes and bread and it adds that extra bit of nutrients.
            </p>
            <p>
              Our ultimate, favourite recipe to follow is our delicious raisin
              flaxseed cookies. Check out our recipe below and let us know what
              you think!
            </p>
            <ul>
              <li>1 large egg</li>
              <li>1/2 cup coconut oil</li>
              <li>1/2 cup light brown sugar </li>
              <li>1/4 cup granulated sugar</li>
              <li>1 table spoon vanilla extract</li>
              <li>1 tsp cinnamon</li>
              <li>1 tsp baking soda</li>
              <li>1 cup old-fashioned whole rolled oats</li>
              <li>1 cup flour</li>
              <li>½ cup of Virginia flaxseed </li>
              <li>3/4 cup raisins</li>
            </ul>
          </Row>
          <h2 className="text-center my-3">Part 1</h2>
          <Row>
            <p>Preheat the oven to 180 degrees</p>
            <p>
              In a large mixing bowl, whisk together the flour, Virginia
              Flaxseed, baking soda and baking powder.
            </p>
            <p>
              In a separate bowl, mix the eggs, sugar, and vanilla until the
              mixture is fluffy.
            </p>
          </Row>
          <h2 className="text-center my-3">Part 2</h2>
          <Row>
            <p>
              Combine the two mixtures, stirring until the flour is fully
              incorporated, then add the oats, raisins, and more flaxseed.
            </p>
            <p>Mix well, but don't over mix.</p>
          </Row>
          <h2 className="text-center my-3">Part 3</h2>
          <Row>
            <p>Prepare a baking sheet with a non-stick baking mat</p>
            <p>
              Scoop out heaped tablespoons of cookie dough, and gently form each
              into a ball, and place them evenly apart on the baking sheet.
            </p>
            <p>Sprinkle the top of each cookie with whole flaxseeds.</p>
            <p>
              Bake for 11-14 minutes, uncovered, until the cookies turn golden
              brown (but are still gooey in the middle).
            </p>
            <p>
              Rotate the baking sheet halfway through to ensure evenly baked
              cookies.
            </p>
            <p>
              Let the cookies cool on the baking sheet for 3 to 5 minutes before
              transferring to a wire rack or tea towel to cool.
            </p>
            <hr />
            <p>Finally, enjoy with a lovely cup of tea!</p>
            <p>
              Follow us on social @virginiaflaxseed and send us in photos of
              your flaxseed recipes
            </p>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default OurFavouriteFlaxseedRecipe

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "blogs/flaxseed.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
