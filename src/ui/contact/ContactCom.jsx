// import { FaCalendar, FaChevronRight, FaUser } from "react-icons/fa";

import { FaPhoneVolume, FaRegUser } from "react-icons/fa";

// import { blogs } from "../../utils/vars";
// import BlogCom from "./BlogCom";

function ContactCom() {
    return (
        <>
            <section className="contact section" id="contact">
                <div className="container">
                    <h2 className="section-title padd-15">Contact My</h2>

                    <div className="row">
                        <div className="contact-box padd-15">
                            <div className="contact-data">
                                <div className="contact-information">
                                    <h3 className="contact-subtitle">
                                        call us for instant support
                                    </h3>
                                    <span className="contact-description">
                                        <FaPhoneVolume />
                                        +20 123 123 123
                                    </span>
                                </div>
                                <div className="contact-information">
                                    <h3 className="contact-subtitle">
                                        write us bt mail
                                    </h3>
                                    <span className="contact-description">
                                        <FaRegUser />
                                        info@gmail.com
                                    </span>
                                </div>
                            </div>
                        </div>

                        <form action="" className="contact-form padd-15">
                            <div className="contact-inputs">
                                <div className="contact-content">
                                    <input
                                        type="email"
                                        name=""
                                        id="inputemail"
                                        className="contact-input"
                                    />
                                    <label
                                        htmlFor="inputemail"
                                        className="contact-label"
                                    >
                                        email
                                    </label>
                                    <span />
                                </div>
                                <div className="contact-content">
                                    <input
                                        type="text"
                                        name=""
                                        id="inputtext"
                                        className="contact-input"
                                    />
                                    <label
                                        htmlFor="inputtext"
                                        className="contact-label"
                                    >
                                        subject
                                    </label>
                                    <span />
                                </div>
                                <div className="contact-content contact-area">
                                    <textarea
                                        name=""
                                        id="inputtextarea"
                                        cols={30}
                                        rows={10}
                                        className="contact-input"
                                        defaultValue={""}
                                    />
                                    <label
                                        htmlFor="inputtextarea"
                                        className="contact-label"
                                    >
                                        Message
                                    </label>
                                    <span />
                                </div>
                            </div>
                            <a href="#" className="btn btn-default">
                                send Message
                            </a>
                        </form>
                    </div>
                </div>
            </section>

            {/* <section className="blogs" id="blogs">
                <div className="container">
                    <h1 className="heading">
                        our
                        <span>blogs</span>
                    </h1>

                    <div className="box-container">
                        {blogs.map((blog) => (
                            <BlogCom blog={blog} key={blog.id} />
                        ))}

                       
                    </div>
                </div>
            </section>
            <div className="spikes" /> */}
        </>
    );
}

export default ContactCom;
