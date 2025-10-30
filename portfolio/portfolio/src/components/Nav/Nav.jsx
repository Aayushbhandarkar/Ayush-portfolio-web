import React, { useState } from 'react'
import "./Nav.css"
import { Link } from "react-scroll"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
const resumeURL = "/Resume.pdf";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    let tl = gsap.timeline()
    tl.from("nav h1", {
      y: -100,
      duration: 1,
      opacity: 0
    })
    tl.from("nav ul li", {
      y: -100,
      duration: 1,
      opacity: 0,
      stagger:1
    })
  })

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumeURL;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <nav>
      <h1>MY WORK</h1>

      {/* Desktop menu */}
      <ul className='desktopmenu'>
        <Link to='home' activeClass="active" spy={true} smooth={true} duration={500}><li>Home</li></Link>
        <Link to='about' activeClass="active" spy={true} smooth={true} duration={500}><li>About</li></Link>
        <Link to='projects' activeClass="active" spy={true} smooth={true} duration={500}><li>Projects</li></Link>
        <Link to='contact' activeClass="active" spy={true} smooth={true} duration={500}><li>Contact</li></Link>
<li
  onClick={handleResumeDownload}
  style={{
    cursor: 'pointer',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, rgba(42, 161, 198, 1), white)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    borderBottom: '2px solid rgba(80, 5, 32, 1)',
    display: 'inline-block',
    paddingBottom: '2px'
  }}
>
  Resume
</li>
      </ul>

      {/* Hamburger (mobile button) */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div className='ham'></div>
        <div className='ham'></div>
        <div className='ham'></div>
      </div>

      {/* Mobile menu */}
      <ul className={`mobilemenu ${isOpen ? "show" : ""}`}>
        <Link to='home' activeClass="active" spy={true} smooth={true} duration={500} onClick={() => setIsOpen(false)}><li>Home</li></Link>
        <Link to='about' activeClass="active" spy={true} smooth={true} duration={500} onClick={() => setIsOpen(false)}><li>About</li></Link>
        <Link to='projects' activeClass="active" spy={true} smooth={true} duration={500} onClick={() => setIsOpen(false)}><li>Projects</li></Link>
        <Link to='contact' activeClass="active" spy={true} smooth={true} duration={500} onClick={() => setIsOpen(false)}><li>Contact</li></Link>
       <li
  onClick={handleResumeDownload}
  style={{
    cursor: 'pointer',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, rgba(198, 42, 187, 1), white)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    borderBottom: '2px solid rgba(198, 42, 154, 1)',
    display: 'inline-block',
    paddingBottom: '2px'
  }}
>
  Resume
</li>
      </ul>
    </nav>
  )
}

export default Nav
