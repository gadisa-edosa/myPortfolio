import React from 'react'
import profile_img from '../../assets/profile_img.svg'

import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Gadisa Edosa,</span> Frontend Developer based in Ethiopia.</h1>
      <p>I am a frontend developer from Oromia, Ethiopia with 2 years of experience in Hawi Software Solution Company</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
      
    </div>
  )
}

export default Hero
