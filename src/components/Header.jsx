import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
	return (
		<>
			<div>Header</div>
			<Outlet></Outlet>
		</>
	);
};

export default Header;
