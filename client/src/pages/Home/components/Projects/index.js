import { Link } from "react-router-dom";
import open90gQ from "../../../../assets/images/90gqopen.png"
// import ragnarok from "../../../../assets/images/ragnarok.png"
import humanPerformanceTester from "../../../../assets/images/human_performance_tester.png"
import magnetism from "../../../../assets/images/magnetism.png"
import othello from "../../../../assets/images/othello.png"
import quizGame from "../../../../assets/images/quiz_game.png"
import RevealUp from "../../../../components/RevealUp";
import { useTranslation } from "react-i18next";
import "./style.css";


const Projects = () => {
    const { t } = useTranslation();

    return (
        <RevealUp>
            <section id="projects" className="projects full">
                <RevealUp className="projects-hero">
                    <h2 className="text-center">
                        {t("main.projects.title")}
                    </h2>
                    <p className="text-center">
                        {t("main.projects.description")}
                    </p>
                </RevealUp>
                <div className="projects-grid">
                <RevealUp className="projects-cell">
                        <img src={open90gQ} className="projects-image" alt="90gQopen Website" />
                        <div className="projects-content">
                            <h3 className="projects-title">
                                90gQopen Website
                            </h3>
                            <p className="projects-description">
                                {t("main.projects.90gqopen.description")}
                            </p>
                            <Link to="https://90gqopen.se" target="_blank" className="projects-button">
                                {t("main.projects.90gqopen.button")} <i className="fa-solid fa-arrow-right" />
                            </Link>
                        </div>
                    </RevealUp>
                    {/* <RevealUp className="projects-cell">
                        <img src={ragnarok} className="projects-image" alt="Ragnarök Website" />
                        <div className="projects-content">
                            <h3 className="projects-title">
                                Ragnarök Website
                            </h3>
                            <p className="projects-description">
                                {t("main.projects.ragnarok.description")}
                            </p>
                            <Link to="https://ragnarok.se" target="_blank" className="projects-button">
                                {t("main.projects.ragnarok.button")} <i className="fa-solid fa-arrow-right" />
                            </Link>
                        </div>
                    </RevealUp> */}
                    <RevealUp className="projects-cell">
                        <img src={humanPerformanceTester} className="projects-image" alt="Human Performance Tester" />
                        <div className="projects-content">
                            <h3 className="projects-title">
                                Human Performance Tester
                            </h3>
                            <p className="projects-description">
                                {t("main.projects.humanPerformanceTester.description")}
                            </p>
                            <Link to="/" target="_blank" className="projects-button">
                                {t("main.projects.humanPerformanceTester.button")} <i className="fa-solid fa-arrow-right" />
                            </Link>
                        </div>
                    </RevealUp>
                    <RevealUp className="projects-cell">
                        <img src={magnetism} className="projects-image" alt="Magnetism Minigame" />
                        <div className="projects-content">
                            <h3 className="projects-title">
                                Magnetism Minigame
                            </h3>
                            <p className="projects-description">
                                {t("main.projects.magnetism.description")}
                            </p>
                            <Link to="/" target="_blank" className="projects-button">
                                {t("main.projects.magnetism.button")} <i className="fa-solid fa-arrow-right" />
                            </Link>
                        </div>
                    </RevealUp>
                    <RevealUp className="projects-cell">
                        <img src={othello} className="projects-image" alt="Othello Game" />
                        <div className="projects-content">
                            <h3 className="projects-title">
                                Othello Game
                            </h3>
                            <p className="projects-description">
                                {t("main.projects.othello.description")}
                            </p>
                            <Link to="/" target="_blank" className="projects-button">
                                {t("main.projects.othello.button")} <i className="fa-solid fa-arrow-right" />
                            </Link>
                        </div>
                    </RevealUp>
                    <RevealUp className="projects-cell">
                        <img src={quizGame} className="projects-image" alt="Quiz Game" />
                        <div className="projects-content">
                            <h3 className="projects-title">
                                Quiz Game
                            </h3>
                            <p className="projects-description">
                                {t("main.projects.quiz.description")}
                            </p>
                            <Link to="/" target="_blank" className="projects-button">
                                {t("main.projects.quiz.button")} <i className="fa-solid fa-arrow-right" />
                            </Link>
                        </div>
                    </RevealUp>
                </div>
            </section>
        </RevealUp>
    );
};

export default Projects;