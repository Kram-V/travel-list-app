import React from "react";

const Stats = ({ initialItems }) => {
  const numItems = initialItems.length;
  const numPackedItems = initialItems.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100) || 0;

  console.log("PERCENTAGE: ", percentage);

  return (
    <footer className="stats">
      <img
        style={{
          width: "60px",
          animation: "spin 5s linear infinite",
        }}
        src="react-logo.png"
        alt="React Logo"
      />
      <em>
        {percentage === 100 ? (
          "You got everything! Ready to go ✈️"
        ) : (
          <>
            💼 You have {numItems} items on your list, and you already packed{" "}
            {numPackedItems > 0 ? numPackedItems : 0} ({percentage}%)
          </>
        )}
      </em>
      <img
        style={{
          width: "60px",
          animation: "spin 5s linear infinite",
        }}
        src="react-logo.png"
        alt="React Logo"
      />
    </footer>
  );
};

export default Stats;
