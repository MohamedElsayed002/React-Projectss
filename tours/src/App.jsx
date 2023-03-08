
import {useState,useEffect} from 'react'
import Loading from './Loading'
import Tours from './Tours'
const App = () => {

  const [tours,setTours] = useState([])
  const [loading,setLoading] = useState(false)




  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch("https://course-api.com/react-tours-project")
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    }catch(error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  },[])

  if (loading) {
    return (
      <main>
              <Loading/> 
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} setTours={setTours} />
    </main>
  )
}

export default App