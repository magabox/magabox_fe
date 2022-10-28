import React from 'react'
import styled from 'styled-components'
import { StMainContainer,StMainBackGround,StBackGroundImg } from '../styled/MainSectionStyle'
import revor from "../../../../src/UseImg/megabox_img/megabox039.jpg"

const MainSection = () => {
  return (
    <StMainContainer>
      <StMainBackGround></StMainBackGround>
      <StBackGroundImg src={revor}/>
    </StMainContainer>
  )
}

export default MainSection



