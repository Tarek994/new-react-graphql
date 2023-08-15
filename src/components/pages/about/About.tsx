import "./about.css"
import one from "./about-assets/one.svg"
import two from "./about-assets/two.svg"
import target from "./about-assets/target.svg"


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
            <div className="card back shadow h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title ">Time Constraints and Social Isolation</h5>
                <p className="card-text flex-fill">-Modern lives leave little time for enjoying homemade meals and meaningful interactions. <br />
                  -Busy schedules diminish opportunities for authentic connections and communal dining.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card back shadow h-100">
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
            <div className="card back shadow h-100">
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

      <div className="main-target col-lg-12">
        <div className="targets-list col-lg-6">
          <ul className="tar-list">
            <li> <strong> Single Young Professionals.</strong>
              <p>-Individuals in the bustling working class with limited time for homemade meals. <br />
                -Seeking convenient dining options and connections amid their busy schedules. <br />
                -Desire to establish relationships while enjoying home-cooked food.
              </p>
            </li>
            <li> <strong> Seniors Looking for Social Connections.</strong>
              <p> -Elderly individuals with more available time and a penchant for social interaction. <br />
                -Eager to share meals and meaningful conversations with others.
                -Seeking opportunities to engage in communal dining experiences.
              </p>
            </li>
            <li> <strong>Local Hosts and Touristic Cities.</strong>
              <p> -Local residents in touristic areas interested in hosting visitors for meals. <br />
                -Wish to offer a taste of local cuisine and hospitality to tourists. <br />
                -Open to forming connections with visitors through shared dining experiences.
              </p>
            </li>
          </ul>


        </div>

        <div className="targets-img col-lg-6">
          <div className="target-title">
            <h4> <strong>Target Audience:</strong> </h4>
            <p>These distinct groups encompass the diverse spectrum of individuals who can benefit from and contribute to the Eatnan platform:
            </p>
          </div>

          <div className="target-img">
            <img src={target} alt="targets" />
          </div>
        </div>

      </div>

      {/* Scope and Objectives */}
      <div className="scope">
        <h4 className="scope-title"><strong> Scope and Objectives</strong></h4>
        <div className="scope-list">
          <h5><strong> Connect Food Enthusiasts and Promote Community Building</strong></h5>
          <ul>
            <li>The primary aim of the app is to provide a convenient solution for busy individuals with hectic schedules to not only enjoy homemade meals but also connect with others.
            </li>
            <li> It's also for cooking enthusiasts who are enthusiastic about sharing their dishes with fellow users, including those who might be feeling lonely.
            </li>
            <li>This collective approach fosters a strong sense of community, ensuring that even those who might feel isolated can come together and enjoy homemade meals in a shared and supportive setting.</li>
          </ul>
          <h5> <strong> Promote responsible sustainable Lifestyles</strong></h5>
          <ul>
            <li>Lower energy consumption by reducing the need for individual cooking and double shopping.</li>
            <li>Minimize food wastage by connecting individuals with surplus portions to those seeking meals.</li>
          </ul>
          <h5><strong>Explore Different Cuisines</strong></h5>
          <ul>
            <li> Provide a platform for users to explore various cuisines and culinary creations by connecting with hosts from diverse backgrounds, especially for big and diverse cities like Berlin, or touristic cities like Italy.
            </li>
          </ul>

        </div>





      </div>

      {/* Features */}
      <div className="features">
        <h4 className="feature-title"><strong>Platform Features and Functionality</strong></h4>
        <div className="feature-list">
          <h5><strong> User Profiles:</strong></h5>
          <ul>
            <li>Allow users to create profiles with personal details, food preferences, and cooking specialties.

            </li>
            <li>Implement profile verification to enhance trust and safety within the community.

            </li>

          </ul>
          <h5> <strong>Meal Posts:</strong></h5>
          <ul>
            <li>Enable users to create posts when they have extra food available.</li>
            <li>Include details about the meal, such as cuisine, location, portion size, and dietary information.</li>
          </ul>
          <h5><strong>Request and Accept Invitations:</strong></h5>
          <ul>
            <li>Allow users to browse through meal posts and send requests to join a meal.</li>
            <li>Provide hosts the option to accept or decline requests.</li>
          </ul>

          <h5><strong>Real-time Messaging:</strong></h5>
          <ul>
            <li>Incorporate a messaging system to facilitate communication between hosts and guests.</li>
            <li>Enable users to discuss meal details, directions, and any specific requirements.</li>
          </ul>

          <h5><strong>Geolocation and Map Integration:</strong></h5>
          <ul>
            <li>Implement geolocation to help users find nearby meal opportunities.</li>
            <li>Display meal posts on a map to make it easy for users to identify locations.</li>
          </ul>
          <h5><strong>Rating and Reviews:</strong></h5>
          <ul>
            <li>Allow users to rate and review their dining experiences.</li>
            <li>Build a reputation system to recognize reliable hosts and respectful guests.</li>
          </ul>
          <h5><strong>Search and Filters:</strong></h5>
          <ul>
            <li>Provide search and filtering options to help users find meals based on cuisine, location, date, and dietary preferences.</li>
          </ul>
          <h5><strong>Notifications:</strong></h5>
          <ul>
            <li>Send notifications to users when there are new meal posts, messages, or updates related to their requests.</li>
          </ul>
          <h5><strong>Privacy and Safety Measures:</strong></h5>
          <ul>
            <li>Implement privacy settings to control who can view user profiles and meal posts.</li>
            <li>Include reporting mechanisms to handle inappropriate content or behavior.</li>
          </ul>
          <h5><strong>Community Guidelines and Support:</strong></h5>
          <ul>
            <li>Offer clear community guidelines to ensure a positive and respectful atmosphere.</li>
            <li>Provide customer support to address user questions and concerns.
            </li>
          </ul>

        </div>





      </div>


      {/* User Flow: <TBD> */}
      <div className="use-flow features">
        <h4 className="feature-title"><strong>User Flow:</strong></h4>
        <div className="user-list">
          <ul>
            <li>Describes the typical user journey through your application.</li>
            <li>Explains how users will interact with different features and what the overall flow will look like.</li>
          </ul>
        </div>
      </div>

      {/*  Design & UE  */}


      <div className="use-flow features">
        <h4 className="feature-title"><strong>Design and User Experience:</strong></h4>
        <div className="user-list">
          <ul>
            <li>Outlines the initial thoughts on the design and user experience of the application.</li>
            <li>Mentions any specific design elements or UX principles you want to incorporate.</li>
          </ul>
        </div>
      </div>

      {/*  Technology Stack  */}


      <div className="use-flow features">
        <h4 className="feature-title"><strong>Technology Stack:</strong></h4>
        <div className="user-list">
          <ul>
            <li>Product owner (Project manager).</li>
            <li> Marketing team (Search of marketing opportunities, open channels to possible investors).
            </li>
            <li>Media team (UI/UX, create marketing advertisements, videos, photos).</li>
            <li>Developers team (FE, BE, DevOps, iOS, Android) develop, test, secure the app prototype.</li>
          </ul>
        </div>
      </div>

      {/*  Project Timeline  */}


      <div className="use-flow features">
        <h4 className="feature-title"><strong>Project Timeline:</strong></h4>
        <div className="user-list">
          <ul>
            <li>Create the project introduction. (high-level for MVP)
            </li>
            <li>Decide on the initial app features, design.

            </li>
            <li>Design the app screens.
            </li>
            <li>Build the first app prototype (front-end).
            </li>
            <li>Create the BE services, DevOps, and Database.</li>
            <li>Include milestones and deliverables to give an overview of the project's progress.

            </li>
            <li>internal release and E2E testing
            </li>
            <li>Share the app idea with external stakeholders and seek support.
            </li>
          </ul>
        </div>
      </div>

      {/*  Monetization (TBD) */}


      <div className="use-flow features">
        <h4 className="feature-title"><strong>Monetization (TBD):</strong></h4>
        <div className="user-list">
          <ul>
            <li>How suppose to get revenue from the app:</li>

          </ul>
        </div>
      </div>

      {/*  Competitor and threats Analysis (optional) */}


      <div className="use-flow features">
        <h4 className="feature-title"><strong>Competitor and threats Analysis (optional):</strong></h4>
        <div className="user-list">
          <ul>
            <li>What are the competitors in the market?</li>
            <li>Risk analysis: What can threat the app (idea or application),</li>

          </ul>
      </div>

      {/*  Next Steps: */}
      
      <div className="use-flow features">
        <h4 className="feature-title"><strong>Next Steps:</strong></h4>
        <div className="user-list">
          <ul>
            <li>TBD</li>

          </ul>

        </div>


      </div>
      </div>
      </div>
      )
}

      export default about