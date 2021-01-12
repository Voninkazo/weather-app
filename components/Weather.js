 import React from 'react';
 import styled from 'styled-components';

export default function Weather({weatherInFiveDays}) {
  console.log(weatherInFiveDays)
  const futureWeather = weatherInFiveDays.consolidated_weather
  console.log(futureWeather);

  const weatherInFiveDaysElem = (futureWeather) => {
    return futureWeather ? 
        <div> {futureWeather.map((weather, index) =>
          <p key={index}>
          {weather.weather_state_name}
          </p>)
        }
        </div>
        : 
        <p>Loading...</p>
    }

  return (
    <>
      <section>
        {weatherInFiveDaysElem(futureWeather)}
      </section>
      <section>
        <h2>Today's highlights</h2>
            <ul>
                <li>Wind status</li>
                <li>Humidity</li>
                <li>Visibility</li>
                <li>Air Pressure</li>
            </ul>
      </section>
    </>
  )
}