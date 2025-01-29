import { useState } from 'react';
import Header from "../components/Header";
import Checklist from "../components/Checklist";
import Results from "../components/Results";
import SensationChecklist from "../components/SensationChecklist";

function HomePage() {
  const [filters, setFilters] = useState({
    distance: "", // Filtre pour la distance
    sensation: "" // Filtre pour la sensation
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  return (
    <div id="layout-page" className="bg-blue-50 h-screen">
      {/* Header et ruban supérieur */}
      <div id="header-ruban" className="text-black">
        <Header />
        <h1 className="text-center text-3xl p-3">
          <strong>Activités et Aventures à Montpellier</strong>
        </h1>
      </div>

      {/* Contenu principal du site */}
      <div id="site-content" className="flex flex-row gap-4 p-4">
        {/* Section gauche : Checklist (parent) */}
        <div id="checklist-section" className="w-1/4">
          <div className="flex flex-col gap-6">
            {/* Enfant : Checklist pour la distance */}
            <Checklist onFilterChange={handleFilterChange} />
            {/* Enfant : Sensation Checklist */}
            <SensationChecklist onFilterChange={handleFilterChange} />
          </div>
        </div>

        {/* Section droite : Résultats */}
        <div id="results-section" className="w-3/4">
          <Results filters={filters} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
