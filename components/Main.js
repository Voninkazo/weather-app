import React from 'react'
import styled from 'styled-components'

import Locations from './Locations';
import Menu from './Menu';
import CurrentWeather from './CurrentWeather';

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

export default function Main(
  {
    handleSearchForLocation,
    weatherLocations,
    weatherObject,
  }
) {
 

  return (
    <MainStyles>

      <div className="current-detail-container">
            <Menu />
            <CurrentWeather 
            weatherObject={weatherObject}
            weatherLocations={weatherLocations}
            />
            <Locations
            weatherLocations={weatherLocations}
            handleSearchForLocation={handleSearchForLocation}
            />
      </div>
    </MainStyles>
  )
}

