import React, { useState } from "react";

const SensationChecklist = () => {
  // État pour gérer le filtre de sensation
  const [filter, setFilter] = useState<string>("");

  return (
    <div id="sensation-section" className="w-full max-w-full bg-white shadow-md p-4 rounded-lg overflow-x-auto mb-6">
      <h2 className="text-xl font-bold mb-4">Sensation</h2>
      
      {/* Filtre de sensation */}
      <div className="mb-4">
        <label htmlFor="sensation-filter" className="font-semibold">Filtrer par sensation :</label>
        <select
          id="sensation-filter"
          className="ml-2 p-2 border rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}>

          <option value="">Tout afficher</option>
          <option value="Légère">Légère</option>
          <option value="Modérée">Modérée</option>
          <option value="Forte">Forte</option>
          <option value="Très forte">Très forte</option>
        </select>
      </div>
    </div>
  );
};

export default SensationChecklist;
