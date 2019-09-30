import React, { Component } from "react"
import { Nav, Modal } from "react-bootstrap"
import PropTypes from "prop-types"
import {
  FaMapSigns,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa"

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
              <a href="/">
                {this.props.logotext}
                <span>{this.props.logotextspan}</span>{" "}
              </a>
            </div>
            <p>{this.props.content}</p>
            <ul className="modal-contact-info">
              <li>
                <FaMapSigns />
                <b>18 Ormeau Avenue</b>
                Belfast, Northern Ireland BT2 8HS
              </li>
              <li>
                <FaPhone />
                <b>
                  <a
                    href={`tel:${this.props.phonebolt}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    {this.props.phonebolt}
                  </a>
                </b>
                {this.props.phonenormal}
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
                <a href={this.props.facebooklink}>
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href={this.props.twitterlink}>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href={this.props.instagramlink}>
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href={this.props.linkedinlink}>
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href={this.props.pinterestlink}>
                  <FaPinterest />
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
  twitterlink: PropTypes.string,
  instagramlink: PropTypes.string,
  linkedinlink: PropTypes.string,
  pinterestlink: PropTypes.string,
}
SideNav.defaultProps = {
  logotext: "G-",
  logotextspan: "Science",
  content: "Get in touch",
  locationbolt: "",
  locationnormal: "Northern Ireland",
  phonebolt: "07881092136",
  phonenormal: "Give us a call",
  mailbolot: "info@gscience.gg",
  mailnormal: "Online support & enquiries",
  facebooklink: "#",
  twitterlink: "#",
  instagramlink: "#",
  linkedinlink: "#",
  pinterestlink: "#",
}
export default SideNav
