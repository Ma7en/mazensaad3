// import { FaChevronRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { aboutus as aboutusVar } from "../../utils/vars";
// import Heading from "../global/Heading";
// import { useAboutUs } from "../../features/aboutus/useAboutUs";
// import Spinner from "../spinner/Spinner";
// import Picture from "../pictures/Picture";
// import Empty from "../error/Empty";

import { FaMugHot, FaRegThumbsUp, FaTrophy, FaUsers } from "react-icons/fa";

function AboutCom() {
    // const { title, summary } = aboutusVar;
    // const { isLoading, aboutus } = useAboutUs();

    // // console.log(`a`, aboutus[0].image);
    // // console.log(`a===`, aboutus);

    // if (isLoading) return <Spinner />;
    // if (!aboutus) return <Empty resourceName="aboutus" />;

    return (
        <>
            <section className="about section" id="about">
                <div className="container">
                    <h2 className="section-title padd-15">about me</h2>
                    <div className="row">
                        <div className="about-img padd-15">
                            <img
                                src="images/avatar/avatar-2.svg"
                                alt="avatar"
                            />
                        </div>
                        <div className="about-content padd-15">
                            <div className="rounded">
                                <div className="row">
                                    <div className="about-text padd-15">
                                        <p>
                                            I am Mazen Saad, web Developer from
                                            egypt. l have rich experience in web
                                            site desgin and building and
                                            customization, also I am not good at
                                            WordPress
                                        </p>
                                        <div>
                                            <a
                                                href="#"
                                                className="btn btn-default"
                                            >
                                                download CV
                                            </a>
                                        </div>
                                    </div>
                                    <div className="skills padd-15">
                                        <div className="row">
                                            <div className="skill-item">
                                                <h4>Development</h4>
                                                <div className="progress">
                                                    <div
                                                        className="progress-in"
                                                        style={{
                                                            width: "75%",
                                                            background:
                                                                "rgb( 225, 209,  92 )",
                                                        }}
                                                    />
                                                    <div className="skill-percent">
                                                        75%
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skill-item">
                                                <h4>photography</h4>
                                                <div className="progress">
                                                    <div
                                                        className="progress-in"
                                                        style={{
                                                            width: "25%",
                                                            background:
                                                                "rgb(225,76,96)",
                                                        }}
                                                    />
                                                    <div className="skill-percent">
                                                        25%
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="skill-item">
                                                <h4>UI/UX design</h4>
                                                <div className="progress">
                                                    <div
                                                        className="progress-in"
                                                        style={{
                                                            width: "25%",
                                                            background:
                                                                "rgb(  108,  108,   229)",
                                                        }}
                                                    />
                                                    <div className="skill-percent">
                                                        25%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="fact-item padd-15">
                            <FaRegThumbsUp />
                            <div className="details">
                                <h3>198</h3>
                                <p>Project done</p>
                            </div>
                        </div>
                        <div className="fact-item padd-15">
                            <FaMugHot />
                            <div className="details">
                                <h3>6798</h3>
                                <p>cup of coffee</p>
                            </div>
                        </div>
                        <div className="fact-item padd-15">
                            <FaUsers />
                            <div className="details">
                                <h3>428</h3>
                                <p>satisfied clients</p>
                            </div>
                        </div>
                        <div className="fact-item padd-15">
                            <FaTrophy />
                            <div className="details">
                                <h3>28</h3>
                                <p>mominiees winner</p>
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

export default AboutCom;
