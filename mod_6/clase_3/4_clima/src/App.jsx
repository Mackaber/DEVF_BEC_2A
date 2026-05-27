import { useEffect, useMemo, useState } from 'react'
import Weather from './components/Weather'
import './App.css'

const endpoint = "https://api.openweathermap.org/data/2.5/weather?lat=22.1536554&lon=-100.9794814&appid=4a5109c3781472f31679996c0997bdcb"
function App() {
  const [weatherValues, setWeatherValues] = useState({})

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(endpoint)
      const data = await response.json()
      setWeatherValues(data.main)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>Clima</h1>
      <Weather {...weatherValues} />
    </div>
  )
}

export default App
