import React, { Component } from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Button, Modal } from "react-bootstrap"
import logo from "../assets/images/logo.svg"
import SideNav from "./SideNav"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import DropdownBrand from "../components/DropdownBrand"
import DropdownLabel from "../components/DropdownLabel"

class Header extends Component {
  constructor(props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)

    this.state = {
      show: false,
    }
  }

  handleShow(i) {
    this.setState({ show: i })
  }

  render() {
    return (
      <div className="nav-wrapper">
        <Navbar
          sticky="top"
          id="navbar"
          expand="lg"
          className="navbar navbar-expand-lg "
          collapseOnSelect={true}
        >
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="collaspe-btn" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Link to="/" className="nav-link" onClick={this.closeNavbar}>
                  Home
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link
                  to="/what-we-do"
                  offset={-70}
                  duration={800}
                  className="nav-link"
                  onClick={this.closeNavbar}
                >
                  What We Do
                </Link>
              </Nav.Item>
              <DropdownBrand
                title="Our Brands"
                mainLink="/our-brands"
                list={[
                  {
                    id: "virginiaHealthLink",
                    link: "/virginia-health-flaxseed",
                    title: "Virginia Health",
                  },
                  {
                    id: "squbesLink",
                    link: "https://squbes.ie",
                    title: "Squbes",
                  },
                  {
                    id: "helensLink",
                    link: "https://www.foodbyhelen.com/",
                    title: "Helen's",
                  },
                ]}
              />
              <DropdownLabel
                title="Private Label"
                mainLink="/private-label"
                list={[
                  {
                    id: "crunchLink",
                    link: "/crunch-and-cereal",
                    title: "Crunch & Cereal",
                  },
                  {
                    id: "snacksLink",
                    link: "/snacks",
                    title: "Snacks",
                  },
                  {
                    id: "milledSeedLink",
                    link: "/milled-seed-and-nut-mixes",
                    title: "Milled Seed & Nut Mixes",
                  },
                ]}
              />

              <Nav.Item>
                <Link
                  to="/our-promise"
                  offset={-70}
                  duration={800}
                  className="nav-link"
                  onClick={this.closeNavbar}
                >
                  Our Promise
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link
                  to="/blog"
                  className="nav-link"
                  onClick={this.closeNavbar}
                >
                  Blog
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Button variant="primary">
                  <Link to="#contactUs">Enquire Now</Link>
                </Button>
              </Nav.Item>
              <div className="remove_mobile">
                <Nav.Item>
                  {/* SideNav: src/components/SideNav */}
                  <SideNav />
                </Nav.Item>
              </div>
              <div className="mobile_view_nav mt-2">
                <Nav.Item>
                  <Button
                    variant="primary"
                    onClick={() => this.handleShow(true)}
                  >
                    Call Now
                  </Button>

                  <Modal
                    show={this.state.show}
                    onHide={() => this.handleShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-custom-modal-styling-title">
                        Call
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Button variant="primary" className="mb-2">
                        <a href={`tel:+(44) 121 288 3363`}>
                          UK +(44) 121 288 3363
                        </a>
                      </Button>
                      <Button variant="primary">
                        <a href={`tel: +(353) 21 477 0033`}>
                          Ireland +(353) 21 477 0033
                        </a>
                      </Button>
                    </Modal.Body>
                  </Modal>
                </Nav.Item>
                <div className="social_nav text-right">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaInstagram />
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
