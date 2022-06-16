import React from "react";

const Card = (props) => {
  var text = props.data.text,
      title = props.data.title,
      subtitle = props.data.subtitle,
      rating = props.data.ratings;

  var stars = [];
  while(rating > 0){
    if(rating !== 0.5){
      stars = [...stars, "fa-solid fa-star star"];
    }
    // console.log(rating);
    if(rating === 0.5){
      stars = [...stars, "fa-solid fa-star-half star"];
    } 
    rating--;
  }
  // console.log(stars);
  var renderStars = stars.map((item) => {
      return (
          <i className={item}></i>
      );
  });
  return (
    <div className="card">
    <div className="card-body">
      <p className="card-txt">{text}</p>
    </div>  
    <div className="card-footer card-txt">
        <p className="fs-6">{title}</p>
        <footer className="blockquote-footer text-muted mb-0">{subtitle}</footer>
      <span className="fs-6">
         {renderStars}
      </span>
    </div>
  </div>
  );
};

export default Card;