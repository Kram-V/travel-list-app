import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackageList from "./PackageList";
import Stats from "./Stats";

function App() {
  const [initialItems, setInitialItems] = useState([]);

  const handleSubmit = (data) => {
    setInitialItems([data, ...initialItems]);
  };

  const handleDelete = (id) => {
    setInitialItems((items) => items.filter((item) => item.id !== id));
  };

  const handleRemoveAllItems = () => {
    const confirmed = window.confirm(
      "Are you sure you want to remove all items?"
    );

    if (confirmed) setInitialItems([]);
  };

  const handleToggleItem = (id) => {
    setInitialItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onSubmit={handleSubmit} />
      <PackageList
        initialItems={initialItems}
        onDelete={handleDelete}
        onToggle={handleToggleItem}
        onRemoveAllItems={handleRemoveAllItems}
      />
      <Stats initialItems={initialItems} />
    </div>
  );
}

export default App;
