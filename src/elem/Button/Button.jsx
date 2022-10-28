import React from "react";
import styled, { css } from "styled-components";

const Button = ({val, onClick, children}) => {

  return (
    <>
      <StButton val={val} onClick={onClick}>
        {children}
      </StButton>
    </>)
};

export default Button;

const StButton = styled.button`
  ${({val})=>{
    switch(val){
      case "like" :
        return css`
          width : 80px;
          height: 36px;
          border-color: white;
          background-color: black;
          color : white;
          border-radius: 4px;
          display: inline-block;
          text-align: center;
          font-weight: 400;
          border-radius: 4px;
          text-decoration: none;
          vertical-align: middle;
          cursor: pointer;
        `;

      case "gblue" :
        return css`
        width: 160px;
        height: 36px;
        background-color: #037b94;
        `;
    }
  }
}
`;
