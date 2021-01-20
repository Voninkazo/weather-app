import React,{useState,useContext} from 'react'
import styled from 'styled-components';

import {GlobalContext} from './GlobalContext';

const LocationContainerStyles = styled.nav`
background-color: #1E213A;
padding-left:46px;
padding-right:46px;
padding-top: 19px;

form {
  display: flex;
  flex-direction: row;
  gap:12px;
}
  input {
border: 1px solid #E7E7EB;
box-sizing: border-box;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #616475;
background:none;
padding-top: 14px;
padding-bottom: 14px;
padding-left: 46px;
}

button {
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #E7E7EB;
background-color: #3C47E9;
outline:none;
border:none;
padding-top: 14px;
padding-bottom: 14px;
padding-left: 19px;
padding-right: 15px;
}
`

const LocationsStyles = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #E7E7EB;
  border : 1px solid #ccc;
  padding-top: 22px;
  padding-bottom: 22px;
  padding-left: 12px;
  padding-right: 12px;
  cursor : pointer;
  margin-top: 58px;
`
export default function Locations() {

  const {state,dispatch} = useContext(GlobalContext);
  const {weatherLocations} = state;
  const [input,setInput] = useState('');
 
  function handleSearchForLocation(e) {
    e.preventDefault()
    // const inputLocation = e.target.location.value
    // setLocation(inputLocation)

    dispatch({type: "FETCH_LOCATION", chosenLocation: input })
    e.target.reset();
  }
  return (
      <LocationContainerStyles className="navigation">
            <label htmlFor="checkbox" className="closing-label">
                <span className="icon__close">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="#E7E7EB" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>                
                </span>
            </label>
            <form onSubmit={handleSearchForLocation}>
              <input 
                name="location"
                placeholder="search location"
                value={input}
                onChange={(e) => setInput(e.target.value)}
               />
              <button type="submit" >search</button>
            </form>
            {weatherLocations.length !== 0
            ? weatherLocations.map((location, index) => 
            <div>
              <LocationsStyles key={index}>
            {location.title}
            </LocationsStyles>
            </div>
            )
            : 
            <div >
              <p>Loading...</p>
            </div>
        }
        </LocationContainerStyles>
  )
}