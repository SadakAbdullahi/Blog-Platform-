import React, { useEffect, useState } from "react";

const Bloggers = () => {
  const [bloggers, setBloggers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setBloggers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="max-w-4xl mx-auto p-6">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Bloggers</h1>
      {bloggers.map((blogger) => (
        <div key={blogger.id} className="mb-6">
          <h2 className="text-xl font-bold mb-2 text-gray-900">
            {blogger.name}
          </h2>
          <p className="text-gray-700">Email: {blogger.email}</p>
          <p className="text-gray-700">Website: {blogger.website}</p>
        </div>
      ))}
    </div>
  );
};

export default Bloggers;
