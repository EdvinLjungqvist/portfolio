import image from "../../../../assets/images/me.png"
import Reveal from "../../../../components/Reveal";
import "./style.css";

const About = () => {
    return (
        <Reveal>
            <section id="about" className="about small top">
                <img src={image} className="about-image" />
                <div className="about-content">
                    <h2>
                        Edvin Ljungqvist
                    </h2>
                    <p className="about-location">
                        <i className="fa-solid fa-location-dot" /> Stockholm, Sweden
                    </p>
                    <p>
                        I'm an 18-year-old full-stack web developer with 5 years of programming experience.
                    </p>
                </div>
            </section>
        </Reveal>
    );
};

export default About;