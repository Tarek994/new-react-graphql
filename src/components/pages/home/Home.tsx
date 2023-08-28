import Hero from "./hero/Hero"
import "./home.css"
import Second from "./second/Second"



const Home = () => {
    return (
        <div id='home' className="main-home col-lg-12">
            <div className="home col-lg-12">
                <Hero/>
                <Second/>

            </div>
        </div>
    )
}

export default Home