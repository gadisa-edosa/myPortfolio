import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt=''/>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I’m a passionate Full-Stack Developer with a strong focus on building fast, scalable, and user-friendly web applications. I specialize in JavaScript, React, Node.js, and modern frameworks that bring ideas to life on both frontend and backend.</p>
            <p>With a problem-solving mindset and clean-code principles, I enjoy turning complex challenges into efficient digital solutions.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width: "60%"}} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{width: "70%"}} /></div>
            <div className="about-skill"><p>Next JS</p><hr style={{width: "50%"}} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>HAPPY CLIENTS</p>
        </div>         
      </div>      
    </div>
  )
}

export default About
