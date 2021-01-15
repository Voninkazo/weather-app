import React, { useContext } from 'react'

import { GlobalContext } from './GlobalContext';

function ConversionDgreeTYpe() {
    const {state,dispatch} = useContext(GlobalContext);
    const {tempDegreeType} = state;

    function convertDegreeType(e) {
        dispatch({type:"CHANGE_DEGREE_TYPE", updatedDgree: e.target.value})
    }
  return (
    <div>
            <div className="symbol_container">
                <input
                        type="radio"
                        id="celsius"
                        value="celsius"
                        checked={tempDegreeType === "celsius"}
                        onChange={convertDegreeType}
                    />
                <label className="celsius_symbol" htmlFor="celsius">°C</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="farenheit"
                    value="fahrenheit"
                    checked={tempDegreeType === "fahrenheit"}
                    onChange={convertDegreeType}
                />
                <label className="fahrenheit" htmlFor="fahrenheit">°F</label>
            </div>
        </div>
  )
}

export default ConversionDgreeTYpe
