import React, { Fragment, useState } from "react"

const Dropdown = ({ title, list }) => {
  const [listOpen, setListOpen] = useState(false)

  return (
    <Fragment>
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => setListOpen(!listOpen)}>
          <div className="nav-link">{title}</div>
        </div>
        {listOpen && (
          <div className="dropdown-menu">
            {list.map(item => (
              <div className="dropdown-item" key={item.id}>
                {item.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default Dropdown
