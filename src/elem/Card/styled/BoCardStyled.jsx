import styled from "styled-components";

export const StHoverWrap = styled.div`
	position: absolute;
	top: -20px;
	background-color: rgba(0, 0, 0, 0.8);
	transition: all 0.5s;
	opacity: 0;
	padding: 30px;
	box-sizing: border-box;
	width: 245px;
	height: 352px;
	p {
		overflow: hidden;
		text-overflow: ellipsis;
		/* text-overflow 2줄 이상 처리 */
		display: -webkit-box;
		-webkit-line-clamp: 6;
		-webkit-box-orient: vertical;
		line-height: 1.6;
	}
`;
export const StFlexWrap = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	p {
		text-align: center;
	}
	p:first-child {
		margin-bottom: 10px;
		a {
			color: #fff;
		}
	}
	p:last-child {
		border-top: 1px solid #5a5959;
		padding: 10px;
		span:last-child {
			margin-left: 10px;
			font-size: 1.6em;
			color: #59bec9;
		}
	}
	div {
		position: absolute;
		bottom: 0;
	}
`;
export const StBoxOf = styled.div`
	position: relative;
	:hover {
		${StHoverWrap} {
			opacity: 1;
			color: #fff;
			top: 0;
			background-color: rgba(0, 0, 0, 0.8);
		}
	}
`;

export const StBtn = styled.div`
	display: flex;
	width: 245px;
	height: 36px;
	gap: 5px;
	margin-top: 10px;
`;

export const StPost = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StImg = styled.img`
	display: block;
	width: 245px;
	height: 352px;
	border-radius: 5px;
	object-fit: cover;
`;
