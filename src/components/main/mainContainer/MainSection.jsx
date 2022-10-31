import React from "react";
import styled from "styled-components";
import {
	StMainContainer,
	StMainBackGround,
	StBackGroundImg,
} from "../styled/MainSectionStyle";
import remember from "../../../../src/UseImg/megabox_img/megabox039.jpg";

const MainSection = () => {
	return (
		<>
			<StMainContainer>
				<StMainBackGround />
				<StBackGroundImg src={remember} />
				<StMainContent>
					<p>글자 테스트</p>
				</StMainContent>
			</StMainContainer>
		</>
	);
};

export default MainSection;

const StMainContent = styled.div`
	width: 1100px;
	height: 800px;
	margin: 0 auto;
	z-index: 10;
	color: white;
	position: absolute;
	top: 55%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	background-color: aqua;
`;
