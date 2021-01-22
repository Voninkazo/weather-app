import React, { useContext } from 'react';

import { GlobalContext } from './GlobalContext';

function ConversionDgreeTYpe() {
    const {state,dispatch} = useContext(GlobalContext);
    const {tempDegreeType} = state;

    function convertDegreeType(e) {
        dispatch({type:"CHANGE_DEGREE_TYPE", updatedDgree: e.target.value})
    }
  return (
    <section className="symbol_container">
            <div>
                <label htmlFor="celsius" className="celsius_symbol">°C</label>
                <input
                        type="radio"
                        id="celsius"
                        value="celsius"
                        name="celsius"
                        checked={tempDegreeType === "celsius"}
                        onChange={convertDegreeType}
                    />
            </div>
            <div>
                <label htmlFor="fahrenheit" className="fahrenheit_symbol">°F</label>
                <input
                    type="radio"
                    name="fahrenheit"
                    id="fahrenheit"
                    value="fahrenheit"
                    checked={tempDegreeType === "fahrenheit"}
                    onChange={convertDegreeType}
                />
            </div>
    </section>
  )
}

export default ConversionDgreeTYpe
