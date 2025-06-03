import React from "react";

import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Blog from "./pages/Blog";
import NewsLetter from "./pages/NewsLetter";
import Course from "./pages/Course";
import Video from "./pages/Video";
import ContactForm from "./pages/ContactForm";
import Author from "./pages/Author";
import PreviewBlog from "./pages/PreviewBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/preview" element={<PreviewBlog />} />
          <Route path="/newsletter" element={<NewsLetter />} />
          <Route path="/course" element={<Course />} />
          <Route path="/video" element={<Video />} />
          <Route path="/form" element={<ContactForm />} />
          <Route path="/author" element={<Author />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
