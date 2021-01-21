import React from 'react';

import Menu from './components/Menu';
import CurrentWeather from './components/CurrentWeather';
import LocationsSearch from './components/LocationsSearch';
import WeatherInFiveDays from './components/WeatherInFiveDays';
import Highlights from './components/Highlights';

export default function App () {

  return (
    <>
    <header>
      <Menu />
    </header>
    <main>
      <section>
        <CurrentWeather />
        <LocationsSearch />
      </section>
      <section>
        <WeatherInFiveDays />
        <Highlights />
      </section>
    </main>
    </>
  )
}

