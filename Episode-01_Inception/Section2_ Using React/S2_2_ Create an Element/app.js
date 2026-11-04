const h1 = React.createElement("h1", {id:"heading"}, "Hello World!...");
console.log("Heading: ", h1);

const p = React.createElement("p", {className:"description"}, "Use React Script File");
console.log("Description: ", p);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("Root: ", root);

root.render(React.createElement("div", null, h1, p));
