import React from "react";
import styled from "styled-components";
import {
	StMainContainer,
	StMainBackGround,
	StBackGroundImg,
  StMainContent,
  StBoxOffice,
  StLiter,
  StBO,
  StPlus,
  StBoList,
} from "../styled/MainSectionStyle";
import { StCell } from "../../../elem/Cell/styled/CellStyled";
import remember from "../../../../src/UseImg/megabox_img/megabox039.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getBoxOffice } from "../../../redux/modules/boxOffice/boxOfiiceSlice";
import boxOfiiceSlice from "../../../redux/modules/boxOffice/boxOfiiceSlice";
import BoCard from "../../../elem/Card/BoCard";
import Cell from "../../../elem/Cell/Cell";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faFilm } from "@fortawesome/free-regular-svg-icons";
import cal from "../../../UseImg/megabox_img/megabox050.png"
import film from "../../../UseImg/megabox_img/megabox051.png"
import ticket from "../../../UseImg/megabox_img/megabox052.png"
import move from "../../../UseImg/megabox_img/megabox053.png"


const MainSection = () => {

  const dispatch = useDispatch();
  const boxOfficeData = useSelector((state)=>state.boxoffice.boxoffices)

  console.log(boxOfficeData)


  useEffect(()=>{
    dispatch(__getBoxOffice())
  },[dispatch])

	return (
		<>
			<StMainContainer>
				<StMainBackGround />
				<StBackGroundImg src={remember} />
				<StMainContent>
          <StBoxOffice>
            <StLiter>
              <StBO>박스오피스</StBO>
              <StPlus>더 많은 영화보기 <FontAwesomeIcon icon={faPlus} size="lg" /></StPlus>
            </StLiter>
          </StBoxOffice>
          <StBoList>
            {boxOfficeData?.map(card =>(
              <BoCard key={card.id} card={card}/>
            ))}
          </StBoList>
          <StSearchMenu>
              <StCell>
                <StSearchInput placeholder="영화명을 입력해 주세요"/>
              </StCell>
              <StCell>
              <a><img src={cal} style={{width : "24px" ,height : "26px",marginRight : "5px",marginTop : "-2px"}}/>
                <span>상영시간표</span></a>
              </StCell>
              <StCell>
              <a><img src={film} style={{width : "26px",height : "24px", marginRight : "5px" ,marginTop : "-1px"}}/>
               <span>박스오피스</span></a>
              </StCell>
              <StCell>
                <a>
                  <img src={ticket} style={{width: "29px", height: "25px", marginTop : "-2px", marginRight:"5px"}}/>
                  <span>빠른예매</span>
                </a>
              </StCell>
          </StSearchMenu>
          <StAnima style={{position:"relative"}}>
              <img src={move}/>
          </StAnima>
				</StMainContent>
			</StMainContainer>
		</>
	);
};

export default MainSection;

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


