import { useEffect, useState } from 'react'

const ActivitiesList = () => {
  const [activities, setActivities] = useState<any[]>([])

  // Récupérer les données à partir de l'API
  useEffect(() => {
    const fetchActivities = async () => {
      const response = await fetch('/api/activities') // ton API qui renvoie les activités
      const data = await response.json()
      setActivities(data)  // Mettre à jour l'état avec les données récupérées
    }

    fetchActivities()
  }, [])  // Le tableau vide [] signifie que l'effet ne se déclenche qu'une fois (au montage du composant)

  return (
    <div>
      <h1>List of Activities</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Location</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {activities.length === 0 ? (
            <tr><td colSpan={4}>Loading...</td></tr>
          ) : (
            activities.map((activity) => (
              <tr key={activity.id}>
                <td>{activity.name}</td>
                <td>{activity.type}</td>
                <td>{activity.location}</td>
                <td>{activity.duration}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ActivitiesList
