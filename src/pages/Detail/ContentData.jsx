import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Flex from "../../elem/Flex/Flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/modules/modal/modalSlice";
import Comment from "./comment/Comment";
import Bubble from "../../elem/bubble/Bubble";
import ModalContainer from "./modal/AddCommentModal";
import { __AddComment } from "../../redux/modules/Movies/MovieSlice";

const ContentData = ({ detailData }) => {
	const dispatch = useDispatch();

	const user = localStorage.getItem("user-name");
	const token = localStorage.getItem("accessToken");
	const comments = useSelector(
		state => state?.movies?.movies?.data?.commentList,
	);

	const [modal, setModal] = useState(false);
	const [open, setOpen] = useState(false);

	const handleSubmit = () => {
		setOpen(false);
	};

	const handleCancle = () => {
		setOpen(false);
	};

	const onClick = () => {
		if (token) {
			setOpen(!open);
		} else {
			setModal(!modal);
		}
	};

	const data = [
		{
			id: 0,
			title: "주요정보",
			content: (
				<>
					{open && (
						<ModalContainer
							open={open}
							handleSubmit={handleSubmit}
							handleCancle={handleCancle}
						/>
					)}

					<div>
						<InfoContent>
							<StSum>{detailData?.data?.summary}</StSum>
							<p>상영타입 : 2D(자막)</p>

							<InfoLine>
								<p>감독&nbsp;: 제임스 맥티그</p>
								<p>장르&nbsp;: 액션 / {detailData?.data?.runtime} 분</p>
								<p>등급&nbsp;: 15세이상관람가</p>
								<p>개봉일&nbsp;: 2022.11.02(재개봉)</p>
							</InfoLine>
							<p>출연진&nbsp;: 나탈리 포트만, 휴고 위빙</p>
						</InfoContent>
					</div>
					<MovieGraphWrap>
						<MovieGraph>
							<Col>
								<dl>
									<dt>관람포인트</dt>
									<dd>&nbsp;</dd>
								</dl>
								<Graph>
									<canvas></canvas>
									<img
										src="	https://www.megabox.co.kr/static/pc/images/movie/no-graph01.jpg"
										alt="graph01"
									/>
								</Graph>
							</Col>
						</MovieGraph>
						<MovieGraph>
							<Col>
								<dl>
									<dt>실관람 평점</dt>
								</dl>
								<Graph>
									<canvas></canvas>
									<img
										src="https://www.megabox.co.kr/static/pc/images/movie/no-graph02.jpg"
										alt="graph02"
									/>
								</Graph>
								<div>
									<dl>
										<dt>예매율</dt>
										<dd>
											<span>0%</span>
										</dd>
									</dl>
								</div>
							</Col>
						</MovieGraph>
						<MovieGraph>
							<Col>
								<dl>
									<dt>누적관객수</dt>
									<dd>0</dd>
								</dl>
								<Graph>
									<canvas></canvas>
									<img
										src="https://www.megabox.co.kr/static/pc/images/movie/no-graph04.jpg"
										alt="graph04"
									/>
								</Graph>
							</Col>
						</MovieGraph>
					</MovieGraphWrap>
					<TitH2>아직 남겨진 한줄평이 없어요.</TitH2>
					<CommentWrap>
						<ul>
							<li>
								<div>
									<ImgWrap>
										<Img>
											<img
												src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-mega-profile.png"
												alt="mega-profile"
											/>
										</Img>
										<p>MEGABOX</p>
									</ImgWrap>
								</div>
								<StoryBox>
									<div>
										첫번째
										<span> 관람평의 </span>
										주인공이 되어 보세요.
									</div>
									<div>
										<button onClick={onClick}>
											<i></i>
											관람평쓰기
										</button>
									</div>
								</StoryBox>
							</li>
						</ul>
					</CommentWrap>
					<StComment>
						{comments?.map(comment => {
							return <Comment comment={comment} key={comment.id} />;
						})}
					</StComment>
				</>
			),
		},
		{
			id: 1,
			title: "실관람평",
			content: "제작중입니당",
		},
		{
			id: 2,
			title: "무비포스트",
			content: "미완성입니다",
		},
		{
			id: 3,
			title: "예고편/스틸컷",
			content: "예고편미완성입니당",
		},
	];
	const [index, setIndex] = useState(0);
	return (
		<>
			{modal === true ? <Bubble modal={modal} /> : null}
			<InnerWrap>
				<TabList>
					<section>
						<article>
							<ul>
								{data?.map(item => (
									<li
										key={item.id}
										onClick={() => setIndex(item.id)}
										className={index === item.id ? "on" : null}
									>
										{item.title}
									</li>
								))}
							</ul>
						</article>
						{data
							.filter(item => index === item.id)
							.map(item => (
								<>
									<div>{item.content}</div>
								</>
							))}
					</section>
				</TabList>
			</InnerWrap>
		</>
	);
};

export default ContentData;

export const StId = styled.p`
	display: flex;
	justify-content: center;
`;

export const StProfile = styled.div`
	display: flex;
	flex-direction: column;
	width: 105px;
	height: 76.43px;
	justify-content: space-between;
	align-items: center;

	& img {
		width: 50px;
		height: 50px;
	}
`;

export const StComment = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const StSum = styled.div`
	display: flex;
	width: 1100px;
	height: 140px;
	overflow: hidden;
`;

export const CommentWrap = styled.div`
	ul {
		li {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;

export const StoryBox = styled.div`
	border-radius: 0 10px 10px 10px;
	border: 1px solid #eaeaea;
	background-color: #fff;
	width: 100%;
	height: 84px;
	display: flex;
	div:first-child {
		width: 850px;
		height: 84px;
		vertical-align: middle;
		padding-left: 30px;
		text-align: left;
		color: #666;
		line-height: 84px;
		span {
			color: #01738b;
		}
	}
	div:last-child {
		text-align: center;
		vertical-align: middle;
		line-height: 84px;
		button {
			width: 105px;
			height: 24px;
			color: #666;
			text-decoration: none;
			border: none;
			background-color: #fff;
			cursor: pointer;
			i {
				width: 18px;
				height: 18px;
				background-image: url("https://img.megabox.co.kr/static/pc/images/common/ico/ico-story-write.png");
				margin-right: 5px;
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
	}
`;

export const ImgWrap = styled.div`
	position: relative;
	width: 105px;
	text-align: center;
	p {
		margin: 0;
		width: 105px;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 0.9333em;
		line-height: 1.1;
	}
`;

export const Img = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin: 0 auto 10px;
	overflow: hidden;
`;

export const TitH2 = styled.h2`
	margin-top: 70px;
	padding: 0 0 16px 0;
	font-size: 1.4666em;
	color: #503396;
	font-weight: 400;
	letter-spacing: -1px;
	line-height: 1.1;
`;
export const MovieGraphWrap = styled.div`
	display: flex;
`;
export const Graph = styled.div`
	position: relative;
	bottom: 0px;
	overflow: hidden;
	width: 216px;
	height: 216px;
	margin: 0 auto;
	box-sizing: border-box;
	canvas {
		width: 216px;
		height: 216px;
		display: none;
	}
	img {
	}
`;

export const Col = styled.div`
	display: table-cell;
	width: 25%;
	border: 1px solid #eaeaea;
	padding: 30px 0;
	box-sizing: border-box;
	dl {
		text-align: center;
		font-weight: 400;
		dt {
			font-size: 1.0667em;
			color: #555;
		}
		dd {
			padding: 20px 0 30px 0;
			font-size: 2em;
			color: #503396;
		}
	}
`;

export const MovieGraph = styled.div`
	display: table;
	width: 100%;
	table-layout: fixed;
	border-collapse: collapse;
	${Col}:first-child {
		border-right: none;
	}
	:last-child {
		border-right: 1px solid #eaeaea;
	}
`;

export const InfoLine = styled.div`
	display: flex;
	p {
		padding-left: 20px;
	}
	p:first-child {
		padding-left: 0;
	}
`;

export const InfoContent = styled.div`
	line-height: 1.5;
	padding: 30px 0;
	color: #222;
`;

export const InnerWrap = styled.div`
	width: 1100px;
	margin: 0 auto;
`;

export const TabList = styled.div`
	position: static;
	width: 100%;
	background-color: rgba(255, 255, 255);
	section {
		article {
			ul {
				display: flex;
				position: relative;
				width: 100%;
				height: 42px;
				cursor: pointer;
				.on {
					border: 1px solid #503396;
					border-bottom: 0;
					color: #503396;
				}
				li {
					height: 42px;
					border-top: 1px solid #ebebeb;
					border-right: 1px solid #ebebeb;
					border-bottom: 1px solid #503396;
					width: 25%;
					color: #333;
					height: 41px;
					line-height: 40px;
					text-align: center;
				}
			}
		}
	}
`;
