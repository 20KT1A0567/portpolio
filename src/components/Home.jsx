import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Passphoto from '../components/Images/png/Passphoto.jpg'; 

const Home = () => {
  return (
    <>
      <section className="home-hero" id="home">
        <div className="home-hero__container">
          <div className="home-hero__image">
            <img src={Passphoto} alt="Profile" className="profile-photo" />
          </div>
          <div className="home-hero__content">
            <h1 className="heading-primary">Hi, My name is Venkatarao Dama</h1>
            <p className="fade-text">I'm a Java Fullstack Developer</p>

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
