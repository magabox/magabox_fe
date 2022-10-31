import styled from "styled-components";

export const StAnima = styled.div`
    display: flex;
    justify-content: center;
    width:100%;
    height:24px;
    margin : 30px 0 0 0;

    & img{
    animation: motion 0.7s infinite alternate;
    position:absolute;
    left:50%;
    @keyframes motion {
      0% {top:0px}
      100%{top:10px}
    }
  }
`;

export const StSearchInput = styled.input`
    border : none;
    border-bottom : 1px solid #888;
    background-color: transparent;
    width : 200px;
    padding-bottom: 5px;

`;

export const StSearchMenu = styled.div`
  width:100%;
  height : 52px;
  display: block;
  margin: 50px 0 0 0;
  padding: 23px 0 0 0;
  background-color: rgba(0,0,0,0.2);
  overflow: hidden;
  color : white;
  line-height: 23px;
  display: flex;
`;


export const StBoList = styled.div`
  width : 100%;
  height: 398px;
  display:flex;
  gap: 40px;
  margin-top : 20px;
`;

export const StBO = styled.span`
  padding-bottom : 5px;
  border-bottom: 2px solid rgba(255,255,255,0.2);
`;

export const StPlus = styled.span`
  color : #888;
  font-size : 15px;
`;

export const StLiter = styled.div`
  width: 584px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color:white;
  
`;

export const StBoxOffice = styled.div`
  width : 100%;
  height : 50px;
  display: flex;
  justify-content: flex-end;
`;

export const StMainContent = styled.div`
	width: 1100px;
	height: 800px;
	margin: 0 auto;
	z-index: 10;
	color: black;
	position: absolute;
	top: 59%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
  display: flex;
  flex-direction: column;
`;

export const StMainContainer = styled.div`
	display: block;
	position: relative;
	height: 921px;
	min-height: 880px;
	background-color: #222222ff;
	overflow: hidden;
	z-index: 2;
	width: 100%;
`;

export const StMainBackGround = styled.div`
	display: block;
	position: absolute;
	width: 100%;
	top: 0;
	min-height: 880px;
	height: 921px;
	background-color: #000000dc;
	z-index: 3;
`;

export const StBackGroundImg = styled.img`
	display: block;
	src: ${props => props.src};
	width: 100%;
	filter: blur(15px);
	position: absolute;
`;

export default StMainContainer;
