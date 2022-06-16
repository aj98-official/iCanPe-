import React from "react";
import "./team-card.scss";

const TeamCard = (props) => {
   
   const name = props.name,
         pic = props.pic,
         title = props.title,
         fb = props.fb,
         twitter = props.twitter,
         insta = props.insta;
    
    console.log(name);     
   return (
       <div className="mx-auto team-card my-4">
            <img className="my-2 team-pro-pic" src = {pic} alt = "profile-pic" />
            <p className="team-name mt-3">{name}</p>
            <p className="team-title">{title}</p>
            <div className="icons">
            <i class="fa-brands fa-facebook-f mx-2" href = {fb} />
            <i class="fa-brands fa-twitter mx-2" href = {twitter}/>
            <i class="fa-brands fa-instagram mx-2" href = {insta}/>
            </div>
       </div>
   )
}

export default TeamCard;