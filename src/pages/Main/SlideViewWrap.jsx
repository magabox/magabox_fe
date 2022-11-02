import React from "react";
import styled from "styled-components";
const SlideViewWrap = () => {
	return (
		<SliderView>
			<Slider>
				<Content>
					<Txt>
						<a href="javascript:void(0)">
							<img
								src="https://img.megabox.co.kr/SharedImg/BnftMng/2022/10/31/oZ5PqAP5shHscWh083VgBufs5pHaHLr5.jpg"
								alt=""
								onerror="noImg(this, 'main');"
							></img>
						</a>
					</Txt>
					<Bg>
						<a href="javasciprt:void(0)">
							<img
								src="https://img.megabox.co.kr/SharedImg/BnftMng/2022/10/31/ZcoQj7lRqmXpVLO2cA5V7ejjUGtlbN0I.jpg"
								alt=""
								onerror="noImg(this, 'main');"
							/>
						</a>
					</Bg>
				</Content>
			</Slider>
		</SliderView>
	);
};

export default SlideViewWrap;

export const SliderView = styled.div`
	position: absolute;
	height: 325px;
`;

export const Slider = styled.div`
	display: block;
	position: absolute;
	width: 934px;
	height: 325px;
`;

export const Content = styled.div`
	overflow: hidden;
	position: relative;
	width: 100%;
	height: 100%;
`;

export const Txt = styled.div`
	position: absolute;
	left: 0;
	top: 0px;
	opacity: 1;
`;

export const Bg = styled.div`
	position: absolute;
	top: 0;
	left: 300px;
	opacity: 1;
`;
