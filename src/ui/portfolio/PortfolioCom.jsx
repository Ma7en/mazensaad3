// import { FaChevronRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { aboutus as aboutusVar } from "../../utils/vars";
// import Heading from "../global/Heading";
// import { useAboutUs } from "../../features/aboutus/useAboutUs";
// import Spinner from "../spinner/Spinner";
// import Picture from "../pictures/Picture";
// import Empty from "../error/Empty";

function PortfolioCom() {
    // const { title, summary } = aboutusVar;
    // const { isLoading, aboutus } = useAboutUs();

    // // console.log(`a`, aboutus[0].image);
    // // console.log(`a===`, aboutus);

    // if (isLoading) return <Spinner />;
    // if (!aboutus) return <Empty resourceName="aboutus" />;

    return (
        <>
            <section className="portfolio section" id="portfolio">
                <div className="container">
                    <h2 className="section-title padd-15">portfolio</h2>
                    <div className="row">
                        <div className="portfolio-filter padd-15">
                            <div className="portfolio-filter-inner">
                                <button className="active" data-filter="all">
                                    everything
                                </button>
                                <button data-filter="art">art</button>
                                <button data-filter="creative">creative</button>
                                <button data-filter="design">design</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="portfolio-item padd-15"
                            data-category="art"
                        >
                            <div className="portfolio-item-inner">
                                <div className="portfolio-item-thumbnail">
                                    <img
                                        src="images/portfolio/1.svg"
                                        alt="portfolio"
                                    />
                                    <div className="mask" />
                                </div>
                                <span className="term"> art , design </span>
                                <h3 className="portfolio-item-title">
                                    project management illustration
                                </h3>
                                <span className="more-button"> … </span>
                            </div>
                        </div>
                        <div
                            className="portfolio-item padd-15"
                            data-category="creative"
                        >
                            <div className="portfolio-item-inner">
                                <div className="portfolio-item-thumbnail">
                                    <img
                                        src="images/portfolio/2.svg"
                                        alt="portfolio"
                                    />
                                    <div className="mask" />
                                </div>
                                <span className="term"> creative </span>
                                <h3 className="portfolio-item-title">
                                    onboaeding motivation
                                </h3>
                                <span className="more-button"> … </span>
                            </div>
                        </div>
                        <div
                            className="portfolio-item padd-15"
                            data-category="design"
                        >
                            <div className="portfolio-item-inner">
                                <div className="portfolio-item-thumbnail">
                                    <img
                                        src="images/portfolio/3.svg"
                                        alt="portfolio"
                                    />
                                    <div className="mask" />
                                </div>
                                <span className="term"> art , design </span>
                                <h3 className="portfolio-item-title">
                                    iMac mockuo design
                                </h3>
                                <span className="more-button"> … </span>
                            </div>
                        </div>
                        <div
                            className="portfolio-item padd-15"
                            data-category="creative"
                        >
                            <div className="portfolio-item-inner">
                                <div className="portfolio-item-thumbnail">
                                    <img
                                        src="images/portfolio/4.svg"
                                        alt="portfolio"
                                    />
                                    <div className="mask" />
                                </div>
                                <span className="term"> creative </span>
                                <h3 className="portfolio-item-title">
                                    game store app concept
                                </h3>
                                <span className="more-button"> … </span>
                            </div>
                        </div>
                        <div
                            className="portfolio-item padd-15"
                            data-category="art"
                        >
                            <div className="portfolio-item-inner">
                                <div className="portfolio-item-thumbnail">
                                    <img
                                        src="images/portfolio/5.svg"
                                        alt="portfolio"
                                    />
                                    <div className="mask" />
                                </div>
                                <span className="term"> creative </span>
                                <h3 className="portfolio-item-title">
                                    guest app walkthrough screens
                                </h3>
                                <span className="more-button"> … </span>
                            </div>
                        </div>
                        <div
                            className="portfolio-item padd-15"
                            data-category="creative"
                        >
                            <div className="portfolio-item-inner">
                                <div className="portfolio-item-thumbnail">
                                    <img
                                        src="images/portfolio/6.svg"
                                        alt="portfolio"
                                    />
                                    <div className="mask" />
                                </div>
                                <span className="term"> design </span>
                                <h3 className="portfolio-item-title">
                                    delivery app wireframe
                                </h3>
                                <span className="more-button"> … </span>
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

export default PortfolioCom;
