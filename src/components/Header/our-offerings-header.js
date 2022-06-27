import React from "react";
import "./header.scss";
import Modal from "../Modal/modal";
import Background from "../../assets/images/Our-offerings-banner.png";
import BackgroundMd from "../../assets/images/our-offerings-header-md.png";
import Pic from "../../assets/images/our-offerings-header-pic.png";
import useWindowDimensions from "../../Tools/window-dimensions";

const OurOfferingsHeader = () => {
  const size = useWindowDimensions();
  const divStyle = {
    backgroundImage: size > 991 ? `url(${Background})` : `url(${BackgroundMd})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundColor: "#F0F0F0",
  };
  return (
    <div>
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

      {size < 991 ? (
        <div className="container d-flex justify-content-center my-5 py-5">
          <img src={Pic} alt="img" className="img-fluid"/>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default OurOfferingsHeader;
