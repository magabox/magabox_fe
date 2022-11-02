import React from 'react'
import styled from 'styled-components'

const Bubble = () => {
  return (
    <>
        <StBubble>

        </StBubble>
    </>
  )
}

export default Bubble

const StBubble = styled.div`

position:relative; 
 margin: 50px;
 width:200px; 
 height:50px;
  background:white; 
  border-radius: 10px;
  z-index: 9999;

  &::after{
border-top:0px solid transparent; 
 border-left: 10px solid transparent; 
 border-right: 10px solid transparent; 
 border-bottom: 10px solid pink; 
 content:""; 
 position:absolute;
 top:-10px;
 left:100px; 
  }
`;

