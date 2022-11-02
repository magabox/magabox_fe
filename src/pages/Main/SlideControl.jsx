import React from "react";
import styled from "styled-components";
const SlideControl = () => {
	return (
		<SliderControl>
			<Page>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</Page>
			<Arrow>
				<button></button>
				<button></button>
				<button></button>
				<button></button>
			</Arrow>
			<Count>1 / 12</Count>
		</SliderControl>
	);
};

export default SlideControl;
export const SliderControl = styled.div`
	overflow: hidden;
	display: flex;
	position: absolute;
	left: 0;
	bottom: 42px;
	z-index: 2;
`;

export const Page = styled.div`
	display: flex;
	width: 190px;
	height: 2px;
	margin-top: 5px;
	background-color: #ebebeb;
	span {
		width: 8.3332%;
		display: block;
		height: 100%;
	}
	span:first-child {
		background-color: #503396;
	}
`;

export const Arrow = styled.div`
	display: flex;
	padding: 0 10px 0 15px;
	button {
		display: block;
		height: 12px;
		margin-left: 8px;
		background-color: transparent;
		background-position: center;
		background-repeat: no-repeat;
		border: none;
		cursor: pointer;
	}
	button:first-child {
		opacity: 0.5;
		width: 7px;
		background-image: url("	https://www.megabox.co.kr/static/pc/images/main/btn-benefit-slider-prev.png");
	}
	button:nth-child(2) {
		width: 7px;
		background-image: url("	https://www.megabox.co.kr/static/pc/images/main/btn-benefit-slider-next.png");
	}
	button:nth-child(3) {
		display: none;
		width: 6px;
		background-image: url("	https://www.megabox.co.kr/static/pc/images/main/btn-benefit-slider-pause.png");
	}
	button:last-child {
		width: 6px;
		background-image: url("	https://www.megabox.co.kr/static/pc/images/main/btn-benefit-slider-play.png");
	}
`;
export const Count = styled.div`
	font-size: 15px;
`;
