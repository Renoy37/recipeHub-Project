import React, { useState, useEffect } from 'react';
import Loading from './Loading.js'

function Choose() {
  const [meals, setMeals] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch("https://database-recipe-hub.vercel.app/meals");
        if (response.ok) {
          const mealsData = await response.json();
          setMeals(mealsData);
        } else {
          console.error("Failed to fetch meals:", response.statusText);
        }
      } catch (error) {
        console.error("Network error:", error.message);
      }
    };

    fetchMeals();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? meals.length - 2 : prevIndex - 2));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= meals.length - 2 ? 0 : prevIndex + 2));
  };

  if (meals.length === 0) {
    return <div><Loading /></div>;
  }

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slider-arrow left-arrow" onClick={handlePrev}>
          &#10094;
        </div>
        <div className="slider-images">
          {meals.slice(currentIndex, currentIndex + 2).map((meal, index) => (
            <div className="slider-image-container" key={index}>
              <img src={meal.image} alt={meal.name} className="slider-image" />
              <div className="image-hover">
                <span className="image-text">{meal.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-arrow right-arrow" onClick={handleNext}>
          &#10095;
        </div>
      </div>
    </div>
  );
}

export default Choose;
