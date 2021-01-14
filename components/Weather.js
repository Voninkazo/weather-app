 import React from 'react';
 import styled from 'styled-components';

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

export default function Weather({weatherInFiveDays}) {

  return (
    <FutureWeatherSection>
     <FutureWeatherContainer>
      {
    weatherInFiveDays.length !== 0 ? weatherInFiveDays.consolidated_weather?.slice(1).map((weather,index) => {
      return (
        <ul className="future_weather_list_conatiner" key={index}>
          <li className="date_of_weather">{weather.applicable_date}</li>
          <li>
            <ul className="temp_detail_container">
              <li className="max_temp">{weather.max_temp}</li>
              <li className="min_temp">{weather.min_temp}</li>
            </ul>
          </li>
        </ul>
      )
    })
    : 
    <p>Loading...</p>
    }
    </FutureWeatherContainer>
      <section>
        <h2>Today's highlights</h2>
              <ul className="more_detail_container">
                <li>
                  <p className="category">Wind status</p> 
                  <span className="value">{weatherInFiveDays.consolidated_weather?.[0].wind_speed}mph</span>
                </li>
                <li>
                  <p className="category">Humidity</p>
                  <ul style={{display: "flex", flexDirection: "column"}}>
                    <li style={{marginBlockStart: "12px"}}>
                    <span  className="value">{weatherInFiveDays.consolidated_weather?.[0].humidity}%</span>
                    </li>
                    <li style={{marginBlockStart: "12px"}}>
                    <progress value={weatherInFiveDays.consolidated_weather?.[0].humidity} max="100">
                      {weatherInFiveDays.consolidated_weather?.[0].humidity}%
                    </progress>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="category">Visibility</p>
                  <span className="value">{weatherInFiveDays.consolidated_weather?.[0].visibility} miles</span>
                </li>
                <li>
                  <p className="category">Air Pressure</p>
                  <span className="value">{weatherInFiveDays.consolidated_weather?.[0].air_pressure}mb</span>
                </li>
              </ul>
      </section>
    </FutureWeatherSection>
  )
}