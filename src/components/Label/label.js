import React from "react";
import "./label.scss";

const Label = (props) => {
    return (
        <span className={"label-text " + props.className}> {props.text} </span>
    );
} 


export default Label;