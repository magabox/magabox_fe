import React from "react";
import styled from "styled-components";
import Swiper from "./Swiper";
const MegaGuide = () => {
	return (
		<Layout>
			<TitleWrap>
				<h2>메가박스 안내</h2>
			</TitleWrap>
			<Swiper />
		</Layout>
	);
};

export default MegaGuide;

export const Layout = styled.div`
	width: 1100px;
	height: 640px;
	margin: 0 auto;
`;
export const TitleWrap = styled.div`
	width: 100%;
	padding: 50px 0 38px 0;
	display: flex;
	justify-content: space-between;
	h2 {
		margin-bottom: 40px;
		font-size: 1.866em;
		color: #351f66;
	}
`;
