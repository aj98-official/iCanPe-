import React from "react";
import brandLogo from "../../assets/brand-icon/ICPLogo.png";
import background from "../../assets/images/Pattern-Light-3.png";
import PrimaryBtn from "../Buttton/btn";
import "./footer.scss";
const Footer = () => {


  const divStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "repeat",
  };

  return (
    // <div className="container">
    <footer className="text-center text-lg-start bg-light text-muted" >
      

      <section className="footer-section pt-3" style = {divStyle}>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <img src={brandLogo} alt="icp-logo" />
              <p className="mx-2 me-4 mb-5 mt-2">
                Launch your own Software As A Service Application with CanPe
                Solutions.
              </p>
              <div className="mt-5 ms-2">
                <a href="#!" className="me-4 text-reset">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#!" className="me-4 text-reset">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#!" className="me-4 text-reset">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#!" className="me-4 text-reset">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#!" className="me-4 text-reset">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Features
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Solutions
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Tutorials
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Updates
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">More About Us</h6>
              <p>
                <a href="#!" className="text-reset">
                  Knowledge Center
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Newsletter
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help Center
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Careers
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Support
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <PrimaryBtn text="Request a Demo" />
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center copyright-text p-4"
        //   style="background-color: rgba(0, 0, 0, 0.05);"
      >
        © 2022 Canpe Solutions. All rights reserved.
      </div>
    </footer>
    // </div>
  );
};

export default Footer;
