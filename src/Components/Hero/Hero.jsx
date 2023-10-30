import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
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
                <div className=" flexColStart hero-des secondaryText">
                    <span>Find a variety of properties that suit you very easilty</span>
                    <span>Forgot all difficulties in finding a residence for you</span>
                </div>
                <div className="flexCenter search-bar">
                   <HiLocationMarker color="var(--blue)" size={25}/>
                   <input type="search"/>
                   <button className='button'>Search</button>
                </div>
                <div className="flexCenter stats">
                  <div className="flexColStart stat">
                    <span>
                      <CountUp start={8800} end={9000} duration={4} />
                      <span className='pluse'>+</span>
                    </span>
                    <span className='secondaryText'>Premium Products</span>
                  </div>
                  <div className="flexColStart stat">
                    <span>
                      <CountUp start={1} end={2000} duration={4} />
                      <span className='pluse'>+</span>
                    </span>
                    <span className='secondaryText'>Happy Customers</span>
                  </div>
                  <div className="flexColStart stat">
                    <span>
                      <CountUp  end={28} />
                      <span className='pluse'>+</span>
                    </span>
                    <span className='secondaryText'>Award Winings</span>
                  </div>
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
