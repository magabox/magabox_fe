import React from "react";
import styled from "styled-components";
import InfoLink from "./InfoLink";
import InfoNotice from "./InfoNotice";
import Swiper from "./Swiper";
const MegaGuide = () => {
	return (
		<>
			<Layout>
				<TitleWrap>
					<h2>메가박스 안내</h2>
				</TitleWrap>
				<Swiper />
			</Layout>
			<InfoNotice />
			<InfoLink />
		</>
	);
};

export default MegaGuide;

export const Layout = styled.div`
	width: 1100px;
	height: 340px;
	margin: 0 auto;
	position: relative;
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
