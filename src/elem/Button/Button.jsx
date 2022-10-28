
import styled, { css } from "styled-components";

const Button = ({ children, ...props }) => {
	return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

const ButtonStyle = styled.button`
	background-color: ${({ bgc }) => (bgc ? bgc : "")};
	width: ${({ width }) => (width ? width : "")};
	height: ${({ height }) => (height ? height : "")};
	padding: ${({ pd }) => (pd ? pd : "")};
	border: none;
	cursor: pointer;

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
export default Button;

/** 사용방법 입니다    
 * <Button
            width={"580px"}
            height={"50px"}
            pd={"15px"}
          ></Button>
 */