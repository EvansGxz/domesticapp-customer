import React from "react";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./styles/normalize.css";
import { hydrate, render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>,
    rootElement
  );
} else {
  render(
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>,
    rootElement
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
