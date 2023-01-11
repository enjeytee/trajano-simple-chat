import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ReactDOM.render(<App />, document.querySelector("#root"));
const rootContainer = document.getElementById("root")
ReactDOM.createRoot(rootContainer).render(<App />);