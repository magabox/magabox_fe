import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom/dist";
import styled from "styled-components";
import Login from "../../components/Sign/Login";
import { openModal } from "../../redux/modules/modal/modalSlice";
import { closeModal } from "../../redux/modules/modal/modalSlice";

const Bubble = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem("accessToken");
	const open = useSelector(state => state.modal.isOpen);
	const [login, setLogin] = useState("");
	const [isOpen, setIsOpen] = useState();
	const openModalHandler = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<StBubble>
				<StRac>
					<p>로그인이 필요한 서비스입니다</p>
					<span onClick={() => setLogin(!login)}>로그인 바로가기</span>
				</StRac>
				<StTr></StTr>
			</StBubble>
			{login === false && <Login close={openModalHandler} />}
		</>
	);
};

export default Bubble;

const StBubble = styled.div`
	z-index: 20;
	position: relative;
	top: 500px;
	right: -63%;
	display: flex;
	/* overflow: hidden; */
	flex-direction: column;
	width: 300px;
`;

const StRac = styled.div`
	background-color: white;
	display: flex;
	flex-direction: column;
	position: absolute;
	width: 225px;
	height: 80px;
	z-index: 8888;
	top: 250px;
	left: 50%;
	border-radius: 5px;
	border: 1px solid #d8d9db;
	justify-content: center;
	align-items: center;
	span {
		display: block;
		cursor: pointer;
	}
	& p {
		font-size: 13px;
	}
`;

const StTr = styled.div`
	position: absolute;
	width: 0px;
	height: 0px;
	border-top: 20px solid #dce0ee;
	border-right: 20px solid transparent;
	border-bottom: 20px solid transparent;
	border-left: 20px solid transparent;
	left: 57%;
	top: 330px;
	z-index: 20;
`;
