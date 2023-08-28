import { Link } from "react-router-dom";
import "./footer.css";


const Footer = () => {
    return (
        <div className="main-footer col-lg-12">
            <div className="footer col-lg-12 d-flex">
                <div className="footer-logo col-lg-6">
                    <Link className="footer-logo-title" to="section-01">EATNAN</Link>
                </div>
                <div className="col-lg-6 footer-navigation">
                    <ul>
                        <Link className="footer-nav" to="/">HOME</Link>
                        <Link className="footer-nav" to="/about">ABOUT</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer