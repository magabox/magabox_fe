import React from 'react'
import styled from 'styled-components'

const LI = ({children}) => {
  return (
    <StLi>
        {children}
    </StLi>
  )
}

export default LI

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