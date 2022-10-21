import { useEffect, useState } from 'react'

const WEATHER_API = 'https://api.open-meteo.com/v1/forecast?latitude=-34.9214&longitude=-57.9545&hourly=temperature_2m&daily=apparent_temperature_max,apparent_temperature_min&timezone=America%2FSao_Paulo'

const useWeather = () => {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(WEATHER_API)
      const data = await response.json()

      setWeather(data)
    }

    fetchWeather() 
  }, [])


  return {weather}
}

export default useWeather