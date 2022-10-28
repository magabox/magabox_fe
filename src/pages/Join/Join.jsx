import React from "react";
import styled from "styled-components";
import Input from "../../elem/Input/Input";
const Join = () => {
	return (
		<>
			<JoinWrap>
				<div>
					<h2>
						<img
							src="https://img.megabox.co.kr/static/pc/images/common/ci/logo_new2.png"
							alt="logo"
						/>
					</h2>
					<p>회원정보를 입력해주세요.</p>
					<form action="">
						<label htmlFor="">아이디</label>
						<Input theme={"join"} placeholder="영문,숫자(8~12자)" />
						<button>중복확인</button>
						<label htmlFor="">비밀번호</label>
						<Input
							theme={"join"}
							placeholder="영문,숫자,특수기호 중 2가지 이상 조합"
						/>
						<label htmlFor="">비밀번호 확인</label>
						<Input
							theme={"join"}
							placeholder="영문,숫자,특수기호 중 2가지 이상 조합"
						/>
						<button>회원가입하기</button>
					</form>
				</div>
			</JoinWrap>
		</>
	);
};

export default Join;

const JoinWrap = styled.div``;
