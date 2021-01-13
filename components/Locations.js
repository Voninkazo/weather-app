import React from 'react'
import styled from 'styled-components'

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
}
`

const LocationsStyles = styled.p`
  border : 1px solid #ccc;
  padding : 1rem;
  cursor : pointer;
`
export default function Locations({
  weatherLocations,handleSearchForLocation
}) {
  return (
      <LocationContainerStyles className="navigation">
            <label htmlFor="checkbox">
                <span className="icon__close ">
                    close
                </span>
            </label>
            <form onSubmit={handleSearchForLocation}>
              <input 
                name="location"
                placeholder="search location"
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