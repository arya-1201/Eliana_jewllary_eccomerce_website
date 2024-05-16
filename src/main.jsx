import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProfileProvider } from "./contexts/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProfileProvider>
      <App />
    </UserProfileProvider>
  </React.StrictMode>
);
