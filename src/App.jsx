import React from "react";

import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
