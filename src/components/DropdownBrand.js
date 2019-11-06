import React, { Fragment, useState } from "react"
import { Link } from "gatsby"
const DropdownBrand = ({ title, list, mainLink }) => {
  const link = (link, title) =>
    link.startsWith("http") ? (
      <a href={link} target="__blank">
        {title}
      </a>
    ) : (
      <Link to={link}>{title}</Link>
    )
  return (
    <Fragment>
      <div className="dd-wrapper-brand">
        <div className="dd-header-brand">
          <div className="nav-link">
            <Link to={mainLink}>{title}</Link>
          </div>
        </div>

        <div className="dd-menu-brand">
          {list.map(item => (
            <div className="dd-item" key={item.id}>
              {link(item.link, item.title)}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default DropdownBrand
