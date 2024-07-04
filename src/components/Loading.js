import React from 'react';
import { ripples } from 'ldrs'

ripples.register() // Ensure this is correct according to the documentation

function Loading() {
  return (
    <div className='ripple'> 
      <l-ripples
          size="150"
          speed="2" 
          color="red" 
        ></l-ripples>
    </div>
  );
}

export default Loading;




