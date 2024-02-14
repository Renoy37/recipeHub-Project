import React, { useState } from "react";
import burgerImage from "./burger.png";

function PostPage() {
  const [formData, setFormData] = useState({});
  const [responseData, setResponseData] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
    
    fetch("https://project-db-two.vercel.app/meals", {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Response data:", data);
        setResponseData(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }


  return (
    <div className="post-page">
      <div className="post-dec">
        <h1>ADD YOUR OWN <span>RECIPES.</span></h1>
        <p>Share the love, share the flavor! Contribute your
           favorite recipe and let's create a culinary masterpiece together. 
           Your dish could be the next big hit on our platform – tantalize taste 
           buds and inspire fellow foodies worldwide!</p>
        <img src={burgerImage} alt="Burger" />
      </div>

      <div className="form">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name of Recipe:
            <input type="text" name="name" autoComplete="off" onChange={handleInputChange} />
          </label>
         
          <label>Image-URL:
            <input type="text" name="image" autoComplete="off" onChange={handleInputChange} />
          </label>
         
          <label>Ingridients:
            <input type="text" name="ingredients" autoComplete="off" onChange={handleInputChange} />
          </label>
         
          <label>Description:
            <input type="text" name="description" autoComplete="off" onChange={handleInputChange} />
          </label>
         
          <button type="submit">Submit</button>
        </form>
      </div>

      {responseData && (
        <div className="post-data">
          <p>Name: {responseData.strMeal}</p>
          <img src={responseData.strMealThumb} alt="Recipe" />
          <p>Instructions: {responseData.strInstructions}</p>
          <p>Source: <a href={responseData.strSource}>{responseData.strSource}</a></p>
        </div>
      )}
    </div>
  );
}

export default PostPage;
