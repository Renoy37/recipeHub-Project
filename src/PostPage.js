import React, {use, useState} from "react";
import burgerImage from "./burger.png";

function PostPage(){

  const [formData, setFormData] = useState({})
  const [responseData, setResponseData] = useState(null); 


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://project-db-two.vercel.app/meals", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      setResponseData(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  

    return(
   <div className="post-page">
    <div className="post-dec">
      <h1>ADD YOUR OWN <span>RECIPES.</span></h1>
      <p>Share the love, share the flavor! Contribute your
         favorite recipe and let's create a culinary masterpiece together. 
         Your dish could be the next big hit on our platform – tantalize taste 
         buds and inspire fellow foodies worldwide!</p>
         <img src={burgerImage} ></img>
          </div>

          <div className="form">
          <form onSubmit={handleSubmit}>
        <label htmlFor="query1">Nmae of Recipe:</label>
        <input type="text"  name="name" onChange={handleInputChange} />

        <label htmlFor="query2">Image-URL:</label>
        <input type="text" name="image" onChange={handleInputChange} />

        <label htmlFor="query3">Ingridients:</label>
        <input type="text" name="ingridients" onChange={handleInputChange}/>


        <label htmlFor="query4">Description:</label>
        <input type="text"  name="description" onChange={handleInputChange}/>

         <button type="submit">Submit</button>
           </form>
          </div>

          {responseData && (
        <div>
          <p>Name: {responseData.name}</p>
          <p>Image-URL: {responseData.imageUrl}</p>
          <p>Ingredients: {responseData.ingredients}</p>
          <p>Description: {responseData.description}</p>
        </div>
      )}

   </div>
    );
}

export default PostPage;