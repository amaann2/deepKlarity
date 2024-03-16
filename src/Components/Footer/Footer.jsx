import './Footer.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">

                    <div className="logo footer-logo">
                        <h2><span className="Logo-first">M</span>uhammad</h2>
                    </div>
                    <div className="links">
                        <ul className='footer-ul'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Testimonial</a></li>
                            <li><a href="#">My Project</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <FaFacebook className='footer-icon' />
                        <FaTwitter className='footer-icon' />
                        <FaLinkedin className='footer-icon' />
                        <FaInstagramSquare className='footer-icon' />
                    </div>
                </div>
            </div>
            <div className="copyright">
                @2023 <span>Muhammad</span> All Rights Reserved , Inc.
            </div>
        </>
    )
}

export default Footer