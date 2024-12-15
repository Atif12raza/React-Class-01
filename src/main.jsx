import React from "react";
import ReactDom from "react-dom/client";
const rootDiv =document.getElementById("root");
ReactDom.createRoot(rootDiv).render(
  <div>  
  <h1 style={{textAlign:"center"}}>Welcome To React </h1> 
  <h1 style={{textAlign:"center"}}>Hello React </h1>    
  <p>
    <h2 style={{textAlign:"center"}}>React is a JavaScript library for building user interfaces.</h2>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nulla totam facere enim! Quae tempora cum possimus? Veritatis, nam veniam minima sequi perferendis, dicta, delectus possimus beatae ab temporibus voluptates.
  </p>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img style={{ width: '200px' }} src="/public/vite.svg" alt="Vite logo" />
      <img style={{ width: '200px' }} src="src/assets/react.svg" alt="Vite logo" />
    </div>
</div>  
)