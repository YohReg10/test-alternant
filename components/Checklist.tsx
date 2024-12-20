import React, { useState } from 'react';

function Checklist({ onFilterChange }) {
  const [checkedItem, setCheckedItem] = useState(null); // On stocke une seule valeur à la fois

  const handleChange = (event) => {
    const value = event.target.value;
    setCheckedItem((prevCheckedItem) => {
      const newCheckedItem = event.target.checked ? value : null; // Si décoché, on remet à null
      onFilterChange(newCheckedItem); // On notifie le parent avec le filtre sélectionné
      return newCheckedItem;
    });
  };

  return (
    <div id="checklist-section" className="w-full max-w-full bg-white shadow-md p-4 rounded-lg overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Distances (km)</h2>
      <ul className="list-none pl-0 flex flex-col sm:flex-row sm:space-x-6 w-full">
        <li className="flex items-center mb-2 w-full sm:w-auto">
          <input
            type="checkbox"
            id="item1"
            value="<5km"
            checked={checkedItem === "<5km"}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <label htmlFor="item1" className="leading-5">&lt;5</label>
        </li>
        <li className="flex items-center mb-2 w-full sm:w-auto">
          <input
            type="checkbox"
            id="item2"
            value="5-15km"
            checked={checkedItem === "5-15km"}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <label htmlFor="item2" className="leading-5">5-15</label>
        </li>
        <li className="flex items-center mb-2 w-full sm:w-auto">
          <input
            type="checkbox"
            id="item3"
            value="15-25km"
            checked={checkedItem === "15-25km"}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <label htmlFor="item3" className="leading-5">15-25</label>
        </li>
        <li className="flex items-center mb-2 w-full sm:w-auto">
          <input
            type="checkbox"
            id="item4"
            value=">25km"
            checked={checkedItem === ">25km"}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <label htmlFor="item4" className="leading-5">&gt;25</label>
        </li>
        
      </ul>
    </div>
  );
}

export default Checklist;
