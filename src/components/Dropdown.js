import React, { Fragment, useState } from "react"
import { Link } from "gatsby"
const Dropdown = ({ title, list }) => {
  const [listOpen, setListOpen] = useState(false)

  return (
    <Fragment>
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => setListOpen(!listOpen)}>
          <div className="nav-link">{title}</div>
        </div>
        {listOpen && (
          <div className="dd-menu">
            {list.map(item => (
              <div className="dd-item" key={item.id}>
                <Link to={item.link}>{item.title}</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default Dropdown
