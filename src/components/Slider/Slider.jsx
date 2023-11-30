// Hero.js

import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
import bannerone from '../Assets/images/bannerone.png';
import bannertwo from '../Assets/images/bannertwo.png';
import bannerthree from '../Assets/images/bannerthree.png';
import bannerfour from '../Assets/images/bannerfour.png';

const Hero = () => {
  const images = [bannerone, bannertwo, bannerthree, bannerfour];
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="hero-carousel">
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`banner-${index + 1}`} />
         
          </div>
        ))}

      </Slider>
    </div>
  );
};

export default Hero;
