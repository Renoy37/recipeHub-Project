import React from "react";
import image1 from "../images/homepage.png";
import Cards from "./Cards";

function Home() {
  return (
    <div>
      <div className="landingPage">
        <div className="intro">
          <h1>DON'T KNOW WHAT </h1>
          <h1>
            TO <span className="highlighted">COOK?</span>
          </h1>
          <p className="ptag">
            Whether you're a seasoned chef or a kitchen novice, RecipeHUB is
            here to inspire your next culinary masterpiece. Explore a vast
            collection of mouthwatering recipes, carefully curated and tested to
            ensure simplicity without compromising on flavor. Say goodbye to
            mealtime dilemmas, and let RecipeHUB transform your kitchen
            experience.
          </p>
        </div>
        <div className="separator"></div>
        <div className="homeImage">
          <img src={image1} alt="pizza" />
        </div>
      </div>
      <Cards />
    </div>
  );
}

export default Home;
