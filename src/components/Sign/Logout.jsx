import React from "react";

const Logout = () => {
	const logOut = async () => {
		const contest = window.confirm("로그아웃 하시겠습니까?");
		if (contest === true) {
			window.localStorage.clear();
			window.location.reload();
		} else if (contest === false) {
			return;
		}
	};

	const handleLogout = e => {
		e.preventDefault();
		logOut();
	};

	return (
		<>
			<span onClick={handleLogout}>로그아웃</span>
		</>
	);
};
export default Logout;

// const LogoutButton = styled.span`
// 	border: none;
// 	color: #888;
// `;
