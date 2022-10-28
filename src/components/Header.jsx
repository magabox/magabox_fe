import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Button from "../elem/Button/Button";

const Header = () => {
	return (
		<>
			<StHeaderBox>

			</StHeaderBox>
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
