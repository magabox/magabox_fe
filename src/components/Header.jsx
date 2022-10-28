import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Login from "../components/Sign/Login";
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
