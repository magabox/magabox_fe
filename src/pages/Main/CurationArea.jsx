import React from "react";
import styled from "styled-components";
const CurationArea = () => {
	return (
		<>
			<CurrImg>
				<p>메가박스 클래식소사이어티</p>
			</CurrImg>
		</>
	);
};

export default CurationArea;

export const CurrImg = styled.div`
	position: absolute;
	z-index: 1;
	width: 100%;
	padding: 0;
`;
export const ClassicTitle = styled.p`
	position: absolute;
	left: 0;
	top: -10px;
	z-index: 2;
	display: block;
	width: 123px;
	height: 135px;

	background: url("https://www.megabox.co.kr/static/pc/images/main/bg-bage-curation-classic.png")
		no-repeat 0 0;
`;
