// src/Components/Bloggs.js
import React, { useEffect, useState } from 'react';

const Bloggs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') // Mock API for example
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="max-w-4xl mx-auto p-4">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Bloggs</h1>
      {posts.map((post) => (
        <div key={post.id} className="mb-6 p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      
    </div>
  );
};

export default Bloggs;
