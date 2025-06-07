import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import DashboardLayout from "./DashboardLayout.jsx";
import DashboardHome from "./DashboardHome.jsx";
import Settings from "./Settings.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<App />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
               <Route index element={<DashboardHome />} />
               <Route path="settings" element={<Settings />} />
            </Route>
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);
