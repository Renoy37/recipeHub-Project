import React, { useState, useEffect } from "react";
import Image1 from "../Assets/burgerking.jpg.png";
import Loading from "./Loading";

function Discover() {
  const [searchQuery, setSearchQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [displayedMeals, setDisplayedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    fetch("https://database-recipe-hub.vercel.app/meals")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data);
        setDisplayedMeals(data.slice(0, 6));
        setIsLoading(false); // Data fetched, stop loading
      })
      .catch((error) => {
        console.error("Error fetching meals:", error);
        setIsLoading(false); // Stop loading even if there's an error
      });
  }, []);

  const handleSearch = () => {
    const filteredMeals = meals.filter((meal) =>
      meal.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setDisplayedMeals(filteredMeals);
  };

  return (
    <div className="DiscoveryPage">
      <div className="contain">
        <div className="Disc-Image">
          <img src={Image1} alt="burger" className="food" />
        </div>
        <div className="content">
          <h1>
            DISCOVER MORE TO <span className="highlighted">COOK?</span>
          </h1>
          <p className="discover-paragraph">
            The classic burger is an all-time BBQ favourite! This super easy
            homemade beef burger recipe gives you delicious patties, packed with
            onions and herbs for extra flavour, that are perfect for topping
            with cheese, lettuce and tomato, and sandwiching between floury
            buns. See Method: Serves 4 20 mins to prepare and 17 mins to cook
            472 calories / serving
          </p>
          <div className="button">
            <input
              className="searchInput"
              placeholder="Type here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="searchButton" onClick={handleSearch}>
              Search
            </button>
          </div>

          {isLoading ? ( // Show loader while loading
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <div><Loading /></div>
            </div>
          ) : ( // Show meals after loading
            <div className="searchResults">
              {displayedMeals.map((meal) => (
                <div key={meal.id} className="mealCard">
                  <p className="mealName">{meal.name}</p>
                  <img src={meal.image} alt={meal.name} />
                  <p className="mealCategory">Category: {meal.category}</p>
                  <ol className="mealInstructions">
                    {meal.instructions.split(". ").map((instruction, index) => (
                      <li key={index}>{instruction}</li> // Changed to <li> from <ol>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Discover;
