
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
      case "like":
        return css`
          width: 80px;
          height: 36px;
          border : 2px solid #555;
          background-color: black;
          color : white;
          border-radius : 4px;
          box-sizing : border-box;
          font-weight: 400;        
        `;
      case "reservation":
        return css`
          width:160px;
          height:36px;
          border:none;
          color:white;
          background-color: #037b94;
          border-radius: 4px;
          font-weight : 400;
          font-size : 15px;
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