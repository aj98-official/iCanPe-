import React from "react";
import background from "../../assets/images/Pattern-Light-2.png";


// import PrimaryBtn from "../Buttton/btn";
import TeamCard from "./team-card";
import Label from "../Label/label";
// import Pic from "../../assets/images/pro-pic-team.png";
import Pic1 from "../../assets/images/arindam-sir.svg";
import Pic2 from "../../assets/images/rajeev-sir.svg";
import Pic3 from "../../assets/images/jitendra-sir.svg";
import Pic4 from "../../assets/images/Saurabh.svg";


const Team = () => {

  const teamData = [
    {
      pic: Pic1,
      name: "Arindam Choudhury",
      title: "CEO & founder",
      linkedin: "https://www.linkedin.com/in/arindamc03"
    },
    {
      pic: Pic2,
      name: "Rajeev Airani",
      title: "Chief Operations Officer",
      linkedin: "https://www.linkedin.com/in/rajeev-airani-61791021"
    },
    {
      pic: Pic3,
      name: "Jitendra Panda",
      title: "Chief Business Officer",
      linkedin: "https://www.linkedin.com/in/jitendra-panda-70b65615"
    },
    {
      pic: Pic4,
      name: "Saurabh Mishra",
      title: "VP-Collections Strategy",
      linkedin: "#"
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
        <h1 className="my-2">Leadership Team</h1>
        <p className="my-3">
          Highly professional and capable of running your business across all
          digital channels.
        </p>
        <a className="mx-auto my-4 primary-btn btn " href="https://www.linkedin.com/company/canpe/" style={{width: "170px"}}> Know More</a>
      
      <div className="row">
        {teamData.map((data) => {
          console.log(data);
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 mx-auto">
              <TeamCard
                name={data.name}
                pic={data.pic}
                title={data.title}
                linkedin = {data.linkedin}
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
