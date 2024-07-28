// src/index.js or src/App.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import CreatePost from "./Components/CreatePost";
import PostDetail from "./Components/PostDetail";
import EditPost from "./Components/EditPost"; // Import EditPost
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Bloggers from "./Components/Bloggers";
import Bloggs from "./Components/Bloggs";
import { AuthProvider } from "./context/AuthContext";
import { BlogProvider } from "./context/BlogContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BlogProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/edit/:id" element={<EditPost />} />{" "}
            {/* Add route for EditPost */}
            <Route path="/about" element={<About />} />
            <Route path="/bloggers" element={<Bloggers />} />
            <Route path="/bloggs" element={<Bloggs />} />
          </Routes>
        </Router>
      </BlogProvider>
    </AuthProvider>
  </React.StrictMode>
);
