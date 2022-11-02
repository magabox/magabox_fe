import React, { useEffect } from "react";
import styled from "styled-components";
import Flex from "../../../elem/Flex/Flex";

const ModalContainer = () => {
	// y축 스크롤 없애는 방법
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
		<Bg>
			<div>
				<input type="text" placeholder="댓글창" />
				<span>삭제</span>
			</div>
		</Bg>
	);
};

export default ModalContainer;

export const Bg = styled.div`
	width: 100%;
	height: 500vh;
	background-color: rgba(0, 0, 0, 0.2);
	position: fixed;
	top: 0;
	left: 0;
	color: #fff;
	z-index: 999;
	div {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 500px;
		height: 300px;
		margin: 300px auto;
		background-color: #eee;
	}
`;
