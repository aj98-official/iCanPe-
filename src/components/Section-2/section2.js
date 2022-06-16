import React from "react";
import "./section2.scss";
import pic from "../../assets/images/section-2-img.png";

const Section2 = () => {
  return (
    <div className="container sec2 mb-5">
      <div className="heading-div">
        <h1 className="sec2-txt">
          Boost your recovery operations with iCanPe's
        </h1>
      </div>
      <img className="img-fluid" src={pic} alt="feature-pic" />
      <div className="row">
        <div className="col-lg-3 feature-div"> <p className="feature-txt">Unparalleled Technology     </p></div>
        <div className="col-lg-3 feature-div"> <p className="feature-txt">Compassionate approach      </p></div>
        <div className="col-lg-3 feature-div"> <p className="feature-txt">Borrower Prioritisation     </p></div>
        <div className="col-lg-3 feature-div"> <p className="feature-txt">AI based recovery prediction</p></div>
      </div>
    </div>
  );
};

export default Section2;
