// src/Components/CreatePost.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const { createPost } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = { title, content };
    if (imageFile) {
      // Convert image file to base64 or handle as needed
      const reader = new FileReader();
      reader.onloadend = () => {
        postData.image = reader.result;
        createPost(postData);
        navigate("/");
      };
      reader.readAsDataURL(imageFile);
    } else if (imageUrl) {
      postData.image = imageUrl;
      createPost(postData);
      navigate("/");
    } else {
      createPost(postData);
      navigate("/");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full p-2 mb-4 border rounded"
        />
        {imageUrl && (
          <img src={imageUrl} alt="Preview" className="w-full mb-4" />
        )}
        {imageFile && (
          <img
            src={URL.createObjectURL(imageFile)}
            alt="Preview"
            className="w-full mb-4"
          />
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
