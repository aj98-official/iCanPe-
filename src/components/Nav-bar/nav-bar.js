import React from "react";
import logo from "../../assets/brand-icon/ICPLogo.png";
import "./nav-bar.scss"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-custom">
      <div className="container-fluid">
      <a className="navbar-brand" href="/">
      <img src={logo} alt="logo" width="90" height="48" />
      </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about-us">
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/our-offerings">
                Our Offerings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/careers">
                Careers
              </a>
            </li>
          </ul>
          <button className="btn btn-outline-dark my-2" type="submit">
                Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
