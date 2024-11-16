import Reveal from "../../../../components/Reveal";
import "./style.css";

const Competencies = () => {
    return (
        <>
            <section id="competencies" className="competencies full">
                <Reveal>
                    <h2>
                        What I work with
                    </h2>
                </Reveal>
                <div className="competencies-grid">
                    <Reveal className="competencies-cell">
                        <h3>
                            <i className="fa-brands fa-js" /> JavaScript
                        </h3>
                        <ul>
                            <li className="competencies-item">
                                React
                            </li>
                            <li className="competencies-item">
                                Node.js
                            </li>
                            <li className="competencies-item">
                                Express.js
                            </li>
                        </ul>
                    </Reveal>
                    <Reveal className="competencies-cell">
                        <h3>
                            <i className="fa-brands fa-python" /> Python
                        </h3>
                        <ul>
                            <li className="competencies-item">
                                Flask
                            </li>
                        </ul>
                    </Reveal>
                    <Reveal className="competencies-cell">
                        <h3>
                            <i className="fa-solid fa-database" /> SQL
                        </h3>
                        <ul>
                            <li className="competencies-item">
                                MySQL
                            </li>
                            <li className="competencies-item">
                                SQLite
                            </li>
                        </ul>
                    </Reveal>
                    <Reveal className="competencies-cell">
                        <h3>
                            <i className="fa-brands fa-java" /> Java
                        </h3>
                        <ul>
                            <li>
                                PaperMC
                            </li>
                        </ul>
                    </Reveal>
                    <Reveal className="competencies-cell">
                        <h3>
                            <i className="fa-brands fa-android" /> Kotlin
                        </h3>
                        <ul>
                            <li className="competencies-item">
                                Jetpack Compose
                            </li>
                        </ul>
                    </Reveal>
                    <Reveal className="competencies-cell">
                        <h3>
                            <i className="fa-brands fa-github" /> GitHub
                        </h3>
                    </Reveal>
                </div>
            </section>
        </>
    );
};

export default Competencies;