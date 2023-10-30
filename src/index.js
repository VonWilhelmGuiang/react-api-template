
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import ShopOwner from "layouts/ShopOwner";
import Customer from "layouts/Customer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/shopowner/*" element={<ShopOwner />} />
      <Route path="/customer/*" element={<Customer />} />
      <Route path="*" element={<Navigate to="/auth/login/" replace />} />
    </Routes>
  </BrowserRouter>
);
