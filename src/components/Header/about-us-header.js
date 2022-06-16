import React from "react";
import PrimaryBtn from "../Buttton/btn";
import "./header.scss";
import Background from "../../assets/images/TopBannerAboutUs.png"

const AboutUsHeader = () => {
  const divStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center center"
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
            <PrimaryBtn text = "Request a Demo" className ="btn-custom"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeader;
