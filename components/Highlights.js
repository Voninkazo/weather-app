import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

function Highlights() {
  const {state} = useContext(GlobalContext);
  const {weatherObj} = state;

  return (
    <section>
        <h2>Today's highlights</h2>
              <ul className="more_detail_container">
                <li>
                  <p className="category">Wind status</p> 
                  <span className="value">{Math.round(weatherObj.consolidated_weather?.[0].wind_speed)}mph</span>
                </li>
                <li>
                  <p className="category">Humidity</p>
                  <ul style={{display: "flex", flexDirection: "column"}}>
                    <li style={{marginBlockStart: "12px"}}>
                    <span  className="value">{weatherObj.consolidated_weather?.[0].humidity}%</span>
                    </li>
                    <li style={{marginBlockStart: "12px"}}>
                    <progress value={weatherObj.consolidated_weather?.[0].humidity} max="100">
                      {weatherObj.consolidated_weather?.[0].humidity}%
                    </progress>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="category">Visibility</p>
                  <span className="value">{Math.round(weatherObj.consolidated_weather?.[0].visibility)} miles</span>
                </li>
                <li>
                  <p className="category">Air Pressure</p>
                  <span className="value">{weatherObj.consolidated_weather?.[0].air_pressure}mb</span>
                </li>
              </ul>
      </section>
  )
}

export default Highlights
