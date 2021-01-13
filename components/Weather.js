 import React from 'react';
 import styled from 'styled-components';

export default function Weather({weatherInFiveDays}) {

  return (
    <>
      <section>
      {
    weatherInFiveDays.length !== 0 ? weatherInFiveDays.consolidated_weather?.slice(1).map((weather,index) => {
      return (
        <div key={index}>
           <p>{weather.applicable_date}</p>
          <p>{weather.max_temp} {weather.min_temp}</p>
          <p>{weather.weather_state_name}</p>
        </div>
      )
    })
    : 
    <p>Loading...</p>
    }
      </section>
      <section>
        <h2>Today's highlights</h2>
              <ul>
                <li>Wind status: {weatherInFiveDays.consolidated_weather?.[0].wind_speed}</li>
                <li>Humidity: {weatherInFiveDays.consolidated_weather?.[0].humidity}</li>
                <li>Visibility:{weatherInFiveDays.consolidated_weather?.[0].visibility}</li>
                <li>Air Pressure: {weatherInFiveDays.consolidated_weather?.[0].air_pressure}</li>
              </ul>
      </section>
    </>
  )
}