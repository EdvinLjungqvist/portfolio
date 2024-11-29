import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import image from "../../../../assets/images/me.png"
import RevealUp from "../../../../components/RevealUp";
import "./style.css";

const About = () => {
    const { t } = useTranslation();

    return (
        <RevealUp>
            <section id="about" className="about small top">
                <img src={image} className="about-image" />
                <div className="about-content">
                    <h2>
                        Edvin Ljungqvist
                    </h2>
                    <p className="about-location">
                        <i className="fa-solid fa-location-dot" /> {t("main.about.location")}
                    </p>
                    <p>
                        {t("main.about.description")}
                    </p>
                    <div className="about-links">
                        <Link to="https://github.com/EdvinLjungqvist" target="_blank" className="about-link">
                            <i className="fa-brands fa-github" />
                        </Link>
                        <Link to="https://www.instagram.com/edvin.ljungqvist" target="_blank" className="about-link">
                            <i className="fa-brands fa-instagram" />
                        </Link>
                        <Link to="www.linkedin.com/in/edvin-ljungqvist-02603630b" target="_blank" className="about-link">
                            <i className="fa-brands fa-linkedin" />
                        </Link>
                    </div>
                </div>
            </section>
        </RevealUp>
    );
};

export default About;