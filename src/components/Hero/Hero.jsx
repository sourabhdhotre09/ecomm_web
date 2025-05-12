import React from 'react'
import hero_img from '../../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 hero-left">
            <h2>New Arrivals</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus minus quam sed at ullam impedit, tempora earum fugiat corporis.</p>
            <a href='#newCollection' className='btn btn-outline-dark'>Explore</a>
        </div>
        <div className="col-md-6 hero-right">
            <div className="hero_img_outerdiv">
              <img src={hero_img} className='hero_right_img' alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
