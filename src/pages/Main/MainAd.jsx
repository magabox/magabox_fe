import React from "react";
import styled from "styled-components";

const Ad = () => {
	return (
		<AdWrap>
			<img
				src="	https://mlink-cdn.netinsight.co.kr/2022/08/19/90912c63a9e1a5461288bfb9f232109b.jpg
"
				alt="ad"
			/>
		</AdWrap>
	);
};

export default Ad;

export const AdWrap = styled.div`
	position: relative;
	display: block;
	text-align: center;
	width: 100%;
	background-color: #0e0b20;
	cursor: pointer;
`;
