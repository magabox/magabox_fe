import React from 'react'
import styled from 'styled-components'
import Flex from '../../../elem/Flex/Flex'

const ModalContainer = ({children}) => {
  return (
    <Flex wd="100vw" ht="100vh" bg="rgba(0,0,0,0.2)" ps="absolute" zi="999" top="0" left="0">
    </Flex>
  )
}

export default ModalContainer