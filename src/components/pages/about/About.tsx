import "./about.css"
import one from "./about-assets/one.svg"
import two from "./about-assets/two.svg"
import three from "./about-assets/three.svg"


const about = () => {
  return (
    <div className="main-about col-lg-12">
      <div className="first-level col-lg-12">
        <div className="left-side col-lg-6">
          <h3 className="intro-title">Introduction :</h3>
          <p className="text-intro"> I am thrilled to share with you an exciting new application idea called Eatnan. This concept document serves as an introduction to the vision and potential of our project. With great enthusiasm, I present this concept in the hope of gaining your valuable insights and contributions to turn this idea into a reality.
            Eatnan is born out of a deep desire to address the pressing problem that faces many of us. In a world where our lives are becoming busier by the day, we often find ourselves spending a significant portion of our time grappling with one of the oldest human challenges: satisfying our appetite. Eatnan offers a novel solution by facilitating the act of hosting and sharing food with others, whether they are colleagues, neighbors, or even passersby.
          </p>
        </div>
        <div className="right-side col-lg-6">
          <img src={one} alt="" />
        </div>

      </div>

      <div className="second-level">
        <p className="text-one">
          * Imagine this scenario: You're an Eatnan provider user, and you find yourself cooking a meal for two. You decide to share your culinary creation and extend an invitation through Eatnan, signaling that you have an available seat at your table. On the other side, an Eatnan consumer user, walking down the street with a rumbling stomach, opens the app and discovers your post. Recognizing the opportunity for a shared meal and meaningful interaction, they send a request to join you.
          What follows is a heartwarming connection that starts over food and extends to conversations. You both converge at the meal location, be it a workplace, a cozy home, or a serene park. As the dishes are savored, stories exchanged, and laughter shared, the simple act of sharing food transforms into the building blocks of a budding friendship.
          We believe that sharing food has the remarkable ability to initiate connections and foster strong relationships between individuals. Eatnan is more than an app; it's a catalyst for creating genuine bonds in a fast-paced world. It's about bringing people together, not just around a table, but around shared experiences, cultures, and the universal joy of a good meal.

          Eatnan seeks to redefine the way we view dining, transforming it from a solitary experience into a communal endeavor that brings people closer than ever before. Our goal is to provide a platform that not only satisfies our hunger for delicious dishes but also nourishes our hunger for human connection.
          We invite you to join us on this exciting journey as we shape the future of food sharing and community building. Your input and participation are invaluable as we work to turn this concept into a vibrant reality, one meal and one connection at a time. Welcome to Eatnan, where every bite is an opportunity to build bridges and forge friendships.
        </p>
      </div>

      <div className="third-level col-lg-12">

        <div className="third-left-side col-lg-6">
          <h4 className="third-level-title">Problem Statement :</h4>
          <img className="third-img" src={two} alt="third" />
        </div>
        <div className="third-right-side col-lg-6">
          <p className="third-text">
            In our modern, fast-paced world, individuals often find themselves pressed for time, leaving little room for enjoying the simple pleasures of a home-cooked meal and genuine social interactions. With increasingly busy schedules, the opportunity for traditional meal-sharing experiences has dwindled, leaving a void in the realm of authentic connections and communal dining moments.<br />
            Moreover, the persistent issue of food waste continues to loom large, as excess prepared meals frequently go unconsumed, contributing to environmental concerns. Conventional dining options lack the intimacy and authenticity that comes naturally with sharing a homemade meal among peers. As a result, there is a growing demand for an innovative solution that bridges the gap between those who have surplus portions and individuals seeking memorable dining experiences that encompass both social interaction and sustainability. <br />

          </p>


        </div>


      </div>

      <div className="boxes col-lg-12">
        <div className="cards col-lg-12">
          <div className="card problem col-lg-4">
            Simultaneously, the overconsumption of energy and the consequential environmental implications stemming from individual cooking and frequent shopping further compound these challenges. The resources expended in preparing individual meals, coupled with energy consumption and packaging waste, contribute to carbon emissions and environmental degradation.
          </div>
          <div className="card problem col-lg-4">
            Eatnan responds comprehensively to these intertwined issues. By facilitating shared meals, the app directly addresses the problem of unnecessary double shopping and cooking. This not only curbs food waste but also mitigates the excessive energy consumption associated with preparing individual meals. Eatnan empowers individuals to seamlessly share their homemade culinary delights, extend invitations to new acquaintances, and actively contribute to a more sustainable lifestyle.</div>
          <div className="card problem col-lg-4">
            The app rejuvenates the tradition of communal dining, fostering a sense of community and enabling meaningful interactions through the simple yet powerful act of sharing a meal. In its commitment to nurturing authentic relationships and promoting responsible consumption, Eatnan revolutionizes perceptions surrounding dining experiences, social bonds, and environmental consciousness. This holistic solution nourishes both individuals and the planet alike, offering a transformative approach to how we share food, forge connections, and care for our world.</div>
        </div>

      </div>

      <div className="problems-group col-lg-12">
        <h4 className="problems-title col-lg-12">
          <strong>LTDR </strong> we can summarize the problems we want to solve to three groups:
        </h4>
        <div className="cards row">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title ">Time Constraints and Social Isolation</h5>
                <p className="card-text flex-fill">-Modern lives leave little time for enjoying homemade meals and meaningful interactions. <br />
                  -Busy schedules diminish opportunities for authentic connections and communal dining.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Food Waste and Environmental Impact
                </h5>
                <p className="card-text flex-fill">-Excess prepared meals contribute to the pressing issue of food waste. <br />
                  -Environmental concerns arise from food waste, energy consumption, and packaging waste.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Need for Sustainability and Community Building</h5>
                <p className="card-text">-Conventional dining lacks intimacy, authenticity, and sustainability. <br />
                  -Overconsumption of energy and resources in individual cooking and shopping compounds challenges. <br />
                  -Eatnan addresses these issues by promoting shared meals, nurturing community, and fostering sustainable practices.
                </p>
              </div>
            </div>
          </div>

        </div>


      </div>


      {/* Target Audience */}

      <div className="target">
  <div className="targets col-lg-12">
    <h4> <strong>Target Audience:</strong> </h4>
    <p>These distinct groups encompass the diverse spectrum of individuals who can benefit from and contribute to the Eatnan platform:</p>
    <div className="cards col-lg-6">
      <div className="row"> {/* Added a row here */}
        <div className="col-md-12 custom-margin">
          <div className="card h-100">
            {/* Card content */}
          </div>
        </div>
        <div className="col-md-12 custom-margin">
          <div className="card h-100">
            {/* Card content */}
          </div>
        </div>
        <div className="col-md-12 custom-margin">
          <div className="card h-100">
            {/* Card content */}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="targets-img col-lg-6"> {/* Added a col-lg-6 class */}
    <img src={three} alt="targets" />
  </div>
</div>





    </div>
  )
}

export default about