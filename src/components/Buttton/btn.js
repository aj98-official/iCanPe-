import React from "react";
import "./btn.scss";


const PrimaryBtn = (props) => {
    return(
      <button type="button" className= {"primary-btn " + props.className} >{props.text}</button>
    )
}


export default PrimaryBtn;