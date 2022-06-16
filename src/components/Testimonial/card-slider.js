import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./testimonial-cards";
import useWindowDimensions from "../../Tools/window-dimensions";

var cards = [
  {
    text: "Lorem ipsum dolor sit amet Ut , Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    title: "Burgundy Flemming",
    subtitle: "CEO at our company",
    ratings: 4,
  },
  {
    text: "Lorem ipsum dolor sit amet Ut , Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    title: "Burgundy Flemming",
    subtitle: "CEO at our company",
    ratings: 4.5,
  },
  {
    text: "Lorem ipsum dolor sit amet Ut , Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    title: "Burgundy Flemming",
    subtitle: "CEO at our company",
    ratings: 4,
  },
  {
    text: "Lorem ipsum dolor sit amet Ut , Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    title: "Burgundy Flemming",
    subtitle: "CEO at our company",
    ratings: 5,
  },
];

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        background: "radial-gradient(black, grey, white)",
        borderRadius: "50%",
        padding: "4px 22px 21px 2px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        background: "radial-gradient(black, grey, white)",
        borderRadius: "50%",
        padding: "4px 22px 21px 2px",
      }}
      onClick={onClick}
    />
  );
}

const CardSlider = () => {
  
  const size = useWindowDimensions().width;
  // console.log(size);
  var data = cards;
  var template;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: size <= 1000 ? 1: size <= 1200 ?2 : 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  if (data.length > 0) {
    template = data.map(function (item, index) {
      return (
        <div key={index}>
          <Card data={item} />
        </div>
      );
    });
  }
  return (
    <div className="slide">
      <Slider {...settings}>{template}</Slider>
    </div>
  );
};

export default CardSlider;
