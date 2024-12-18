function Results() {
    // Tableau d'activités (les données que tu veux afficher)
    const activities = [
        { id: 1, name: "Nature en mouvement", type: "canyoning", location: "Montpellier", url: "https://nature-en-mouvement.com/"},
        { id: 2, name: "Alteo nature", type: "canyoning", location: "Prades-le-Lez", url: "https://www.alteo-nature.com/"},
        { id: 3, name: "Rock'N River", type: "canyoning", location: "Saint Guilhem le Désert", url: "https://rocnriver.fr/"},
    ];

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
                {/* itération sur les activités */}
                {activities.map((activity) => (
                    <div key={activity.id} className="result-item p-4 border rounded-lg">
                        <h3 className="text-lg font-semibold mt-2">{activity.name}</h3>
                        <p className="text-gray-600">Location: {activity.location}</p>
                        <a href={activity.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mt-2 block">Voir l'activité</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Results;
