import React from "react";
import "./section2.scss";
import pic from "../../assets/images/section-2-img.png";
import pic1 from "../../assets/images/sec2-1.png";
import pic2 from "../../assets/images/sec2-2.png";
import pic3 from "../../assets/images/sec2-3.png";
import pic4 from "../../assets/images/sec2-4.png";

import useWindowDimensions from "../../Tools/window-dimensions";

const Section2 = () => {
  const size = useWindowDimensions();

  return (
    <div className="container sec2 mb-5">
      <div className="heading-div">
        <h1 className="sec2-txt">
          Boost your recovery operations with iCanPe's
        </h1>
      </div>

      {size > 991 ? (
        <div>
          <img className="img-fluid" src={pic} alt="feature-pic" />
          <div className="row">
            <div className="col-lg-3 feature-div">
              {" "}
              <p className="feature-txt">Unparalleled Technology </p>
            </div>
            <div className="col-lg-3 feature-div">
              {" "}
              <p className="feature-txt">Compassionate approach </p>
            </div>
            <div className="col-lg-3 feature-div">
              {" "}
              <p className="feature-txt">Borrower Prioritisation </p>
            </div>
            <div className="col-lg-3 feature-div">
              {" "}
              <p className="feature-txt">AI based recovery prediction</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="row">
            <div className="col py-4 text-center">
              <img className="img-fluid" src={pic1} alt="pic-1" />
              <div className=" feature-div my-3">
                {" "}
                <p className="feature-txt">Unparalleled Technology </p>
              </div>
            </div>
            <div className="col py-4 text-center">
              <img className="img-fluid" src={pic2} alt="pic-1" />
              <div className=" feature-div my-3">
                {" "}
                <p className="feature-txt">Compassionate approach </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col py-4 text-center">
              <img className="img-fluid" src={pic3} alt="pic-1" />
              <div className=" feature-div my-3">
                {" "}
                <p className="feature-txt">Borrower Prioritisation </p>
              </div>
            </div>
            <div className="col py-4 text-center">
              <img className="img-fluid" src={pic4} alt="pic-1" />
              <div className=" feature-div my-3">
                {" "}
                <p className="feature-txt">AI based recovery prediction</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section2;
