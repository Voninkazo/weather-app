import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

function Highlights() {
  const {state} = useContext(GlobalContext);
  const {weatherObject,loading} = state;

  return (
    <section>
        <h2>Today's highlights</h2>
              {!loading ? 
              <ul className="more_detail_container">
                <li>
                  <p className="category">Wind status</p> 
                  <span className="value">{Math.round(weatherObject.consolidated_weather?.[0].wind_speed)}mph</span>
                </li>
                <li>
                  <p className="category">Humidity</p>
                  <ul style={{display: "flex", flexDirection: "column"}}>
                    <li style={{marginBlockStart: "12px"}}>
                    <span  className="value">{weatherObject.consolidated_weather?.[0].humidity}%</span>
                    </li>
                    <li style={{marginBlockStart: "12px"}}>
                    <progress value={weatherObject.consolidated_weather?.[0].humidity} max="100">
                      {weatherObject.consolidated_weather?.[0].humidity}%
                    </progress>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="category">Visibility</p>
                  <span className="value">{Math.round(weatherObject.consolidated_weather?.[0].visibility)} miles</span>
                </li>
                <li>
                  <p className="category">Air Pressure</p>
                  <span className="value">{weatherObject.consolidated_weather?.[0].air_pressure}mb</span>
                </li>
              </ul>
              :
              <p>Loading...</p>
      }
      </section>
  )
}

export default Highlights
