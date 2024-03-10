// import { FaChevronRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { aboutus as aboutusVar } from "../../utils/vars";
// import Heading from "../global/Heading";
// import { useAboutUs } from "../../features/aboutus/useAboutUs";
// import Spinner from "../spinner/Spinner";
// import Picture from "../pictures/Picture";
// import Empty from "../error/Empty";

function PricingCom() {
    // const { title, summary } = aboutusVar;
    // const { isLoading, aboutus } = useAboutUs();

    // // console.log(`a`, aboutus[0].image);
    // // console.log(`a===`, aboutus);

    // if (isLoading) return <Spinner />;
    // if (!aboutus) return <Empty resourceName="aboutus" />;

    return (
        <>
            <section className="section pricing" id="pricing">
                <div className="container">
                    <h2 className="section-title padd-15">pricing plans</h2>
                    <div className="row">
                        <div className="prices">
                            <div className="price-item">
                                <img
                                    src="images/price/price-1.svg"
                                    alt="price"
                                />
                                <h3 className="plan">Basic</h3>
                                <p>
                                    A Simple option but powerful to manage your
                                    business
                                </p>
                                <p>email support</p>
                                <h3 className="price">
                                    <em> $ </em>9<span> month </span>
                                </h3>
                                <a href="#" className="btn btn-default">
                                    get started
                                </a>
                            </div>
                        </div>
                        <div className="prices">
                            <div className="price-item best">
                                <span className="badge"> Recommended </span>
                                <img
                                    src="images/price/price-2.svg"
                                    alt="price"
                                />
                                <h3 className="plan">premium</h3>
                                <p>
                                    Unlimited product inluding app interation
                                    and more features
                                </p>
                                <p>email support</p>
                                <h3 className="price">
                                    <em> $ </em>
                                    49
                                    <span> month </span>
                                </h3>
                                <a href="#" className="btn btn-default">
                                    get started
                                </a>
                            </div>
                        </div>
                        <div className="prices">
                            <div className="price-item">
                                <img
                                    src="images/price/price-3.svg"
                                    alt="price"
                                />
                                <h3 className="plan">Basic</h3>
                                <p>
                                    A wise option for large companies and
                                    individuals
                                </p>
                                <p>24 / 6 support</p>
                                <h3 className="price">
                                    <em> $ </em>
                                    99
                                    <span> month </span>
                                </h3>
                                <a href="#" className="btn btn-default">
                                    get started
                                </a>
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

export default PricingCom;
