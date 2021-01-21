import React, {useContext} from 'react';
import styled from 'styled-components';

import { GlobalContext } from './GlobalContext';
import {days} from './ArraysOfDate';
import {months} from './ArraysOfDate';

const CurrentWeatherContainer = styled.div`;
  padding: 52px 54px;
  ul {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
`

function CurrentWeather() {
    const {state} = useContext(GlobalContext);
    const {tempDegreeType,weatherObject,weatherLocations,loading} = state;
  
    const celsius = Math.round(weatherObject.consolidated_weather && weatherObject.consolidated_weather[0].the_temp);
    const fahrenheit = Math.round((celsius * 9/5) + 32);

    const date = new Date(weatherObject.consolidated_weather?.[0].applicable_date)
        const day = days[date.getDay()];
        const month = months[date.getMonth()];
        const numericDate = date.getDate();
        const fullDate = `${day}, ${numericDate} ${month}`;
        console.log(fullDate)
  return (
          !loading ? 
          <CurrentWeatherContainer>
            <ul className="detail-container">
             <li>
               <img className="current_weather_img" src={`https://www.metaweather.com//static/img/weather/${weatherObject.consolidated_weather?.[0].weather_state_abbr}.svg`} />
             </li>
             <li className="temp">{tempDegreeType === "celsius" ? celsius + "°C" : fahrenheit + "°F"}</li>
             <li className="weather">{weatherObject.consolidated_weather?.[0].weather_state_name}</li>
             <li className="date">Today {fullDate}</li>
             </ul>
             {
               weatherLocations.map((location,index) => {
                 return (
                   <div key={index}>
                     <p className="location">{location.title}</p>
                   </div>
                 )
               })
             }
        </CurrentWeatherContainer>
        :
        <p>Loading...</p>
  )
}

export default CurrentWeather
