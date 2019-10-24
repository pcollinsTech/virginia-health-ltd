import React, { Component } from "react"
import { Nav, Modal } from "react-bootstrap"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"

import logo from "../assets/images/logo.svg"

export class SideNav extends Component {
  constructor(props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: false,
    }
  }

  handleClose() {
    this.setState({ show: false })
  }

  handleShow() {
    this.setState({ show: true })
  }

  render() {
    return (
      <React.Fragment>
        <Nav.Link onClick={this.handleShow}>
          <span />
        </Nav.Link>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          className="right"
        >
          <Modal.Header closeButton />
          <Modal.Body>
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <p>{this.props.content}</p>
            <ul className="modal-contact-info">
              <li>
                <FaPhone />
                <b>
                  <a
                    href={`tel:+(44) 121 288 3363`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    UK +(44) 121 288 3363
                  </a>
                </b>
              </li>
              <li>
                <FaPhone />
                <b>
                  <a
                    href={`tel: +(353) 21 477 0033`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Ireland +(353) 21 477 0033
                  </a>
                </b>
              </li>
              <li>
                <FaEnvelope />
                <b>
                  <a
                    href={`mailto:${this.props.mailbolot}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    {this.props.mailbolot}
                  </a>
                </b>
                {this.props.mailnormal}
              </li>
            </ul>

            <ul className="social-links">
              <li>
                <a href={this.props.linkedinlink} target="__blank">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href={this.props.facebooklink} target="__blank">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href={this.props.instagramlink} target="__blank">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    )
  }
}
SideNav.PropsTypes = {
  logotext: PropTypes.string,
  logotextspan: PropTypes.string,
  content: PropTypes.string,
  locationbolt: PropTypes.string,
  locationnormal: PropTypes.string,
  phonebolt: PropTypes.string,
  phonenormal: PropTypes.string,
  mailbolot: PropTypes.string,
  mailnormal: PropTypes.string,
  facebooklink: PropTypes.string,
  instagramlink: PropTypes.string,
  linkedinlink: PropTypes.string,
}
SideNav.defaultProps = {
  mailbolot: "info@virginiahealth.net",
  mailnormal: "Online support & enquiries",
  facebooklink: "https://www.facebook.com/virginiahealthfood/",
  linkedinlink: "https://www.linkedin.com/company/virginiahealthfoods/",
  instagramlink: "https://www.instagram.com/virginiaflaxseed/",
}
export default SideNav
