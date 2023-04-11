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
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true,
    };

    return (
      <Slider {...settings}>
        {props.children}
      </Slider>
    );
}
