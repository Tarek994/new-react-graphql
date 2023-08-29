import Hero from "./hero/Hero"
import "./home.css"
import Second from "./second/Second"
import Cards from "./cards/Cards"



const Home = () => {
    return (
        <div id='home' className="main-home col-lg-12">
            <div className="home col-lg-12">
                <Hero/>
                <Second/>
                <Cards/>
            </div>
        </div>
    )
}

export default Home