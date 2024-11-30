import React, { useState } from "react";
import { updateItem } from "../data";
import "../App.css";

const LinkItemEdit = ({ item, onUpdated }) => {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description || "");
  const [link, setLink] = useState(item.link || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedItem = { ...item, title, description, link };
      await updateItem(item.id, updatedItem);
      onUpdated(updatedItem);
    } catch (error) {
      console.error("Error updating item", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Edit Item</h2>
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Link</label>
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Update
      </button>
    </form>
  );
};

export default LinkItemEdit;