import React from "react";
import "./others.scss";
import pic from "../../assets/images/Arrow-forward.png";
import Label from "../Label/label";

export default function OurStory() {
  return (
    <div className="container py-5 px-5">
      <div className="mb-4">
        {" "}
        <Label text="our story" />
      </div>
      <h1 className="mb-4">Our Story</h1>
      <div className="row">
        <div className="col-lg-1 col-md-2">
          <img src={pic} alt="arrow-icon" />
        </div>
        <div className="col">
          <p>
            ICanPe's digital-first collections platform helps lenders automate
            and improve collections of their revolving dues. Whether it is flows
            or recovery, rollbacks or stabilization, or simple dues collection,
            marquee lenders in India are using our platform and are seeing
            encouraging results. We are a one stop solution for all your
            collection problems by providing you a digital engagement and debt
            collection platform. Built on the twin pillars of (i) Continuous
            borrower engagement and (ii) Effective borrower prioritisation, we
            seek to improve your collections by 50% and more.
          </p>
        </div>
      </div>
    </div>
  );
}
