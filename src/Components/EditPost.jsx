// src/Components/EditPost.js
import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const EditPost = () => {
  const { id } = useParams();
  const { posts, createPost } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const post = posts.find((p) => p.id === parseInt(id));
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setImageUrl(post.image);
    }
  }, [id, posts]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = { id: parseInt(id), title, content };
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updatedPost.image = reader.result;
        createPost(updatedPost);
        navigate("/");
      };
      reader.readAsDataURL(imageFile);
    } else if (imageUrl) {
      updatedPost.image = imageUrl;
      createPost(updatedPost);
      navigate("/");
    } else {
      createPost(updatedPost);
      navigate("/");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
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
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditPost;
