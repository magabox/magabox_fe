import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Flex from "../../../elem/Flex/Flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { closeModal } from "../../../redux/modules/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/dist";
import { __AddComment } from "../../../redux/modules/Movies/MovieSlice";

const ModalContainer = ({open, handleSubmit, handleCancle}) => {
	
	const initialState = {
		rating : '',
		content : '',
		id : ''
	}

	const body = document.querySelector("body");
	const scrollPosition = window.pageYOffset;
    const dispatch = useDispatch();
	const [comment,setComment] = useState(initialState);
	const [content,setContent] = useState();
	const [rating,setRating] = useState();
	const {id} = useParams();
	const data = useSelector(state=>state.movies.movies)



	const changeContent = (e) =>{
		setContent(e.target.value)
	}

	const changeRating = (e) =>{
		setRating(e.target.value)
	}

	const addComment = () =>{
		if(content?.trim() === '' || rating?.trim() === ''){
			alert("모든 항목을 올바른 형식으로 채워주세요")
		}else if(rating >10){
			alert("점수는 1~10까지만 입력가능합니다")
		}else{
			dispatch(__AddComment({...comment, rating : parseInt(rating), content : content, id : id}))
			setRating('')
			setContent('')
			handleSubmit()
		}
		
		
		
	}
	// y축 스크롤 없애는 방법
	useEffect(() => {
		body.style.overflow = "hidden";
		body.style.position = "fixed";
		body.style.top = `-${scrollPosition}px`;
		body.style.left = "0";
		body.style.right = "0";
		return () => {
			body.style.removeProperty("overflow");
			body.style.removeProperty("position");
			body.style.removeProperty("top");
			body.style.removeProperty("left");
			body.style.removeProperty("right");
			window.scrollTo(0, scrollPosition);
		};
	}, []);
	return (
		<Bg>
			<StModalBox>
                <Flex wd="500px"ht="45px" jc="space-between" ai="center" bg="#503396" dir="row" pd="20">
                    <span>관람평 작성하기</span>
                    <FontAwesomeIcon icon={faXmark} size="lg" onClick={()=>dispatch(closeModal(false))}/>
                </Flex>
                <Flex color="black" pd="25" jc="center">
                    <p style={{fontSize : "24px", textAlign : "center"}}>영화 어떠셨나요???</p>
                </Flex>
                <Flex wd="460px" ht="250px" bg="#f3f4f6" mg="0 auto" br="10" ai="center">
                    <input value={rating} onChange={changeRating} placeholder="1~10까지의 점수를 입력해주세요" style={{width : "300px", height : "30px",border : "none" ,marginTop : "20px", borderRadius : "5px" }}  type="number" min={1} max={10}/>
                    <textarea value={content} onChange={changeContent} placeholder="댓글 내용을 작성해주세요" style={{minWidth : "350px", minHeight : "150px", marginTop:"20px", border : "none"}}/>
                </Flex>
                <Flex>
                    <Flex dir="row" jc="center" ai="center" ht="100px" gap="10">
                        <button style={{width:"58px",height:"36px", borderRadius : "4px", border : "1px solid #503396", backgroundColor : "white",cursor : "pointer"}} onClick={handleCancle}>취소</button>
                        <button onClick={addComment} style={{width:"58px",height:"36px", borderRadius : "4px", border : "1px solid #503396", backgroundColor : "#503396", color: "white",cursor:"pointer"}}>등록</button>
                    </Flex>
                </Flex>
			</StModalBox>
		</Bg>
	);
};

export default ModalContainer;

export const Bg = styled.div`
	width: 100%;
	height: 500vh;
	background-color: rgba(0, 0, 0, 0.6) ;
	position: fixed;
	top: 0;
	left: 0;
	color: #fff;
	z-index: 999;
`;
const StModalBox = styled.div`
		position: absolute;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		width: 500px;
		height: 500px;
		margin: 300px auto;
        background-color: white;

`;
