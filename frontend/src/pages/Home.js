import { useEffect, useState } from "react"
import axios from 'axios';

// components
import WorkoutDetails from "../components/WorkoutDetails"


const Home = () => {
  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await axios.get('http://localhost:4000/api/workouts')
      console.log(response.data)
    }

    fetchWorkouts()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
    </div>
  )
}

export default Home