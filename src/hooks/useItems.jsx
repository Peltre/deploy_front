import React, { useState } from 'react'

const API_URL = "https://deploy-back-bceo.onrender.com";

const useItems = (token) => {
    const [items, setItems] = useState([]);
  const add = async (item) => {
        const token = localStorage.getItem("token");
        const result = await fetch(`${API_URL}/items`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(item),
        });
        const data = await result.json();
        setItems(data);
    };

    const getItems = async () => {
        const token = localStorage.getItem("token");
        const result = await fetch(`${API_URL}/items`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "content-type": "application/json"
            },
        });
        const data = await result.json();
        setItems(data);
    }


    const del = async (id) => {
        const token = localStorage.getItem("token");
        const result = await fetch(`${API_URL}/items/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        setItems(items.filter((item) => item.id !== id));
    };

    return { items, addItem: add, deleteItem: del, getItems }
}

export default useItems
