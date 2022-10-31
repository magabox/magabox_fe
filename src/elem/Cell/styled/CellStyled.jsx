import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";

export const StCell = styled.div`
    width:275px;
    height:30px;
    padding:0 10px;
    display: flex;
    justify-content: center;
    border-right: 1px solid #888;

    &img {
        vertical-align: middle;
    }

    & input::placeholder{
        font-size : 15px;
        text-indent: 5px;
    }

    & input {
        outline : none;
        color : white;
    }

    & a{
        display: flex;
        cursor: pointer;
        line-height:30px;
        
        
    }
    
    & a:hover{

    }
    & a>span:hover{
        text-decoration: underline;
    }
`;