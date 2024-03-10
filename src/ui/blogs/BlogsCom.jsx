// import { FaCalendar, FaChevronRight, FaUser } from "react-icons/fa";

// import { blogs } from "../../utils/vars";
// import BlogCom from "./BlogCom";

function BlogsCom() {
    return (
        <>
            <section className="section blogs">
                <div className="container">
                    <h2 className="section-title padd-15">latest posts</h2>
                    <div className="row">
                        <div className="blog-item padd-15">
                            <div className="inner">
                                <div className="thumb">
                                    <a href="#">
                                        <span className="category">
                                            {" "}
                                            reviews{" "}
                                        </span>
                                    </a>
                                    <a href="#">
                                        <img
                                            src="images/portfolio/1.svg"
                                            alt="blog"
                                        />
                                    </a>
                                </div>
                                <div className="details">
                                    <h3 className="title">
                                        <a href="#">
                                            5 best app Development tool for tour
                                            projects
                                        </a>
                                    </h3>
                                    <ul className="meta">
                                        <li>09 february, 2021</li>
                                        <li>mazen</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="blog-item padd-15">
                            <div className="inner">
                                <div className="thumb">
                                    <a href="#">
                                        <span className="category">
                                            {" "}
                                            tutorial{" "}
                                        </span>
                                    </a>
                                    <a href="#">
                                        <img
                                            src="images/portfolio/2.svg"
                                            alt="blog"
                                        />
                                    </a>
                                </div>
                                <div className="details">
                                    <h3 className="title">
                                        <a href="#">
                                            common misconceptions about payment
                                        </a>
                                    </h3>
                                    <ul className="meta">
                                        <li>07 february, 2021</li>
                                        <li>mazen</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="blog-item padd-15">
                            <div className="inner">
                                <div className="thumb">
                                    <a href="#">
                                        <span className="category">
                                            {" "}
                                            business{" "}
                                        </span>
                                    </a>
                                    <a href="#">
                                        <img
                                            src="images/portfolio/3.svg"
                                            alt="blog"
                                        />
                                    </a>
                                </div>
                                <div className="details">
                                    <h3 className="title">
                                        <a href="#">
                                            3 things to know about startup
                                            business
                                        </a>
                                    </h3>
                                    <ul className="meta">
                                        <li>06 february, 2021</li>
                                        <li>mazen</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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

export default BlogsCom;
