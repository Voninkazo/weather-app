import React,{useContext} from 'react'
import styled from 'styled-components'

import Locations from './Locations';
import Menu from './Menu';
import { GlobalContext } from './GlobalContext';
// import Weather from './Weather';

const MainStyles = styled.main`
// display: flex;
// grid-template-rows: repeat(2,1fr);
// column-gap:154px;

.btn-search {
  background: #6E707A;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #E7E7EB;
  padding: 11px 18px;
  cursor: pointer;
}
`

const CurrentWeatherContainer = styled.div`
  padding: 52px 54px;
  ul {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
`

export default function Main(
  {
    handleSearchForLocation,
    weatherLocations,
    weatherObject,
  }
) {
  console.log(weatherObject)
  const {state} = useContext(GlobalContext);
  const {tempDegreeType} = state;

  const celsius = Math.round(weatherObject.consolidated_weather && weatherObject.consolidated_weather[0].the_temp);
  const fahrenheit = Math.round((celsius * 9/5) + 32);

  return (
    <MainStyles>
      <div className="current-detail-container">
            <Menu />
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
            
            <Locations
            weatherLocations={weatherLocations}
            handleSearchForLocation={handleSearchForLocation}
            />
      </div>
      <div>
      {/* <Weather 
        weatherObject={weatherObject}
      /> */}
      </div>
    </MainStyles>
  )
}

