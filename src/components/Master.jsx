import Home from "./Home.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import { Link } from "react-router-dom";
const Master = ()=>{
return(
    <>
        <Link to="/"></Link>
        <div>
            <Home></Home>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            
        </div>
    </>
)
}
export default Master;