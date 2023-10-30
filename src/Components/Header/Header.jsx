import React from 'react'
import './Header.css'
function Header() {
  return (
    <div>
      <section className="h-wrappper">
        <div className="flexCenter paddings innerWidth h-container" >
          <img src='./logo.png' alt=''width={100} />
          <div className="h-menu flexCenter" >
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact us</a>
            <a href="">Get started</a>
            <button className="button">
            <a href="">Contact</a>
            </button>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Header
