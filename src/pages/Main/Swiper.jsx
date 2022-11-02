import React from "react";
import styled from "styled-components";
const Swiper = () => {
	return (
		<>
			<SwiperWrap>
				<SlideWrap>
					<Slide>
						<Slide1>1</Slide1>
					</Slide>
					<Slide>
						<Slide2>2</Slide2>
					</Slide>
					<Slide>
						<Slide3>3</Slide3>
					</Slide>
					<Slide>
						<Slide4>4</Slide4>
					</Slide>
					<Slide>
						<Slide5>5</Slide5>
					</Slide>
					<Slide>
						<Slide6>6</Slide6>
					</Slide>
				</SlideWrap>
			</SwiperWrap>
			<ButtonWrap>
				<button></button>
				<button></button>
			</ButtonWrap>
		</>
	);
};

export default Swiper;

export const SwiperWrap = styled.div`
	position: relative;
	display: block;
	width: 1100px;
	height: 170px;
	margin: 0 auto;
	text-align: center;
	overflow: hidden;
	list-style: none;
	padding: 0;
	z-index: 1;
`;
export const SlideWrap = styled.div`
	transform: translate3d(0, 0, 0);
	position: relative;
	width: 100%;
	height: 100%;
	z-index: 1;
	display: flex;
	box-sizing: content-box;
`;

export const Slide = styled.div`
	width: 170px;
	margin-right: 16px;
	height: 100%;
	position: relative;
	z-index: 1;
	a {
		position: relative;
		z-index: 2;
		overflow: hidden;
		display: block;
		float: left;
		width: 170px;
		height: 170px;
		font-size: 0;
		line-height: 0;
		text-indent: -9999px;
		border-radius: 10px;
		background-position: 0 0;
		background-repeat: no-repeat;
		background-size: 170px 340px;
		box-shadow: 5px 5px 10px 0px rgb(0 0 0 / 20%);
		transition: all 0.5s;
		cursor: pointer;
	}
	:hover a {
		background-position: 0 bottom;
	}
`;
export const Slide1 = styled.a`
	background-image: url("https://img.megabox.co.kr/static/pc/images/main/bg-main-megainfo-dolby.png");
`;
export const Slide2 = styled.a`
	background-image: url("https://img.megabox.co.kr/static/pc/images/main/bg-main-megainfo-private.png");
`;
export const Slide3 = styled.a`
	background-image: url("	https://img.megabox.co.kr/static/pc/images/main/bg-main-megainfo-boutique.png");
`;
export const Slide4 = styled.a`
	background-image: url("	https://img.megabox.co.kr/static/pc/images/main/bg-main-megainfo-mx.png");
`;
export const Slide5 = styled.a`
	background-image: url("	https://img.megabox.co.kr/static/pc/images/main/bg-main-megainfo-comfort.png");
`;
export const Slide6 = styled.a`
	background-image: url("https://img.megabox.co.kr/static/pc/images/main/bg-main-megainfo-puppy.jpg");
`;

export const ButtonWrap = styled.div`
	width: 1100px;
	height: 30px;
	position: absolute;
	left: 50%;
	margin-left: -550px;
	top: 225px;
	z-index: 10;
	button {
		display: block;
		bottom: 100px;
		z-index: 2;
		cursor: pointer;
		border: none;
	}
	button:first-child {
		position: absolute;
		top: 50%;
		left: -45px;
		width: 16px;
		height: 30px;
		margin-top: -15px;
		background: url("https://img.megabox.co.kr/static/pc/images/main/btn-specialtheater-prev.png")
			no-repeat;
		overflow: hidden;
		text-indent: -999px;
	}
	button:last-child {
		position: absolute;
		top: 50%;
		right: -45px;
		width: 16px;
		height: 30px;
		margin-top: -15px;
		background: url("https://img.megabox.co.kr/static/pc/images/main/btn-specialtheater-next.png")
			no-repeat;
		overflow: hidden;
		text-indent: -999px;
	}
`;
