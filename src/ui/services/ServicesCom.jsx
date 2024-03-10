// /* eslint-disable no-unused-vars */
// import {
//     FaAmbulance,
//     FaChevronRight,
//     FaHeartbeat,
//     FaNotesMedical,
//     FaPills,
//     FaProcedures,
//     FaUserMd,
// } from "react-icons/fa";
// // import { FaChevronRight, FaNotesMedical } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import Button from "../global/Button";
// import Heading from "../global/Heading";
// // import { services } from "../../utils/vars";
// import ServiceCom from "./ServiceCom";
// import { useServices } from "../../features/services/useServices";
// import Spinner from "../spinner/Spinner";
// import Empty from "../error/Empty";

function ServicesCom() {
    // const { isLoading, services } = useServices();
    // const navigate = useNavigate();

    // // console.log(`s--`, services);

    // // const x = services;
    // // console.log(`x`, x);

    // // const x = FaNotesMedical();
    // // const y = `<${x} />`;
    // // <div>
    // // {/* ss */}d{x}
    // // {/* {y} */}
    // // </div>

    // if (isLoading) return <Spinner />;
    // if (!services) return <Empty resourceName="service" />;

    return (
        <>
            <section className="services section">
                <div className="container">
                    <h2 className="section-title padd-15">services</h2>
                    <div className="row">
                        <div className="service-item padd-15">
                            <div
                                className="service-item-inner"
                                style={{ background: "rgb(108, 108, 229)" }}
                            >
                                <img
                                    src="images/service/service-1.svg"
                                    alt="service"
                                />
                                <h3>UI/UX design</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Corrupti, dignissimos
                                    repudiandae!
                                </p>
                            </div>
                        </div>
                        <div className="service-item padd-15">
                            <div
                                className="service-item-inner"
                                style={{ background: "rgb(249, 215, 76)" }}
                            >
                                <img
                                    src="images/service/service-2.svg"
                                    alt="service"
                                />
                                <h3>web Development</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Corrupti, dignissimos
                                    repudiandae!
                                </p>
                            </div>
                        </div>
                        <div className="service-item padd-15">
                            <div
                                className="service-item-inner"
                                style={{ background: "rgb(249, 123, 139)" }}
                            >
                                <img
                                    src="images/service/service-3.svg"
                                    alt="service"
                                />
                                <h3>photography</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Corrupti, dignissimos
                                    repudiandae!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text padd-15">
                        <p>
                            Looking for a custom job?
                            <a href="#"> click here </a>
                            to contact me! ✋
                        </p>
                    </div>
                </div>
            </section>

            {/* <section className="services" id="services">
                <div className="container">
                    <Heading as="h2">
                        our
                        <span>services</span>
                    </Heading>

                    <div className="box-container">
                        {services.map((service) => (
                            <ServiceCom service={service} key={service.id} />
                        ))}

                         
                    </div>
                </div>
            </section>
            <div className="spikes" /> */}
        </>
    );
}

export default ServicesCom;
