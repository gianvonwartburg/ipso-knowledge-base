import axios from "axios";

// Base URL of the backend
const API_BASE_URL = "https://localhost:7016/api/KnowledgeBase";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
      "Content-Type": "application/json"
  }
});

//Read
export const getItems = () => api.get("/");
//Create
export const createItem = (item) => api.post("/", item); 
//Update
export const updateItem = (id, item) => api.put(`/${id}`, item);
//Delete
export const deleteItem = (id) => api.delete(`/${id}`);