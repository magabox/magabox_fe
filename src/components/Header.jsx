import React from "react";
import { Outlet } from "react-router-dom";
import Button from "../elem/Button/Button";
const Header = () => {
	return (
		<>
			<Button val={"like"}>ㅋㅋㅋ</Button>
			<Outlet></Outlet>
		</>
	);
};

export default Header;
