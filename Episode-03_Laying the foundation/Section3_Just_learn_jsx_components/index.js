import React from "react";
import ReactDOM from "react-dom/client";

//JSX is a syntax extension for JavaScript. It is used to write HTML in React. JSX is not a string or HTML. It is a syntax extension for JavaScript. JSX is transpiled to React.createElement() method.

//Two type of components in React: Functional component and Class component. Functional component is a JavaScript function which returns a React element. Class component is a JavaScript class which extends React.Component and has a render() method which returns a React element.
// class Component ----> OLD
// functional component ----> NEW

class HeaderClassComponent extends React.Component {
  render() {
    return <div className="container">
      <h1 id="heading1" className="heading">
      Hello World from JSX Functional Component
    </h1>
    </div>;
  }
}

const title = (
  <div>
    <h1 id="heading2" className="heading">
      Hello World from JSX Functional Component
    </h1>
  </div>
);

const HeaderFunctionalComponent = () => {
  return <div>{title}</div>;
};

const score = 203;

const jsxheading = (
  <div>
    <HeaderClassComponent />
    <HeaderFunctionalComponent />
    <h2>Score: {score}</h2>
    {["Apple", "Banana", "Orange"].map((item) => {
      return (
        <h3 style={{ textAlign: "center", letterSpacing: "2px" }} key={item}>
          {item}
        </h3>
      );
    })}
  </div>
);
console.log("jsxheading: ", jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);
