import React from 'react'
import "./Slider.scss"

const Slider = ({images}) => {
  return (
    <div className='slider'>
      <div className="bigImage">
        <img src={images[0]} alt="" />
      </div>
      <div className="smallImages">
        {
          images.slice(1).map((image , index) => {
            return(
              <img
              src={image}
              alt='images'
              key={index}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Slider