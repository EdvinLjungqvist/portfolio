import { Link } from "react-router-dom";
import open90gQ from "../../../../assets/images/90gqopen.png"
import ragnarok from "../../../../assets/images/ragnarok.png"
import humanPerformanceTester from "../../../../assets/images/human_performance_tester.png"
import magnetism from "../../../../assets/images/magnetism.png"
import othello from "../../../../assets/images/othello.png"
import quizGame from "../../../../assets/images/quiz_game.png"
import Reveal from "../../../../components/Reveal";
import "./style.css";

const Portfolio = () => {
    return (
        <Reveal>
            <section id="portfolio" className="portfolio full">
                <Reveal className="portfolio-title">
                    <h2 className="text-center">
                        Portfolio
                    </h2>
                    <p className="text-center">
                        Here are some of my projects
                    </p>
                </Reveal>
                <div className="portfolio-grid">
                    <Reveal className="portfolio-cell">
                        <img src={open90gQ} className="portfolio-image" />
                        <div className="portfolio-content">
                            <h3>
                                90gQopen Website
                            </h3>
                            <p className="portfolio-description">
                                A website for a Minecraft server called 90gQopen
                            </p>
                            <Link to="https://90gqopen.se" target="_blank" className="portfolio-button">
                                Visit website <i className="fa-solid fa-arrow-right" />
                            </Link>
                        </div>
                    </Reveal>
                    <Reveal className="portfolio-cell">
                        <img src={ragnarok} className="portfolio-image" />
                        <div className="portfolio-content">
                            <h3>
                                Ragnarök Website
                            </h3>
                            <p className="portfolio-description">
                                A website for a Minecraft SMP called Ragnarök
                            </p>
                            <Link to="https://ragnarok.se" target="_blank" className="portfolio-button">
                                Visit website <i className="fa-solid fa-arrow-right" />
                            </Link>
                        </div>
                    </Reveal>
                    <Reveal className="portfolio-cell">
                        <img src={humanPerformanceTester} className="portfolio-image" />
                        <div className="portfolio-content">
                            <h3>
                                Human Performance Tester
                            </h3>
                            <p className="portfolio-description">
                                A website that measures performance in various tests.
                            </p>
                            <Link to="/" target="_blank" className="portfolio-button">
                                Visit website <i className="fa-solid fa-arrow-right" />
                            </Link>
                        </div>
                    </Reveal>
                    <Reveal className="portfolio-cell">
                        <img src={magnetism} className="portfolio-image" />
                        <div className="portfolio-content">
                            <h3>
                                Magnetism Minigame
                            </h3>
                            <p className="portfolio-description">
                                A 2D Minigame created in Vanilla Minecraft
                            </p>
                            <Link to="/" target="_blank" className="portfolio-button">
                                Visit on GitHub <i className="fa-solid fa-arrow-right" />
                            </Link>
                        </div>
                    </Reveal>
                    <Reveal className="portfolio-cell">
                        <img src={othello} className="portfolio-image" />
                        <div className="portfolio-content">
                            <h3>
                                Othello Game
                            </h3>
                            <p className="portfolio-description">
                                An Othello game with AI and customizable grid
                            </p>
                            <Link to="/" target="_blank" className="portfolio-button">
                                Visit on GitHub <i className="fa-solid fa-arrow-right" />
                            </Link>
                        </div>
                    </Reveal>
                    <Reveal className="portfolio-cell">
                        <img src={quizGame} className="portfolio-image" />
                        <div className="portfolio-content">
                            <h3>
                                Quiz Game
                            </h3>
                            <p className="portfolio-description">
                                A multiplayer quiz-game
                            </p>
                            <Link to="/" target="_blank" className="portfolio-button">
                                Visit on GitHub <i className="fa-solid fa-arrow-right" />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </Reveal>
    );
};

export default Portfolio;