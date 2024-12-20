import React, { useState } from 'react';

function Checklist({ onFilterChange }) {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = event.target.checked
        ? [...prevCheckedItems, value]
        : prevCheckedItems.filter((item) => item !== value);
      onFilterChange(newCheckedItems); // On notifie le parent avec les filtres sélectionnés
      return newCheckedItems;
    });
  };

  return (
    <div
      id="checklist-section"
      className="w-full max-w-full bg-white shadow-md p-4 rounded-lg overflow-x-auto"
    >
      <h2 className="text-xl font-bold mb-4">Distances</h2>
      <ul className="list-none pl-0 flex flex-col sm:flex-row sm:space-x-6 w-full">
        <li className="flex items-center mb-2 w-full sm:w-auto">
          <input
            type="checkbox"
            id="item1"
            value="<5km"
            checked={checkedItems.includes("<5km")}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <label htmlFor="item1" className="leading-5">&lt;5km</label>
        </li>
        <li className="flex items-center mb-2 w-full sm:w-auto">
          <input
            type="checkbox"
            id="item2"
            value="5-10km"
            checked={checkedItems.includes("5-10km")}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <label htmlFor="item2" className="leading-5">5-10km</label>
        </li>
        <li className="flex items-center mb-2 w-full sm:w-auto">
          <input
            type="checkbox"
            id="item3"
            value="10-20km"
            checked={checkedItems.includes("10-20km")}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <label htmlFor="item3" className="leading-5">10-20km</label>
        </li>
      </ul>
    </div>
  );
}

export default Checklist;
