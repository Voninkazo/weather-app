import React,{useState,useContext} from 'react'
import styled from 'styled-components';

import {GlobalContext} from './GlobalContext';

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
export default function LocationsSearch() {

  const {state,dispatch} = useContext(GlobalContext);
  const {weatherLocations} = state;
  const [input,setInput] = useState('');
 
  function handleSearchForLocation(e) {
    e.preventDefault()
    dispatch({type: "FETCH_LOCATION", chosenLocation: input })
    e.target.reset();
  }
  return (
      <div className="search-container">
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
            <div key={index}>
              <LocationsStyles>
            {location.title}
            </LocationsStyles>
            </div>
            )
            : 
            <div >
              <p>Loading...</p>
            </div>
        }
        </div>
  )
}