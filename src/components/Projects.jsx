import kfclogo from '../components/Images/png/Screenshot 2024-08-22 231412.png';
import Netflix from '../components/Images/png/Screenshot 2024-11-10 172703.png';
import weatherlogo from '../components/Images/png/Screenshot 2024-11-21 142224.png';
const Projects = () => {
    return (
      <>
        <section className="project_container" id="project" style={{paddingTop:100}}>
          <div className="projectnew">
            <div className="project1">
            <h1></h1>
              <p style={{ fontSize: "35px", paddingLeft: "90px" }} id='p1'>
                <b>Project-1</b>
              </p>
              <img
                src={Netflix}
                height="250px"
                width="300px"
                alt="Netflix Clone"
              />
              <p style={{ fontSize: "20px", paddingLeft: "100px" }} id='p1'>
                <b>Title : Netflix Clone</b>
              </p>
              <p style={{ fontSize: "15px", textAlign: "justify", padding: "15px" }}>
                I developed a Netflix clone using the MERN stack, showcasing my expertise in creating dynamic, responsive web applications. This project features a sleek user interface for browsing and searching movies and TV shows, real-time video streaming capabilities, and secure user authentication with JWT. Leveraging MongoDB for data management, I implemented features like personalized watchlists and user preferences. 
              </p>
              <p style={{ fontSize: "15px", fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", paddingLeft: "170px", paddingTop: "1px" }}>
                GitHub Link: <a href="https://github.com/20KT1A0567"><i className="fa-brands fa-github"></i></a>
              </p>
            </div>
            <div className="project2">
              <p style={{ fontSize: "35px", paddingLeft: "90px" }} id='p1'>
                <b>Project-2</b>
              </p>
              <img
                src={weatherlogo}
                height="250px"
                width="300px"
                alt="Weather App"
              />
              <p style={{ fontSize: "20px", paddingLeft: "100px" }} id='p1p'>
                <b>Title : Weather App</b>
              </p>
              <p style={{ fontSize: "15px", textAlign: "justify", padding: "15px" }}>
                I created a weather app using HTML, CSS, and JavaScript that delivers real-time weather updates with a clean and intuitive user interface. The app allows users to search for weather conditions by city, displaying details like temperature, humidity, and weather descriptions. It features responsive design for seamless use on any device, along with dynamic weather icons that enhance the visual experience. 
              </p>
              <p style={{ fontSize: "15px", fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", paddingLeft: "170px", paddingTop: "21px" }}>
                GitHub Link: <a href="https://github.com/20KT1A0567"><i className="fa-brands fa-github"></i></a>
              </p>
            </div>
  
            <div className="project3">
              <p style={{ fontSize: "35px", paddingLeft: "90px" }} id='p1'>
                <b>Project-3</b>
              </p>
              <img
                src={kfclogo}
                height="250px"
                width="300px"
                alt="KFC Website"
              />
              <p style={{ fontSize: "20px", paddingLeft: "100px" }} id='p1'>
                <b>Title : KFC</b>
              </p>
              <p style={{ fontSize: "15px", textAlign: "justify", padding: "15px" }}>
                You can explore KFC's official website at kfc.com to find their menu, order online, and locate nearby restaurants. The website showcases various menu items like fried chicken, sandwiches, and sides. You can also learn about the brand's history, global impact, and even career opportunities.
              </p>
              <p style={{ fontSize: "15px", fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", paddingLeft: "170px", paddingTop: "85px" }}>
                GitHub Link: <a href="https://github.com/20KT1A0567"><i className="fa-brands fa-github"></i></a>
              </p>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Projects;
  