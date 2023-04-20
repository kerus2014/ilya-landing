import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slick.scss";

interface IProps{
  children:React.ReactNode
}

export const SimpleSlider = (props:IProps) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true,
      // mobileFirst: true,
      // responsive: [
      //     {
      //       breakpoint: 5000,
      //       settings: "unslick",
      //     }
      // ]
    };

    return (
      <Slider {...settings}>
        {props.children}
      </Slider>
    );
}
