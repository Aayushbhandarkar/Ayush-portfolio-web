import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";
import man from "../../assets/man2.png";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // icons

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const homeRef = useRef(null);
  const leftHomeRef = useRef(null);
  const rightHomeRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 }
    });

    // Scale animation on scroll
    gsap.fromTo(homeRef.current,
      {
        scale: 0.8,
        opacity: 0,
        y: 100
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: homeRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          markers: false
        }
      }
    );

    // Initial hide elements
    gsap.set([line1Ref.current, line2Ref.current, line3Ref.current, rightHomeRef.current], {
      opacity: 0,
      y: 50
    });

    // Animate left side text with staggered entrance
    tl.fromTo(leftHomeRef.current, 
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2 }
    )
    .fromTo(line1Ref.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.5"
    )
    .fromTo(line2Ref.current,
      { y: 50, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1 },
      "-=0.3"
    )
    .fromTo(line3Ref.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.2"
    )
    .fromTo(buttonRef.current,
      { y: 30, opacity: 0, scale: 0.8 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 0.8,
        ease: "back.out(1.7)"
      },
      "-=0.2"
    );

    // Animate right side image with floating effect
    tl.fromTo(rightHomeRef.current,
      { x: 100, opacity: 0, rotation: 5 },
      { 
        x: 0, 
        opacity: 1, 
        rotation: 0, 
        duration: 1.2,
        ease: "power3.out"
      },
      "-=1"
    );

    // Continuous floating animation for the image
    gsap.to(rightHomeRef.current, {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Scale out animation when scrolling away
    gsap.to(homeRef.current, {
      scale: 0.9,
      opacity: 0.7,
      y: -50,
      scrollTrigger: {
        trigger: homeRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: false
      }
    });

    // Button hover animation
    const button = buttonRef.current;
    const buttonHover = gsap.to(button, {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(66, 180, 205, 0.5)",
      duration: 0.3,
      paused: true
    });

    button.addEventListener("mouseenter", () => buttonHover.play());
    button.addEventListener("mouseleave", () => buttonHover.reverse());

    return () => {
      button.removeEventListener("mouseenter", () => buttonHover.play());
      button.removeEventListener("mouseleave", () => buttonHover.reverse());
    };
  }, []);

  return (
    <div id="home" ref={homeRef}>
      <div className="lefthome" ref={leftHomeRef}>
        <div className="homedetails">
          <div className="line1" ref={line1Ref}> Hey, I’m</div>
          <div className="line2" ref={line2Ref}>Ayush Bhandarkar</div>
          <div className="line3" ref={line3Ref}>
           {/* inside line3 div */}
<Typewriter
  options={{
    strings: [" A WEB DEVELOPER", " A SOFTWARE DEVELOPER"],
    autoStart: true,
    loop: true,
    delay: 50,
    deleteSpeed: 30,
    cursor: '|'
  }}
/>
<button
  ref={buttonRef}
  onClick={() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }}
>
  Hire me
</button>

            {/* Social Icons */}
            <div className="social-icons">
              <a 
                href="https://github.com/Aayushbhandarkar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="icon github"
              >
                <FaGithub size={30} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ayush-bhandarkar-555730286" 
                target="_blank" 
                rel="noopener noreferrer"
                className="icon linkedin"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="righthome" ref={rightHomeRef}>
        <img src={man} alt="man" />
      </div>
    </div>
  );
}

export default Home;
