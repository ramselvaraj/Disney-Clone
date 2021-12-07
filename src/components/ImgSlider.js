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
        <a href = "avengers-endgame">
          <div style = {{color: "white",position: "absolute",top: "2px",left:"16px"}}>
          <h1>Avengers Endgame</h1>
          <p>After the devastating events of Avengers: Infinity War (2018), the universe is in ruins.<br/> With the help of remaining allies, the Avengers assemble once more in order to <br/>reverse Thanos' actions and restore balance to the universe..</p>
          </div>
          <img src="/images/endgame-slider.png" />
        </a>
      </Wrap>

      <Wrap>
        <a href = "wanda-vision">
          <div style = {{color: "white",position: "absolute",top: "2px",left:"16px"}}>
          <h1>WandaVision</h1>
          <p>Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - <br/>two super-powered beings living their ideal suburban lives - begin to suspect<br/> that everything is not as it seems.</p>
          </div>
          <img src="/images/slider-scale.jpg" />
          
        </a>
      </Wrap>

      <Wrap>
        <a href = "onward">
          <div style = {{color: "white",position: "absolute",top: "2px",left:"16px"}}>
        <h1>Onward</h1>
        <p>Two elven brothers embark on a quest to bring their father back for one day.</p>
        </div>
          <img src="/images/slider-badag.jpg"  />
        
        </a>
      </Wrap>

      <Wrap>
        <a href = "black-panther">
          <div style = {{color: "white",position: "absolute",top: "2px",left:"16px"}}>
        <h1>Black Panther</h1>
        <p>T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward <br/>to lead his people into a new future and must confront a challenger from his country's past.</p>
        </div>
          <img src="/images/blackpanther-slider.png"  />
        
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