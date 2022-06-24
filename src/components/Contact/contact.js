import React from "react";
import "./contact.scss";
import ContactForm from "./contact-form";
import Label from "../Label/label";
const Contact = () => {
  return (
    <div id="contact" className="container pt-5 md-contact-form">
      <div className="my-3"> <Label text="contact"/></div>
      <ContactForm />
      <div className="row pt-5">
        <div className="col-lg-3 col-md-6 mt-4">
          <div className="dbox w-100">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="fa fa-paper-plane"></span>
            </div>
            <div className="text">
              <h2>Email</h2>
              <p>
                <a href="mailto: contact@icanpe.com"> contact@icanpe.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-4">
          <div className="dbox w-100">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="fa fa-phone"></span>
            </div>
            <div className="text">
              <h2>Phone</h2>{" "}
              <p>
                <a href="tel://+919980513881">+91 99805 13881 </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-4">
          <div className="dbox w-100">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="fa fa-map-marker"></span>
            </div>
            <div className="text">
              <h2>Office</h2>
              <p>G-001, South End Sampurna, No.11 / 94, Model House Street, Basavanagudi, Bengaluru, Karnataka, India, 560004</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-4">
          <div className="dbox w-100">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="fa fa-globe"></span>
            </div>
            <div className="text">
              <h2>Socials</h2>
              <div className="ms-2">
                <a href="#!" className="me-4">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#!" className="me-4">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#!" className="me-4">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#!" className="me-4">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
