import { useTranslation } from "react-i18next";
import "./style.css";
import RevealRight from "../../../../components/RevealRight";
import RevealLeft from "../../../../components/RevealLeft";

const Timeline = () => {
    const { t } = useTranslation()

    return (
        <>
            <section id="timeline" className="timeline">
                <h2 className="text-center">
                    {t("main.timeline.title")}
                </h2>
                <div className="timeline-grid">
                    <span className="timeline-line" />
                    <RevealRight className="timeline-cell">
                        <p className="timeline-period">
                            2021 - 2024
                        </p>
                        <h3>
                            {t("main.timeline.field")}
                        </h3>
                        <ul>
                            <li>
                                {t("main.timeline.webServerProgramming")}
                            </li>
                            <li>
                                {t("main.timeline.webDevelopment")}
                            </li>
                            <li>
                                {t("main.timeline.programming1")}
                            </li>
                            <li>
                                {t("main.timeline.programming2")}
                            </li>
                            <li>
                                {t("main.timeline.appDevelopment")}
                            </li>
                            <li>
                                {t("main.timeline.computerAndNetworkTechnology")}
                            </li>
                        </ul>
                    </RevealRight>
                    <div className="timeline-circle-wrapper">
                        <div className="timeline-circle" />
                    </div>
                    <div className="timeline-circle-wrapper">
                        <div className="timeline-circle" />
                    </div>
                    <RevealLeft className="timeline-cell">
                    <p className="timeline-period">
                            2021 - 2024
                        </p>
                        <h3>
                            {t("main.timeline.field")}
                        </h3>
                        <ul>
                            <li>
                                {t("main.timeline.webServerProgramming")}
                            </li>
                            <li>
                                {t("main.timeline.webDevelopment")}
                            </li>
                            <li>
                                {t("main.timeline.programming1")}
                            </li>
                            <li>
                                {t("main.timeline.programming2")}
                            </li>
                            <li>
                                {t("main.timeline.appDevelopment")}
                            </li>
                            <li>
                                {t("main.timeline.computerAndNetworkTechnology")}
                            </li>
                        </ul>
                    </RevealLeft>
                    <RevealRight className="timeline-cell">
                        <p className="timeline-period">
                            2021 - 2024
                        </p>
                        <h3>
                            {t("main.timeline.field")}
                        </h3>
                        <ul>
                            <li>
                                {t("main.timeline.webServerProgramming")}
                            </li>
                            <li>
                                {t("main.timeline.webDevelopment")}
                            </li>
                            <li>
                                {t("main.timeline.programming1")}
                            </li>
                            <li>
                                {t("main.timeline.programming2")}
                            </li>
                            <li>
                                {t("main.timeline.appDevelopment")}
                            </li>
                            <li>
                                {t("main.timeline.computerAndNetworkTechnology")}
                            </li>
                        </ul>
                    </RevealRight>
                    <div className="timeline-circle-wrapper">
                        <div className="timeline-circle" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Timeline;