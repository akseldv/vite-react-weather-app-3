import { useState } from 'react'

import Search from './components/search/search'
import CurrentWeather from './components/current-weather/currentWeather';

import { WEATHER_API_KEY, WEATHER_API_URL } from './apis/api1';


function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {

    // console.log(searchData);

    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );


    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response) => {

      const weatherResponse = await response[0].json();
      const forcastResponse = await response[1].json();

      console.log(weatherResponse);
      console.log(forcastResponse);

      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForecast({ city: searchData.label, ...forcastResponse });

      // setCurrentWeather({ city: searchData.label, ...weatherResponse });
      // setForecast({ city: searchData.label, ...forcastResponse });
    })
    .catch(console.log);

  
  }

  return (
    <>
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </>
  )
}

export default App
