import React from "react";
import ReactDOM from "react-dom";

import App from "./src/pages/_app.jsx";

import "./src/styles/main.bundle.css";

ReactDOM.render(
    <React.StrictMode>
        <App />     
    </React.StrictMode>,
    document.getElementById("root")
);
