import "./home.css"
import hero from "./home-assets/hero5.jpg"
import hero2 from "./home-assets/hero6.jpg"
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
                <h4 className="hero-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repudiandae nulla, quidem quisqua</h4>
                </div>
            </div>
            <div className="image">
                <img src={hero} alt="hero" />
                <h3 className="img-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit esse unde neque commodi, necessitatibus aperiam nam ducimus tempora, repudiandae quas, eveniet libero officiis excepturi nostrum! Minima aperiam eligendi voluptatem maiores?</h3>
            </div>
            <div className="third-part d-flex ">
                <img src={hero2} alt="" />
                
                
                <h4 className="third-part-text">
                <Typewriter
                    options={{
                    strings: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur neque enim nam suscipit sunt, a iure praesentium maiores fugiat aperiam eveniet dignissimos saepe ad vero repellat. Maxime, voluptatibus. Reiciendis, officiis?',
                    autoStart: true,
                    loop: true,
                     }}
                    />
                    </h4>
            
            </div>
            <div className="footer">
                <div className="footer-one">
                <h2 className="footer-title">
                   <Link to="section-1"> EATNAN</Link>
                    </h2>

                <div className="footer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iste recusandae voluptas consectetur maxime, rem laborum ratione delectus! Quam quae aliquam qui voluptates totam inventore voluptatum? Nesciunt provident debitis illum.</div>
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