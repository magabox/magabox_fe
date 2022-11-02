import React from "react";
import styled from "styled-components";
import SlideViewWrap from "./SlideViewWrap";
import SlideControl from "./SlideControl";
import BenefitAd from "./BenefitAd";
import Menu from "./Menu";
const Benefit = () => {
	return (
		<PurpleBg>
			<Layout>
				<TitleWrap>
					<h2>혜택</h2>
					<a href="javascript:void(0)"></a>
				</TitleWrap>
				<SliderWrap>
					<SlideViewWrap />
					<SlideControl />
				</SliderWrap>
				<BenefitAd />
				<Menu />
			</Layout>
		</PurpleBg>
	);
};

export default Benefit;
export const PurpleBg = styled.div`
	position: relative;
	::before {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		right: 0;
		top: 513px;
		bottom: 0;
		background-color: #503396;
	}
`;
export const Layout = styled.div`
	width: 1100px;
	height: 845px;
	margin: 0 auto;
`;
export const SliderWrap = styled.div`
	overflow: hidden;
	position: relative;
	width: 687px;
	height: 325px;
	background-color: #fff;
`;
export const TitleWrap = styled.div`
	width: 100%;
	padding: 50px 0 0 0;
	display: flex;
	justify-content: space-between;
	h2 {
		font-size: 2em;
		color: #351f66 !important;
	}
	a {
		margin-top: 5px;
		width: 16px;
		height: 16px;
		background-image: url("https://img.megabox.co.kr/static/pc/images/common/btn/btn-more-cross-purple.png");
		background-color: transparent;
		background-repeat: no-repeat;
		background-position: center;
	}
`;
