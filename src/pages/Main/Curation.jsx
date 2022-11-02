import React from "react";
import styled from "styled-components";
import CurationArea from "./CurationArea";
const Curation = () => {
	return (
		<Bg>
			<Layout>
				<TitleWrap>
					<h2>큐레이션</h2>
					<a href="javascript:void(0)">
						큐레이션 더보기<i></i>
					</a>
				</TitleWrap>
				<CurationArea />
			</Layout>
		</Bg>
	);
};

export default Curation;
export const Bg = styled.div`
	display: block;
	position: relative;
	min-height: 840px;
	padding: 0;
	background-color: #252451;
	overflow: hidden;
`;
export const Layout = styled.div`
	width: 1100px;
	height: 840px;
	margin: 0 auto;
`;

export const TitleWrap = styled.div`
	width: 100%;
	padding: 50px 0 0 0;
	display: flex;
	justify-content: space-between;
	h2 {
		margin-bottom: 40px;
		font-size: 2em;
		color: #fff;
	}
	a {
		color: #aaa;
		vertical-align: middle;

		i {
			margin-top: -4px;
			margin-left: 5px;
			width: 16px;
			height: 16px;
			display: inline-block;
			background-image: url("https://img.megabox.co.kr/static/pc/images/common/btn/btn-more-cross-gray.png");
			background-color: transparent;
			background-repeat: no-repeat;
			background-position: center;
		}
	}
`;
