import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
	__getBoxOffice,
	__getByMovieId,
} from "../../redux/modules/boxOffice/boxOfiiceSlice";
import { useParams } from "react-router-dom/dist";
import { useEffect } from "react";

const Banner = ({ detailData, heartData }) => {
	const dispatch = useDispatch();
	const details = detailData.data;
	const { id } = useParams();

	useEffect(() => {
		dispatch(__getByMovieId(id));
		dispatch(__getBoxOffice());
	}, [dispatch]);

	return (
		<>
			<BannerWrap>
				<BackGround>
					<Content>
						<Dday>예매 D-1</Dday>
						<Title>{details?.title}</Title>
						{/* <TitleE>V For Vendetta</TitleE> */}
						<ButtonWrap>
							<LikeBtn>
								<i></i>
								<span title="보고싶어 한 명수" id="intrstCnt">
									{details?.totalHeartCount}
								</span>
							</LikeBtn>
							<div>
								<a>
									<i></i>
									공유하기
								</a>
							</div>
						</ButtonWrap>
					</Content>
					<Info>
						<Score>
							<ScoreP>실관람 평점</ScoreP>
							<div>
								<p>
									<em>8.8</em>
									<span>점</span>
								</p>
							</div>
						</Score>
						<Rate>
							<p>예매율</p>
							<p>
								<em>1</em>위 (19.6%)
							</p>
						</Rate>
						<Audience>
							<Tit>
								<span>
									누적관객수
									<em>
										<i>툴팁보기</i>
										<div>
											<p>
												누적관객 및 전일관객은 영화진흥 위원회
												<br />
												영화관 입장권 통합전산망제공 기준입니다.
												<br />
											</p>
										</div>
									</em>
								</span>
							</Tit>
							<Cont>
								<em>0</em> 명
							</Cont>
						</Audience>
					</Info>
					<Poster>
						<div>
							<img
								src={details?.imageUrl}
								alt=""
							/>
						</div>
					</Poster>
					<Reserve>
						<button>예매</button>
					</Reserve>
				</BackGround>
			</BannerWrap>
		</>
	);
};

export default Banner;

export const Reserve = styled.div`
	overflow: hidden;
	display: block;
	position: absolute;
	right: 0;
	bottom: 45px;
	width: 260px;

	button {
		width: 100%;
		margin: 0;
		background-color: #329eb1;
		display: block;
		float: left;
		height: 46px;
		line-height: 44px;
		font-size: 1.2em;
		margin: 0;
		padding: 0;
		color: #fff;
		text-align: center;
		border: 0;
		border-radius: 5px;
		text-decoration: none;
		font-weight: 700;
		cursor: pointer;
	}
`;
export const Poster = styled.div`
	overflow: hidden;
	display: block;
	position: absolute;
	right: 0;
	top: 45px;
	z-index: 2;
	width: 260px;
	height: 374px;

	div {
		position: relative;
		width: 100%;
		height: 100%;
		font-size: 0;
		line-height: 0;
		img {
			display: block;
			width: 100%;
			height: 100%;
			border-radius: 10px;
		}
	}
`;

export const ScoreP = styled.p`
	display: block;
	padding: 0 0 15px 0;
	line-height: 1.1;
	font-size: 0.9333em;
`;
export const Score = styled.div`
	div {
		padding: 0 0 0 30px;
		background: url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-megabox.png)
			no-repeat 0 center;
		font-family: Roboto, Dotum, "돋움", sans-serif;
		font-weight: 400;
		em {
			color: #59bec9;
			font-size: 2.1333em;
		}
		span {
			text-indent: -9999px;
			position: fixed;
			top: -9999px;
			font-size: 1px;
			width: 1px;
			height: 1px;
			opacity: 0;
		}
	}
`;
export const Cont = styled.p`
	display: inline-block;
	padding: 0 0 0 30px;
	vertical-align: middle;
	line-height: 1.1;
	background: url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-person.png)
		no-repeat 0 center;
	em {
		margin: 0 4px 0 0;
		color: #fff;
		font-size: 2.1333em;
		font-family: Roboto, Dotum, "돋움", sans-serif;
		font-weight: 400;
	}
`;

export const Audience = styled.div`
	padding: 0 0 0 35px;
`;

export const Tit = styled.div`
	position: relative;
	display: block;
	padding: 0 0 15px 0;
	line-height: 1.1;
	font-size: 0.9333em;
	span {
	}
	em {
		position: relative;
		margin-left: 5px !important;
		:hover {
			div {
				opacity: 1;
			}
		}

		i {
			overflow: hidden;
			width: 16px;
			height: 16px;
			background-image: url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-tooltip-gray.png);
			display: inline-block;
			margin: -1px 0 0 0;
			padding: 0;
			font-size: 0;
			line-height: 0;
			vertical-align: middle;
			background-position: 0 0;
			background-repeat: no-repeat;
		}
		div {
			transition: all 0.5s;
			opacity: 0;
			position: absolute;
			width: 320px;
			left: -105px;
			top: -90px;
			margin: 0;
			padding: 15px 20px;
			border: 1px solid #d8d9db;
			text-align: center;
			border-radius: 5px;
			background-color: #fff;
			z-index: 5;
			p {
				color: #222;
				line-height: 1.6;
			}
		}
	}
`;

export const Info = styled.div`
	display: flex;
	position: absolute;
	left: 0;
	bottom: 45px;
	padding: 0;
	color: #fff;
`;
export const Rate = styled.div`
	margin-left: 40px;
	p:first-child {
		display: block;
		padding: 0 0 15px 0;
		line-height: 1.1;
		font-size: 0.9333em;
	}
	p:last-child {
		display: inline-block;
		min-height: 35px;
		padding: 0 0 0 30px;
		vertical-align: middle;
		line-height: 1.1;
		background: url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-ticket-gray.png)
			no-repeat 0 center;
		em {
			margin: 0 4px 0 0;
			color: #fff;
			font-size: 2.1333em;
			font-family: Roboto, Dotum, "돋움", sans-serif;
			font-weight: 400;
		}
	}
`;

export const BannerWrap = styled.div`
	position: relative;
	z-index: 1;
	height: 520px;
	margin: 91px 0 40px 0;
	background-color: #151515;
`;

export const BackGround = styled.div`
	position: absolute;
	left: 50%;
	top: 0;
	z-index: 1;
	width: 1100px;
	margin: 0 0 0 -550px;
	height: 100%;
	background-position: center 0;
	background-repeat: no-repeat;
	background-size: 100% auto;
	opacity: 1;
`;

export const Content = styled.div`
	position: relative;
	z-index: 4;
	width: 1100px;
	margin: 0 auto;
	padding: 55px 0 0 0;
	p {
		color: #fff;
	}
`;

export const Dday = styled.p`
	background-color: #432e75;
	overflow: hidden;
	display: inline-block;
	height: 22px;
	padding: 0 10px;
	font-size: 0.8667em;
	line-height: 22px;
	color: #fff;
	border-radius: 3px;
	vertical-align: middle;
`;

export const Title = styled.p`
	position: static;
	left: inherit;
	top: inherit;
	width: 800px;
	padding: 15px 0 0 0;
	color: #fff;
	font-size: 3.0666em;
	font-weight: 400;
	line-height: 1.2;
	text-shadow: 2px 2px 10px rgb(0 0 0 / 70%);
`;

export const TitleE = styled.p`
	width: 800px;
	padding: 10px 0 0 0;
	font-size: 1.3333em;
	font-family: Roboto;
	color: #fff;
	line-height: 1.1;
	overflow: hidden;
	max-width: 100%;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export const ButtonWrap = styled.div`
	padding: 15px 0 0 0;
	div {
		min-width: 100px;
		height: 36px;
		position: relative;
		display: inline-block;
		a {
			box-sizing: border-box;
			display: inline-block;
			min-width: 100px;
			height: 36px;
			line-height: 34px;
			margin: 0 6px 0 0;
			padding: 0 10px;
			font-size: 0.9333em;
			color: #fff;
			text-decoration: none;
			text-align: center;
			border: 1px solid #706f72;
			border-radius: 4px;
			background-color: transparent;
			i {
				margin-right: 4px !important;
				width: 17px;
				height: 17px;
				background-image: url("https://img.megabox.co.kr/static/pc/images/common/ico/ico-sns-line.png");
				overflow: hidden;
				display: inline-block;
				padding: 0;
				font-size: 0;
				line-height: 0;
				vertical-align: middle;
				background-position: 0 0;
				background-repeat: no-repeat;
			}
		}
		:hover {
			a {
				background-color: #fff;
				color: #222;
			}

			i {
				background-image: url("https://img.megabox.co.kr/static/pc/images/common/ico/ico-sns-on.png");
			}
		}
	}
`;

export const LikeBtn = styled.button`
	display: inline-block;
	min-width: 100px;
	height: 36px;
	line-height: 34px;
	margin: 0 6px 0 0;
	padding: 0 10px;
	font-size: 0.9333em;
	color: #fff;
	text-decoration: none;
	text-align: center;
	border: 1px solid #706f72;
	border-radius: 4px;
	background-color: transparent;
	i {
		margin-right: 4px;
		width: 17px;
		height: 15px;
		background-image: url("https://img.megabox.co.kr/static/pc/images/common/ico/ico-heart-line.png");
		overflow: hidden;
		display: inline-block;
		padding: 0;
		font-size: 0;
		line-height: 0;
		vertical-align: middle;
		background-position: 0 0;
		background-repeat: no-repeat;
	}
	:hover {
		background-color: #fff;
		i {
			background-image: url("https://img.megabox.co.kr/static/pc/images/common/ico/ico-heart-on.png");
		}
		span {
			color: #222;
		}
	}
`;
