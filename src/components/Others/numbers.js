import React from "react";
import AnimatedNumber from "animated-number-react";

export default function Numbers() {
  const formatValue = (value) => `${Number(value).toFixed(0)}`;
  const duration = 1500;
  const delay = 300;

  return (
    <div style={{ background: "#F7F7F8" }}>
      <div className="container py-5 px-5">
        <div className="row m-auto text-center">
          <div className="col-lg-3 col-md-6 col-sm-6 py-3">
            <h1>
              <AnimatedNumber
                value={1000000}
                formatValue={formatValue}
                duration={duration}
                delay = {delay}
              />
            </h1>
            <p>Successful Recoveries</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 py-3">
            <h1>
              {" "}
              <AnimatedNumber
                value={100}
                formatValue={formatValue}
                duration={duration}
                delay = {delay}
              />
              +
            </h1>
            <p>Clients</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 py-3">
            <h1>
              {" "}
              <AnimatedNumber
                value={30}
                formatValue={formatValue}
                duration={duration}
                delay = {delay}
              />
              +
            </h1>
            <p>Team Members</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 py-3">
            <h1>
              {" "}
              <AnimatedNumber
                value={3500}
                formatValue={formatValue}
                duration={duration}
                delay = {delay}
              />
              +
            </h1>
            <p>Unique</p>
          </div>
        </div>
      </div>
    </div>
  );
}
