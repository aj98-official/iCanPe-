import React from "react";
import "./header.scss";
import Background from "../../assets/images/TopBannerAboutUs.png"
import BackgroundMd from "../../assets/images/our-offerings-header-md.png";
import Modal from "../Modal/modal";
import useWindowDimensions from "../../Tools/window-dimensions";

const AboutUsHeader = () => {

  const size = useWindowDimensions();
  const divStyle = {
    backgroundImage: size > 991 ? `url(${Background})` : `url(${BackgroundMd})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundColor: "#F0F0F0",
  }
  return (
    <div className="header" style = {divStyle}>
      <div className="px-5 pb-5 container">
        <div className="row pb-5">
          <div className="col-lg-6">
            <h1 className="head-txt">
            About Us
            </h1>
            <p className="head-sub-txt">
            ICanPe's digital-first collections platform helps lenders automate and improve collections of their revolving dues. 
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

export default AboutUsHeader;
