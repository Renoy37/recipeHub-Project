import React, {use} from "react";

function PostPage(){



    function handlePost() {
        fetch("#", { 
          method: 'POST', 
          mode: 'cors', 
          body: JSON.stringify(jsonData)
        })
        
      }

    return(
   <div className="post-page">
          <form>
            <input/>
          </form>

          <div className="post-page-details">
      <p>Share the love, share the flavor! Contribute your
         favorite recipe and let's create a culinary masterpiece together. 
         Your dish could be the next big hit on our platform – tantalize taste 
         buds and inspire fellow foodies worldwide!</p>

         <img src=""></img>
          </div>
   </div>
    );
}

export default PostPage;