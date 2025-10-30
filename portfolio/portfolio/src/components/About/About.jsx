import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./About.css"
import Card from '../Card/Card'
import mern from "../../assets/mern.png"
import java from "../../assets/java.png"
import DSA from "../../assets/dsa.png"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);
  const leftAboutRef = useRef(null);
  const rightAboutRef = useRef(null);
  const techStackRef = useRef(null);
  const techIconsRef = useRef([]);
  const sectionsRef = useRef([]);
  const cardsRef = useRef([]);

  // Tech stack data with icons and colors
  const techStack = [
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "JavaScript", icon: "🟨", color: "#F7DF1E" },
    { name: "Node.js", icon: "🟢", color: "#339933" },
    { name: "MongoDB", icon: "🍃", color: "#47A248" },
    { name: "CSS3", icon: "🎨", color: "#1572B6" },
    { name: "HTML5", icon: "🌐", color: "#E34F26" },
    { name: "Git", icon: "📚", color: "#F05032" },
    { name: "GSAP", icon: "🎬", color: "#88CE02" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scale animation on scroll for entire section
      gsap.fromTo(aboutRef.current,
        { scale: 0.8, opacity: 0, y: 100 },
        { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            markers: false
          }
        }
      );

  gsap.fromTo(aboutRef.current,
  { scale: 0.95, opacity: 0 },
  { 
    scale: 1, 
    opacity: 1, 
    ease: "power1.out", 
    scrollTrigger: {
      trigger: aboutRef.current,
      start: "top 90%",
      end: "top 50%",
      scrub: 1,
      markers: false
    }
  }
);

      gsap.fromTo(leftAboutRef.current,
  { x: -40, opacity: 0 },
  { x: 0, opacity: 1, duration: 1, ease: "power1.out",
    scrollTrigger: {
      trigger: leftAboutRef.current,
      start: "top 85%",
      end: "top 50%",
      scrub: 1
    }
  }
);

gsap.fromTo(rightAboutRef.current,
  { x: 40, opacity: 0 },
  { x: 0, opacity: 1, duration: 1, ease: "power1.out",
    scrollTrigger: {
      trigger: rightAboutRef.current,
      start: "top 85%",
      end: "top 50%",
      scrub: 1
    }
  }
);


      gsap.fromTo(techStackRef.current,
        { scale: 0, opacity: 0, rotation: -180 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: techStackRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none none"
          }
        }
      );

      techIconsRef.current.forEach((icon, index) => {
        const angle = (index / techIconsRef.current.length) * Math.PI * 2;
        const radius = 120;

        gsap.set(icon, {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          scale: 0,
          opacity: 0
        });

        gsap.to(icon, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: techStackRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
          }
        });

        gsap.to(icon, {
          rotation: 360,
          duration: 20 + (index * 2),
          repeat: -1,
          ease: "none",
          transformOrigin: "center center"
        });

        gsap.to(icon, {
          y: -15,
          duration: 2 + (index * 0.5),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });

        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            scale: 1.3,
            duration: 0.3,
            ease: "power2.out",
            color: techStack[index].color,
            textShadow: `0 0 20px ${techStack[index].color}`
          });
        });

        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            color: "white",
            textShadow: "0 0 10px rgba(122, 215, 234, 0.5)"
          });
        });
      });

      gsap.to(".tech-center", {
        scale: 1.2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: techStackRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      });

      sectionsRef.current.forEach((section, index) => {
        gsap.fromTo(section,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, delay: index * 0.15, ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { y: 60, opacity: 0, rotationX: 10 },
          { y: 0, opacity: 1, rotationX: 0, duration: 0.9, delay: index * 0.2, ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      gsap.to(leftAboutRef.current, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

      gsap.to(rightAboutRef.current, {
        y: 30,
        ease: "none",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const addToTechIcons = (el) => {
    if (el && !techIconsRef.current.includes(el)) {
      techIconsRef.current.push(el);
    }
  };

  const addToSections = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const addToCards = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div id='about' ref={aboutRef}>
      {/* left */}
      <div className="leftabout" ref={leftAboutRef}>
        <div className="tech-stack-container" ref={techStackRef}>
          <div className="tech-center">💻</div>
          {techStack.map((tech, index) => (
            <div 
              key={index}
              className="tech-icon"
              ref={addToTechIcons}
              style={{ '--tech-color': tech.color }}
            >
              <span className="tech-emoji">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="aboutdetails">
          <div className="personalinfo" ref={addToSections}>
            <h1>personal Info</h1>
            <ul>
              <li><span>Name </span> : AYUSH BHANDARKAR</li>
              <li><span>LANGUAGE </span> : ENGLISH , HINDI , MARATHI</li>
            </ul>
          </div>

          <div className="education" ref={addToSections}>
            <h1>Education</h1>
            <ul>
              <li><span>DEGREE </span> : BTECH </li>
              <li><span>BRANCH  </span> : COMPUTER ENGINEERING</li>
            </ul>
          </div>

          <div className="skills" ref={addToSections}>
            <h1>skills</h1>
            <ul>
              <li>MERN STACK WEB DEVELOPER,</li>
              <li>DSA , TAILWIND CSS , GIT , GITHUB ,POSTMAN, </li>
              <li> CORE JAVA</li>
            </ul>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="rightabout" ref={rightAboutRef}>
        <div ref={addToCards}>
          <Card title="MERN STACK DEVELOPER" image={mern} index={0}/>
        </div>
        <div ref={addToCards}>
          <Card title="JAVA" image={java} index={1}/>
        </div>
        <div ref={addToCards}>
          <Card title="DSA" image={DSA} index={2}/>
        </div>
      </div>
    </div>
  )
}

export default About;
