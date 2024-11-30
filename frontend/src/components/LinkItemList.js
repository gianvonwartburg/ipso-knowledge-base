import { deleteItem } from "../data";
import "../App.css";

const LinkItemList = ({ items, onEdit, onDelete }) => {
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      onDelete(id); 
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h1 className="text-xl font-semibold mb-4">Items</h1>
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="p-4 border border-gray-300 rounded-md flex justify-between items-center"
          >
            <div>
              <strong className="block text-lg">{item.title}</strong>
              {item.description && (
                <p className="text-gray-700 text-sm">{item.description}</p>
              )}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {item.link}
                </a>
              )}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(item)}
                className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkItemList;