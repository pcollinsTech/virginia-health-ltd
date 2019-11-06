import React, { Fragment, useState } from "react"
import { Link } from "gatsby"
const DropdownLabel = ({ title, list, mainLink }) => {
  const [listOpen, setListOpen] = useState(false)

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
      <div className="dd-wrapper-label">
        <div className="dd-header-label" onClick={() => setListOpen(!listOpen)}>
          <div className="nav-link">
            <Link to={mainLink}>{title}</Link>
          </div>
        </div>
        <div className="dd-menu-label">
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

export default DropdownLabel
