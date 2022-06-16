import React from "react";
import pic2 from "../../assets/images/About-us-img.png";
import pic from "../../assets/images/Arrow-forward.png";

export default function OurBelieve() {
  return (
    <div className="container py-5 px-5">
      <div className="text-align-center justify-content-center d-flex my-5">
        <img src={pic2} alt="meet-img" className="img-fluid" />
      </div>
      <h1 className="mb-4">Our Believe</h1>
      <h2 className="my-5">Vision</h2>
      <div className="row">
        <div className="col-lg-1 col-md-2">
          <img src={pic} alt="arrow-icon" />
        </div>
        <div className="col">
          <p>
            With constantly developing technology we aim to be an end-to-end
            intelligent finance recovery agency for the entire lending industry
            and even beyond.
          </p>
        </div>
      </div>
      <h2 className="my-5">Mission</h2>
      <div className="row">
        <div className="col-lg-1 col-md-2">
          <img src={pic} alt="arrow-icon" />
        </div>
        <div className="col">
          <p>
            To achieve our objective, we are swiftly developing our technology
            and expanding our team by incorporating both the expertise and
            thoughtfulness of experienced individuals along with the prolificity
            and zest of fresh minds to bring in a valuable contribution to the
            team.
          </p>
        </div>
      </div>
    </div>
  );
}
