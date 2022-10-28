import styled from "styled-components";

export const StMainContainer = styled.div`
    display: block;
    position: relative;
    height: 921px;
    min-height: 880px;
    background-color: #222;
    overflow: hidden;
    z-index: 2;

`;

export const StMainBackGround = styled.div`
    display: block;
    position: absolute;
    width:100%;
    top : 0;
    min-height: 880px;
    height: 921px;
    background-color: rgba(0,0,0,0.8);
    z-index: 3;
`;

export const StBackGroundImg = styled.img`
  display:block;
  top : 0;
  src : ${(props)=> props.src};
  width : 100%;
  filter : blur(15px);
  position : absolute;
  height : 921px;
  object-fit: cover;
`;


export default StMainContainer