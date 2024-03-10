/* eslint-disable react/no-unescaped-entities */
// import { useNavigate } from "react-router-dom";
// import { FaChevronRight } from "react-icons/fa";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

// import Heading from "../global/Heading";
// import Button from "../global/Button";

function Landing() {
    // const navigate = useNavigate();
    return (
        <>
            <section className="landing section" id="landing">
                <div className="container">
                    <div className="intro">
                        <img src="images/avatar/avatar-1.svg" alt="mazen" />

                        <h1>mazen saad</h1>

                        <span>
                            i'm a
                            <span className="info-text">
                                front-end Web Developer
                            </span>
                        </span>

                        <ul className="social-icons">
                            <li>
                                <a href="#" target="_blank">
                                    <FaFacebook />
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <FaYoutube />
                                </a>
                            </li>
                        </ul>

                        <div>
                            <a href="#contact" className="btn btn-default">
                                hire me
                            </a>
                        </div>

                        <div className="scroll-down">
                            <a href="#about" className="mouse-wrapper">
                                <span> scroll down </span>
                                <span className="mouse">
                                    <span className="wheel"> </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="landing" id="landing">
                <div className="container">
                    <div className="image">
                        <img src="/images/home/home-img.svg" alt="home" />
                    </div>

                    <div className="content">
                        <Heading as="h3">stay safe, stay healthy</Heading>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rem sed autem vero? Magnam, est laboriosam!
                        </p>

       
                        <Button
                            to="/book"
                            // className="btn"
                            onClick={() => navigate("/book")}
                        >
                            <span>contact us</span> 
                            <FaChevronRight />
                        </Button>
                    </div>
                </div>
            </section>
            <div className="spikes" /> */}
        </>
    );
}

export default Landing;
