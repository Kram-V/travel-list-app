import React, { useState } from "react";
import PackageItem from "./PackageItem";
import Button from "./Button";

const PackageList = ({
  initialItems,
  onDelete,
  onToggle,
  onRemoveAllItems,
}) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = initialItems;
  if (sortBy === "description")
    sortedItems = initialItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = initialItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <PackageItem
            key={item.id}
            id={item.id}
            description={item.description}
            quantity={item.quantity}
            packed={item.packed}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by item name</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <Button onClick={onRemoveAllItems}>Clear List</Button>
      </div>
    </div>
  );
};

export default PackageList;
