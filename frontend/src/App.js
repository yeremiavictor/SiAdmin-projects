import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.js";
import Login from "./components/Auth/Login.js";
import Users from "./pages/User/Users.js";
import UserAdd from "./pages/User/UserAdd.js";
import UserEdit from "./pages/User/UserEdit.js";
import Products from "./pages/Product/Products.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Users */}
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<UserAdd />} />
          <Route path="/users/edit/:id" element={<UserEdit />} />

          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
