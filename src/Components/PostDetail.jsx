// src/Components/PostDetail.js
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const PostDetail = () => {
  const { id } = useParams();
  const { posts } = useContext(BlogContext);
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = posts.find((p) => p.id === parseInt(id));
    setPost(foundPost);
    setLoading(false);
  }, [id, posts]);

  if (loading) {
    return <div className="max-w-4xl mx-auto p-4">Loading...</div>; // Loading indicator
  }

  if (!post) return <div className="max-w-4xl mx-auto p-4">Post not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.image && (
        <img src={post.image} alt={post.title} className="w-full mb-4" />
      )}
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
