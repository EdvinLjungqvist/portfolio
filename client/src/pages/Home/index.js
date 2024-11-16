import About from "./components/About";
import Competencies from "./components/Competencies";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Helmet } from "react-helmet-async";
import "./style.css";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>
                    Edvin Ljungqvst
                </title>
            </Helmet>
            <About />
            <Competencies />
            <Portfolio />
            <Contact />
        </>
    );
};

export default Home;