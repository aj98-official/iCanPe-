import React from "react";
import pic from "../../assets/images/modal-1.svg";

export default function Modal2({ setStep }) {
  return (
    <div className="modal-content">
      <div className="modal-header" style={{ background: "#D5D5D5" }}>
        <h5 className="modal-title" id="exampleModalLabel">
          Request a Demo
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <h2 className="fs-4">Thank you for trusting iCanPe</h2>
        <p>
            We will get back to you shortly. <br />
            Meanwhile here is a video for reference.
        </p>
        <div>
            <img className="img-fluid" src={pic} alt="video-pic"/>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn secondary-btn btn-modal m-auto"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>
    </div>
  );
}
