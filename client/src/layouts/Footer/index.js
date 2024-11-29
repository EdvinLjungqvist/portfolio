import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
    return (
        <footer>
            <p>
                Edvin Ljungqvist © {new Date().getFullYear()}
            </p>
            <div className="footer-links">
                <Link to="https://github.com/EdvinLjungqvist" target="_blank" className="footer-link">
                    <i className="fa-brands fa-github" />
                </Link>
                <Link to="https://www.instagram.com/edvin.ljungqvist" target="_blank" className="footer-link">
                    <i className="fa-brands fa-instagram" />
                </Link>
                <Link to="www.linkedin.com/in/edvin-ljungqvist-02603630b" target="_blank" className="footer-link">
                    <i className="fa-brands fa-linkedin" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;