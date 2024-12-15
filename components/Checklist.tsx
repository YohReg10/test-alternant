import React, { useState } from 'react';

function Checklist() {
  // Crée un état pour l'élément coché
  const [checkedItem, setCheckedItem] = useState(null);

  // Fonction pour gérer le changement de checkbox
  const handleChange = (event) => {
    // Si l'élément est coché, on met à jour l'état
    const value = event.target.checked ? event.target.value : null;
    setCheckedItem(value);
  };

  return (
    <div
      id="checklist-section"
      className="w-full bg-white shadow-md p-4 rounded-lg"
    >
      <h2 className="text-xl font-bold mb-4">Distances</h2>
      <ul className="list-none pl-0 flex space-x-6">
        <li className="flex items-center mb-2">
          <input
            type="checkbox"
            id="item1"
            value="<5km"
            checked={checkedItem === "<5km"}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <label htmlFor="item1" className="leading-5">&lt;5km</label>
        </li>
        <li className="flex items-center mb-2">
          <input
            type="checkbox"
            id="item2"
            value="5-10km"
            checked={checkedItem === "5-10km"}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <label htmlFor="item2" className="leading-5">&lt;15km</label>
        </li>
        <li className="flex items-center mb-2">
          <input
            type="checkbox"
            id="item3"
            value="10-20km"
            checked={checkedItem === "10-20km"}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <label htmlFor="item3" className="leading-5">&lt;25km</label>
        </li>
      </ul>
    </div>
  );
}

export default Checklist;
