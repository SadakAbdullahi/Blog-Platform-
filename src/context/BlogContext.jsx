// src/context/BlogContext.js
import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      content: "This is the content of the first post.",
      image: "https://via.placeholder.com/150", // Sample image URL
    },
  ]);

  const createPost = (post) => {
    post.id = posts.length + 1;
    setPosts([...posts, post]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <BlogContext.Provider value={{ posts, createPost, deletePost }}>
      {children}
    </BlogContext.Provider>
  );
};
