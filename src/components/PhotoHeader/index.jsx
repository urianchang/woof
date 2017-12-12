import React, { Component } from 'react';
import Slider from 'react-slick';
import FontAwesome from 'react-fontawesome';

export default class PhotoHeader extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <ResponsiveSlider />
    );
  }
}

class ResponsiveSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <img src="https://i.imgur.com/6wEkqrr.jpg" alt="moth"/>
          <img src="https://i.imgur.com/6wEkqrr.jpg" alt="moth"/>
          <img src="https://i.imgur.com/6wEkqrr.jpg" alt="moth"/>
          <img src="https://i.imgur.com/6wEkqrr.jpg" alt="moth"/>
          <img src="https://i.imgur.com/6wEkqrr.jpg" alt="moth"/>
          <img src="https://i.imgur.com/6wEkqrr.jpg" alt="moth"/>
          <img src="https://i.imgur.com/6wEkqrr.jpg" alt="moth"/>
        </Slider>
      </div>
    );
  }
};
