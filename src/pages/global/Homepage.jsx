// import { useNavigate } from "react-router-dom";

import AboutCom from "../../ui/about/AboutCom";
import BlogsCom from "../../ui/blogs/BlogsCom";
import ContactCom from "../../ui/contact/ContactCom";
import ExperienceCom from "../../ui/experience/ExperienceCom";
import Footer from "../../ui/footer/Footer";
import Header from "../../ui/header/Header";
import Landing from "../../ui/landing/Landing";
import PortfolioCom from "../../ui/portfolio/PortfolioCom";
import PricingCom from "../../ui/pricing/PricingCom";
import ServicesCom from "../../ui/services/ServicesCom";
import TestimonialCom from "../../ui/testimonial/TestimonialCom";
import CustomizeTheme from "../../ui/themes/CustomizeTheme";

// import Landing from "../ui/landing/Landing";
// import IconsCom from "../ui/icons/IconsCom";
// import ServicesCom from "../ui/services/ServicesCom";
// import AboutCom from "../ui/about/AboutCom";
// import DoctorsCom from "../ui/doctors/DoctorsCom";
// import BookCom from "../ui/book/BookCom";
// import ReviewsCom from "../ui/reviews/ReviewsCom";
// import BlogsCom from "../ui/blogs/BlogsCom";
// import LinksCom from "../ui/links/LinksCom";

export default function Homepage() {
    // const navigate = useNavigate();

    return (
        <>
            <CustomizeTheme />
            <Header />
            <Landing />
            <AboutCom />
            <ServicesCom />
            <ExperienceCom />
            <PricingCom />
            <PortfolioCom />
            <TestimonialCom />
            <BlogsCom />
            <ContactCom />
            <Footer />
            {/* <IconsCom /> */}
            {/* <DoctorsCom /> */}
            {/* <BookCom /> */}
            {/* <ReviewsCom /> */}
            {/* <LinksCom /> */}
        </>
    );
}
