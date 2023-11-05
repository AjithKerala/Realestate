import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import "Swiper/css"
import './Residencies.css'
import data from '../utils/slider.json'
import {sliderSettings} from '../utils/Common'
function Residencies() {
  return (
    <div>
      <section className="r-wrapper">
          <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
              <span className='orangeText'>Best Choices</span>
              <span className='primaryText'>popular Residencies</span>
            </div>
            
              <div className='row'>
                <div className="posters">
                  {
                    data.map((da)=>(
                      <div className='card' >
                      <img className='control' src={da.image} alt=""  />
                      <span><span className='ru-color'>$</span>{da.price}</span>

                      <p className='primaryText'>{da.name}</p>
                      <p className='content secondaryText'>{da.detail}</p>

                      </div>
                    ))
                  }
                </div>

              </div>
           
          </div>
      </section>
    </div>
  )
}

export default Residencies
