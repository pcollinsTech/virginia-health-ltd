import React, { Component } from "react"
import { Link } from "gatsby"
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap"
import logo from "../assets/images/logo.svg"
import SideNav from "./SideNav"
class Header extends Component {
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

              <NavDropdown title="Our Brands" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/our-brands">Our Brands</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Private Label" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="private-label" onClick={this.closeNavbar}>
                    Private Label
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="crunch-and-cereal" onClick={this.closeNavbar}>
                    Crunch &amp; Cereal
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="snacks" onClick={this.closeNavbar}>
                    Snacks
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="milled-seed-and-nut-mixes"
                    onClick={this.closeNavbar}
                  >
                    Milled Seed & Nut Mixes
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

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
                  <Link to="/enquire">Enquire Now</Link>
                </Button>
              </Nav.Item>
              <Nav.Item>
                {/* SideNav: src/components/SideNav */}
                <SideNav />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
