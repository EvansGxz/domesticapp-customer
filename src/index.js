import React from "react";
import "./normalize.css";
// import App from './App';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { hydrate, render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    rootElement
  );
} else {
  render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    rootElement
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
