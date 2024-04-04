import React from 'react'
import './currentWeather.css'

const CurrentWeather = ({data}) => {
  return (

    <div className='weather'>
        <div className='top'>
            <div>
            <div className='city'>{data.city}</div>
            <div className='weather-description'>{data.weather[0].description}</div>
            </div>
            <img className="weather-icon" src={`icons/${data.weather[0].icon}.png`}/>
        </div>
        <div className='bottom'>
            <div className='temperature'>{Math.round(data.main.temp)}°C</div>

            <div>
                <div className='parameter-row'>
                <div className='details'>Details</div>
                </div>
                <div className='parameter-row'>
                    <div className="parameter-label">Feels like</div>
                    <div>{Math.round(data.main.feels_like)}°C</div>
                </div>
                <div className='parameter-row'>
                    <div>Wind</div>
                    <div>{data.wind.speed} m/s</div>
                </div>
                <div className='parameter-row'>
                    <div>Humidity</div>
                    <div>{data.main.humidity}%</div>
                </div>
            </div>

        </div>
        
    </div>

  )
}

export default CurrentWeather