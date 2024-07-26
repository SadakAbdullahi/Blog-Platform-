// src/Components/Home.js
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import Modal from "./Modal";

const Home = () => {
  const { posts, deletePost } = useContext(BlogContext);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePost(id);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          className="mb-6 p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-xl font-bold mb-2">
            <Link
              to={`/post/${post.id}`}
              className="text-blue-500 hover:underline"
            >
              {post.title}
            </Link>
          </h2>
          {post.image && (
            <div className="relative group">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto max-h-60 object-cover mb-4 rounded-lg border border-gray-200 cursor-pointer transition-transform duration-300 group-hover:scale-105"
                onClick={() => handleImageClick(post.image)}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => alert("Image clicked!")}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600"
                >
                  View
                </button>
              </div>
            </div>
          )}
          <p className="mb-4">{post.content.substring(0, 100)}...</p>
          <div className="flex justify-between items-center">
            <Link
              to={`/edit/${post.id}`}
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(post.id)}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {selectedImage && (
        <Modal image={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Home;
