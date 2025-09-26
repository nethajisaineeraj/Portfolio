import Banner from "../Banner";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Certificates from "../Certificates";
import "./index.css";
import Workshops from "../Workshops";
import ContactMe from "../ContactMe";


const Home = () => {
    return (
        <div className="home-container">
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Certificates />
            <Workshops />
            <ContactMe />
        </div>
    )
}

export default Home;