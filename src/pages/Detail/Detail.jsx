import React from "react";
import Banner from "./Banner";
import ContentData from "./ContentData";
import MoviePoster from "./MoviePoster";
import Event from "./Event";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
	__getBoxOffice,
	__getByMovieId,
} from "../../redux/modules/boxOffice/boxOfiiceSlice";
import { useParams } from "react-router-dom/dist";
import styled from "styled-components";
import { useState } from "react";
import ModalContainer from "./modal/AddCommentModal";
import Bubble from "../../elem/bubble/Bubble";
import { __getMovie } from "../../redux/modules/Movies/MovieSlice";
const Detail = () => {
	const dispatch = useDispatch();
	const detailData = useSelector(state => state?.boxoffice?.detailData);
	const heartData = useSelector(state => state?.boxoffice.boxoffices);

	const { id } = useParams();

	const comments = useSelector(state=>state?.movies?.movies);
	console.log(comments)

	// const [modal,setModal] = useState(useSelector((state)=>state?.modal?.isOpen));

	useEffect(() => {
		dispatch(__getByMovieId(id));
		dispatch(__getBoxOffice());
		dispatch(__getMovie(id))
	}, [dispatch]);

	// console.log(detailData)
	return (
		<>
					<Banner detailData={detailData} heartData={heartData} />
					<ContentData detailData={detailData} />
					<MoviePoster />
					<Event />
					<Footer />
				</>
	);
};

export default Detail;
