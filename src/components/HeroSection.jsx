import React from 'react'
import '../styles/HeroSection.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";

// Import Images Correctly
import Slider1 from '../assets/Slider1.jpg';
import Slider2 from '../assets/Slider2.jpg';
import Slider3 from '../assets/Slider3.jpg';

const HeroSection = () => {

    const settings = {
        dots: true, // Navigation dots
        infinite: true, // Infinite scrolling
        speed: 500, // Transition speed
        slidesToShow: 1, // Number of slides visible at a time
        slidesToScroll: 1,
        autoplay: true, // Auto-slide enabled
        autoplaySpeed: 3000, // Slide change every 3 sec
      };

  return (
    <div>
       <section className="hero">
      <Slider {...settings}>
        <div className="slide">
          <img src={Slider1} alt="Slide 1" loading='lazy' />
          <div className="text-overlay">
            <h2>Welcome to ShopMate</h2>
            <p>Get the best deals on your favorite products!</p>
          </div>
        </div>

        <div className="slide">
          <img src={Slider2} alt="Slide 2" loading='lazy' />
          <div className="text-overlay">
            <h2>New Arrivals</h2>
            <p>Check out our latest collection.</p>
          </div>
        </div>

        <div className="slide">
          <img src={Slider3} alt="Slide 3" loading='lazy' />
          <div className="text-overlay">
            <h2>Exclusive Discounts</h2>
            <p>Up to 50% off on selected items.</p>
          </div>
        </div>
      </Slider>
    </section>
    </div>
  )
}

export default HeroSection;
