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
import PreviewNewsLetter from "./pages/PreviewNewsLetter";
import AddNewBlog from "./pages/AddNewBlog";
import AddNewsLetter from "./pages/AddNewsLetter";
import CreateCourse from "./pages/CreateCourse";
import ViewCourse from "./pages/ViewCourse";
import UploadVideo from "./pages/UploadVideo";
import ViewUploadVideo from "./pages/ViewUploadVideo";
import FormPreview from "./pages/FormPreview";
import AuthorPreview from "./pages/AuthorPreview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/preview" element={<PreviewBlog />} />
          <Route path="/blog/newblog" element={<AddNewBlog />} />
          <Route path="/newsletter" element={<NewsLetter />} />
          <Route path="/newsletter/preview" element={<PreviewNewsLetter />} />
          <Route path="/newsletter/newnewsletter" element={<AddNewsLetter />} />
          <Route path="/course" element={<Course />} />
          <Route path="/course/createcourse" element={<CreateCourse />} />
          <Route path="/course/viewcourse" element={<ViewCourse />} />
          <Route path="/video" element={<Video />} />
          <Route path="/video/uploadvideo" element={<UploadVideo />} />
          <Route path="/video/viewvideo" element={<ViewUploadVideo />} />
          <Route path="/form" element={<ContactForm />} />
          <Route path="/form/previewform" element={<FormPreview />} />
          <Route path="/author" element={<Author />} />
          <Route path="/author/authorpreview" element={<AuthorPreview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
