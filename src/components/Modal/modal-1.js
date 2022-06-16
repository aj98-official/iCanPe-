import React from "react";

export default function Modal1({setStep}){
    return (
            <div className="modal-content">
            <div className="modal-header" style={{background:"#D5D5D5"}}>
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
            <div className="contact-form ps-3 py-3">
            <div className="form-group mb-3">
              <label className="control-label mb-2 form-label-text" for="fname">
                Name 
              </label>
              <div className="col-sm-11">
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  name="fname"
                />
              </div>
            </div>
            <div className="form-group mb-3">
              <label className="control-label mb-2 form-label-text " for="email">
                Email
              </label>
              <div className="col-sm-11">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
              </div>
            </div>
            <div className="form-group mb-3">
              <label className="control-label mb-2 form-label-text " >
                Phone No. 
              </label>
              <div className="col-sm-11">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="lname"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label mb-2 form-label-text" for="comment">
                Any Comments (Optional)
              </label>
              <div className="col-sm-11">
                <textarea placeholder="Your message..." className="form-control" rows="5" id="comment"></textarea>
              </div>
            </div>
          </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn secondary-btn btn-modal me-auto"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" onClick={() => setStep(2)} className="btn primary-btn btn-modal">
                Submit
              </button>
            </div>
          </div>
    )
}