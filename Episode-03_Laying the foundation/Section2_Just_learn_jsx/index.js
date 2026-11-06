import React from "react";
import ReactDOM from "react-dom/client";

// react element is a plain object which is called react element.
// It is not a html element.
// React element is an object representation of a html element.
// React element is created using React.createElement() method.
// React.createElement() method takes three arguments: type, props and children.

// const h1 = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React",
// );
// console.log("h1: ", h1);]


//JSX is a syntax extension for JavaScript. It is used to write HTML in React. JSX is not a string or HTML. It is a syntax extension for JavaScript. JSX is transpiled to React.createElement() method.

const jsxheading = (
<div>
  <h1 id="heading" className="heading">
    Hello World from JSX
  </h1>
  {
    ["Apple","Banana","Orange"].map((item) => {
      return <h3 style={{textAlign:"center",letterSpacing:"2px"}} key={item}>{item}</h3>;
    })
  }
</div>)
console.log("jsxheading: ", jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);
