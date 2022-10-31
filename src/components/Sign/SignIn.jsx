import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Input from "../../elem/Input/Input";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { is_nickname, is_password } from "../../common/logics";
import { __loginDB } from "../../redux/modules/user/login";

const Join = () => {
	// const login = useSelector(state => state.login.isLogin);
	// console.log(login);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [nameInput, setNameInput] = useState();
	const [idInput, setIdInput] = useState();
	const [pwInput, setPwInput] = useState();
	const [pwInputCheck, setPwInputCheck] = useState();

	const handleChangeName = e => {
		e.preventDefault();
		setNameInput(e.target.value);
	};
	const handleChangeId = e => {
		e.preventDefault();
		setIdInput(e.target.value);
	};

	const handleChangePw = e => {
		e.preventDefault();
		setPwInput(e.target.value);
	};

	const handleChangePwCheck = e => {
		e.preventDefault();
		setPwInputCheck(e.target.value);
	};

	const checkOverlap = async e => {
		e.preventDefault();
		// 1. axios로 아이디 보내기

		const response = await axios.post(
			`${process.env.REACT_APP_SERVER_URL}/members/checkDuplicate`,
			{
				username: idInput,
			},
		);
		// console.log(response);
		window.confirm(`${response.data.data}`);
	};

	// 회원가입하기
	const handleSign = async e => {
		e.preventDefault();

		if (pwInput === pwInputCheck) {
			if (is_nickname(idInput) && is_password(pwInput)) {
				const response = await axios.post(
					`${process.env.REACT_APP_SERVER_URL}/members/signup`,
					{
						name: nameInput,
						username: idInput,
						password: pwInput,
					},
				);
				// console.log(response);
				window.confirm("회원가입이 되었습니다!");
				dispatch(
					__loginDB({ name: nameInput, username: idInput, password: pwInput }),
				);
				navigate(`/`);
			} else if (!is_nickname(idInput) && is_password(pwInput)) {
				window.confirm("아이디를 확인해주세요");
			} else if (is_nickname(idInput) && !is_password(pwInput)) {
				window.confirm("비밀번호를 확인해주세요");
			} else {
				window.confirm("아이디를 확인해주세요");
			}
		} else {
			window.confirm("비밀번호가 일치하지 않습니다!");
		}
	};
	// const handleCancel = e => {
	// 	// 1. state값 다 지우기

	// 	e.preventDefault();

	// 	setIdInput("");
	// 	setPwInput("");
	// 	setPwInputCheck("");
	// };

	// if (login) {
	// 	return navigate("/");
	// }
	return (
		<>
			<JoinWrap>
				<JoinLayout>
					<h2>
						<Link to="/">
							<img
								src="https://img.megabox.co.kr/static/pc/images/common/ci/logo_new2.png"
								alt="logo"
							/>
						</Link>
					</h2>
					<div>
						<p>회원정보를 입력해주세요.</p>
					</div>
					<StForm onSubmit={e => handleSign(e)}>
						<div>
							<label htmlFor="name">이름</label>
							<Input
								theme={"join"}
								type="text"
								name="name"
								placeholder="이름을 입력해 주세요"
								id="name"
								value={nameInput || ""}
								onChange={handleChangeName}
								minLength="2"
								maxLength="7"
							/>
						</div>
						<div>
							<label htmlFor="id">아이디</label>
							<Input
								theme={"join"}
								type="text"
								name="username"
								placeholder="영문,숫자(2~12자)"
								id="id"
								value={idInput || ""}
								onChange={handleChangeId}
								minLength="2"
								maxLength="12"
							/>
							<button onClick={checkOverlap}>중복확인</button>
						</div>
						<div>
							<label htmlFor="password">비밀번호</label>
							<Input
								theme={"join"}
								type="password"
								name="password"
								placeholder="영문,숫자,특수기호 중 2가지 이상 조합 (8~20자)"
								id="password"
								value={pwInput || ""}
								onChange={handleChangePw}
								minLength="8"
								maxLength="20"
							/>
						</div>
						<div>
							<label htmlFor="passwordCheck">비밀번호 확인</label>
							<Input
								theme={"join"}
								type="password"
								placeholder="영문,숫자,특수기호 중 2가지 이상 조합 (8~20자)"
								id="passwordCheck"
								value={pwInputCheck || ""}
								onChange={handleChangePwCheck}
								minLength="8"
								maxLength="20"
							/>
						</div>

						<button type="submit">회원가입하기</button>
					</StForm>
				</JoinLayout>
			</JoinWrap>
		</>
	);
};

export default Join;

const JoinWrap = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #f5f5f5;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
`;

const JoinLayout = styled.div`
	width: 1080px;
	height: 100vh;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;

	p {
		border-bottom: 1px solid #727272;
		padding: 10px;
	}
`;

const StForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	div {
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		label {
			padding: 10px 0;
			display: inline-block;
			text-align: center;
			width: 130px;
			height: 40px;
			margin-right: 10px;
			line-height: 40px;
			background-color: #f7f8f9;
		}
		button {
			border: none;
			width: 80px;
			height: 39px;
			cursor: pointer;
			margin-left: 8px;
			background-color: #f7f8f9;
		}
	}
	button {
		border: none;
		width: 100px;
		height: 45px;
		cursor: pointer;
		position: relative;
		background-color: #f7f8f9;
		@media screen and (min-width: 780px) {
		}
	}
`;
