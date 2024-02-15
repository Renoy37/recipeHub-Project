import React, { useState, useEffect } from 'react';
import burger from '../images/burger-removebg-preview.png';

function PostPage() {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    category: '',
    instructions: ''
  });

  const [submittedMeals, setSubmittedMeals] = useState([]);

  useEffect(() => {
    const fetchSubmittedMeals = async () => {
      try {
        const response = await fetch("https://database-recipe-hub.vercel.app/meals");
        if (response.ok) {
          const meals = await response.json();
          setSubmittedMeals(meals);
        } else {
          console.error("Failed to fetch submitted meals:", response.statusText);
        }
      } catch (error) {
        console.error("Network error:", error.message);
      }
    };

    fetchSubmittedMeals();
  }, [submittedMeals]); // Fetch again when submittedMeals changes

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://database-recipe-hub.vercel.app/meals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const meal = await response.json();
        setSubmittedMeals([...submittedMeals, meal]);
        setFormData({
          name: '',
          image: '',
          category: '',
          instructions: ''
        });
      } else {
        console.error("Error submitting recipe:", response.statusText);
      }
    } catch (error) {
      console.error("Network error:", error.message);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='post-page'>
      <div className='post-dec'>
        <div className='dec-left'>
          <p>Share the love, share the flavor! Contribute your favorite 
            recipe and let's create a culinary masterpiece together.
            Your dish could be the next big hit on our platform – tantalize 
            taste buds and inspire fellow foodies worldwide!</p>
          <img src={burger} alt='burger'/>
        </div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit} className="form">
            <label>Name of Recipe:
              <input type="text" name="name" autoComplete="off" onChange={handleInputChange} value={formData.name} />
            </label>
           
            <label>Image-URL:
              <input type="text" name="image" autoComplete="off" onChange={handleInputChange} value={formData.image} />
            </label>
           
            <label>Category:
              <input type="text" name="category" autoComplete="off" onChange={handleInputChange} value={formData.category} />
            </label>
           
            <label>Instructions:
              <input type="text" name="instructions" autoComplete="off" onChange={handleInputChange} value={formData.instructions} />
            </label>
           
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>

      <div className="post-cards-container">
        {submittedMeals.map((meal, index) => (
          <div className="post-card" key={index}>
            <h3>{meal.name}</h3>
            <img src={meal.image} alt={meal.name} style={{ maxWidth: '100%' }} />
            <p><strong>Category:</strong> {meal.category}</p>
            <p><strong>Instructions:</strong> {meal.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostPage;

