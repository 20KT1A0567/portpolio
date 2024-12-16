import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Master from "./components/Master.jsx";
import HomeWrapper from "./components/HomeWrapper.jsx";
import Passphoto from './components/Images/png/Passphoto.jpg';
import menuIcon from './components/Images/png/image1.png';
import closeIcon from './components/Images/png/image.png';
import "./components/styles/style1.css";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header__content">
          <div className="header__logo-container">
            <img src={Passphoto} alt="Venkatarao" className="header__logo-img" />
            <span className="header__logo-sub">Venkatarao</span>
          </div>
          <nav className="header__nav">
            <ul className={`header__links ${menuOpen ? "header__links--visible" : ""}`}>
              <li>
                <a href="#home" className="header__link" onClick={closeMenu}>Home</a>
              </li>
              <li>
                <a href="#about" className="header__link" onClick={closeMenu}>About</a>
              </li>
              <li>
              <a href="#project" className="header__link" onClick={closeMenu}>Projects</a>
              </li>
              <li>
              <a href="#contact" className="header__link" onClick={closeMenu}>Contact</a>
              </li>
            </ul>
            <div className="header__menu-icon" onClick={toggleMenu}>
              <img
                src={menuOpen ? closeIcon : menuIcon}
                alt={menuOpen ? "Close menu" : "Open menu"}
                className="header__menu-toggle"
              />
            </div>
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Master />} />
          <Route path="/home" element={<HomeWrapper />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
