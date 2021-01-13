import React from 'react'
import styled from 'styled-components'

import Locations from './Locations';
import Weather from './Weather';

const MainStyles = styled.main`
display: grid;
grid-template-columns: repeat(2,1fr);
column-gap:154px;
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
      <div>
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">
                <span>Search Location</span>
            </label>
            <div>
             <p>{weatherInFiveDays.consolidated_weather?.[0].the_temp}</p>
             <p>{weatherInFiveDays.consolidated_weather?.[0].weather_state_name}</p>
             <p>{weatherInFiveDays.consolidated_weather?.[0].applicable_date}</p>
             {
               weatherLocations.map(location => {
                 return (
                   <p>{location.title}</p>
                 )
               })
             }
            </div>
            
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

