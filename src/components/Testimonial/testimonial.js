import React from "react";
import CardSlider from "./card-slider";
// import PrimaryBtn from "../Buttton/btn";
import Press from "./press";
import "./testimonial.scss";
import background from "../../assets/images/Pattern-Light.png";
import Label from "../Label/label";

const Testimonial = () => {
  const pattern = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "repeat",
  };

  return (
    <div>
      <div className="text-center testimonial" style={pattern}>
        <div className="container">
          <div className="mb-3">
            <Label text="Testimonials" />
          </div>
          <h1>Testimonials</h1>
          <p className="text-muted py-2">Trusted by the best in the industry</p>
          <div className="slider-container">
            <CardSlider />
          </div>
        </div>
      </div>
      <div className="press" style={pattern}>
        <div className="container">
          <Press />
        </div>
        <div>
          <button
            className="btn mx-auto primary-btn btn-div"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            type="button"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
