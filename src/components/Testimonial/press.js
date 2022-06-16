import React from "react";
import PressLogo1 from "../../assets/images/Press-Logo-1.png";
import PressLogo2 from "../../assets/images/Press-Logo-2.png";
import PressLogo3 from "../../assets/images/Press-Logo-3.png";
import PressLogo4 from "../../assets/images/Press-Logo-4.png";

const Press = () => {

  const logo = [PressLogo1, PressLogo2, PressLogo3, PressLogo4];
  return (
    <div className="row press-container text-center">

        {
          logo.map((item) => (
            <div className="col-3">
            <div className="press-div">
            <img src={item} alt="press-img" className="img-fluid"/>
            </div>
            </div>
          ))
        }

    </div>
  );
};

export default Press;
