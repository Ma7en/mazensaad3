/* eslint-disable no-unused-vars */
// import { useEffect, useState } from "react";
// import { FaBars, FaHeartbeat, FaTimes } from "react-icons/fa";
// import { NavLink, useNavigate } from "react-router-dom";
// import DarkModeToggle from "../themes/DarkModeToggle";
import {
    HiOutlinePaintBrush,
    HiOutlineSquares2X2,
    HiOutlineXMark,
} from "react-icons/hi2";

import Logo from "./Logo";

function Header() {
    // const [navbar, setNavbar] = useState(false);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         setNavbar(false);
    //     });
    // }, []);

    return (
        <>
            <header className="header" id="header">
                <div className="container nav">
                    <Logo />

                    <div className="nav-menu" id="nav-menu">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a
                                    href="#landing"
                                    className="nav-link active-link"
                                >
                                    home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link">
                                    about
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#experience" className="nav-link">
                                    experience
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#pricing" className="nav-link">
                                    pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#portfolio" className="nav-link">
                                    portfolio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">
                                    contact
                                </a>
                            </li>
                        </ul>
                        <div className="nav-close" id="nav-close">
                            {/* <i className="lni lni-close" /> */}
                            <HiOutlineXMark />
                        </div>
                    </div>

                    <div className="nav-btns">
                        {/* <i
                            className="lni lni-pallet change-theme"
                            id="theme-button"
                        /> */}
                        <HiOutlinePaintBrush />
                        <div className="nav-toggle" id="nav-toggle">
                            <HiOutlineSquares2X2 id="theme-button" />
                            {/* <i className="lni lni-grid-alt" /> */}
                        </div>
                    </div>
                </div>
            </header>

            {/* <header className="header">
                <div className="container">
                    <Logo />

                    <DarkModeToggle />

                    <nav className={`${navbar ? "navbar active" : "navbar"}`}>
                        <ul>
                            <li>
                                <NavLink to="/home">home</NavLink>
                            </li>

                            <li>
                                <NavLink to="/book">book</NavLink>
                            </li>

                            <li>
                                <NavLink to="/blogs">blogs</NavLink>
                            </li>

                            <li>
                                <NavLink to="/aboutus">aboutUs</NavLink>
                            </li>

                            <li>
                                <NavLink to="/login">login</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header> */}
        </>
    );
}

export default Header;
