import React from "react"
import featured_blog from "../../assets/images/featuredBlog.png"
import { Link } from "gatsby"

export default function FeaturedBlog() {
  return (
    <div className="featured_blog">
      <img src={featured_blog} alt="Featured Blog" />
      <div className="carousel-caption text-left d-flex flex-column justify-content-between featured_blog_inside_top">
        <h2 className="text-left">Featured</h2>
        <h4>New Home Compostable Packaging</h4>
        <p className="text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id qui,
          numquam nesciunt ut quo aperiam, fuga repudiandae quam quia veritatis
          corporis, itaque minima eum excepturi aut perferendis doloribus? Iste,
          in.
        </p>
        <button className="btn btn-primary">
          <Link to="/compostable-packaging">Read More</Link>
        </button>
      </div>
    </div>
  )
}
