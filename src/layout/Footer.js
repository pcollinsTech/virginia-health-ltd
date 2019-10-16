import React from "react"
import { Link } from "gatsby"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import brc from "../assets/images/brc.png"
import vegetarian from "../assets/images/vegetarian.svg"
import gluten from "../assets/images/gluten.png"
import logo from "../assets/images/logoWhite.svg"

const Footer = () => (
  <footer id="footer">
    <div className="container inner">
      <div className="row footer_container ">
        <div className="col-md-3 footer_item text-left">
          <p>
            <Link to="contact-us">Contact Us</Link>
          </p>
          <p>
            <Link to="terms-and-conditions">Terms and Contitions</Link>
          </p>
          <p>
            <Link to="privacy-policy">Privacy Policy</Link>
          </p>
          <p>
            <Link to="cooklies-policy">Cookies Policy</Link>
          </p>
          <p>
            <Link to="stockists">Stockists</Link>
          </p>

          <div className="mt-4 partners">
            <img src={brc} alt="" />
            <img src={gluten} alt="" />
            <img src={vegetarian} alt="" />
          </div>
        </div>
        <div className="col-md-6 footer_item">
          <h5>Subscribe to our newsletter to hear about news and offers</h5>
          <form className="form-inline mt-2 d-flex justify-content-between">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
          <p>
            In accordance with our GDPR obligations we seek your consent to
            receive our (funny, clever, witty) newsletters. You may withdraw
            your consent at any time in the future. You can view our privacy
            policy <Link to="/privacy-policy"> here.</Link>
          </p>
          <ul className="copyright text-center mt-5 remove_mobile">
            <li>&copy; Virginia Health Foods Ltd 2019</li>
          </ul>
        </div>
        <div className="col-md-3 text-center footer_item ">
          <h5>Follow us</h5>
          <ul className="container icons mt-2">
            <li>
              <a href="https://twitter.com/DW_Agency" target="__blank">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/digitalworksagency/"
                target="__blank"
              >
                <FaFacebookF />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/company/digital-works-agency/"
                target="__blank"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
          <div>
            <Link to="/" className="logo text-left">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="copyright text-center mt-5 mobile_view">
            <li>&copy; Virginia Health Foods Ltd 2019</li>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
