import React from "react";
import Label from "../Label/label";
import pic from "../../assets/images/Arindham-sir-pic.png";
import background from "../../assets/images/Pattern-Dark.png";

export default function OurLeaderShip() {
  const pattern = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "repeat",
  };
  return (
    <div style={pattern} className="our-leadership ">
      <div className="container p-5">
        <div className="my-4">
          {" "}
          <Label text="founder's message" />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h2 className="mb-3">Our Leadership</h2>
            <p className="mb-5">
              Arindam Choudhury is well-known for his comprehensive knowledge,
              keen vision, and vast expertise.{" "}
            </p>

            <p className="mb-4">
              He is an accomplished industry expert with over 20 years of
              real-world experience in statistical analysis, data mining, and
              modelling techniques to address key business issues in a variety
              of domains such as financial services, telecom, and CPG retail, as
              well as building and industrialising data-driven products and
              solutions for clients worldwide. He also has considerable
              experience leading high-capability teams on major R&D initiatives,
              product development, and deployment, and is really an epitome of
              the correct vision coupled with the required experience and
              skills.
            </p>
            <p className="mb-4">
              He is a proud alumnus of IIT Kanpur and holds a PhD degree from
              the University of Southampton.
            </p>

            <h2>Arindam Choudhury</h2>
            <p>Founder and CEO, iCanPe</p>
          </div>
          <div className="col-lg-6 ">
            <a className="lm-btn btn primary-btn" href="https://www.linkedin.com/in/arindamc03">Learn More</a>
            <div className="py-5">
            <img className="img-fluid pro-pic" src={pic} alt="pro-pic"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
