import React, { useState, useEffect } from "react";
import ItemList from "./components/LinkItemList";
import ItemForm from "./components/LinkItemForm";
import ItemEdit from "./components/LinkItemEdit";
import { getItems } from "./data";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await getItems();
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items", error);
    }
  };

  const handleItemEdit = (item) => setEditingItem(item);

  const handleUpdateComplete = (updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setEditingItem(null);
  };

  const handleItemCreated = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemDeleted = (deletedItemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== deletedItemId));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Knowledge Base</h1>
      <div className="space-y-4">
      <ItemList items={items} onEdit={handleItemEdit} onDelete={handleItemDeleted} />
        {!editingItem ? (
          <ItemForm onCreated={handleItemCreated} />
        ) : (
          <ItemEdit item={editingItem} onUpdated={handleUpdateComplete} />
        )}
      </div>
    </div>
  );
};

export default App;