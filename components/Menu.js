import React from 'react';
import styled from 'styled-components';

import ConversionDegreeType from './ConversionDgreeTYpe';

const MenuContainerStyles = styled.div`
display: flex;
flex-direction: space-between;
`

function Menu() {
  return (
    <MenuContainerStyles>

        <div>
            <input type="checkbox" name="checkbox" id="checkbox" />
                <label htmlFor="checkbox">
                    <span className="btn-search">Search for places</span>
            </label>
        </div>

        <ConversionDegreeType />
    </MenuContainerStyles>
  )
}

export default Menu
