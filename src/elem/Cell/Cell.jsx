import React from 'react'
import styled from 'styled-components'
import { StCell } from './styled/CellStyled'

const Cell = ({children}) => {
  return (
    <StCell>
        {children}
    </StCell>
  )
}

export default Cell




