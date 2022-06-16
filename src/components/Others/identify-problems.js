import React from "react";
import layer from "../../assets/images/our-offerings-pic-3.png";
import pic from "../../assets/images/Arrow-forward.png";
import "./others.scss";

export default function IdentifyProblems() {
  const divStyle = {
    backgroundImage: `url(${layer})`,
    // backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="pb-5">
      <div className="container">
        <div className="row mt-5">
          <span className="col-1">
            <img src={pic} alt="arrow-icon" />
          </span>
          <div className="col">
            <h1 className="mt-2 mb-4">Identifying your problems</h1>
          </div>
        </div>
      </div>

      <div style={divStyle} className="py-5">
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-5 ms-5 me-5 pe-5">
              <p className="identify-problem-txt txt-1">
                Do you want to improve your debt collections significantly?
              </p>
              <p className="identify-problem-txt txt-2">
                Do you have a poor debt tower that is constantly about to crash
                down?
              </p>
            </div>
            <div className="col-lg-5 ms-5 ps-5">
              <p className="identify-problem-txt txt-3">
                Are your agents focusing on the high priority borrowers?
              </p>
              <p className="identify-problem-txt ms-5 mb-5 ps-5">
                Is your team failing to achieve an optimum rate of recovery?
              </p>
              <p className="identify-problem-txt txt-5 mt-5">
                Are you tired of soaring amounts spent on recovery operations?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <p className="identify-txt-1 mt-5">
          The usual collection process for debt recovery is both labour and cost
          intensive delivering dissatisfactory results.To increase the reach and
          reduce the delinquencies, artificial intelligence can be used to make
          the process more scalable and flexible.
        </p>
        <p className="identify-txt-2  mx-auto">
          At iCanPe, we aim to cope with the increased workload in a cost
          effective and sustainable way.
        </p>
      </div>
    </div>
  );
}
