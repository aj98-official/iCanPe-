import React from "react";
import "./others.scss";
import pic from "../../assets/images/Arrow-forward.png";
import pic2 from "../../assets/images/our-offerings-pic-2.png";
import Label from "../Label/label";

export default function Features() {
  return (
    <div className="pb-5">
      <div className="container px-5">
        <div className="row">
          <div className="col-lg-6 pe-5">
            <img className="img-fluid me-5" src={pic2} alt="team-img" />
          </div>
          <div className="col-lg-5 ms-5">
            <div className="mb-4">
              {" "}
              <Label text="Features" />
            </div>
            <div className="row">
              <span className="col-2">
                <img src={pic} alt="arrow-icon" />
              </span>
              <div className="col">
                <h1 className="mt-2 mb-4">Complete Package</h1>
                <div>
                  <div className="row">
                    <p className="col-10">
                      With this service your collection becomes our concern.{" "}
                      <br /> To deliver promising results, we
                    </p>
                  </div>
                  <div className="row">
                    <div className="col">
                      <img src={pic} alt="arrow-icon" className="img-fluid" />
                    </div>
                    <div className="col-10 me-3 mb-2">
                      <p>
                        Generate digital signals through Smart SMS Smart Email ,
                        IVR etc.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <img src={pic} alt="arrow-icon" className="img-fluid" />
                    </div>
                    <div className="col-10 me-3 mb-2">
                      <p>
                        Execute telecalling queues in order to persuade
                        borrowers into making the due payments
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <img src={pic} alt="arrow-icon" className="img-fluid" />
                    </div>
                    <div className="col-10 me-3 mb-2">
                      <p>
                        We also pursue them through our on-field agents deployed
                        all over the country to ensure optimum recoveries.
                      </p>
                    </div>
                  </div>
                </div>
                <button className="btn primary-btn"> Call Now </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
