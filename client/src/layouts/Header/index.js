import { NavHashLink } from "react-router-hash-link";
import { useState } from "react";
import "./style.css";

const Header = () => {
    const [navListActive, setNavListActive] = useState(false);

    const toggleNavListActive = () => setNavListActive(!navListActive);

    const setNavListInactive = () => setNavListActive(false);

    return (
        <header>
            <nav>
                <NavHashLink to="#" className="name" onClick={setNavListInactive}>
                    Edvin Ljungqvist
                </NavHashLink>
                <div className="nav-right">
                    <ul className={`nav-list ${navListActive ? "active" : ""}`}>
                        <li className="nav-item">
                            <NavHashLink to="#about" className="nav-link" onClick={setNavListInactive}>
                                About
                            </NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink to="#competencies" className="nav-link" onClick={setNavListInactive}>
                                Competencies
                            </NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink to="#portfolio" className="nav-link" onClick={setNavListInactive}>
                                Portfolio
                            </NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink to="#contact" className="nav-link" onClick={setNavListInactive}>
                                Contact
                            </NavHashLink>
                        </li>
                    </ul>
                    <button className="nav-button">
                        <i className="fa-solid fa-circle-half-stroke fa-lg" />
                    </button>
                    <button className="nav-button">
                        <i className="fa-solid fa-globe fa-lg" />
                    </button>
                    <button className="nav-button hamburger" onClick={toggleNavListActive}>
                        <i className={`fa-solid ${navListActive ? "fa-xmark" : "fa-bars"} fa-lg`} />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;