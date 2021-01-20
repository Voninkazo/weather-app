import React, { useState, useEffect } from 'react';

import Main from './components/Main';
import Highlights from './components/Highlights';
import WeatherInFiveDays from './components/WeatherInFiveDays';

export default function App () {
  // const [ location, setLocation ] = useState('london')
  // const [ weatherLocations, setWeatherLocations ] = useState([])
  // const [weatherObject, setWeatherObject] = useState([])

  // async function fetchLocation() {
  //   const res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${location}`)
  //   const dataLocation = await res.json()
  //   setWeatherLocations(dataLocation)
  //   console.log(weatherLocations)

  //   if (dataLocation.length) {
  //     console.log(dataLocation)
  //     const res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${dataLocation[0].woeid}`);
  //     const response = await res.json();
  //   setWeatherObject(response)
  //   }
  // }

  // useEffect(() => {
  //  fetchLocation()
  // }, [location])

  // function handleSearchForLocation(e) {
  //   e.preventDefault()
  //   const inputLocation = e.target.location.value
  //   setLocation(inputLocation)
  //   e.target.reset();
  // }

  return (
    <>
      <Main
        // weatherLocations={weatherLocations}
        // handleSearchForLocation={handleSearchForLocation}
        // weatherObject={weatherObject}
      />
      <WeatherInFiveDays 
      // weatherObject={weatherObject}
      />
      <Highlights 
      // weatherObject={weatherObject}
      />
    </>
  )
}

