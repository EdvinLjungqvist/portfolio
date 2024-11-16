import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
    return (
        <footer>
            <p>
                Edvin Ljungqvist © {new Date().getFullYear()}
            </p>
            <div className="footer-links">
                <Link className="footer-link">
                    <i className="fa-brands fa-github" />
                </Link>
                <Link className="footer-link">
                    <i className="fa-brands fa-instagram" />
                </Link>
                <Link className="footer-link">
                    <i className="fa-brands fa-linkedin" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;