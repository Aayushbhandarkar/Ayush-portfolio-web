import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Contact.css";

import con from "../../assets/contact.png";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef(null);
  const leftContactRef = useRef(null);
  const rightContactRef = useRef(null);
  const formRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const inputsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main section entrance animation
      gsap.fromTo(contactRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            markers: false
          }
        }
      );

      // Left side image animation
      gsap.fromTo(leftContactRef.current,
        { x: -100, opacity: 0, rotation: -5 },
        { x: 0, opacity: 1, rotation: 0, duration: 1.2, ease: "power3.out" }
      );

      // Right side form animation
      gsap.fromTo(rightContactRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );

      // Form container animation
      gsap.fromTo(formRef.current,
        { scale: 0.8, opacity: 0, boxShadow: "0 0 0px rgba(122, 215, 234, 0)" },
        { scale: 1, opacity: 1, boxShadow: "0 0 30px rgba(122, 215, 234, 0.5)", duration: 1, ease: "back.out(1.7)", delay: 0.3 }
      );

      // Heading animation
      gsap.fromTo(headingRef.current,
        { y: -50, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)", delay: 0.5 }
      );

      // Staggered input fields animation
      inputsRef.current.forEach((input, index) => {
        gsap.fromTo(input,
          { x: 50, opacity: 0, scale: 0.9 },
          { x: 0, opacity: 1, scale: 1, duration: 0.6, delay: 0.7 + (index * 0.15), ease: "power2.out" }
        );

        input.addEventListener('focus', () => {
          gsap.to(input, { scale: 1.02, boxShadow: "0 0 15px rgba(122, 215, 234, 0.8)", duration: 0.3 });
        });

        input.addEventListener('blur', () => {
          gsap.to(input, { scale: 1, boxShadow: "inset 0 0 5px rgba(122, 215, 234, 0.3)", duration: 0.3 });
        });
      });

      // Button animation
      gsap.fromTo(buttonRef.current,
        { y: 30, opacity: 0, scale: 0.8, rotationX: 90 },
        { y: 0, opacity: 1, scale: 1, rotationX: 0, duration: 0.8, ease: "back.out(1.7)", delay: 1.2 }
      );

    }, contactRef);

    return () => ctx.revert();
  }, []);

  const addToInputs = (el) => {
    if (el && !inputsRef.current.includes(el)) {
      inputsRef.current.push(el);
    }
  };

  return (
    <div id="contact" ref={contactRef}>
      {/* Left Image */}
      <div className="leftcontact" ref={leftContactRef}>
        <img src={con} alt="contact" ref={imageRef} />
      </div>

      {/* Right Contact Form & Info */}
      <div className="rightcontact" ref={rightContactRef}>
        <h2 ref={headingRef}>Contact Me</h2>
        
        {/* Professional Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <a href="tel:7767934036">+91 7767934036</a>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <a href="mailto:ayushbhandarkar7@gmail.com">ayushbhandarkar7@gmail.com</a>
          </div>
        </div>

        {/* Contact Form */}
        <form 
          ref={formRef} 
          action="https://formspree.io/f/movkvdwd" 
          method="post"
        >
          <input 
            ref={addToInputs} 
            name="username" 
            type="text" 
            placeholder="Your Name" 
            required 
          />
          <input 
            ref={addToInputs} 
            name="Email" 
            type="email" 
            placeholder="Your Email" 
            required 
          />
          <textarea 
            ref={addToInputs} 
            name="message" 
            id="textarea" 
            placeholder="Write your message..." 
            required
          ></textarea>
          <button ref={buttonRef} type="submit" id="btn">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
