import React from 'react'
import styled from 'styled-components'
import { StMainContainer,StMainBackGround,StBackGroundImg } from '../styled/MainSectionStyle'
import revor from "../../../../src/UseImg/megabox_img/megabox039.jpg"

const MainSection = () => {
  return (
    <StMainContainer>
      <StMainBackGround/>
      <StBackGroundImg src={revor}/>
    </StMainContainer>
  )
}

export default MainSection

const StMainHeader = styled.div`
    position: absolute;
    height: 91px;
    left: 0;
    right: inherit;
    top: 80px;
    width: 100%;
    z-index: 100;
`;



