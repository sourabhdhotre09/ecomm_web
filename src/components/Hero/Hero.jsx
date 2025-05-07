import React from 'react'

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
              <img src="/src/assets/hero_image.png" className='hero_right_img' alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
