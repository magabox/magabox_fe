import React from "react";
import styled from "styled-components";
const InfoNotice = () => {
	return (
		<>
			<InfoNoticeWrap>
				<InfoWrap>
					<p>지점</p>
					<p>
						<a href="javascript:void(0)">
							<strong>[성수]</strong>
							[성수] 2022 서울국제프라이드영화제(2022 SIPFF) 개최 안내
							(11/3~11/9)
						</a>
					</p>
					<p>2022.11.02</p>
					<p>
						<a>
							더보기 <i></i>
						</a>
					</p>
				</InfoWrap>
			</InfoNoticeWrap>
		</>
	);
};

export default InfoNotice;
export const InfoNoticeWrap = styled.div`
	margin-top: 50px;
	border: 1px solid #e2e2e2;
	border-width: 1px 0;
`;
export const InfoWrap = styled.div`
	display: block;
	position: relative;
	width: 1100px;
	height: 62px;
	margin: 0 auto;
	padding: 0 105px 0 95px;
	display: flex;
	align-items: center;
	a {
		color: #222;
		strong {
			color: #01738b;
			font-weight: 700;
		}
	}
	p {
		font-weight: 400;
		font-size: 15px;
	}
	p:first-child {
		margin-right: 60px;
	}
	p:nth-child(2) {
		position: relative;
	}
	p:nth-child(2)::before {
		content: "";
		display: block;
		position: absolute;
		left: -20px;
		top: 50%;
		width: 1px;
		height: 14px;
		margin-top: -7px;
		background-color: #e2e2e2;
	}
	p:nth-child(3) {
		margin-left: 337px;
	}
	p:last-child {
		position: relative;
		margin-left: 30px;
		a {
			cursor: pointer;
			i {
				overflow: hidden;
				width: 7px;
				height: 12px;
				background-image: url("https://img.megabox.co.kr/static/pc/images/common/ico/ico-arr-right-gray.png");
				vertical-align: middle;
				background-position: 0 0;
				background-repeat: no-repeat;
				display: inline-block;
				margin-left: 5px;
			}
		}
	}

	p:last-child::before {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		top: 50%;
		width: 1px;
		height: 14px;
		margin-top: -7px;
		background-color: #e2e2e2;
		margin-left: -10px;
	}
`;
