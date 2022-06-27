import React from "react";
import logo from "../../assets/brand-icon/ICPLogo.png";
import {useNavigate} from 'react-router-dom';
import "./nav-bar.scss";

const NavBar = ({type}) => {

  const navigate = useNavigate();

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
            <li className="nav-item mb-2">
              <a className={"nav-link " + ((type === "home") ?"active" : "")} aria-current="page"  onClick={() => navigate('/')}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={"nav-link " + ((type === "about-us") ?"active" : "")}  onClick={() => navigate('/about-us')}>
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a className={"nav-link " + ((type === "our-offerings") ?"active" : "")}  onClick={() => navigate('/our-offerings')}>
                Our Offerings
              </a>
            </li>
            {(type === "home") ?<li className="nav-item">
              <a className="nav-link" href="/#contact">
                Contact Us
              </a>
            </li>: ""}
            <li className="nav-item">
              <a className={"nav-link " + ((type === "careers") ?"active" : "")}  onClick={() => navigate('/careers')} >
                Careers
              </a>
            </li>
          </ul>
          <button
            className="btn secondary-color my-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            type="button"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
