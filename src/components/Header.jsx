import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Login from "../components/Sign/Login";
import styled from "styled-components";
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModalHandler = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div>
				<button onClick={openModalHandler}>로그인</button>
				{isOpen ? <Login close={openModalHandler} /> : null}
			</div>
			<Outlet></Outlet>
		</>
	);
};

export default Header;

export const StHeaderBox = styled.div`
	width: 100%;
	height : 91px;
	background-color: #444444;
`;
