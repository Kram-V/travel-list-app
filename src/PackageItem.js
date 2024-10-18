import React from "react";

const PackageItem = ({
  id,
  description,
  quantity,
  packed,
  onDelete,
  onToggle,
}) => {
  return (
    <li>
      <input type="checkbox" value={packed} onChange={() => onToggle(id)} />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDelete(id)}>❌</button>
    </li>
  );
};

export default PackageItem;
