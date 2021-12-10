import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div>
      {/* Footer */}
      <footer className="text-center text-lg-start text-muted" id="footer">
        {/* Section: Links  */}
        <section className="p-2">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h4 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  <Link to="/">Solutech</Link>
                </h4>
                <p>
                  <i className="fas fa-home me-3" />
                  Koteshwor-32, Kathmandu
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  solutech@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3" />
                  +977-9840032254
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-6 col-lg-6 col-xl-6 mb-4 ">
                <p className="text-uppercase d-inline fw-bold px-2 mb-4">
                  <Link to="/about">About</Link>
                </p>
                <p className="text-uppercase d-inline fw-bold px-2 mb-4">
                  <Link to="privacypolicy">Privacy Policy</Link>
                </p>
                <p className="text-uppercase d-inline fw-bold px-2 mb-4">
                  <Link to="/termsandconditions">Terms & Conditions</Link>
                </p>
                <p className="text-uppercase d-inline fw-bold px-2 mb-4">
                  Partners
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Follow Us On</h6>

                {/* Facebook */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                {/* Twitter */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#55acee" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-twitter" />
                </a>
                {/* Instagram */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#ac2bac" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-instagram" />
                </a>
                {/* Linkedin */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#0082ca" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        <div
          className="text-center pb-2 p-2"
          style={{ borderTop: "0.1px dashed whitesmoke" }}
        >
          © 2020 Website By :
          <a
            className="text-white"
            href="https://brownricetechnology.com/"
            style={{ color: "navy" }}
          >
            &nbsp;Brownrice Technology Pvt. Ltd.
          </a>
        </div>
        {/* Section: Links  */}
      </footer>
    </div>
  );
}

export default Footer;
