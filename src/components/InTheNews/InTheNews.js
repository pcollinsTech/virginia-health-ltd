import React from "react"
import BlogCard from "./BlogCard"
import { Link } from "gatsby"
import flaxseed from "../../assets/images/blogs/flaxseed.jpg"
import packaging from "../../assets/images/blogs/packaging.jpg"
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

const InTheNews = () => {
  return (
    <div id="on_the_blog">
      <h2 className="text-center mb-5">In The News</h2>
      <div className="container">
        <div className="row text-center">
          {posts.map(post => {
            return <BlogCard post={post} />
          })}
          <div className="text-center"></div>
        </div>
        <div className="text-center">
          <Link to="/blog">
            <button
              className="btn btn-primary text-center px-5"
              style={{ maxWidth: "348px" }}
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default InTheNews
