import { useMemo } from "react"

function Weather({ temp, feels_like, temp_min, temp_max, pressure, humidity }) {
  
    let { c_temp, c_feels_like, c_temp_min, c_temp_max } = useMemo(() => {
        // Convertir de Kelvin a Celsius
        let weatherValues = { temp, feels_like, temp_min, temp_max }    
        weatherValues.c_temp = (weatherValues.temp - 273.15).toFixed(2)
        weatherValues.c_feels_like = (weatherValues.feels_like - 273.15).toFixed(2)
        weatherValues.c_temp_min = (weatherValues.temp_min - 273.15).toFixed(2)
        weatherValues.c_temp_max = (weatherValues.temp_max - 273.15).toFixed(2)
        return weatherValues
    }, [temp, feels_like, temp_min, temp_max])

    return (
        <div>
        <p id="temp">Temperature: {c_temp}</p>
        <p id="feels_like">Feels Like: {c_feels_like}</p>
        <p id="temp_min">Minimum Temperature: {c_temp_min}</p>
        <p id="temp_max">Maximum Temperature: {c_temp_max}</p>
        <p id="pressure">Pressure: {pressure}</p>
        <p id="humidity">Humidity: {humidity}</p>
        </div>
    )
}

export default Weather