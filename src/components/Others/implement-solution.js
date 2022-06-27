import React from "react";
import pic from "../../assets/images/Arrow-forward.png";
import pic2 from "../../assets/images/offering_last.svg";
import useWindowDimensions from "../../Tools/window-dimensions";

import "./others.scss";

export default function ImplementSolution() {
  const size = useWindowDimensions()
  return (
    <div className="container">
      <div className="row mt-5">
        <span className={"col-lg-1 col-md-2 col-sm-12 " + ((size < 767) ?"d-flex justify-content-center" : "")}>
          <img src={pic} alt="arrow-icon" className="img-fluid" />
        </span>
        <div className={(size > 767) ? "col-10" : "col-12 text-center"}>
          <h1 className="mt-2 mb-4">How do we implement the solution?</h1>
          <p>
            At iCanpe, we scale up your recovery operations with a robust and
            unified AI based system. Our digital outreach is facilitated by
            smart communication. It includes interacting with borrowers by
            sending out multiple digital signals by means of Smart SMS, Smart
            Email, IVR.{" "}
          </p>{" "}
          <p>
            {" "}
            The data from these signals are analysed in depth using our smart AI
            engine to understand the borrowers. The understanding is then
            further utilised for reaching the prioritised borrowers through
            tele-calling and field outreach. All these processes are carried out
            maintaining empathy ultimately helping you to attain optimum
            recoveries.
          </p>
          <div className="row mt-5">
            <span className="d-flex col">
              <img
                src={pic}
                alt="arrow-icon"
                width="30px"
                height="30px"
                className="mt-1"
              />
              <h2 className="mb-4 ms-3">
                To deliver promising results, we offer:
                <div className="mt-5">
                    <img src={pic2} alt="solution-img" className="img-fluid"/>
                </div>
              </h2>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
