import React from "react"
import { Link } from "gatsby"

const BlogCard = ({ post }) => {
  const { title, img, slug, excerpt, date } = post
  return (
    <div className="col-sm-4 blog_summary_item d-flex justify-content-between flex-column">
      <Link to={slug}>
        <img src={img} alt="" />
        <h4
          dangerouslySetInnerHTML={{ __html: title }}
          className="my-2"
          style={{ color: "black" }}
        />
        <span>{date}</span>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
      </Link>
    </div>
  )
}

export default BlogCard
