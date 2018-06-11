
import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";

const MyComponent =()=>{
  return (
    <h1>Hello World</h1>
  )
}
ReactDOM.render(
   <MyComponent />,
   document.getElementById('root')

)





// const component = ()=>{
//   const element = document.createElement('div'); 
//   element.innerHTML = _.join(["Hello", "James"], " ");
//   return element;
// }

// document.body.appendChild(component()); 