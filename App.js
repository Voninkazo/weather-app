import React, { useState, useEffect } from 'react';

import Main from './components/Main';

export default function App () {
  const [ location, setLocation ] = useState('london')
  const [ weatherLocations, setWeatherLocations ] = useState([])
  const [weatherInFiveDays, setWeatherInFiveDays] = useState([])

  async function fetchLocation() {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${location}`)
    const dataLocation = await res.json()
    setWeatherLocations(dataLocation)

    if (weatherLocations.length) {
      console.log(dataLocation)
      const res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${weatherLocations[0].woeid}`);
      const response = await res.json();
    setWeatherInFiveDays(response)
    }
  }

  useEffect(() => {
   fetchLocation()
  }, [location])

  function handleSearchForLocation(e) {
    e.preventDefault()
    const inputLocation = e.target.location.value
    setLocation(inputLocation)
    e.target.reset();
  }

  return (
    <>
      <Main
        weatherLocations={weatherLocations}
        handleSearchForLocation={handleSearchForLocation}
        weatherInFiveDays={weatherInFiveDays}
      />
    </>
  )
}

