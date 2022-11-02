import React from "react";
import styled from "styled-components";
const Menu = () => {
	return (
		<MenuWrap>
			<div>
				<a href="javascript:void(0)">VIP LOUNGE</a>
			</div>
			<div>
				<a href="javascript:void(0)">멤버십</a>
			</div>
			<div>
				<a href="javascript:void(0)">할인카드안내</a>
			</div>
			<div>
				<a href="javascript:void(0)">이벤트</a>
			</div>
			<div>
				<a href="javascript:void(0)">스토어</a>
			</div>
		</MenuWrap>
	);
};

export default Menu;

export const MenuWrap = styled.div`
	position: relative;
	overflow: hidden;
	padding: 50px 0 0 0;
	display: flex;
	div {
		width: 20%;
		a {
			display: block;
			padding: 60px 0 0 0;
			text-align: center;
			color: #fff;
			text-decoration: none;
			background-repeat: no-repeat;
		}
	}
	div:first-child {
		a {
			background-image: url("	https://www.megabox.co.kr/static/pc/images/common/ico/ico-vip-main.png");
			background-position: center 2px;
		}
	}
	div:nth-child(2) {
		a {
			background-image: url("	https://www.megabox.co.kr/static/pc/images/common/ico/ico-membership-main.png");
			background-position: center 0;
		}
	}
	div:nth-child(3) {
		a {
			background-image: url("https://www.megabox.co.kr/static/pc/images/common/ico/ico-card-main.png");
			background-position: center 5px;
		}
	}
	div:nth-child(4) {
		a {
			background-image: url("https://www.megabox.co.kr/static/pc/images/common/ico/ico-event-main.png");
			background-position: center 0;
		}
	}
	div:last-child {
		a {
			background-image: url("https://www.megabox.co.kr/static/pc/images/common/ico/ico-store-main.png");
			background-position: center 0;
		}
	}
`;
