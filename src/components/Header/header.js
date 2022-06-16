import React from "react";
// import PrimaryBtn from "../Buttton/btn";
import "./header.scss";
import Box from "../../assets/images/3dBox.png";
import Background from "../../assets/images/Radial.png";
import Modal from "../Modal/modal";

const Header = () => {
  const divStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
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
            <img className="img-fluid header-img" src={Box} alt="3d-box-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
