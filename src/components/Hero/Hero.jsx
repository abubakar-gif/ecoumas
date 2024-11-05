import React from 'react'
import "./hero.css"
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"
import hello from "../Assets/hello.webp"

export default function Hero() {
  return (
    <div className='hero'>
      <img src={hello} alt="" />
       {/* <div className="hero-Left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hero-hand-icon">
              <p>New</p>
              <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
          </div>
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
          </div>
       </div>
       <div className="hero-right">
<img src={hero_image} alt="" />
       </div> */}
    </div>
  )
}
