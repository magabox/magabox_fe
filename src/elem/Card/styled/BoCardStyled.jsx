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
	div {
		margin-top: 200px;
		display: flex;
		align-items: center;
		flex-direction: column;
		p:first-child {
			margin-bottom: 10px;
			a {
				color: #fff;
			}
		}
		p:last-child {
			border-top: 1px solid #5a5959;
			padding: 20px;
			span:last-child {
				margin-left: 10px;
				font-size: 1.6em;
				color: #59bec9;
                line-height: 1.2;
		}
	}
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
`;
