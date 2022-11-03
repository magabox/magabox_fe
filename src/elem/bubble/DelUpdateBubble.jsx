import React, { useState } from 'react'
import styled from 'styled-components'

const DelUpdateBubble = () => {
    const [open,setIsopen] = useState(true);
    const [edit,setEdit] = useState(false);

  return (
    <>
    {open ===true ?
    <StBubble>
        <StRac>
            <p onClick={()=>setEdit(!edit)}>수정</p>
            <a>삭제</a>
            <span onClick={()=>setIsopen(false)}>X</span>
        </StRac>
        <StTr></StTr>
    </StBubble> : null}
    </>
  )

    }
export default DelUpdateBubble


const StBubble = styled.div`
    z-index: 20;
    position:relative;
    top:-280px;
    right:-410px;
    display:flex;
    flex-direction: column;
    
`;


const StRac = styled.div`
    background-color: white;
    display:flex;
    flex-direction: column;
    position:absolute;
    width:98px;
    height: 77px;
    z-index: 20;
    top:200px;
    left:50%;
    border-radius: 5px;
    border:1px solid #d8d9db;
    justify-content: center;
    align-items: center;
    gap:10px;

    & p {
        font-size : 13px;
        cursor: pointer;
    }

    & a {
        font-size : 13px;
        cursor: pointer;
    }

    & span{
        cursor: pointer;
    }
`;

const StTr = styled.div`

    position:absolute;
    width:0px;
    height:0px;
    border-top : 20px solid transparent;
    border-right : 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left : 20px solid white;
    left:58%;
    top:220px;
    z-index: 20;
`;