import React from "react";
import "./others.scss";
import pic from "../../assets/images/Arrow-forward.png";
import pic2 from "../../assets/images/Careers-pic-1.png";
import layer from "../../assets/images/Careers-layer.png";
import Label from "../Label/label";

export default function WorkingWithUs() {
  const divStyle = {
    backgroundImage: `url(${layer})`,
    // backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "repeat",
  };

  return (
    <div className="pb-5">
      <div className="container py-5 px-5">
        <div className="row py-5">
          <div className="col-lg-6">
            <img className="img-fluid" src={pic2} alt="team-img" />
          </div>
          <div className="col-lg-6">
            <div className="mb-4">
              {" "}
              <Label text="Working  With Us" />
            </div>
            <h1 className="mb-4">Working With Us</h1>
            <div className="row">
              <div className="col-2">
                <img src={pic} alt="arrow-icon" />
              </div>
              <div className="col">
                <p>
                  At iCanPe, we have developed our core values based on the
                  spirit to assist our employees operate individually, as a
                  team, and as a company. We are striving to develop our work
                  culture compass to enable each of our employees to ‘navigate’
                  and succeed in the iCanPe family.
                </p>
                <p>
                  Focus, compassion, integrity, relationships, and the right
                  energy is what drives our employees and the company towards a
                  rewarding and mutually beneficial journey. We wholeheartedly
                  invite the expertise and thoughtfulness of experienced
                  individuals along with the prolificity and zest of fresh minds
                  to bring in a valuable contribution to our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={divStyle} className="pt-5 text-center">
        <div className="container pt-5">
          <h1 className="careers-head-txt">
            We’re more than just a workplace. We’re a family
          </h1>
        </div>
      </div>
      <div className="container text-center px-5 py-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          ornare viverra arcu nec venenatis. Etiam ultricies sodales justo vitae
          blandit. Nunc et efficitur risus. Vivamus mattis, dolor sit amet
          fermentum vestibulum, quam felis interdum felis, quis posuere risus
          nibh eget sem. Etiam sit amet mi ac purus sagittis porttitor et nec
          libero. Aenean commodo lorem vel finibus feugiat. Maecenas a elementum
          ex. Fusce diam magna, scelerisque vel dignissim quis, imperdiet in
          felis. Ut in ornare elit. Ut commodo, sem id suscipit vestibulum,
          tellus nisi imperdiet sapien, eget iaculis turpis sem in purus. Proin
          tellus velit, volutpat vel porttitor et, commodo non leo. Nulla congue
          ullamcorper lectus. Mauris et odio consectetur, varius nunc sit amet,
          laoreet sapien.
        </p>
      </div>
    </div>
  );
}
