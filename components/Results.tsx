function Results() {
    return (
        <section id="results-section" className="w-full bg-gray-100 shadow-md p-4 rounded-lg ml-4">
            {/* Titre de la section */}
            <h2 className="text-xl font-bold mb-4">Résultats</h2>
            
            {/* Paragraphe ou description générale */}
            <p className="text-gray-700 mb-4">
                Les résultats de votre recherche apparaîtront ici.
            </p>

            {/* Conteneur des résultats sous forme de cartes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Exemple de résultat avec une image et un lien */}
                <div className="result-item">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="https://via.placeholder.com/300" alt="Entreprise 1" className="w-full h-auto rounded-lg"/>
                    </a>
                    <h3 className="text-lg font-semibold mt-2">Entreprise 1</h3>
                    <p className="text-gray-600">Description rapide de l'entreprise.</p>
                </div>

                {/* Un autre exemple de résultat */}
                <div className="result-item">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="https://via.placeholder.com/300" alt="Entreprise 2" className="w-full h-auto rounded-lg"/>
                    </a>
                    <h3 className="text-lg font-semibold mt-2">Entreprise 2</h3>
                    <p className="text-gray-600">Description rapide de l'entreprise.</p>
                </div>

                {/* Ajouter plus de résultats ici */}
            </div>
        </section>
    );
}

export default Results;
