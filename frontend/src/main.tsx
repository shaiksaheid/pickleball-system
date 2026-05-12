import React from "react";
import ReactDOM from "react-dom/client";
import HighlightsPage from "./pages/HighlightsPage";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";

import ReplayPage from "./pages/ReplayPage";

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
        />

        <Route
          path="/replay/:id"
          element={<ReplayPage />}
        />

        <Route
          path="/highlights"
          element={<HighlightsPage />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);