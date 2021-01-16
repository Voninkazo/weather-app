import React, {useContext} from 'react';
import styled from 'styled-components';

import { GlobalContext } from './GlobalContext';

const CurrentWeatherContainer = styled.div`;
  padding: 52px 54px;
  ul {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
`

function CurrentWeather({weatherObject,weatherLocations}) {
    const {state} = useContext(GlobalContext);
    const {tempDegreeType} = state;
  
    const celsius = Math.round(weatherObject.consolidated_weather && weatherObject.consolidated_weather[0].the_temp);
    const fahrenheit = Math.round((celsius * 9/5) + 32);
  return (
        <CurrentWeatherContainer>
            <ul className="detail-container">
             <li className="temp">{tempDegreeType === "celsius" ? celsius + "°C" : fahrenheit + "°F"}</li>
             <li>
               <img className="current_weather_img" src={`https://www.metaweather.com//static/img/weather/${weatherObject.consolidated_weather?.[0].weather_state_abbr}.svg`} />
             </li>
             <li className="weather">{weatherObject.consolidated_weather?.[0].weather_state_name}</li>
             <li className="date">Today {weatherObject.consolidated_weather?.[0].applicable_date}</li>
             </ul>
             {
               weatherLocations.map(location => {
                 return (
                   <p className="location">{location.title}</p>
                 )
               })
             }
        </CurrentWeatherContainer>
  )
}

export default CurrentWeather
