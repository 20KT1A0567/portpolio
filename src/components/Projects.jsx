import React from 'react';
import kfclogo from '../components/Images/png/Screenshot 2024-08-22 231412.png';
import Netflix from '../components/Images/png/Screenshot 2024-11-10 172703.png';
import weatherlogo from '../components/Images/png/Screenshot 2024-11-21 142224.png';
import ecommerce from '../components/Images/png/Screenshot 2025-02-08 205549.png'
const Projects = () => {
  return (
    <section className="project_container" id="project">
      <div className="projectnew">
        <div className="project">
          <h2>PROJECT-1</h2>
          <img src={ecommerce} alt="Netflix Clone" />
          <h3><b>Title: Ecommerce Website</b></h3>
          <p>
            I developed a Ecommerce Website using the Java Fullstack, showcasing my expertise in creating dynamic, responsive web applications.
          </p>
          <a href="https://github.com/20KT1A0567?tab=repositories" className="github-link">
            GitHub Link <i className="fa-brands fa-github"></i>
          </a>
        </div>

        <div className="project">
          <h2>PROJECT-2</h2>
          <img src={Netflix} alt="Netflix Clone" />
          <h3><b>Title: Netflix Clone</b></h3>
          <p>
            I developed a Netflix clone using the MERN stack, showcasing my expertise in creating dynamic, responsive web applications.
          </p>
          <a href="https://github.com/20KT1A0567" className="github-link">
            GitHub Link <i className="fa-brands fa-github"></i>
          </a>
        </div>

        <div className="project">
          <h2>PROJECT-3</h2>
          <img src={weatherlogo} alt="Weather App" />
          <h3><b>Title: Weather App</b></h3>
          <p>
            I created a weather app using HTML, CSS, and JavaScript that delivers real-time weather updates with a clean and intuitive user interface.
          </p>
          <a href="https://github.com/20KT1A0567" className="github-link">
            GitHub Link <i className="fa-brands fa-github"></i>
          </a>
        </div>

        <div className="project">
          <h2>PROJECT-4</h2>
          <img src={kfclogo} alt="KFC Website" />
          <h3><b>Title: KFC</b></h3>
          <p>
            You can explore KFC's official website at kfc.com to find their menu, order online, and locate nearby restaurants.
          </p>
          <a href="https://github.com/20KT1A0567" className="github-link">
            GitHub Link <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;