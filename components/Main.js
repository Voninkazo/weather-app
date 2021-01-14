import React from 'react'
import styled from 'styled-components'

import Locations from './Locations';
import Weather from './Weather';

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
    weatherInFiveDays,
  }
) {
  console.log(weatherInFiveDays)
  return (
    <MainStyles>
      <div className="current-detail-container">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">
                <span className="btn-search">Search Location</span>
            </label>
            <CurrentWeatherContainer>
            <ul className="detail-container">
             <li className="temp">{weatherInFiveDays.consolidated_weather?.[0].the_temp}</li>
             <li className="weather">{weatherInFiveDays.consolidated_weather?.[0].weather_state_name}</li>
             <li className="date">{weatherInFiveDays.consolidated_weather?.[0].applicable_date}</li>
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
      <Weather 
        weatherInFiveDays={weatherInFiveDays}
      />
      </div>
    </MainStyles>
  )
}

