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
  return (
    <MainStyles>
      <div>
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">
                <span>Search Location</span>
            </label>
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

