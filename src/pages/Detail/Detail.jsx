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
const Detail = () => {
	const dispatch = useDispatch();
	const detailData = useSelector(state => state?.boxoffice?.detailData);
	const heartData = useSelector(state => state?.boxoffice.boxoffices);

	const { id } = useParams();

	const modal = useSelector(state => state?.modal?.isOpen);

	// const [modal,setModal] = useState(useSelector((state)=>state?.modal?.isOpen));

	useEffect(() => {
		dispatch(__getByMovieId(id));
		dispatch(__getBoxOffice());
	}, [dispatch]);

	// console.log(detailData)
	return (
		<>
			{modal ? (
				<>
					<ModalContainer />
					<Banner detailData={detailData} heartData={heartData} />
					<ContentData detailData={detailData} />
					<MoviePoster />
					<Event />
					<Footer />
				</>
			) : (
				<>
					<Banner detailData={detailData} heartData={heartData} />
					<ContentData detailData={detailData} />
					<MoviePoster />
					<Event />
					<Footer />
				</>
			)}
		</>
	);
};

export default Detail;
