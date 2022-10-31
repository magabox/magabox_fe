import React from 'react'
import styled from 'styled-components'

const StLI = ({children}) => {
  return (
    <StLi>
        {children}
    </StLi>
  )
}

export default StLI

export const StLi = styled.li`
    width: 80px;
	z-index: 100;
	display: flex;
	top: 100px;
	gap:10px;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;