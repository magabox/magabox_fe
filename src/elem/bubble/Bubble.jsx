import React from 'react'
import styled from 'styled-components'

const Bubble = () => {
  return (
    <>
        <StBubble>
            <StRac></StRac>
            <StTr></StTr>
        </StBubble>
    </>
  )
}

export default Bubble

const StBubble = styled.div`
    z-index: 8888;
    position:relative;
    top:200px;
`;

const StRac = styled.div`
    background-color: red;
    display:flex;
    position:absolute;
    width:225px;
    height: 80px;
    z-index: 8888;
    top:200px;
    left:50%;
`;

const StTr = styled.div`
    position:absolute;
    width:0px;
    height:0px;
    background-color: red;
    border-top : 20px solid red;
    border-right : 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left : 20px solid transparent;
    left:56%;
    top:260px;
    z-index: 8888;
`;

