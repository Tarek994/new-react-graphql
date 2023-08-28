import "./cards.css";
import cards from "./cards-assets/cards.jpg"
import card1 from "./cards-assets/card1.jpg"
import card2 from "./cards-assets/card2.jpg"
import card3 from "./cards-assets/card3.jpg"



const Cards = () => {
  return (
    <div className="main-cards col-lg-12">
      

        <div className="cards-hero shadow col-lg-12">
          <div className="cards-title col-lg-6">
            <h3>  A Table for All, A Taste of Togetherness
            </h3>
          </div>
          <div className="cards-image col-lg-6">
            <img className="cards-img" src={cards} alt="table-together" />
          </div>
        </div>


        <div className="cards col-lg-12">

          <div className="card-01 shadow col-lg-3">
            <img src={card1} alt="card-01" className="card-image col-lg-12" />
            <div className="card-body">
            <p>At Eatnan, we've set a table where everyone is welcome. Our vision is to break the barriers that often separate us and replace them with the bonds formed over a delicious meal.</p>
            </div>
          </div>
          <div className="card-01 shadow col-lg-3">
            <img src={card2} alt="card-01" className="card-image col-lg-12" />
            <div className="card-body">
            <p>Whether you're a chef extraordinaire or someone who simply loves to savor flavors, Eatnan offers a space to share your creations and experiences.</p>
            </div>
          </div>
          <div className="card-01 shadow col-lg-3">
            <img src={card3} alt="card-01" className="card-image col-lg-12" />
            <div className="card-body">
            <p>This is more than an app; it's a movement that celebrates diversity, fosters inclusivity, and reminds us of the beauty in coming together. Join hands, share dishes, and be a part of a community where every taste brings us closer .</p>
            </div>
          </div>
          


        </div>
      
    </div>
  )
}

export default Cards