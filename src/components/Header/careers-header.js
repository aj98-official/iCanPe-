import React from "react";
import "./header.scss";
import Modal from "../Modal/modal";
import Background from "../../assets/images/careers-banner.png";
import pic from "../../assets/images/careers-banner-pic.png"

const CareersHeader = () => {
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
            <h1 className="head-txt">
              Be a part of the future of debt recovery solutions!
            </h1>
            <p className="head-sub-txt">
              ICanPe's digital-first collections platform helps lenders automate
              and improve collections of their revolving dues.
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
          <div className="col-lg-6 pt-5 ps-5">
              <img className="img-fluid" src={pic} alt="banner-img"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersHeader;
