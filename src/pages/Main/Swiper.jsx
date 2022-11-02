import React from "react";
import styled from "styled-components";
const Swiper = () => {
	return (
		<SwiperWrap>
			<SlideWrap>
				<Slide>
					<a href="javascript:void(0)">1</a>
				</Slide>
				<Slide>
					<a href="javascript:void(0)">2</a>
				</Slide>
				<Slide>
					<a href="javascript:void(0)">3</a>
				</Slide>
				<Slide>
					<a href="javascript:void(0)">4</a>
				</Slide>
				<Slide>
					<a href="javascript:void(0)">5</a>
				</Slide>
			</SlideWrap>
		</SwiperWrap>
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
`;
