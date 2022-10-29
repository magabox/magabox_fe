import React from 'react'
import styled from 'styled-components'

const UL = ({children}) => {
  return (
    <StUl>
        {children}
    </StUl>
  )
}

export default UL

const StUl = styled.ul`
  position: absolute;
  display: flex;
  top:40px;
  
`;