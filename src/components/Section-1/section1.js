import React from "react";
import Background from "../../assets/images/section-1-background.png";
import Label from "../Label/label";
import Pic from "../../assets/images/sec1-img.png";
import Pic2 from "../../assets/images/sec2-img-2.png"
import "./section1.scss";

import useWindowDimensions from "../../Tools/window-dimensions";

const Section1 = () => {
  const size = useWindowDimensions();
  const divStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <div style={divStyle}>
      <div className="container sec1 py-5">
        <div className="my-3">
          {" "}
          <Label text="Why iCanPe" className="why-text" />
        </div>
        <h1>Why iCanPe?</h1>

        {size >= 1200 ? (
          <div className="row">
            <div className="col">
              <div className="purpose-div-top">
                <h2>Improved Rate of Recovery</h2>
                <p>Delinquency management to enhance RoR by 50%</p>
              </div>
              <div className="purpose-div-bottom">
                <h2>Real Time Instant Monitoring</h2>
                <p>Complete transparency using real time dashboard</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="rectangle">
                <img
                  className="sec-img img-fluid"
                  src={Pic}
                  alt="product-img"
                />
              </div>
            </div>
            <div className="col">
              <div className="purpose-div-top">
                <h2>Minimise Recovery Cost</h2>
                <p>Scalable and Cost-effective recovery solutions</p>
              </div>
              <div className="purpose-div-bottom">
                <h2>Customised Payment Options</h2>
                <p>Easing repayment with multiple payment options.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="md">
            <div className="">
              <img className="img-fluid" src={Pic2} alt="product-img" />
            </div>

            <div className="md-purpose-container">
              <div className="md-purpose-div">
                <h2>Improved Rate of Recovery</h2>
                <p>Delinquency management to enhance RoR by 50%</p>
              </div>
              <div className="md-divider my-4"></div>
              <div className="md-purpose-div">
                <h2>Real Time Instant Monitoring</h2>
                <p>Complete transparency using real time dashboard</p>
              </div>
              <div className="md-divider my-4"></div>
              <div className="md-purpose-div">
                <h2>Minimise Recovery Cost</h2>
                <p>Scalable and Cost-effective recovery solutions</p>
              </div>
              <div className="md-divider my-4"></div>
              <div className="md-purpose-div">
                <h2>Customised Payment Options</h2>
                <p>Easing repayment with multiple payment options.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section1;
