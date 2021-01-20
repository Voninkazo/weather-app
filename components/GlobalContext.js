import React, {useReducer, useEffect } from 'react';

const GlobalContext = React.createContext();

function GlobalContextProvider({children}) {
    const [state,dispatch] = useReducer((state,action) => {
        switch(action.type) {
            case "FETCH_LOCATION": {
                return {
                    ...state,
                    loading: false, 
                    location: action.chosenLocation
                }
            }

            case "LOCATION_OBJECT": {
                return {
                    ...state,
                    weatherLocations: action.weatherLocations
                }
            }

            case "WEATHER_OBJ" : {
                return {
                    ...state,
                    weatherObject: action.weatherObj
                }
            }

            case "CHANGE_DEGREE_TYPE":{
                return {
                    ...state,
                    tempDegreeType: action.updatedDgree
                }
            }
            default: {
                return state;
            }
        }
    },{
        loading: true,
        location: 'london',
        weatherLocations: [],
        weatherObj: [],
        tempDegreeType: "celsius",
    })

    let {location} = state;

    async function fetchLocation() {
        const res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${location}`)
        const dataLocation = await res.json();
        dispatch({type: "LOCATION_OBJECT", weatherLocations: dataLocation})
        // setWeatherLocations(dataLocation)
        // console.log(weatherLocations)
    
        if (weatherLocations.length) {
        //   console.log(dataLocation)
          const res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${weatherLocations[0].woeid}`);
          const response = await res.json();
        // setWeatherObject(response)
        dispatch({type: "WEATHER_OBJ", weatherObj: response })
        }
      }

      useEffect(() => {
        fetchLocation()
       }, [location])

    return(
        <GlobalContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContextProvider,GlobalContext};