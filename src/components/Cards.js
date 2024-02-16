import React from "react";

function Cards() {
  return (
    <div className="card-container">
      <div className="card">
        <h3 className="card-title">Share Recipes</h3>
        <p className="card-description">
          Share your favorite recipes with the world and get inspired by others!
        </p>
      </div>
      <div className="card">
        <h3 className="card-title">Discover</h3>
        <p className="card-description">
          Discover and create new meals in the recipe hub, where culinary
          creativity knows no bounds.
        </p>
      </div>
      <div className="card">
        <h3 className="card-title">Create</h3>
        <p className="card-description">
          Create and share recipes with the community, making every meal a
          shared experience.
        </p>
      </div>
      <div className="card">
        <h3 className="card-title">Add Yours</h3>
        <p className="card-description">
          Share and add your own recipe to the community cookbook, leaving your
          flavorful mark.
        </p>
      </div>
    </div>
  );
}

export default Cards;
