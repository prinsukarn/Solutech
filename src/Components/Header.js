import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div id="navbar">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
          <a className="navbar-brand me-2">
            <h2>
              <Link to="/">Solutech</Link>
            </h2>
            {/* <img
              src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
              height={16}
              alt=""
              loading="lazy"
              style={{ marginTop: "-1px" }}
            /> */}
          </a>
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Professional Solution
                </a>
              </li>
            </ul>
            {/* Left links */}
            <div className="d-flex align-items-center menu">
              <ul className="navbar-nav  me-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link p-3" href="#">
                    <Link to="/service">Services</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-3" href="#">
                    <Link to="/about">About</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-3" href="#">
                    <Link to="/career">Career</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-3" href="#">
                    <Link to="/blog">Blog</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-3" href="#">
                    <Link to="/gallery">Gallery</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-3">
                    <Link to="/login">Login</Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </div>
  );
}

export default Header;
