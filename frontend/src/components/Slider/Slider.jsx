import React, { useState } from "react";
import "./Slider.scss";
import arrow from "../../assets/arrow.png";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "next") {
      if (imageIndex === images.length - 1) {
        setImageIndex(0)
      } else {
        setImageIndex(imageIndex+1)
      }
    } else {
        if (imageIndex === 0) {
          setImageIndex(images.length -1)
        } else {
          setImageIndex(imageIndex - 1)
        }
    }
    
  }

  return (
    <div className="slider">
      {imageIndex !== null && open &&  (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("back")}>
            <img src={arrow} alt="" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => changeSlide("next")}>
            <img src={arrow} className="right" alt="" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>X</div>
        </div>
      )}

      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => {
          return <img src={image} alt="images" key={index}  onClick={() => setImageIndex(index+1)} />;
        })}
      </div>
    </div>
  );
};

export default Slider;
