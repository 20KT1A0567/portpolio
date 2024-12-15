import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section id="about" className="about sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">About Me</span>
            <span className="heading-sec__sub">
              Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
            </span>
          </h2>
          <div className="about__content">
            <div className="about__content-main">
              <h3 className="about__content-title">Get to know me!</h3>
              <div className="about__education">
                <h4 className="about__education-title"  style={{fontFamily:"sans-serif", fontSize: '16px',
      lineHeight: '1.5',
      color: '#333',}}>Education Details : </h4>
                <p className="about__education-text" style={{fontFamily:"sans-serif", fontSize: '16px',
      lineHeight: '1.5',
      color: '#333',}}>
                  ➢ I am pursuing a Bachelor of Technology (B.Tech) with an aggregate of <strong>7.71</strong> from 
                  Potti Sri Ramulu Chaluvvadi Mallikarjun Rao College of Engineering and Technology, Vijayawada.<br />
                  ➢ I completed Intermediate with a CGPA of <strong>9.67</strong> from Sri Chaitanya Junior College, Guntur in the year 2020.<br />
                  ➢ I completed SSC with a CGPA of <strong>9.7</strong> from Geethanjali High School, Vinukonda in the year 2018.
                </p>
              </div>
              <div className="about__content-details">
                <p className="about__content-details-para">
                  Hey! It's <strong>Venkatarao Dama</strong> and I'm a <strong>JAVA Fullstack Developer</strong> located in Bangalore.
                </p>
              </div>
              <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr"><Link to="/contact">Contact</Link></a>
            </div>
            <div className="about__content-skills">
              <h3 className="about__content-title">My Skills</h3>
              <div className="skills">
                <div className="skills__skill">HTML5</div>
                <div className="skills__skill">CSS</div>
                <div className="skills__skill">JavaScript</div>
                <div className="skills__skill">React</div>
                <div className="skills__skill">CORE JAVA</div>
                <div className="skills__skill">GIT</div>
                <div className="skills__skill">JDBC</div>
                <div className="skills__skill">Spring Boot</div>
                <div className="skills__skill">Bootstrap</div>
                <div className="skills__skill">C</div>
                <div className="skills__skill">MYSQL</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
