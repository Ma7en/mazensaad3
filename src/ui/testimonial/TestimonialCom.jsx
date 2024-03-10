// import { FaChevronRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { aboutus as aboutusVar } from "../../utils/vars";
// import Heading from "../global/Heading";
// import { useAboutUs } from "../../features/aboutus/useAboutUs";
// import Spinner from "../spinner/Spinner";
// import Picture from "../pictures/Picture";
// import Empty from "../error/Empty";

function TestimonialCom() {
    // const { title, summary } = aboutusVar;
    // const { isLoading, aboutus } = useAboutUs();

    // // console.log(`a`, aboutus[0].image);
    // // console.log(`a===`, aboutus);

    // if (isLoading) return <Spinner />;
    // if (!aboutus) return <Empty resourceName="aboutus" />;

    return (
        <>
            <section className="testimonial section">
                <div className="container">
                    <h2 className="section-title padd-15">
                        clients &amp; reviews
                    </h2>
                    <div className="swiper testimonial-wrapper">
                        <div className="swiper-wrapper">
                            <div className="testimonial-item swiper-slide">
                                <div className="thumb">
                                    <img
                                        src="images/avatar/avatar-3.svg"
                                        alt="avatar"
                                    />
                                </div>
                                <h3>john doe</h3>
                                <span className="subtitle">
                                    product designer at dribble
                                </span>
                                <div className="comment">
                                    I enjoy working with the theme and learn so
                                    much. You guys make the process fun and
                                    interesting. good luck! 👍
                                </div>
                            </div>
                            <div className="testimonial-item swiper-slide">
                                <div className="thumb">
                                    <img
                                        src="images/avatar/avatar-1.svg"
                                        alt="avatar"
                                    />
                                </div>
                                <h3>john doe</h3>
                                <span className="subtitle">
                                    product designer at dribble
                                </span>
                                <div className="comment">
                                    I enjoy working with the theme and learn so
                                    much. You guys make the process fun and
                                    interesting. good luck! 🔥
                                </div>
                            </div>
                            <div className="testimonial-item swiper-slide">
                                <div className="thumb">
                                    <img
                                        src="images/avatar/avatar-2.svg"
                                        alt="avatar"
                                    />
                                </div>
                                <h3>john doe</h3>
                                <span className="subtitle">
                                    product designer at dribble
                                </span>
                                <div className="comment">
                                    I enjoy working with the theme and learn so
                                    much. You guys make the process fun and
                                    interesting. good luck! 🌟
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination" />
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

export default TestimonialCom;
