import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./testimonial-cards";
import useWindowDimensions from "../../Tools/window-dimensions";

var cards = [
  {
    text: "iCanpe has been of great help in improving RoRs for us. The best part of working with iCanPe is the complete transparency that allows us to track our progress daily. I believe with iCanPe's compassionate and methodical approach has not only been fruitful for our institution but will also assist in improving the bad debt statistics in the country.",
    title: "Burgundy Flemming",
    subtitle: "CEO at our company",
    ratings: 4,
  },
  {
    text: "iCanPe is the most effective solution for lending institutions like ours to get away with bad debts. Although we had already been calling out to borrowers via phone calls, messages, and emails, our rate of recovery has improved tremendously since the time we associated with iCanPe.",
    title: "Burgundy Flemming",
    subtitle: "CEO at our company",
    ratings: 4.5,
  },
  {
    text: "I believe it is iCanPe's systematic functioning and empathetic approach that is escalating the success rate and drives the borrowers to repay. Their system is of great help in doing that. Their team's combined efforts to add a personal touch to their services truly distinguish them and make them one of the best solutions for recovery operations.",
    title: "Burgundy Flemming",
    subtitle: "CEO at our company",
    ratings: 4,
  },
  {
    text: "In **** (year), our recovery team was struggling with bad debts, which were negatively affecting our lending capacity, and that's when we decided to go with iCanPe services. Need not mention, and I'm delighted that we did! iCanPe has done wonders for us. Our RoRs have improved significantly, keeping the recovery cost minimal.",
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
  const size = useWindowDimensions();
  // console.log(size);
  var data = cards;
  var template;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: size <= 991 ? 1 : size < 1200 ? 2 : 3,
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
