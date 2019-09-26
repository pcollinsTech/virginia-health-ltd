import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer id="footer">
    <div className="row inner">
      <div className="container footer_container">
        <div className="col-md-3 footer_item text-left">
          <h5>Digital Works Agency</h5>
          <p className="mt-2">
            Huckletree West <br />
            191 Wood Lane London <br />
            W12 7FP
          </p>
          <div className="contact_links mt-3">
            <a href="tel:020 8144 5873">
              <h5>020 8144 5873</h5>
            </a>
            <a href="mailto:hello@digitalworksagency.com" className="my-5">
              <h5>hello@digitalworksagency.com</h5>
            </a>
          </div>
          <div className="mt-4 proud_partners">
            <span className="m-2">Proud Partners of</span>
          </div>
        </div>
        <div className="col-md-6 footer_item">
          <h5>Subscribe to our newsletter</h5>
          <form className="form-inline mt-2">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <button type="submit">Subscribe</button>
          </form>
          <p>
            In accordance with our GDPR obligations we seek your consent to
            receive our (funny, clever, witty) newsletters. You may withdraw
            your consent at any time in the future. You can view our privacy
            policy <Link to="/privacy-policy"> here.</Link>
          </p>
          <ul className="copyright text-center mt-5">
            <li>
              <Link to="/terms">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>&copy; Digital Works Now Ltd 2019</li>
          </ul>
        </div>
        <div className="col-md-3 footer_item ">
          <h5>Follow us</h5>
          <ul className="container icons mt-2">
            <li>
              <a
                href="https://twitter.com/DW_Agency"
                target="__blank"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/digitalworksagency/"
                target="__blank"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/digitalworksagency/"
                target="__blank"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/digital-works-agency/"
                target="__blank"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          <Link to="/" className="logo"></Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
