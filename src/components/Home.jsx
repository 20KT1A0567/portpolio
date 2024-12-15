import React from 'react';
import { Link } from 'react-router-dom';

import linkedicon from '../components/Images/png/linkedin-ico.png';
import github from '../components/Images/png/github-ico.png';
import insta from '../components/Images/png/insta-ico.png';
import twitter from '../components/Images/png/twitter-ico.png';
import youtube from '../components/Images/png/yt-ico.png';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
const Home = () => {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__content">
          <h1 className="heading-primary">Hi, My name is Venkatarao Dama</h1>
          <div className="home-hero__info">
            <p className="text-primary">Hey, I'm a Web Developer</p>
          </div>
          <div className="home-hero__cta">
            <Link to="/projects" className="btn btn--bg">Projects</Link>
          </div>
        </div>
        
        <div className="home-hero__socials">
          <div className="home-hero__social">
            <a href="https://www.linkedin.com/in/dama-venkataraod/" className="home-hero__social-icon-link" target="_blank" rel="noopener noreferrer">
              <img src={linkedicon} alt="LinkedIn" className="home-hero__social-icon" />
            </a>
          </div>
          <div className="home-hero__social">
            <a href="https://github.com/20KT1A0567" className="home-hero__social-icon-link" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="home-hero__social-icon" />
            </a>
          </div>
          <div className="home-hero__social">
            <a href="https://x.com/Dama82829884" className="home-hero__social-icon-link" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="home-hero__social-icon" />
            </a>
          </div>
          <div className="home-hero__social">
            <a href="https://www.youtube.com/channel/UC4w-9kOFgr6XGgMJNKIXlrA" className="home-hero__social-icon-link" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" className="home-hero__social-icon" />
            </a>
          </div>
          <div className="home-hero__social">
            <a href="https://www.instagram.com/venkat_chowdary__18/" className="home-hero__social-icon-link home-hero__social-icon-link--bd-none" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" className="home-hero__social-icon" />
            </a>
          </div>
        </div>

        <div className="home-hero__mouse-scroll-cont">
          <div className="mouse"></div>
        </div>
      </section>
    
    </>
  );
};

export default Home;
