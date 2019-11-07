import React from "react"
import { Container, Row } from "react-bootstrap"
import { Link } from "gatsby"

const ContactUs = () => {
  return (
    <Container className="py-5" id="contactUs">
      <h2>Contact Us</h2>
      <Row className="d-flex justify-content-between">
        <div className="col-sm-7 pr-4">
          <div className="row">
            <div className="col-sm-4">
              <h3>Ireland</h3>
              <p>
                Virginia Health Food Co.
                <br />
                Carrigaline Industrial Park, <br />
                Kilnagleary, <br />
                Carrigaline, Cork.
              </p>
              <p>
                Tel: <a href="tel:+0214770033">+021 477 0033</a>
                <br />
                Fax: +021 477 0032
              </p>
            </div>
            <div className="col-sm-4">
              <h3>United Kingdom</h3>
              <p>
                Virginia Health Co.
                <br />
                Huckletree West, <br />
                191 Wood Lane, <br />
                London, W12 7FP.
              </p>
              <p>
                Tel: <a href="tel:01212883363">0121 288 3363</a>
              </p>
            </div>
            <div className="col-sm-4">
              <h3>Germany</h3>
              <p>
                Virginia Health Food Ltd.
                <br />
                Prinzenallee 7, <br />
                40549 Dusseldorf, <br />
                Germany.
              </p>
              <p>
                Tel: <a href="tel:+4921152391028">+49 211 5239 1028</a>
                <br />
                Fax: +49 1622 120 192
              </p>
            </div>
          </div>
          <Link to="/">
            <button className="btn btn-primary">Enquire Now</button>
          </Link>
        </div>
        <div className="col-sm-5">
          <form className="d-flex justify-content-between flex-column">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                placeholder="Enquiry"
              />
            </div>
            <Link to="">
              <button className="btn btn-primary align-text-bottom">
                Enquire Now
              </button>
            </Link>
          </form>
        </div>
      </Row>
    </Container>
  )
}

export default ContactUs
