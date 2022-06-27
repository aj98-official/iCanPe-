import React from "react";
import pic from "../../assets/images/Arrow-forward.png";
import pic2 from "../../assets/images/Careers-pic-2.png";
import useWindowDimensions from "../../Tools/window-dimensions";

import Label from "../Label/label";
import "../Buttton/btn.scss";
const SubmitYourCv = () => {

  const size = useWindowDimensions();
  return (
    <div className="py-5" style={{ background: "#EEF0F3" }}>
      <div className="container px-4">
        <div className="my-3">
          {" "}
          <Label text="WORKING WITH US" />
        </div>
        <div className="row">
          <div className="col-lg-7">
            <h1 className="mb-4">Submit Your CV</h1>
            <div className="row">
              {(size > 991) ?<div className="col-lg-2">
                <img src={pic} alt="arrow-icon" className="img-fluid"/>
              </div> : ""}
              <div className="col">
                <p className="py-2 pe-5">
                  Submit your resume here and we will reach out to you soon!{" "}
                </p>
                <div>
                  <div className="form-group mb-3">
                    <label
                      className="control-label mb-2 form-label-text"
                      for="fname"
                    >
                      Name
                    </label>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        className="form-control"
                        id="fname"
                        name="fname"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label
                      className="control-label mb-2 form-label-text "
                      for="email"
                    >
                      Email
                    </label>
                    <div className="col-lg-10">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <label className="control-label mb-2 form-label-text ">
                      Phone No.
                    </label>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="lname"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <label className="control-label mb-2 form-label-text ">
                      Select File to Upload
                    </label>
                    <div className="col-lg-10">
                      <input
                        type="file"
                        className="form-control"
                        id="phone"
                        name="lname"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label
                      className="control-label mb-2 form-label-text"
                      for="comment"
                    >
                    Query (Optional)
                    </label>
                    <div className="col-lg-10">
                      <textarea
                        className="form-control"
                        rows="4"
                        id="comment"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="mt-4 col-lg-10">
                      <button
                        type="submit"
                        className="btn primary-btn ms-auto"
                      >
                        {" "}
                        Submit{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"col-lg-5 " + ((size <= 991) ? "mt-5" : "")}>
            <button
              style={{ width: "100%", borderRadius: "80px" }}
              className="btn btn-primary btn-lg"
            >
              View Open Roles{" "}
              <i className="ms-3 fa-solid fa-up-right-from-square"></i>
            </button>
            <img src={pic2} alt="mail-img" className="img-fluid pt-5 mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitYourCv;
