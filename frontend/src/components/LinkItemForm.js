import React, { useState } from "react";
import { createItem } from "../data";
import "../App.css";


const LinkItemForm = ({ onCreated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newItem = { title, description, link };
      const response = await createItem(newItem);
      onCreated(response.data);
      setTitle("");
      setDescription("");
      setLink("");
    } catch (error) {
      console.error("Error creating item", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Create Item</h2>
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Title</label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Description</label>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Link</label>
        <input
          type="url"
          placeholder="https://example.com"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        Create
      </button>
    </form>
  );
};

export default LinkItemForm;