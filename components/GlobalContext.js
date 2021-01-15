import React, {useReducer, useEffect } from 'react';

const GlobalContext = React.createContext();

function GlobalContextProvider({children}) {
    const [state,dispatch] = useReducer((state,action) => {
        switch(action.type) {
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
        tempDegreeType: "celsius"
    })

    return(
        <GlobalContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContextProvider,GlobalContext};