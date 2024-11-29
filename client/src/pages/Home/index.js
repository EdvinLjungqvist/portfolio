import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";
import { Helmet } from "react-helmet-async";
import "./style.css";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>
                    Portfolio | Edvin Ljungqvist
                </title>
            </Helmet>
            <About />
            <Experience />
            <Timeline />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;