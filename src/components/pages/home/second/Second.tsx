import "./second.css";
import group from "./second-assets/group.jpg"
import hands from "./second-assets/hands.jpg"

const Second = () => {
    return (
        <div className="main-second col-lg-12">
            <div className="second shadow col-lg-12">
                <div className="second-images col-lg-7">
                    <div className="second-images-img col-lg-12">
                        <img className="second-img-group" src={group} alt="happy-group" />
                    </div>
                </div>

                <div className="second-paragraph col-lg-5">
                    <div className="second-text-top col-lg-12">
                        <h3> Embrace the Joy of Sharing</h3>
                    </div>
                    <div className="second-text col-lg-12">
                        <p>In a world that thrives on individuality, there's something extraordinary about coming together to share a meal. At Eatnan, we celebrate the joy of shared experiences. Our platform is a testament to the belief that the simple act of breaking bread has the power to transcend boundaries and create lasting bonds. As you gather around a table filled with delectable dishes, you're not just satisfying your hunger; you're nourishing your soul through connections that leave an indelible mark. Join us in embracing the beauty of shared moments, one meal at a time.</p>
                    </div>
                </div>
            </div>
            <div className="second shadow col-lg-12">

                <div className="second-paragraph col-lg-5">
                    <div className="second-text-top col-lg-12">
                        <h3>The Culinary Connections</h3>
                    </div>
                    <div className="second-text col-lg-12">
                        <p>Food has an incredible way of connecting us. It's a universal language that knows no barriers. With Eatnan, we've harnessed this power to craft not only exquisite culinary experiences but also opportunities for genuine human interactions. Imagine indulging in a dish prepared with passion and sharing stories with newfound friends who were once strangers. Every meal holds the promise of adventure, sparking conversations that traverse cultures and ignite friendships. Step into the world of Eatnan, where every bite paves the way for lasting connections.
                        </p>
                    </div>
                </div>
                <div className="second-images col-lg-7">
                    <div className="second-images col-lg-12">
                        <img className="second-img-hands" src={hands} alt="close-hands" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second