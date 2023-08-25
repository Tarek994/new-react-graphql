import React from 'react'
import "./home.css"
import hero from "./home-assets/hero5.jpg"
import hero2 from "./home-assets/hero6.jpg"

const Home = () => {
    return (
        <div id='home' className="home shadow">
            <div className="main-hero ">
                <div className="hero  d-flex">
                <h1 className="hero-title ">Eatnan... meet... meal... mean company</h1>
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
                <h4 className="third-part-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur neque enim nam suscipit sunt, a iure praesentium maiores fugiat aperiam eveniet dignissimos saepe ad vero repellat. Maxime, voluptatibus. Reiciendis, officiis?</h4>
            </div>
        </div>
    )
}

export default Home