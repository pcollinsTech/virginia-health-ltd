import React, { Component } from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Container } from "react-bootstrap"

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
              <Link to="/">Virginia</Link>
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
                    to="/get-started"
                    offset={-70}
                    duration={800}
                    className="nav-link"
                    onClick={this.closeNavbar}
                  >
                    Getting Started
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
                    to="/exchange-finder"
                    offset={-70}
                    duration={800}
                    className="nav-link"
                    onClick={this.closeNavbar}
                  >
                    Exchange Finder
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
                  <Link
                    to="about"
                    className="nav-link"
                    onClick={this.closeNavbar}
                  >
                    About Us
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
