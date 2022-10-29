import React from 'react'
import styled from 'styled-components'
import { StMainContainer,StMainBackGround,StBackGroundImg } from '../styled/MainSectionStyle'
import remember from "../../../../src/UseImg/megabox_img/megabox039.jpg"

const MainSection = () => {
  return (
    <StMainContainer>
      <StMainBackGround/>
      <StBackGroundImg src={remember}/>
    </StMainContainer>
  )
}

export default MainSection



