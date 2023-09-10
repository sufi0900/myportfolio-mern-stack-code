import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";

import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import App from "./App";
import AdminRoutes from "./pages/AdminRoutes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./pages/PrivateRoute";

if (process.env.NODE_ENV !== "development") console.log = () => {};
console.log = console.warn = console.error = () => {};

console.error("Something bad happened.");
const addHashIfNeeded = () => {
  const currentPath = window.location.pathname;
  if (!window.location.hash && currentPath !== "/") {
    window.location.replace(`#${currentPath}`);
  }
};

addHashIfNeeded();

const root = ReactDOM.createRoot(document.getElementById("root"));
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}

root.render(
  <HashRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/adminDashboard/*"
          element={
            <PrivateRoute>
              <AdminRoutes />
            </PrivateRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PrivateRoute>
              <Register />
            </PrivateRoute>
          }
        />
      </Routes>
    </Provider>
  </HashRouter>
);
