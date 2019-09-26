import React, { Component } from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Container } from "react-bootstrap"
import logo from "../assets/images/logo.svg"
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
          <Container>
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
                {/* <NavDropdown title="Academy" id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        <Link to="/what-is-bitcoin">What is Bitcoin?</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/what-is-ethereum">What is Ethereum?</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/what-is-cryptocurrency">What is CryptoCurrency?</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/what-is-a-wallet">What is a Wallet?</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/what-is-a-blockchain">What is a Blockchain?</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/what-is-money">What is Money?</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/what-is-an-altcoin">What is an Altcoin</Link>
                                    </NavDropdown.Item>
                                </NavDropdown> */}

                <Nav.Item>
                  <Link
                    to="/our-brands"
                    offset={-70}
                    duration={800}
                    className="nav-link"
                    onClick={this.closeNavbar}
                  >
                    Our Brands
                  </Link>
                </Nav.Item>

                <Nav.Item>
                  <Link
                    to="private-label"
                    className="nav-link"
                    onClick={this.closeNavbar}
                  >
                    Private Label
                  </Link>
                </Nav.Item>

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
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default Header
