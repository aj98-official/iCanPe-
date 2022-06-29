import React from "react";
import "./team-card.scss";

const TeamCard = (props) => {
   
   const name = props.name,
         pic = props.pic,
         title = props.title,
         linkedin = props.linkedin;
    
//     console.log(name);     
   return (
       <div className="mx-auto team-card my-4">
            <img className="my-2 img-fluid" src = {pic} alt = "profile-pic" />
            <p className="team-name mt-3">{name}</p>
            <p className="team-title">{title}</p>
            <div className="icons">
            <a href = {linkedin}> <i class="fa-brands fa-linkedin mx-2 fs-5"/> </a>
            </div>
       </div>
   )
}

export default TeamCard;