import { useEffect, useState } from 'react';

function Results({ filters }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch('/api/activities');
        const data = await response.json();
        console.log("Données reçues :", data);
        setActivities(data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []);

  // Convertir le filtre "distance" en un intervalle
  const getDistanceRange = (filter) => {
    if (!filter || filter === "null") return null;
    if (filter.includes("<")) return [0, 5]; // "<5km"
    if (filter.includes(">")) return [50, Infinity]; // ">50km"

    const parts = filter.match(/\d+/g); // Extrait les nombres (ex: "5-15km" -> ["5", "15"])
    if (parts && parts.length === 2) {
      return [parseFloat(parts[0]), parseFloat(parts[1])]; // [5, 15]
    }
    return null;
  };

  // Dictionnaire de correspondance pour la sensation
  const sensationMapping = {
    "Légère": 0,
    "Moyenne": 1,
    "Forte": 2,
    "Très forte": 3,
  };

  const filterActivities = () => {
    console.log("Filtres actifs :", filters);

    return activities.filter((activity) => {
      console.log(`Analyse de ${activity.name} - Distance: ${activity.distance}, Sensation: ${activity.sensation}`);

      // Gestion du filtre Distance
      const distanceRange = getDistanceRange(filters.distance);
      const matchesDistance = distanceRange
        ? activity.distance >= distanceRange[0] && activity.distance <= distanceRange[1]
        : true;

      // Gestion du filtre Sensation
      const selectedSensation = sensationMapping[filters.sensation]; // Convertir la sensation texte en nombre
      const matchesSensation = selectedSensation !== undefined
        ? activity.sensation === selectedSensation
        : true;

      return matchesDistance && matchesSensation;
    });
  };

  const filteredActivities = filterActivities();

  return (
    <section id="results-section" className="w-full bg-gray-100 shadow-md p-4 rounded-lg ml-4">
      <h2 className="text-xl font-bold mb-4">Résultats :</h2>

      <p className="text-gray-700 mb-4">
        {filteredActivities.length > 0
          ? `Il y a ${filteredActivities.length} résultat${filteredActivities.length > 1 ? 's' : ''} correspondant${filteredActivities.length > 1 ? 's' : ''} à votre recherche.`
          : 'Aucun résultat trouvé pour votre recherche.'
        }
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredActivities.length === 0 ? (
          <p>Aucune activité trouvée.</p>
        ) : (
          filteredActivities.map((activity) => (
            <div key={activity.id} className="result-item p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mt-2">{activity.name}</h3>
              <p className="text-gray-600">Location: {activity.location}</p>
              <p className="text-gray-600">Type: {activity.type}</p>

              {activity.url_img && (
                <img
                  src={activity.url_img}
                  alt={`Image de l'activité ${activity.name}`}
                  className="w-full h-32 object-cover mt-2"
                />
              )}

              {activity.url_site && (
                <a
                  href={activity.url_site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline mt-2 block"
                >
                  Voir l'activité
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Results;
