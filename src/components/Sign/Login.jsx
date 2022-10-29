import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Input from "../../elem/Input/Input";
import { Link } from "react-router-dom";

const Login = ({ close }) => {
	const body = document.querySelector("body");
	const scrollPosition = window.pageYOffset;

	useEffect(() => {
		body.style.overflow = "hidden";
		body.style.position = "fixed";
		body.style.top = `-${scrollPosition}px`;
		body.style.left = "0";
		body.style.right = "0";
		return () => {
			body.style.removeProperty("overflow");
			body.style.removeProperty("position");
			body.style.removeProperty("top");
			body.style.removeProperty("left");
			body.style.removeProperty("right");
			window.scrollTo(0, scrollPosition);
		};
	}, []);

	return (
		<>
			<LoginBg>
				<LoginWrap>
					<LoginHeader>로그인</LoginHeader>
					<LoginCloseBtn
						onClick={() => {
							close();
						}}
					>
						레이어닫기
					</LoginCloseBtn>
					<LoginColWrap>
						<LoginColLeft>
							<Input theme={"login"} placeholder="아이디" mg={"0 0 15px 0"} />
							<Input
								theme={"login"}
								placeholder="비밀번호"
								mg={"0 0 15px 0"}
								type="password"
							/>
							<LoginBtn>로그인</LoginBtn>
							<div>
								<Link
									to="/join"
									onClick={() => {
										close();
									}}
								>
									회원가입
								</Link>
							</div>
							<div>
								<img
									src="https://img.megabox.co.kr/static/pc/images/common/ci/logo_new2.png"
									alt="logo"
								/>
							</div>
						</LoginColLeft>
						<LoginColRight>
							<div>
								<video
									src="https://static.spartacodingclub.kr/hanghae99/new_main.mp4"
									width="100%"
									controls
								></video>
							</div>
						</LoginColRight>
					</LoginColWrap>
				</LoginWrap>
			</LoginBg>
		</>
	);
};

export default Login;
const LoginBg = styled.section`
	background-color: rgba(0, 0, 0, 0.6);
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	z-index: 999;
`;

const LoginWrap = styled.article`
	box-shadow: 2px 2px 6px 2px rgb(0 0 0 / 10%);
	min-height: 250px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	width: 850px;
	height: 485px;
	background-color: #fff;
`;
const LoginHeader = styled.h3`
	box-sizing: border-box;
	background-color: #503396;
	width: 100%;
	height: 45px;
	color: #fff;
	font-size: 1.2em;
	padding: 15px 20px 0 20px;
`;

const LoginCloseBtn = styled.button`
	cursor: pointer;
	display: block;
	position: absolute;
	top: 15px;
	right: 20px;
	width: 16px;
	height: 15px;
	margin: 0;
	padding: 0;
	border: 0;
	text-indent: -9999px;
	background: url(https://img.megabox.co.kr/static/pc/images/common/btn/btn-layer-close.png)
		no-repeat center;
`;

const LoginColWrap = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	width: 810px;
	height: 388px;
	padding: 20px 20px 20px 20px;
`;

const LoginColLeft = styled.div`
	width: 380px;
	height: 345px;
	background-color: #fff;
	margin-top: 40px;
	div {
		display: flex;
		justify-content: center;
		width: 70%;
		margin: 0 auto;
		border-top: 1px solid #e0e0e0;
		padding: 30px 0 30px;
	}
`;

const LoginColRight = styled.div`
	width: 380px;
	height: 345px;
	background-color: #fff;
	display: flex;
	align-items: center;
	margin-top: 20px;
`;
const LoginBtn = styled.button`
	width: 376px;
	height: 45px;
	line-height: 45px;
	padding: 0;
	border: 1px solid transparent;
	background-color: #e0e0e0;
	transition: all 0.5s;
	:hover {
		color: #fff;
		background-color: #503396;
	}
`;
