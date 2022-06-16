import React from "react";
import "./others.scss";
import pic from "../../assets/images/Arrow-forward.png";
import pic2 from "../../assets/images/our-offerings-pic-1.png";
import Label from "../Label/label";

export default function Solutions() {
  return (
    <div>
      <div className="container py-5 px-5">
        <div className="row pt-5">
          <div className="col-lg-6">
            <div className="mb-4">
              {" "}
              <Label text="Features" />
            </div>
            <div className="row">
            <h1 className="mb-4 col-8">Debt Recovery as a service </h1>
            <span className="col-2"><img src={pic} alt="arrow-icon"/></span> 
            </div>
            <div className="row">
              <div className="col-1">
                <img src={pic} alt="arrow-icon" className="img-fluid"/>
              </div>
              <div className="col-7 mb-2">
                <p>
                Bank/Lender uploads data to iCanPe platform
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <img src={pic} alt="arrow-icon" className="img-fluid"/>
              </div>
              <div className="col-7 mb-2">
                <p>
                Tailoring borrower centric repayment solutions
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <img src={pic} alt="arrow-icon" className="img-fluid"/>
              </div>
              <div className="col-7 mb-2">
                <p>
                Targeting borrowers using adaptive algorithms
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <img src={pic} alt="arrow-icon" className="img-fluid"/>
              </div>
              <div className="col-7 my-1">
                <p>
                Performance Dashboards
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <img src={pic} alt="arrow-icon" className="img-fluid"/>
              </div>
              <div className="col-7 mb-2">
                <p>
                Enabling bank/lender to receive payments
                </p>
              </div>
            </div>
            <button className="btn primary-btn"> Call Now </button>

          </div>
          <div className="col-lg-6 ps-5">
            <img className="img-fluid ms-5" src={pic2} alt="team-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
