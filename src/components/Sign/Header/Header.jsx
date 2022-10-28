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


const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModalHandler = () => {
		setIsOpen(!isOpen);
	};

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
						<StMovie src={movie}/>
						<StReserv src={reserv}/>
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
		</StHeaderBox>
		{isOpen ? <Login close={openModalHandler} /> : null}
			<Outlet></Outlet>
		</>
	);
};

export default Header;

export const StLogo = styled.img`
	position:absolute;
	top:25px;
	width:140px;
	height: 47px;
	left : 690px;
`;

export const StMy = styled.img`
	src : ${(props)=> props.src};
	width:18px;
	height: 20px;
	margin-left : 17px;

`;

export const StCal = styled.img`
	src : ${(props)=> props.src};
	position: absolute;
	width:35px;
	height: 35px;
	top : 3px;
	margin-left : 76px;

`;

export const StBenefit = styled.img`
	src : ${(props)=> props.src};
	width:30px;
	height: 18px;
	margin-left : 60px;
`;

export const StStore = styled.img`
	src : ${(props)=> props.src};
	width:45px;
	height: 18px;
	margin-left : 60px;
`;

export const StEvent = styled.img`
	src : ${(props)=> props.src};
	width:45px;
	height: 18px;
`;

export const StTheater = styled.img`
	src : ${(props)=> props.src};
	margin-left: 60px;
	color:white;
	width:32px;
	height: 18px;
`;

export const StReserv = styled.img`
	src : ${(props)=> props.src};
	margin-left: 60px;
	color:white;
	width:30px;
	height: 18px;
`;

export const StMovie = styled.img`
	src : ${(props)=> props.src};
	margin-left : 95px;
	color:white;
	width:30px;
	height: 18px;

`;

export const StSearch = styled.img`
	src : ${(props)=> props.src};
	margin-left : 20px;
	color:white;
	width:18px;
	height: 18px;
`;

export const StBars = styled.img`
 	src : ${(props)=> props.src};
	 color:white;
	 width:23px;
	 height: 18px;

`;

export const StDownLeftBox = styled.div`
	display : flex;
	width:50%;
	margin-top: 12px;
	margin-left : 7px;
	& img{
		cursor:pointer;
	}
`;

export const StDownRightBox = styled.div`
	display : flex;
	width:50%;
	margin-top: px;
	margin-left : 308px;
	position:relative;
	align-items: center;
	margin-bottom:5px;
	& img{
		cursor:pointer;
	}
`;

export const StHeaderContentBox = styled.div`
	width : 1100px;
	height : 841.4px;
	margin : 0 auto;
`;

export const StUpLeftBox = styled.div`
	display: flex;
	gap : 20px;
	font-size: 13px;
	
`;

export const StUpRightBox = styled.div`
	display: flex;
	gap : 20px;
	font-size: 13px;
`;

export const StUpBox = styled.div`
	color:white;
	width: 100%;
	height: 20px;
	margin-top : 20px;
	display: flex;
	justify-content: space-between;
	position:relative;
`;

export const StDownBox = styled.div`
	color:white;
	width:100%;
	height : 50px;
	line-height: 70px;
	display:flex;
	justify-content: space-between;
	position:relative;
`;

export const StHeaderBox = styled.div`
	width: 100%;
	height : 91px;
	background-color: #000000ff;
	position : fixed;
	top : 0;
	opacity : 0.5;
	z-index  : 15;
	border-bottom: 1px solid rgba(255,255,255,.2);
	display:flex;
	flex-direction: column;
	& span{
		cursor : pointer;
	}
`;
