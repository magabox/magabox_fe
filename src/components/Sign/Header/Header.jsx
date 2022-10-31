import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Login";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bars from "../../../UseImg/megabox_img/megabox021.png";
import search from "../../../UseImg/megabox_img/megabox022.png";
import movie from "../../../UseImg/megabox_img/megabox025.png";
import reserv from "../../../UseImg/megabox_img/megabox026.png";
import theater from "../../../UseImg/megabox_img/megabox027.png";
import events from "../../../UseImg/megabox_img/megabox028.png";
import store from "../../../UseImg/megabox_img/megabox029.png";
import benefit from "../../../UseImg/megabox_img/megabox030.png";
import cal from "../../../UseImg/megabox_img/megabox023.png";
import my from "../../../UseImg/megabox_img/megabox024.png";
import logo from "../../../UseImg/megabox_img/megabox119.png";
import {
	StHeaderBox,
	StUpBox,
	StUpRightBox,
	StUpLeftBox,
	StDownBox,
	StDownLeftBox,
	StDownRightBox,
	StBars,
	StBenefit,
	StCal,
	StEvent,
	StHeaderContentBox,
	StLogo,
	StMovie,
	StMy,
	StReserv,
	StSearch,
	StStore,
	StTheater,
} from "../styled/HeaderStyled";
import useMenu from "./hooks/useMenu";
import Logout from "../Logout";
import { loginAction } from "../../../redux/modules/user/login";
import UL from "../../../elem/UL/UL";
import LI from "../../../elem/LI/LI";
import StUL from "../../../elem/UL/UL";
import StLI from "../../../elem/LI/LI";

import { useEffect } from "react";

const Header = () => {
	const menu = useMenu(false);
	const [isOpen, setIsOpen] = useState();
	const [isBox, setIsBox] = useState(true);
	const movieHover = useMenu();
	const reservHover = useMenu();
	const theaterHover = useMenu();
	const eventHover = useMenu();
	const beneHover = useMenu();
	const dispatch = useDispatch();
	const isLogin = useSelector(state => state.login.isLogin);
	const { handleLoginDispatch } = loginAction;
	const [ready, setReady] = useState(undefined);

	const openModalHandler = () => {
		setIsOpen(!isOpen);
	};

	// console.log("무비호버", movieHover);
	// console.log("예매호버", reservHover);
	// console.log("극장호버", theaterHover);
	const onchangeBox = () => {
		setIsBox(!isBox);
	};
	const sample = () => {
		const loggedin = localStorage.getItem("isLogin");
		if (loggedin) {
			dispatch(handleLoginDispatch());
		}

		setReady("yes");
	};

	useEffect(() => {
		sample();
	}, [isLogin]);
	const userRole = localStorage.getItem("user-role");
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
							{isLogin ? (
								<>
									{userRole === "ROLE_ADMIN" ? (
										<Link to="/movieadmin">
											<span>등록</span>{" "}
										</Link>
									) : null}
									<Logout />
								</>
							) : (
								<span onClick={openModalHandler}>로그인</span>
							)}

							<Link to="/join">
								<span>회원가입</span>
							</Link>
							<span>빠른예매</span>
						</StUpRightBox>
					</StUpBox>
					<StDownBox>
						<StDownLeftBox onMouseEnter={onchangeBox}>
							<StBars src={bars} />
							<StSearch src={search} />
							<StMovie
								src={movie}
								value={movieHover.value}
								onMouseEnter={movieHover.openMenu}
							/>
							{movieHover.value ? (
								<StUl onMouseLeave={movieHover.closeMenu}>
									<StLi>전체영화</StLi>
									<StLi>큐레이션</StLi>
									<StLi>무비포스트</StLi>
								</StUl>
							) : null}

							<StReserv
								src={reserv}
								value={reservHover.value}
								onMouseEnter={reservHover.openMenu}
							/>
							{reservHover.value && !movieHover.value && !theaterHover.value ? (
								<StUl
									style={{ left: "150px" }}
									onMouseLeave={reservHover.closeMenu}
								>
									<StLi>빠른예매</StLi>
									<StLi>상영시간표</StLi>
									<StLi style={{ width: "160px" }}>
										더 부티크 프라이빗 예매
									</StLi>
								</StUl>
							) : null}
							<StTheater
								src={theater}
								value={theaterHover.value}
								onMouseEnter={theaterHover.openMenu}
							/>

							{theaterHover.value && !movieHover.value && theaterHover.value ? (
								<StUl
									style={{ left: "300px" }}
									onMouseLeave={theaterHover.closeMenu}
								>
									<StLi>전체극장</StLi>
									<StLi>특별관</StLi>
								</StUl>
							) : null}
						</StDownLeftBox>
						<StDownRightBox onMouseEnter={onchangeBox}>
							<StEvent src={events} onMouseEnter={eventHover.openMenu} />
							{eventHover.value &&
							!movieHover.value &&
							!theaterHover.value &&
							!reservHover.value ? (
								<StUl
									style={{ left: "620px" }}
									onMouseLeave={eventHover.closeMenu}
								>
									<StLi style={{ width: "50px" }}>진행중</StLi>
									<StLi style={{ marginLeft: "10px" }}>지난 이벤트</StLi>
									<StLi style={{ marginLeft: "10px" }}>당첨자 발표</StLi>
								</StUl>
							) : null}
							<StStore src={store} />
							<StBenefit src={benefit} onMouseEnter={beneHover.openMenu} />
							{beneHover.value && !eventHover.value ? (
								<StUl
									style={{ left: "800px" }}
									onMouseLeave={beneHover.closeMenu}
								>
									<StLi style={{ width: "130px" }}>메가박스 멤버십</StLi>
									<StLi>제휴/할인</StLi>
								</StUl>
							) : null}
							<StCal src={cal} />
							<StMy src={my} />
						</StDownRightBox>
					</StDownBox>
					<Link to="/">
						<StLogo src={logo} />
					</Link>
				</StHeaderContentBox>
				<StNavBox>
					{isBox ? <StMovieNav onMouseLeave={onchangeBox}></StMovieNav> : null}
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
	height: 50px;
	background-color: #0e0c0cff;
	align-items: center;
	line-height: 50px;
	margin-top: 5px;
`;

const StNavBox = styled.div`
	top: 50px;
	z-index: 20;
	color: white;
	display: flex;
	align-items: center;
	width: 100%;
	height: 44px;
`;

const StUl = styled.ul`
	position: absolute;
	display: flex;
	left: 80px;
	top: 40px;
`;

export const StLi = styled.li`
	width: 80px;
	height: 30px;
	z-index: 100;
	display: flex;
	gap: 10px;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;
