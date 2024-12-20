import { useEffect, useState } from 'react';

function Results() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch('/api/activities');
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };
    
    fetchActivities(); 
  }, []);

  return (
    <section id="results-section" className="w-full bg-gray-100 shadow-md p-4 rounded-lg ml-4">
      <h2 className="text-xl font-bold mb-4">Résultats</h2>

      <p className="text-gray-700 mb-4">
        Les résultats de votre recherche apparaîtront ici.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {activities.length === 0 ? (
          <p>Chargement des activités...</p>
        ) : (
          activities.map((activity) => (
            <div key={activity.id} className="result-item p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mt-2">{activity.name}</h3>
              <p className="text-gray-600">Location: {activity.location}</p>
              <p className="text-gray-600">Type: {activity.type}</p>

              {/* Affichage de l'image */}
              {activity.url_img && (
                <img
                  src={activity.url_img}
                  alt={`Image de l'activité ${activity.name}`}
                  className="w-full h-32 object-cover mt-2"
                />
              )}

              {/* Lien vers l'activité */}
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
