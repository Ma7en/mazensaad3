/* eslint-disable react/no-unescaped-entities */
// import { FaChevronRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { aboutus as aboutusVar } from "../../utils/vars";
// import Heading from "../global/Heading";
// import { useAboutUs } from "../../features/aboutus/useAboutUs";
// import Spinner from "../spinner/Spinner";
// import Picture from "../pictures/Picture";
// import Empty from "../error/Empty";

import { FaBriefcase, FaCalendarDay, FaGraduationCap } from "react-icons/fa";

function ExperienceCom() {
    // const { title, summary } = aboutusVar;
    // const { isLoading, aboutus } = useAboutUs();

    // // console.log(`a`, aboutus[0].image);
    // // console.log(`a===`, aboutus);

    // if (isLoading) return <Spinner />;
    // if (!aboutus) return <Empty resourceName="aboutus" />;

    return (
        <>
            <section className="exp section" id="experience">
                <div className="container">
                    <h2 className="section-title padd-15">experience</h2>
                    <div className="row">
                        <div className="education padd-15">
                            <div className="row">
                                <div className="timeline-box">
                                    <div className="timeline">
                                        <div className="timeline-item">
                                            <FaGraduationCap />
                                            <h3 className="timeline-date">
                                                <FaCalendarDay />
                                                2022 - present
                                            </h3>
                                            <h3 className="timeline-title">
                                                academic degree
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Dolorem a doloribus laboriosam
                                                debitis maiores?
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            {/* <i className="lni lni-graduation timeline- icon" />  */}
                                            <FaCalendarDay />
                                            <h3 className="timeline-date">
                                                <FaCalendarDay />
                                                2022 - 2020
                                            </h3>
                                            <h3 className="timeline-title">
                                                bachelor's degree
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Dolorem a doloribus laboriosam
                                                debitis maiores?
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <FaGraduationCap />
                                            <h3 className="timeline-date">
                                                <FaCalendarDay />
                                                2020 - 2019
                                            </h3>
                                            <h3 className="timeline-title">
                                                honours degree
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Dolorem a doloribus laboriosam
                                                debitis maiores?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="experience padd-15">
                            <div className="row">
                                <div className="timeline-box">
                                    <div className="timeline">
                                        <div className="timeline-item">
                                            <FaBriefcase />
                                            <h3 className="timeline-date">
                                                <FaCalendarDay />
                                                2022 - present
                                            </h3>
                                            <h3 className="timeline-title">
                                                javascript full
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Dolorem a doloribus laboriosam
                                                debitis maiores?
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <FaBriefcase />
                                            <h3 className="timeline-date">
                                                <FaCalendarDay />
                                                2022 - 2020
                                            </h3>
                                            <h3 className="timeline-title">
                                                web designer
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Dolorem a doloribus laboriosam
                                                debitis maiores?
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <FaBriefcase />
                                            <h3 className="timeline-date">
                                                <FaCalendarDay />
                                                2020 - 2019
                                            </h3>
                                            <h3 className="timeline-title">
                                                front-end Developer
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Dolorem a doloribus laboriosam
                                                debitis maiores?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="about" id="about">
                <div className="container">
                    <Heading as="h2">
                        <span>about</span>
                        us
                    </Heading>

                    {aboutus.map((about) => (
                        <div className="row" key={about.id}>
                            <Picture
                                src={"images/about/about-img.svg"}
                                alt={about.image.alt}
                                caption={about.image.caption}
                            />

                            <div className="content">
                                <Heading as="h3">
                                    {about.title || title}
                                </Heading>
                                <p>{about.summary || summary}</p>

                                <Link to="/aboutus" className="btn">
                                    <span>learn more</span>
                                    <FaChevronRight />
                                </Link>
                            </div>
                        </div>
                    ))}

 
                </div>
            </section>
            <div className="spikes" /> */}
        </>
    );
}

export default ExperienceCom;
