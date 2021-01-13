import React, { useState, useEffect } from 'react';

import Main from './components/Main';

export default function App () {
  const [ location, setLocation ] = useState('london')
  const [ weatherLocations, setWeatherLocations ] = useState([])
  const [weatherInFiveDays, setWeatherInFiveDays] = useState([])
  // const [weatherDetail,setWeatherDetail] = useState([]);

  async function fetchLocation() {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${location}`)
    const dataLocation = await res.json()
    setWeatherLocations(dataLocation)
    console.log(weatherLocations)

    if (dataLocation.length) {
      console.log(dataLocation)
      const res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${dataLocation[0].woeid}`);
      const response = await res.json();
    setWeatherInFiveDays(response)
    // setWeatherDetail(response);
    // console.log(weatherDetail)
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

  console.log(weatherInFiveDays)

  return (
    <>
      <Main
        weatherLocations={weatherLocations}
        handleSearchForLocation={handleSearchForLocation}
        weatherInFiveDays={weatherInFiveDays}
        // weatherDetail={weatherDetail}
      />
    </>
  )
}

