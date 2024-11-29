import { useTranslation } from "react-i18next";
import RevealUp from "../../../../components/RevealUp";
import "./style.css";

const Experience = () => {
    const { t } = useTranslation();

    return (
        <>
            <section id="experience" className="experience full">
                <RevealUp>
                    <h2>
                        {t("main.experience.title")}
                    </h2>
                </RevealUp>
                <div className="experience-grid">
                    <RevealUp className="experience-cell">
                        <h3>
                            <i className="fa-brands fa-js" /> JavaScript
                        </h3>
                        <ul>
                            <li className="experience-item">
                                React
                            </li>
                            <li className="experience-item">
                                Node.js
                            </li>
                            <li className="experience-item">
                                Express.js
                            </li>
                        </ul>
                    </RevealUp>
                    <RevealUp className="experience-cell">
                        <h3>
                            <i className="fa-brands fa-python" /> Python
                        </h3>
                        <ul>
                            <li className="experience-item">
                                Flask
                            </li>
                        </ul>
                    </RevealUp>
                    <RevealUp className="experience-cell">
                        <h3>
                            <i className="fa-solid fa-database" /> SQL
                        </h3>
                        <ul>
                            <li className="experience-item">
                                MySQL
                            </li>
                            <li className="experience-item">
                                SQLite
                            </li>
                        </ul>
                    </RevealUp>
                    <RevealUp className="experience-cell">
                        <h3>
                            <i className="fa-brands fa-java" /> Java
                        </h3>
                        <ul>
                            <li>
                                PaperMC
                            </li>
                        </ul>
                    </RevealUp>
                    <RevealUp className="experience-cell">
                        <h3>
                            <i className="fa-brands fa-android" /> Kotlin
                        </h3>
                        <ul>
                            <li className="experience-item">
                                Jetpack Compose
                            </li>
                        </ul>
                    </RevealUp>
                    <RevealUp className="experience-cell">
                        <h3>
                            <i className="fa-brands fa-github" /> GitHub
                        </h3>
                    </RevealUp>
                </div>
            </section>
        </>
    );
};

export default Experience;