import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
   <>
    <footer className='bg-brand py-3 text-center'>
      <div className="logo_outer text-center"><img src={logo} alt="" /><span className="logo_title">SD HUB</span></div>
      <div className="text-center">@ 2025 Copyright By Saurabh Dhotre </div>
    </footer>
   </>
  )
}

export default Footer
