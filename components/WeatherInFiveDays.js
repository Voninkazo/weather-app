 import React from 'react';
 import styled from 'styled-components';

 const days = ["Mon", "Tue", "Wed", "Thu", "Fri","Sat","Sun"];
 const months = ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aou","Sep","Nov","Dec"]

 const FutureWeatherSection = styled.section`
  padding: 52px 54px;
 `

 const FutureWeatherContainer = styled.div`
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 column-gap: 28px;
 row-gap: 32px;

 .future_weather_list_conatiner {
  background-color: #1E213A;
  padding: 22px 18px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 0;
 }
 `

export default function WeatherInFiveDays({weatherObject}) {

  return (
    <FutureWeatherSection>
     <FutureWeatherContainer>
      {weatherObject.length !== 0 ? weatherObject.consolidated_weather?.slice(1).map((weather,index) => {
        const date = new Date(`${weather.consolidated_weather}`)
        const day = days[date.getDay()];
        const month = months[date.getMonts()];
        const numericDate = date.getDate();
      return (
        <ul className="future_weather_list_conatiner" key={index}>
          <li className="date_of_weather">{`${day}, ${numericDate} ${month}`}</li>
          <li>
          <img src={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`} />
          </li>
          <li>
            <ul className="temp_detail_container">
              <li className="max_temp">{Math.round(weather.max_temp)}&deg;C</li>
              <li className="min_temp">{Math.round(weather.min_temp)}&deg;C</li>
            </ul>
          </li>
        </ul>
      )
    })
    : 
    <p>Loading...</p>
  }
    </FutureWeatherContainer>
    </FutureWeatherSection>
  )
}