import { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
    const [navIsOpen, setNavIsOpen] = useState(false);
    const toggleNav = () => {
        setNavIsOpen(!navIsOpen);
    };

    return (
        <nav className={`${navIsOpen ? "active" : ""} container`}>
            <div className="logo">
                <h2><span className="Logo-first">M</span>uhammad</h2>
            </div>
            <div className="bars">
                {navIsOpen ? (
                    <RxCross1 onClick={toggleNav} />
                ) : (
                    <GiHamburgerMenu onClick={toggleNav} />
                )}
            </div>
            <ul className="nav-links">
                <li className="nav-link">
                    <a href="#">home</a>
                </li>
                <li className="nav-link" >
                    <a href="#about">About</a>
                </li>
                <li className="nav-link" >
                    <a href="#service">Services</a>
                </li>

                <li className="nav-link" >
                    <a href="#project">Projects</a>
                </li>
                <li className="nav-link" >
                    <a href="#testimonial">Testimonial</a>
                </li>
                <li className="nav-link" >
                    <a href="#contact">Contact Us</a>
                </li>
                <li className="nav-link">
                    <button className="nav-cta">Download CV</button>
                </li>

            </ul>
        </nav>
    );
};

export default Navbar;