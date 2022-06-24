import React from "react";
import background from "../../assets/images/Pattern-Light-2.png";
import PrimaryBtn from "../Buttton/btn";
import TeamCard from "./team-card";
import Label from "../Label/label";
import Pic from "../../assets/images/pro-pic-team.png";

const Team = () => {
  const teamData = [
    {
      pic: Pic,
      name: "Ivan Mathews",
      title: "CEO & founder",
      fb: "#",
      twitter: "#",
      insta: "#",
    },
    {
      pic: Pic,
      name: "Ivan Mathews",
      title: "CEO & founder",
      fb: "#",
      twitter: "#",
      insta: "#",
    },
    {
      pic: Pic,
      name: "Ivan Mathews",
      title: "CEO & founder",
      fb: "#",
      twitter: "#",
      insta: "#",
    },
    {
      pic: Pic,
      name: "Ivan Mathews",
      title: "CEO & founder",
      fb: "#",
      twitter: "#",
      insta: "#",
    },
    {
      pic: Pic,
      name: "Ivan Mathews",
      title: "CEO & founder",
      fb: "#",
      twitter: "#",
      insta: "#",
    },
    {
      pic: Pic,
      name: "Ivan Mathews",
      title: "CEO & founder",
      fb: "#",
      twitter: "#",
      insta: "#",
    },
    {
      pic: Pic,
      name: "Ivan Mathews",
      title: "CEO & founder",
      fb: "#",
      twitter: "#",
      insta: "#",
    },
    {
      pic: Pic,
      name: "Ivan Mathews",
      title: "CEO & founder",
      fb: "#",
      twitter: "#",
      insta: "#",
    },
  ];

  const divStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "repeat",
  };
  return (
    <div style={divStyle} >
      <div className="container py-5 text-center">
        <div className="my-3"><Label text = "team"/></div>
        <h1 className="my-2">LeaderShip Team</h1>
        <p className="my-3">
          Highly professional and capable of running your business across all
          digital channels.
        </p>
        <PrimaryBtn text="Know More" className="mx-auto my-4 mt-4" />
      
      <div className="row mb-5 pb-5">
        {teamData.map((data) => {
          console.log(data);
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 mx-auto">
              <TeamCard
                name={data.name}
                pic={data.pic}
                title={data.title}
                fb={data.fb}
                twitter={data.twitter}
                insta={data.insta}
              />
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Team;
