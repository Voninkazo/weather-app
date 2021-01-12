import React from 'react'
import styled from 'styled-components'

const LocationContainerStyles = styled.div`
  // max-width : 25%;
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
      <nav className="navigation">
            <label htmlFor="checkbox">
                <span className="icon__close ">
                    close
                </span>
            </label>
            <form onSubmit={handleSearchForLocation}>
              <input 
                name="location"
               />
              <button type="submit" >search</button>
            </form>
            {weatherLocations.length !== 0
            ? weatherLocations.map((location, index) => 
              <LocationsStyles key={index}>
            {location.title}
            </LocationsStyles>)
            : 
            <div >
              <p>Loading...</p>
            </div>
        }
        </nav>
  )
}