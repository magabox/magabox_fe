import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Login from "../Login";
import styled from "styled-components";
import bars from "../../../UseImg/megabox_img/megabox021.png"
import search from "../../../UseImg/megabox_img/megabox022.png"
import movie from "../../../UseImg/megabox_img/megabox025.png"
import reserv from"../../../UseImg/megabox_img/megabox026.png"
import theater from"../../../UseImg/megabox_img/megabox027.png"
import events from"../../../UseImg/megabox_img/megabox028.png"
import store from"../../../UseImg/megabox_img/megabox029.png"
import benefit from"../../../UseImg/megabox_img/megabox030.png"
import cal from"../../../UseImg/megabox_img/megabox023.png"
import my from"../../../UseImg/megabox_img/megabox024.png"
import logo from "../../../UseImg/megabox_img/megabox119.png"
import { StHeaderBox, StUpBox,StUpRightBox,StUpLeftBox,
StDownBox,StDownLeftBox,StDownRightBox,StBars,StBenefit,StCal,
StEvent,StHeaderContentBox,StLogo,StMovie,StMy,StReserv,StSearch,StStore,
StTheater
} from "../styled/HeaderStyled";
import useMenu from "./hooks/useMenu";
import UL from "../../../elem/UL/UL";
import LI from "../../../elem/LI/LI";
import { StUl } from "../../../elem/UL/UL";
import { StLi } from "../../../elem/LI/LI";


const Header = () => {
	const menu = useMenu(false);
	const [isOpen, setIsOpen] = useState(false);
	const movieHover = useMenu(false);
	const resevHover = useMenu(false);
	const theaterHover = useMenu(false);
	const eventHover = useMenu(false);
	const beneHover = useMenu(false);

	const openModalHandler = () => {
		setIsOpen(!isOpen);
	};
	console.log(movieHover.value)

	return (
		<>
		<StHeaderBox>
			<StHeaderContentBox>
				<StUpBox>
					<StUpLeftBox>
						<span>VIP LOUNGE</span>
						<span>멤버십</span>
						<span>고객센터</span>
					</StUpLeftBox>
					<StUpRightBox>
						<span onClick={openModalHandler}>로그인</span>
						<span>회원가입</span>
						<span>빠른예매</span>
					</StUpRightBox>
				</StUpBox>
				<StDownBox>
					<StDownLeftBox>
						<StBars src={bars}/>
						<StSearch src={search}/>
						<StMovie src={movie}value={movieHover.value} onMouseEnter={movieHover.onMouseEnter} />
						{movieHover.value ? 
							<UL onMouseLeave={movieHover.onMouseLeave} styled={{color : "green"}}>
								<LI>전체영화</LI>
								<LI>큐레이션</LI>
								<LI>무비포스트</LI>
							</UL> : null}
						<StReserv src={reserv} value={resevHover.value} onMouseEnter={resevHover.onMouseEnter}/>
						<StTheater src={theater}/>
					</StDownLeftBox>
					<StDownRightBox>
						<StEvent src={events}/>
						<StStore src={store}/>
						<StBenefit src={benefit}/>
						<StCal src={cal}/>
						<StMy src={my}/>
					</StDownRightBox>
				</StDownBox>
				<StLogo src={logo}/>
			</StHeaderContentBox>
			<StNavBox>
				<StMovieNav >
				</StMovieNav>
			</StNavBox>
		</StHeaderBox>
		{isOpen ? <Login close={openModalHandler} /> : null}

			<Outlet></Outlet>

		</>
	);
};

export default Header;

const StMovieNav = styled.div`
	width: 100%;
	height : 50px;
	background-color : #0e0c0cff;

`;

const StNavBox = styled.div`
	top : 50px;
	z-index : 20;
	color : white;

`;


