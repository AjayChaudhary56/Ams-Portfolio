import React from "react";
import { Animate } from "react-simple-animate";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaGithub, FaResearchgate } from "react-icons/fa";
import "./styles.scss";


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello!
          <br/>
           I'm Akash Man Shakya
          <br />
         Electrical Engineer.
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="contact-me">
          <div className="contact-me__buttons-wrapper">
            <button>Hire me</button>
            <a href="">Download resume</a>
          </div>
          <div className="contact-me__socials-wrapper">
            <a href="https://www.facebook.com/akashman.shakya/"> <FaFacebook size={32} /></a>
            <a href="https://www.instagram.com/akashmanshakya/"> <FaInstagram size={32} /></a>
            <a href=" https://twitter.com/AMSHAKYA444"> <FaTwitter size={32} /></a>
            <a href="https://www.linkedin.com/in/akash-man-shakya-227515253/"> <FaLinkedin size={32} /></a>
            <a href="https://github.com/MetallicHeart07"> <FaGithub size={32} /></a>
            <a href="https://www.researchgate.net/profile/Akash-Shakya-3/research"> <FaResearchgate size={32} /></a>

          
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
