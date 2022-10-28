import styled, { css } from "styled-components";

const Input = ({ children, ...props }) => {
	return <InputStyle {...props}>{children}</InputStyle>;
};

const InputStyle = styled.input`
	background-color: ${({ bgc }) => (bgc ? bgc : "")};
	width: ${({ width }) => (width ? width : "")};
	height: ${({ height }) => (height ? height : "")};
	padding: ${({ pd }) => (pd ? pd : "")};
	border: 1px solid #d8d9d8;
	:hover {
		border: 1px solid #666;
	}
	${({ theme }) => {
		switch (theme) {
			case "login":
				return css`
					width: 370px;
					height: 45px;
				`;
			case "join":
				return css`
					width: 300px;
					height: 35px;
				`;
			default:
				break;
		}
	}};
`;
export default Input;
