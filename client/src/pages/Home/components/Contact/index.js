import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RevealUp from "../../../../components/RevealUp";
import "./style.css";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="contact small">
            <RevealUp>
                <h2>
                    {t("main.contact.title")}
                </h2>
            </RevealUp>
            <RevealUp>
                <ul>
                    <li>
                        <Link to="https://github.com/EdvinLjungqvist" target="_blank">
                            GitHub
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.instagram.com/edvin.ljungqvist" target="_blank">
                            Instagram
                        </Link>
                    </li>
                    <li>
                        <Link to="www.linkedin.com/in/edvin-ljungqvist-02603630b" target="_blank">
                            LinkedIn
                        </Link>
                    </li>
                </ul>
            </RevealUp>
        </section>
    );
};

export default Contact;