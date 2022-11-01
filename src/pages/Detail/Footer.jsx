import React from "react";
import styled from "styled-components";
const Footer = () => {
	return (
		<>
			<Inner>
				<Top>
					<ul>
						<li>회사소개</li>
						<li>인재채용</li>
						<li>사회공헌</li>
						<li>제휴/광고/부대사업문의</li>
						<li>이용약관</li>
						<li>위치기반서비스 이용약관</li>
						<li>
							<span>개인정보처리방침</span>
						</li>
						<li>윤리경영</li>
						<li>
							<button>
								<i></i>
								극장찾기
							</button>
						</li>
					</ul>
				</Top>
				<Bottom>
					<Logo></Logo>
					<FooterInfo>
						<div>
							<Address>
								<address>
									서울특별시 마포구 월드컵로 240, 지상2층(성산동,
									월드컵주경기장)
								</address>
								<p>ARS 1544-0070</p>
							</Address>
							<Text>
								<p>대표자명 홍정인</p>
								<p>· 개인정보보호책임자 공성진</p>
								<p>· 사업자등록번호 211-86-59478</p>
								<p>· 통신판매업신고번호 제 2020-서울마포-4545 호</p>
							</Text>

							<p>COPYRIGHT © MegaboxJoongAng, Inc. All rights reserved</p>
						</div>
						<FooterSns>
							<a
								href="https://www.youtube.com/onmegabox"
								target="blank"
								title="MEGABOX 유튜브 페이지로 이동"
							>
								<Youtube>유튜브</Youtube>
							</a>
							<a
								href="http://instagram.com/megaboxon"
								target="blank"
								title="MEGABOX 인스타그램 페이지로 이동"
							>
								<Instagram>인스타그램</Instagram>
							</a>
							<a
								href="https://www.facebook.com/megaboxon"
								target="blank"
								title="MEGABOX 페이스북 페이지로 이동"
							>
								<Facebook>페이스북</Facebook>
							</a>
							<a
								href="https://twitter.com/megaboxon"
								target="blank"
								title="MEGABOX 트위터 페이지로 이동"
							>
								<Twitter>트위터</Twitter>
							</a>
						</FooterSns>
					</FooterInfo>
				</Bottom>
			</Inner>
		</>
	);
};

export default Footer;

export const Twitter = styled.i`
	background-image: url("https://img.megabox.co.kr/static/pc/images/common/ico/ico-twitterN.png");
`;
export const Facebook = styled.i`
	background-image: url("https://img.megabox.co.kr/static/pc/images/common/ico/ico-facebookN.png");
`;
export const Instagram = styled.i`
	background-image: url("https://img.megabox.co.kr/static/pc/images/common/ico/ico-instagramN.png");
`;
export const Youtube = styled.i`
	background-image: url("https://img.megabox.co.kr/static/pc/images/common/ico/ico-youtubeN.png");
`;

export const Inner = styled.div`
	width: 1100px;
	height: 200px;
	margin: 0 auto;
	color: #444;
	font-weight: 400;
	font-size: 1em;
`;

export const Top = styled.div`
	overflow: hidden;
	width: 1100px;
	margin: 0 auto;
	padding: 30px 0;
	ul {
		display: flex;
		align-items: center;
		li {
			font-size: 0.8667em;
			margin-right: 14px;
			color: #777;
			span {
				color: #222 !important;
				font-weight: 700;
			}
		}
		li:last-child {
			margin-left: 245px;
		}
	}
	button {
		overflow: hidden;
		float: right;
		display: block;
		width: 106px;
		height: 30px;
		margin: 0;
		padding: 0;
		text-align: center;
		line-height: 28px;
		color: #666;
		font-size: 0.8667em;
		border: 1px solid #d8d9db;
		border-radius: 30px;
		text-decoration: none;
		background: transparent;
		cursor: pointer;
		i {
			width: 15px;
			height: 15px;
			background-image: url("https://img.megabox.co.kr/static/pc/images/common/ico/ico-footer-search.png");
			overflow: hidden;
			display: inline-block;
			margin-right: 4px;
			padding: 0;
			font-size: 0;
			line-height: 0;
			vertical-align: middle;
			background-position: 0 0;
			background-repeat: no-repeat;
		}
	}
`;

export const Bottom = styled.div`
	display: flex;
`;

export const Logo = styled.div`
	overflow: hidden;
	display: block;
	float: left;
	width: 150px;
	height: 50px;
	margin: 0 20px 0 0;
	padding: 0;
	text-indent: -9999px;
	background: url(https://img.megabox.co.kr/static/pc/images/common/ci/logo-opacity_new2.png)
		no-repeat center;
`;
export const Text = styled.div``;
export const Address = styled.div``;
export const FooterInfo = styled.div`
	display: flex;
	font-size: 0.8667em;
	${Address} {
		display: flex;
		margin-bottom: 5px;
	}
	${Text} {
		display: flex;
		margin-bottom: 5px;
	}
`;

export const FooterSns = styled.div`
	margin-left: 50px;
	a {
		width: 32px;
		height: 30px;
		margin-left: 5px;
		font-size: 0;
		line-height: 0;
		display: inline-block;
		i {
			display: inline-block;
			overflow: hidden;
			padding: 0;
			font-size: 0;
			line-height: 0;
			vertical-align: middle;
			background-position: 0 0;
			background-repeat: no-repeat;
			width: 30px;
			height: 30px;
		}
	}
`;
