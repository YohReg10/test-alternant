import { useState } from 'react';
import Header from "../components/Header";
import Checklist from "../components/Checklist";
import Results from "../components/Results";

function HomePage() {
  const [filters, setFilters] = useState(null); // On initialise filters à null

  const handleFilterChange = (newFilter) => {
    setFilters(newFilter); // On met à jour le filtre avec la nouvelle valeur
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
        {/* Section gauche : Checklist */}
        <div id="checklist-section" className="w-1/4">
          <Checklist onFilterChange={handleFilterChange} />
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
