import './Sidebar.css';
import { SiLinkedin, SiGithub, SiTwitter, SiGmail, SiInstagram } from 'react-icons/si';
import logo from '../images/AngusTransShad.png'

function Sidebar() {

  return (
    <div className="sidebar">
      <img src={logo} alt='' />
      <h1>Jon Barson</h1>
      <h2>Developer</h2>
      <h2>Educator</h2>
      <h2>Mentor</h2>
      <div className="socials">
        <a href="https://www.linkedin.com/in/jon-barson-b3a8467/" rel="opener noreferrer" target="_blank"><SiLinkedin /></a>
        <a href="https://github.com/jbarson" rel="opener noreferrer" target="_blank" ><SiGithub /></a>
        <a href="https://twitter.com/jbarson" rel="opener noreferrer" target="_blank" ><SiTwitter /></a>
        <a href="https://www.instagram.com/jbarson/" rel="opener noreferrer" target="_blank" ><SiInstagram /></a>
        <a href="mailto:jbarson@gmail.com" rel="opener noreferrer" target="_blank" ><SiGmail /></a>
      </div>

    </div>
  )

}

export default Sidebar