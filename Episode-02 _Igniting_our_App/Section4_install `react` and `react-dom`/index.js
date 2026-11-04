// <div id="root">
//  <div id="parent">
//      <div id="child">
//          <h1 id="heading">Hello World!...</h1>
//          <p class="description">Use React Script File</p>
//      </div>
//  </div>
// </div>

// React.createElement(Object, props, children) ==> HTML browser Understandable code

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, 
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", { id: "heading1" }, "Hello World!..."),
    React.createElement(
      "p",
      { className: "description" },
      "Use React Script File",
    ),
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", { id: "heading2" }, "Hello Suhaib!..."),
    React.createElement(
      "p",
      { className: "description" },
      "Use React Script File",
    ),
  ),
);
console.log("Parent: ", parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("Root: ", root);

root.render(parent);
