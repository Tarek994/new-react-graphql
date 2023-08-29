import sad2 from "./hero-assets/sad2.jpg"
import happy from "./hero-assets/happy.jpg"
import "./hero.css"
import Typewriter from "typewriter-effect"

const Hero = () => {
    return (
        <div className="hero col-lg-12">
            <div className="hero-text-btn col-lg-5">
                <p className="hero-text">
                    <Typewriter
                        options={{
                            strings: ['538 hours are lost every year to get home made meals. Imaging investing this time in building connections that will change your life, That’s what Eatnan is for!'],
                            autoStart: true,
                            loop: true,
                        }}
                    />

                </p>
                <button className="hero-button">Know More</button>
            </div>

            <div className="hero-images col-lg-5">
                <div className="col-lg-5">
                    <img className="img-sad" src={sad2} alt="sad" />
                </div>
                <div className="col-lg-5">
                    <img className="img-happy" src={happy} alt="happy" />
                </div>
            </div>
        </div>
    )
}

export default Hero