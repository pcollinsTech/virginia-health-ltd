import React from "react"
import BlogCard from "./BlogCard"
import { Link } from "gatsby"

const InTheNews = ({ posts }) => {
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
        <Link to="/blog">
          <button className="btn btn-primary text-center px-5">
            Read More
          </button>
        </Link>
      </div>
    </div>
  )
}

export default InTheNews
