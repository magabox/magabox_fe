import React from "react";
import styled from "styled-components";

const MoviePoster = () => {
	return (
		<>
			<MoviePosterWrap>
				<InnerWrap>
					<h2>아직 남겨진 무비포스트가 없어요!</h2>
					<Box>
						<p>
							아직 작성된 무비포스트가 없어요. 첫번째 무비포스트의 주인공이
							되어보세요.
							<br />
						</p>
						<div>
							<button>
								<i></i> 무비포스트 쓰기
							</button>
						</div>
					</Box>
				</InnerWrap>
			</MoviePosterWrap>
		</>
	);
};

export default MoviePoster;

export const Box = styled.div`
	position: relative;
	margin-top: 20px;
	padding: 20px 30px;
	min-height: 60px;
	border: 1px solid #fff;
	border-color: rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	display: flex;
	line-height: 60px;
	justify-content: space-between;
	button {
		color: #fff;
		background-color: transparent;
		border: none;
		font-size: 16px;
		i {
			overflow: hidden;
			width: 18px;
			height: 18px;
			background-image: url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-write-white.png);
			display: inline-block;
			padding: 0;
			font-size: 0;
			line-height: 0;
			vertical-align: middle;
			background-position: 0 0;
			background-repeat: no-repeat;
		}
	}
`;

export const InnerWrap = styled.div`
	width: 1100px;
	margin: 0 auto;
`;

export const MoviePosterWrap = styled.div`
	padding: 70px 0;
	color: #fff;
	background: url("https://img.megabox.co.kr/static/pc/images/movie/bg-movie-detail-poster.png");
	h2 {
		padding: 0 0 16px 0;
		font-size: 1.4666em;
		font-weight: 400;
		letter-spacing: -1px;
		line-height: 1.1;
	}
`;
