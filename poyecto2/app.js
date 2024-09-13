
import React, { useState } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleSave = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <ItemForm onSave={handleSave} />
      <ItemList key={refresh} />
    </div>
  );
};

export default App;
