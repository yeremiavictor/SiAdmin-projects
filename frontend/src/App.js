import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.js";
import Login from "./components/Auth/Login.js";
import Users from "./pages/User/Users.js";
import UserAdd from "./pages/User/UserAdd.js";
import UserEdit from "./pages/User/UserEdit.js";
import Products from "./pages/Product/Products.js";
import ProductAdd from "./pages/Product/ProductAdd.js";
import ProductEdit from "./pages/Product/ProductEdit.js";

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

          {/* Products */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<ProductAdd />} />
          <Route path="/products/edit/:id" element={<ProductEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
