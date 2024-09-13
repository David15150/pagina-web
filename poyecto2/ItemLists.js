
import React, { useEffect, useState } from 'react';
import { fetchItems, deleteItem } from '../api/api';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const items = await fetchItems();
      setItems(items);
    };
    getItems();
  }, []);

  const handleDelete = async (id) => {
    await deleteItem(id);
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Lista de Ítems</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDelete(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
