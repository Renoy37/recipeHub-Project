import React, { useState } from 'react';

function PostPage(){
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    category: '',
    instructions: ''
  });

  // State to store submitted meals
  const [submittedMeals, setSubmittedMeals] = useState([]);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    try {
      // Make POST request to the server
      const response = await fetch("http://localhost:3000/meals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      // Check if request was successful
      if (response.ok) {
        // Add submitted meal to the list
        const meal = await response.json(); // Get the response data
        setSubmittedMeals([...submittedMeals, meal]);
        // Clear the form
        setFormData({
          name: '',
          image: '',
          category: '',
          instructions: ''
        });
      } else {
        // Handle error response
        console.error("Error submitting recipe:", response.statusText);
      }
    } catch (error) {
      // Handle network errors
      console.error("Network error:", error.message);
    }
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div className="form">
        <form autoComplete="off" onSubmit={handleSubmit}>
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
         
          <button type="submit">Submit</button>
        </form>
      </div>
      
      <div className="clearfix">
        {/* Display submitted meals as cards */}
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
};

export default PostPage;

