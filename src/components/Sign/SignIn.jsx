import React from "react";
import styled from "styled-components";
import Input from "../../elem/Input/Input";
import { Link } from "react-router-dom";
const Join = () => {
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
					<StForm>
						<div>
							<label htmlFor="id">아이디</label>
							<Input theme={"join"} placeholder="영문,숫자(8~12자)" id="id" />
							<button>중복확인</button>
						</div>
						<div>
							<label htmlFor="password">비밀번호</label>
							<Input
								theme={"join"}
								placeholder="영문,숫자,특수기호 중 2가지 이상 조합"
								id="password"
							/>
						</div>
						<div>
							<label htmlFor="passwordCheck">비밀번호 확인</label>
							<Input
								theme={"join"}
								placeholder="영문,숫자,특수기호 중 2가지 이상 조합"
								id="passwordCheck"
							/>
						</div>

						<button>회원가입하기</button>
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
		background-color: #f7f8f9;
	}
`;
