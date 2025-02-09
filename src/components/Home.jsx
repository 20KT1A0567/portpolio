import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Passphoto from '../components/Images/png/Passphoto.jpg';

const Home = () => {
  const baseText = "Fullstack Developer";
  const [displayText, setDisplayText] = useState("");
  const [removing, setRemoving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prev) => {
        if (!removing) {
          if (prev.length < baseText.length) {
            return baseText.slice(0, prev.length + 1);
          } else {
            setRemoving(true);
            return prev;
          }
        } else {
          if (prev.length > 0) {
            return baseText.slice(0, prev.length - 1);
          } else {
            setRemoving(false);
            return "";
          }
        }
      });
    }, 200);

    return () => clearInterval(interval);
  }, [removing]);

  return (
    <>
      <section className="home-hero" id="home">
        <div className="home-hero__container">
          <div className="home-hero__image">
            <img src={Passphoto} alt="Profile" className="profile-photo" />
          </div>
          <div className="home-hero__content">
            <h1 className="heading-primary">Hi, My name is Venkatarao Dama</h1>
            <p className="fade-text">
              I'm a Java <span className="animated-text">{displayText}</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;