import React from 'react'
import './Sidebar.css';
import { SiLinkedin, SiGithub, SiTwitter, SiGmail, SiInstagram } from 'react-icons/si';
import { FaStar } from "react-icons/fa"
import logo from '../images/AngusTransShad.png'

function Sidebar({ handleClick }) {

  return (
    <div className="sidebar">
      <img src={logo} alt='' onClick={handleClick} />
      <h1>Jon Barson</h1>
      <h2>Developer</h2>
      <h2>Educator</h2>
      <h2>Mentor</h2>
      <div className="socials">
        <a href="https://www.linkedin.com/in/jon-barson/" rel="noopener noreferrer" target="_blank"><SiLinkedin /></a>
        <a href="https://github.com/jbarson" rel="noopener noreferrer" target="_blank" ><SiGithub /></a>
        <a href="https://twitter.com/jbarson" rel="noopener noreferrer" target="_blank" ><SiTwitter /></a>
        <a href="https://www.instagram.com/jbarson/" rel="noopener noreferrer" target="_blank" ><SiInstagram /></a>
        <a href="https://starmap.cuthalion.ca"><FaStar /></a>
        <a href="mailto:jbarson@gmail.com" rel="noopener noreferrer" target="_blank" ><SiGmail /></a>
      </div>

    </div>
  )

}

export default Sidebar