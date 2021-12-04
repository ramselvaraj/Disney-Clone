import React from 'react'
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

 
function ImgSlider(){
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <div style = {{color: "white",position: "absolute",top: "2px",left:"16px"}}>
          <h2>Movie 1</h2>
          <p>Movie 1 Description.</p>
          </div>
          <img src="/images/slider-badging.jpg" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <div style = {{color: "white",position: "absolute",top: "2px",left:"16px"}}>
          <h1>Movie 2</h1>
          <p>Movie 2 Description.</p>
          </div>
          <img src="/images/slider-scale.jpg" />
          
        </a>
      </Wrap>

      <Wrap>
        <a>
          <div style = {{color: "white",position: "absolute",top: "2px",left:"16px"}}>
        <h1>Movie 3</h1>
        <p>Movie 3 Description.</p>
        </div>
          <img src="/images/slider-badag.jpg"  />
        
        </a>
      </Wrap>

      <Wrap>
        <a>
          <div style = {{color: "white",position: "absolute",top: "2px",left:"16px"}}>
        <h1>Movie 4</h1>
        <p>Movie 4 Description.</p>
        </div>
          <img src="/images/slider-scales.jpg"  />
        
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;