
import React, { useState } from 'react';
import { createItem, updateItem } from './api';

const ItemForm = ({ item, onSave }) => {
  const [formData, setFormData] = useState(item || { name: '', description: '', price: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.id) {
      await updateItem(formData.id, formData);
    } else {
      await createItem(formData);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Descripción"
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Precio"
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default ItemForm;
