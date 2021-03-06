 import React,{useContext} from 'react';
 import styled from 'styled-components';

import { GlobalContext } from './GlobalContext';
import {days} from './ArraysOfDate';
import {months} from './ArraysOfDate';

 const FutureWeatherSection = styled.section`
  padding: 52px 54px;

  @media(min-width:1114px) {
    padding-top: 66px;
    padding-left:0;
    padding-bottom: 72px;
  }
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

@media(min-width:1114px) {
  display: flex;
  flex-direction: row;
}
 `

export default function WeatherInFiveDays() {
  const {state} = useContext(GlobalContext);
  const {tempDegreeType,weatherObject,loading} = state;

  return (
    <FutureWeatherSection>
     {
       !loading ? 
       <FutureWeatherContainer>
      {weatherObject.length !== 0 ? weatherObject.consolidated_weather?.slice(1).map((weather,index) => {
        const date = new Date(weather.applicable_date)
        const day = days[date.getDay()];
        const month = months[date.getMonth()];
        const numericDate = date.getDate();
        const fullDate = `${day}, ${numericDate} ${month}`;
        console.log(fullDate)

        const max_celsius = Math.round(weather.max_temp && weather.max_temp);
        const max_fahrenheit = Math.round((max_celsius * 9/5) + 32);

        const min_celsius = Math.round(weather.min_temp && weather.min_temp);
        const min_fahrenheit = Math.round((min_celsius * 9/5) + 32);
      return (
        <ul className="future_weather_list_conatiner" key={index}>
          <li className="date_of_weather">{fullDate}</li>
          <li>
          <img className="future_weather_img" src={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`} />
          </li>
          <li>
            <ul className="temp_detail_container">
              <li className="max_temp">{tempDegreeType === "celsius" ? max_celsius + "°C" : max_fahrenheit + "°F"}</li>
              <li className="min_temp">{tempDegreeType === "celsius" ? min_celsius + "°C"  : min_fahrenheit + "°F"}</li>
            </ul>
          </li> 
        </ul>
      )
    })
    : 
    <p style={{color:"white", }}>Loading...</p>  }
    </FutureWeatherContainer>
     :
     <p>Loading...</p>
  }
    </FutureWeatherSection>
  )
}