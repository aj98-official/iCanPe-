import React from "react";
import "./header.scss";
import Modal from "../Modal/modal";
import Background from "../../assets/images/Our-offerings-banner.png";

const OurOfferingsHeader = () => {
  const divStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <div className="header" style={divStyle}>
      <div className="px-5 pb-5 container">
        <div className="row pb-5">
          <div className="col-lg-6">
            <h1 className="head-txt">Our Offerings</h1>
            <p className="head-sub-txt">
              New age Credit Management Platform to meet the needs of the
              contemporary times.
            </p>
            <button
              type="button"
              class="btn primary-btn btn-custom"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Request a Demo
            </button>

            <Modal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOfferingsHeader;
