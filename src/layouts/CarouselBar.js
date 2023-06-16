import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../images/carousel/1.jpg";
import img2 from "../images/carousel/2.jpg";
import img3 from "../images/carousel/3.jpg";
import img4 from "../images/carousel/4.jpg";
import img5 from "../images/carousel/5.jpg";
import img6 from "../images/carousel/6.jpg";
import img7 from "../images/carousel/7.jpg";
import img8 from "../images/carousel/8.jpg";

const CarouselBar = () => {
  return (
    
      <Carousel
        autoPlay={true}
        width={"900px"}
        
        interval={5000}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        animationHandler={"fade"}
      >
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
        <div>
          <img src={img6} />
        </div>
        <div>
          <img src={img7} />
        </div>
        <div>
          <img src={img8} />
        </div>
      </Carousel>
  
  );
};

export default CarouselBar;
