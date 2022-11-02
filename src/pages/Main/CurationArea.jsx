import React from "react";
import styled from "styled-components";
const CurationArea = () => {
	return (
		<>
			<CurrImg>
				<ClassicTitle>메가박스 클래식소사이어티</ClassicTitle>
				<ImgWrap>
					<a href="javscript:void(0)">
						<img
							src="https://img.megabox.co.kr/SharedImg/2022/10/14/iBBnWtGu1pQDiOnGyN1eNx6ZgvfXfh5B_420.jpg"
							alt="로열 오페라 하우스 '22-23시즌"
						/>
					</a>
				</ImgWrap>
				<BtnGroup>
					<BtnLeft>
						<a href="javascript:void(0)">상세정보</a>
					</BtnLeft>
					<BtnRight>
						<a href="javascript:void(0)">상영종료</a>
					</BtnRight>
				</BtnGroup>
				<Info>
					<p>
						<span>클래식소사이어티</span>
					</p>
					<p>로열 오페라 하우스 '22-23시즌</p>
					<p>
						메가박스 클래식소사이어티의 새로운 프로그램을 소개합니다. <br />
						<br />
						역대 가장 화려한 시즌을 맞이한 로열 오페라 하우스 2022/23 시즌
						<br />
						<br />
						[상영일]
						<br />
						2022년 10월 31일 ~ 2023년 8월 14일
						<br />
						발레 : 매주 월요일/일요일 상영 <br />
						{/* 오페라 : 매주 월요일 상영
						<br />
						<br />
						[상영지점] <br />
						▶발레 : <br />
						ㆍ서울 = 상암월드컵경기장/ 성수 / 센트럴 / 코엑스
						<br />
						ㆍ경기/인천 = 분당 / 송도 / 안성스타필드 / 영통 / 일산벨라시타 /
						킨텍스 / 하남스타필드
						<br />
						ㆍ대전/충청 = 대전신세계 아트앤사이언스 / 세종나성
						<br />
						ㆍ부산/대구/경상 = 대구이시아/ 부산대 / 울산 / 양산라피에스타 /
						해운대(장산)
						<br />
						▶오페라
						<br />
						ㆍ성수 / 센트럴 / 분당 / 킨텍스 / 부산대 / 해운대(장산)
						<br />
						<br />* 지점은 추가 오픈 될 예정입니다.
						<br /> */}
					</p>
				</Info>
			</CurrImg>
			<List>
				<ul>
					<li>
						<a href="javascript:void(0)">
							<span></span>
							<div>
								<img
									src="https://img.megabox.co.kr/SharedImg/2022/09/05/pshGbPkxbpD93qWajPgJMo71BymEmj1Q_230.jpg"
									alt="[워너필소] 브이 포 벤데타"
								/>
							</div>
							<p>[워너필소] 브이 포 벤데타</p>
						</a>
					</li>
					<li>
						<a href="javascript:void(0)">
							<span></span>
							<div>
								<img
									src="https://img.megabox.co.kr/SharedImg/2022/10/25/GUJ1h0v2t5u965lkwXIkIqnHZXGUR9xT_230.jpg"
									alt="알카라스의 여름"
								/>
							</div>
							<p>알카라스의 여름</p>
						</a>
					</li>
					<li>
						<a href="javascript:void(0)">
							<span></span>
							<div>
								<img
									src="https://img.megabox.co.kr/SharedImg/2022/09/05/lQCgVHnv9PondWhG1eERKIDemlhzQG2R_230.jpg"
									alt="[워너필소] 카사블랑카"
								/>
							</div>
							<p>[워너필소] 카사블랑카</p>
						</a>
					</li>
					<li>
						<a href="javascript:void(0)">
							<span></span>
							<div>
								<img
									src="https://img.megabox.co.kr/SharedImg/2022/10/25/41ZF8CKPY34VSas0tZs0CenUGITggDVZ_230.jpg"
									alt="탑"
								/>
							</div>
							<p>탑</p>
						</a>
					</li>
				</ul>
			</List>
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
	font-size: 0;
	background: url("https://www.megabox.co.kr/static/pc/images/main/bg-bage-curation-classic.png")
		no-repeat 0 0;
`;
export const ImgWrap = styled.div`
	padding-left: 20px;
	font-size: 0;
	line-height: 0;
	a {
		display: block;
		width: 300px;
		height: 430px;
		/* background: rgba(0, 0, 0, 0.5) url(../images/common/ico/ico-img-none.png)
			no-repeat center; */
		background-size: 48px 48px;
		border-radius: 15px;
	}
	img {
		width: 100%;
		height: 100%;
		border-radius: 15px;
	}
`;
export const BtnGroup = styled.div`
	width: 300px;
	margin: 0 0 0 20px;
	padding: 10px 0 0 0;
	display: flex;
	div {
		width: calc(50% - 5px);
		a {
			color: #fff;
			text-align: center;
			border-radius: 5px;
			font-weight: 300;
			box-sizing: border-box;
		}
	}
`;
export const BtnLeft = styled.div`
	margin-right: 10px;
	a {
		display: block;
		width: 100%;
		height: 50px;
		line-height: 48px;
		font-size: 1.2em;
		padding: 0;
		border: 1px solid #fff;
		background-color: transparent;
	}
`;
export const BtnRight = styled.div`
	a {
		display: block;
		width: 100%;
		height: 50px;
		line-height: 48px;
		font-size: 1.2em;
		background: #037b94;
	}
`;
export const Info = styled.div`
	position: absolute;
	left: 370px;
	top: 0;
	width: calc(100% - 370px);
	color: #fff;
	p:first-child {
		display: block;
		margin-left: 0;
		padding: 0 0 10px 0;
		font-size: 1.3333em;
		line-height: 1.1;
	}
	p:nth-child(2) {
		width: 730px;
		border-bottom: 1px solid #474681;
		overflow: hidden;
		display: block;
		margin-left: 0;
		padding: 0 0 30px 0;
		font-size: 2.4em;
		line-height: 1.1;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-bottom: 20px;
	}
	p:last-child {
		overflow: hidden;
		height: 192px;
		line-height: 1.5;
	}
`;
export const List = styled.div`
	padding: 310px 0 0 370px;
	ul {
		display: flex;
		li {
			width: 170px;
			margin-right: 15px;
			a {
				span {
					background-image: url("https://www.megabox.co.kr/static/pc/images/main/bg-bage-curation-film-m.png");
					position: absolute;
					left: 10px;
					top: -5px;
					display: block;
					width: 35px;
					height: 50px;
					font-size: 0;
					line-height: 0;
					background-repeat: no-repeat;
					background-position: 0 0;
					background-size: 35px auto;
				}
				div {
					overflow: hidden;
					width: 170px;
					height: 244px;
					border-radius: 10px;
				}
				display: block;
				position: relative;
				color: #fff;
				text-decoration: none;
				background-size: 0 0;
				img {
					display: block;
					width: 100%;
					height: 100%;
				}
				p {
					margin-top: 10px;
					text-align: center;
				}
			}
		}
	}
`;
