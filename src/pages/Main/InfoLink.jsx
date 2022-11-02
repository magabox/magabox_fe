import React from "react";
import styled from "styled-components";
const InfoLink = () => {
	return (
		<InfoLinkWrap>
			<Table>
				<Customer>
					<a href="javascipt:void(0)">
						<i></i>
						<span>고객센터</span>
					</a>
				</Customer>
				<Faq>
					<a href="javascipt:void(0)">
						<i></i>
						<span>자주 묻는 질문</span>
					</a>
				</Faq>
				<QnA>
					<a href="javascipt:void(0)">
						<i></i>
						<span>1:1 문의</span>
					</a>
				</QnA>
				<Rent>
					<a href="javascipt:void(0)">
						<i></i>
						<span>단체/대관문의</span>
					</a>
				</Rent>
				<Lost>
					<a href="javascipt:void(0)">
						<i></i>
						<span>분실물 문의/접수</span>
					</a>
				</Lost>
				<Boutique>
					<a href="javascipt:void(0)">
						<i></i>
						<span>
							더 부티크 프라이빗
							<br />
							대관예매
						</span>
					</a>
				</Boutique>
			</Table>
		</InfoLinkWrap>
	);
};

export default InfoLink;

export const InfoLinkWrap = styled.div`
	width: 1100px;
	margin: 0 auto;
	padding: 70px 0 100px;
`;

export const Table = styled.div`
	display: flex;
	justify-content: center;
	div {
		display: flex;
		justify-content: center;
		width: 16.7%;
		text-align: center;
		a {
			color: #222;
			font-size: 15px;
			i {
				overflow: hidden;
				vertical-align: middle;
				background-position: 0 0;
				background-repeat: no-repeat;
				margin: 0 auto;
				display: block;
			}
			span {
				display: block;
				margin: 0 auto;
				padding: 10px 0 0 0;
				line-height: 1.3;
			}
		}
	}
`;

export const Customer = styled.div`
	i {
		width: 46px;
		height: 46px;
		background-image: url("https://img.megabox.co.kr/static/pc/images/common/ico/ico-main-customer.png");
	}
`;

export const Faq = styled.div`
	i {
		width: 50px;
		height: 46px;
		background-image: url("https://img.megabox.co.kr/static/pc/images/common/ico/ico-main-faq.png");
	}
`;

export const QnA = styled.div`
	i {
		width: 43px;
		height: 43px;
		background-image: url("https://img.megabox.co.kr/static/pc/images/common/ico/ico-main-qna.png");
	}
`;
export const Rent = styled.div`
	i {
		width: 50px;
		height: 38px;
		background-image: url("https://img.megabox.co.kr/static/pc/images/common/ico/ico-main-group.png");
	}
`;
export const Lost = styled.div`
	i {
		width: 51px;
		height: 39px;
		background-image: url("https://img.megabox.co.kr/static/pc/images/common/ico/ico-main-lost.png");
	}
`;
export const Boutique = styled.div`
	i {
		width: 48px;
		height: 40px;
		background-image: url("https://img.megabox.co.kr/static/pc/images/common/ico/ico-main-boutique.png");
	}
`;
