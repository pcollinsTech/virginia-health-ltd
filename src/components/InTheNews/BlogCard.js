import React from "react"
import { Link } from "gatsby"

const BlogCard = ({ post }) => {
  const {
    title,
    featured_media: { source_url },
    slug,
    excerpt,
    date,
  } = post.node
  return (
    <div className="col-sm-4 blog_summary_item d-flex justify-content-between flex-column">
      <Link to={slug}>
        <img src={source_url} alt="" />
        <h4
          dangerouslySetInnerHTML={{ __html: title }}
          className="my-2"
          style={{ color: "black" }}
        />
        <span>{date}</span>
        <p dangerouslySetInnerHTML={{ __html: excerpt }} />
      </Link>
    </div>
  )
}

export default BlogCard
