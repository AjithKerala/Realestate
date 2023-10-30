import React from 'react'
import './Hero.css'
function Hero() {
  return (
    <div>
      <section className="herowrapper">
        <div className="paddings innerWidth hero-container flexCenter">

            <div className="flexColStart hero-left" >
                <div className="hero-title">
                    <div className="orange-circle"/>

                   <h1>Discover <br/>
                   Most Suitable <br/>Property
                   </h1> 
                </div>
                <div className=" flexColStart hero-des">
                    <span>Find a variety of properties that suit you very easilty</span>
                    <span>Forgot all difficulties in finding a residence for you</span>
                </div>
                <div className="search-bar">
                    search bar
                </div>
            </div>
        
        <div className="hero-right">
        <div className="image-container">
            <img src="./hero-image.png" alt="" />
        </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
