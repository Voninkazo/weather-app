import React, { useContext } from 'react';
import styled from 'styled-components';

import ConversionDegreeType from './ConversionDgreeTYpe';
import { GlobalContext } from './GlobalContext';
import LocationsSearch from './LocationsSearch';

const MenuContainerStyles = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

.btn-search {
  background: #6E707A;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #E7E7EB;
  padding: 11px 18px;
  cursor: pointer;
}
`

function Menu() {
  const {state,dispatch} = useContext(GlobalContext);
  const {showModal, loading} = state;

  function handleShowModal() {
    dispatch({type:"SHOW_SEARCH_FORM", show:true})
  }

  return (
    <MenuContainerStyles>
      <input type="checkbox" name="checkbox" id="checkbox" className="input_search_checkbox" />
        <div>
                <label htmlFor="checkbox">
                    <span className="btn-search" onClick={handleShowModal}>Search for places</span>
                </label>
        </div>
          {
            showModal && <LocationsSearch />
          }
    <ConversionDegreeType />
    </MenuContainerStyles>
  )
}

export default Menu
