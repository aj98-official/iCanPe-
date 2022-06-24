import React from "react";
// import PrimaryBtn from "../Buttton/btn";
import "./header.scss";
import Box from "../../assets/images/3dBox.png";
import Background from "../../assets/images/homebanner.svg";
import backgroundSm from "../../assets/images/homebanner-mobile.png";
import backgroundMd from "../../assets/images/homebanner-md.png";
import Modal from "../Modal/modal";
import useWindowDimensions from "../../Tools/window-dimensions";

const Header = () => {

  var size = useWindowDimensions();

  const divStyle = {
    backgroundImage: (size <= 991)?`url(${backgroundSm})`: (size <= 1199)? `url(${backgroundMd})` :`url(${Background})`,
    backgroundSize: "cover",
    paddingBottom: "15%"
    // backgroundPosition: "center center",
  };
  return (
    <div className="header" style={divStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="head-txt">
              Revolutionising the debt recovery mechanism with AI-based
              technology
            </h1>
            <p className="head-sub-txt">
              We are a fully integrated AI-Powered Digital Debt Collection
              Agency
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

          <div className="col-lg-6">
              {(size < 1200) ?<img className="header-img" src={Box} alt= "box-img"/> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
