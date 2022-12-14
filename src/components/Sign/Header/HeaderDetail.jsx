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
	StUl,
	StLi,
	StNavBox,
	StMovieNav,
} from "../styled/HeaderDetailStyled";
import useMenu from "./hooks/useMenu";
import Logout from "../Logout";
import { loginAction } from "../../../redux/modules/user/login";

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
							<span>?????????</span>
							<span>????????????</span>
						</StUpLeftBox>
						<StUpRightBox>
							{isLogin ? (
								<>
									{userRole === "ROLE_ADMIN" ? (
										<Link to="/movieadmin">
											<span>??????</span>{" "}
										</Link>
									) : null}
									<Logout />
								</>
							) : (
								<span onClick={openModalHandler}>?????????</span>
							)}

							<Link to="/join">
								<span>????????????</span>
							</Link>
							<span>????????????</span>
						</StUpRightBox>
					</StUpBox>
					<StDownBox>
						<StDownLeftBox onMouseEnter={onchangeBox}>
							<StBars src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-sitemap.png" />
							<StSearch src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-search.png" />
							<StMovie
								src="https://img.megabox.co.kr/static/pc/images/common/gnb/gnb-txt-movie.png"
								value={movieHover.value}
								onMouseEnter={movieHover.openMenu}
							/>
							{movieHover.value ? (
								<StUl onMouseLeave={movieHover.closeMenu}>
									<StLi>????????????</StLi>
									<StLi>????????????</StLi>
									<StLi>???????????????</StLi>
								</StUl>
							) : null}

							<StReserv
								src="https://img.megabox.co.kr/static/pc/images/common/gnb/gnb-txt-reserve.png"
								value={reservHover.value}
								onMouseEnter={reservHover.openMenu}
							/>
							{reservHover.value && !movieHover.value && !theaterHover.value ? (
								<StUl
									style={{ left: "150px" }}
									onMouseLeave={reservHover.closeMenu}
								>
									<StLi>????????????</StLi>
									<StLi>???????????????</StLi>
									<StLi style={{ width: "160px" }}>
										??? ????????? ???????????? ??????
									</StLi>
								</StUl>
							) : null}
							<StTheater
								src="https://img.megabox.co.kr/static/pc/images/common/gnb/gnb-txt-theater.png"
								value={theaterHover.value}
								onMouseEnter={theaterHover.openMenu}
							/>

							{theaterHover.value && !movieHover.value && theaterHover.value ? (
								<StUl
									style={{ left: "300px" }}
									onMouseLeave={theaterHover.closeMenu}
								>
									<StLi>????????????</StLi>
									<StLi>?????????</StLi>
								</StUl>
							) : null}
						</StDownLeftBox>
						<StDownRightBox onMouseEnter={onchangeBox}>
							<StEvent
								src="https://img.megabox.co.kr/static/pc/images/common/gnb/gnb-txt-event.png"
								onMouseEnter={eventHover.openMenu}
							/>
							{eventHover.value &&
							!movieHover.value &&
							!theaterHover.value &&
							!reservHover.value ? (
								<StUl
									style={{ left: "620px" }}
									onMouseLeave={eventHover.closeMenu}
								>
									<StLi style={{ width: "50px" }}>?????????</StLi>
									<StLi style={{ marginLeft: "10px" }}>?????? ?????????</StLi>
									<StLi style={{ marginLeft: "10px" }}>????????? ??????</StLi>
								</StUl>
							) : null}
							<StStore src="https://img.megabox.co.kr/static/pc/images/common/gnb/gnb-txt-store.png" />
							<StBenefit
								src="https://img.megabox.co.kr/static/pc/images/common/gnb/gnb-txt-benefit.png"
								onMouseEnter={beneHover.openMenu}
							/>
							{beneHover.value && !eventHover.value ? (
								<StUl
									style={{ left: "800px" }}
									onMouseLeave={beneHover.closeMenu}
								>
									<StLi style={{ width: "130px" }}>???????????? ?????????</StLi>
									<StLi>??????/??????</StLi>
								</StUl>
							) : null}
							<StCal src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-schedule.png" />
							<StMy src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-mymega.png" />
						</StDownRightBox>
					</StDownBox>
					<Link to="/">
						<StLogo src="	https://img.megabox.co.kr/static/pc/images/common/ci/logo_new2.png" />
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
