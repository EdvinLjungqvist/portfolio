import { NavHashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../hooks/ThemeProvider";
import "./style.css";

const Header = () => {
    const [navListActive, setNavListActive] = useState(false);
    const [languageListActive, setLanguageListActive] = useState(false);
    const { lightTheme, setLightTheme } = useTheme();
    const { t, i18n } = useTranslation();

    const toggleLightTheme = () => setLightTheme(!lightTheme);

    const toggleNavListActive = () => {
        setListsInactive();
        setNavListActive(!navListActive);
    };

    const toggleLanguageListActive = () => {
        setListsInactive();
        setLanguageListActive(!languageListActive);
    };

    const setListsInactive = () => {
        setNavListActive(false);
        setLanguageListActive(false);
    };

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setLanguageListActive(false);
    };

    const languages = ["sv", "en"];

    useEffect(() => {
        const handleClick = (e) => {
            const navList = document.querySelector(".nav-list");
            const languageList = document.querySelector(".language-selector-dropdown");
            const hamburgerButton = document.querySelector(".hamburger");
            const languageButton = document.querySelector(".language-selector > .nav-button");

            if (
                !navList?.contains(e.target) &&
                !languageList?.contains(e.target) &&
                !hamburgerButton?.contains(e.target) &&
                !languageButton?.contains(e.target)
            ) {
                setListsInactive();
            }
        };
        document.body.addEventListener("click", handleClick);

        return () => {
            document.body.removeEventListener("click", handleClick);
        };
    }, []);
    
    return (
        <header>
            <nav>
                <NavHashLink to="#" className="name">
                    Portfolio
                </NavHashLink>
                <div className="nav-right">
                    <ul className={`nav-list ${navListActive ? "active" : ""}`}>
                        <li className="nav-item">
                            <NavHashLink to="#about" className="nav-link" onClick={setListsInactive}>
                                {t("header.navigation.about")}
                            </NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink to="#experience" className="nav-link" onClick={setListsInactive}>
                                {t("header.navigation.experience")}
                            </NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink to="#timeline" className="nav-link" onClick={setListsInactive}>
                                {t("header.navigation.timeline")}
                            </NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink to="#projects" className="nav-link" onClick={setListsInactive}>
                                {t("header.navigation.projects")}
                            </NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink to="#contact" className="nav-link" onClick={setListsInactive}>
                                {t("header.navigation.contact")}
                            </NavHashLink>
                        </li>
                    </ul>
                    <button className="nav-button" onClick={toggleLightTheme}>
                        <i className="fa-solid fa-circle-half-stroke fa-lg" />
                    </button>
                    <div className="language-selector">
                        <button className="nav-button" onClick={toggleLanguageListActive}>
                            <i className="fa-solid fa-globe fa-lg" />
                        </button>
                        <ul className={`language-selector-dropdown ${languageListActive ? "active" : ""}`}>
                            {languages.map(language => (
                                <li key={language} className="language-selector-item">
                                    <button onClick={() => changeLanguage(language)} className={`language-selector-button ${language == i18n.language ? "active" : ""}`}>
                                        {t("language", { lng: language })}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className="nav-button hamburger" onClick={toggleNavListActive}>
                        <i className={`fa-solid ${navListActive ? "fa-xmark" : "fa-bars"} fa-lg`} />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;