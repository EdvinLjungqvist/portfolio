import { Link } from "react-router-dom";
import "./style.css";
import Reveal from "../../../../components/Reveal";

const Contact = () => {
    return (
        <section id="contact" className="contact small">
            <Reveal>
                <h2>
                    Contact me
                </h2>
            </Reveal>
            <Reveal>
                <ul>
                    <li>
                        <Link>
                            <i className="fa-brands fa-github" /> GitHub
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <i className="fa-brands fa-instagram" /> Instagram
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <i className="fa-brands fa-linkedin" /> LinkedIn
                        </Link>
                    </li>
                </ul>
            </Reveal>
        </section>
    );
};

export default Contact;