import React from "react"
import BlogCard from "./BlogCard"

const InTheNews = ({ posts }) => {
  return (
    <div id="on_the_blog">
      <h2 className="text-center mb-5">In The News</h2>
      <div className="container">
        <div className="row">
          {posts.map(post => {
            return <BlogCard post={post} />
          })}
        </div>
      </div>
    </div>
  )
}

export default InTheNews
