import React from 'react'
import styled from 'styled-components'

const StUL = ({children}) => {
  return (
    <StUl>
        {children}
    </StUl>
  )
}

export default StUL

const StUl = styled.ul`
  position: absolute;
  display: flex;
  top:40px;
  
`;