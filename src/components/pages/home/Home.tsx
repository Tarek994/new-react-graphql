import "./home.css"
import hero from "./home-assets/hero.jpg"
import hero8 from "./home-assets/hero8.jpg"
import hero7 from "./home-assets/hero7.jpg"
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect"

const Home = () => {
    return (
        <div id='home' className="home shadow">
            <div className="main-hero ">

                <div className="hero  d-flex">
                    <h1 className="hero-title ">
                        <Typewriter
                            options={{
                                strings: 'Eatnan... meet... meal... make company',
                                autoStart: true,
                                loop: true,
                            }}
                        />

                    </h1>
                    <h3 className="hero-text "> Fostering connections and creating companionship, the app brings people together through shared meals, nurturing both appetites and relationships.</h3>
                </div>
            </div>
            <div className="image">
                <img src={hero} alt="hero" />
                <h3> Embrace the Joy of Sharing</h3>
                <h3 className="img-text">In a world that thrives on individuality, there's something extraordinary about coming together to share a meal. At Eatnan, we celebrate the joy of shared experiences. Our platform is a testament to the belief that the simple act of breaking bread has the power to transcend boundaries and create lasting bonds. As you gather around a table filled with delectable dishes, you're not just satisfying your hunger; you're nourishing your soul through connections that leave an indelible mark. Join us in embracing the beauty of shared moments, one meal at a time.</h3>
            </div>

            <div className="third-part">
                <img src={hero8} alt="meet-people" />
                <h3>The Culinary Connections</h3>
                <h4 className="third-part-text">
                    <Typewriter
                        options={{
                            strings: ` Food has an incredible way of connecting us. It's a universal language that knows no barriers. With Eatnan, we've harnessed this power to craft not only exquisite culinary experiences but also opportunities for genuine human interactions. Imagine indulging in a dish prepared with passion and sharing stories with newfound friends who were once strangers. Every meal holds the promise of adventure, sparking conversations that traverse cultures and ignite friendships. Step into the world of Eatnan, where every bite paves the way for lasting connections.`,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h4>

            </div>

            <div className="third-part">
                <img src={hero7} alt="meet-people" />
                <h3>A Table for All, A Taste of Togetherness</h3>
                <h4 className="third-part-text">
                    <Typewriter
                        options={{
                            strings: ` At Eatnan, we've set a table where everyone is welcome. Our vision is to break the barriers that often separate us and replace them with the bonds formed over a delicious meal. Whether you're a chef extraordinaire or someone who simply loves to savor flavors, Eatnan offers a space to share your creations and experiences. This is more than an app; it's a movement that celebrates diversity, fosters inclusivity, and reminds us of the beauty in coming together. Join hands, share dishes, and be a part of a community where every taste brings us closer.`,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h4>

            </div>

            <div className="footer">
                <div className="footer-one">
                    <h2 className="footer-title">
                        <Link to="section-1">EATNAN</Link>
                    </h2>

                    <div className="footer-text">Bringing people together over shared meals, the app cultivates connections and fosters companionship, nurturing not only appetites but also meaningful relationships. <i> know more from About page.</i></div>
                </div>
                <div className="social-icon">
                    <ul>
                        <Link to="section-1">Home </Link>
                        <Link to="/about">About </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home