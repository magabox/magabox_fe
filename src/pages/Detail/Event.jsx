import React from "react";
import styled from "styled-components";
import Ad from "../Detail/Ad";
const Event = () => {
	return (
		<>
			<Inner>
				<div>
					<h2>이벤트</h2>
					<button>
						더 보기 <i></i>
					</button>
				</div>
				<div>
					<ul>
						<li>
							<img
								src="https://img.megabox.co.kr/SharedImg/event/2022/09/07/4YA64WfakkCWtf7wx650jit7HAAUovnZ.png"
								alt="event1"
							/>
						</li>
						<li>
							<img
								src="https://img.megabox.co.kr/SharedImg/event/2022/10/28/CcKcP34nZVqd9KlEqrik7LqOvju2h6xl.jpg"
								alt="event2"
							/>
						</li>
					</ul>
				</div>
			</Inner>
			<Ad />
		</>
	);
};

export default Event;

export const Inner = styled.div`
	width: 1100px;
	height: 400px;
	margin: 70px auto 0;
	div:first-child {
		display: flex;
		align-items: center;
		justify-content: space-between;
		h2 {
			margin-bottom: 15px;
			font-size: 1.4666em;
			color: #503396;
		}
		button {
			background-color: transparent;
			border: none;
			cursor: pointer;
			i {
				overflow: hidden;
				width: 7px;
				height: 12px;
				background-image: url("https://img.megabox.co.kr/static/pc/images/common/ico/ico-arr-right-gray.png");
				display: inline-block;
				vertical-align: middle;
				background-position: 0 0;
				background-repeat: no-repeat;
			}
		}
	}
	div:last-child {
		ul {
			display: flex;
			justify-content: space-between;
			li {
				img {
					cursor: pointer;
					border-radius: 10px;
					width: 535px;
					height: 250px;
				}
			}
		}
	}
`;
