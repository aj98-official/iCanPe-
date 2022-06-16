import React from "react";
import background from "../../assets/images/Section3-background.png";
const Section3 = () => {
  const divStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    // backgroundAttachment: "fixed",
    height: "600px",
    width: "100%"
  };
  return (
    <div style={divStyle}>
    </div>
  );
};

export default Section3;
