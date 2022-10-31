import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __movie } from "../../redux/modules/movie/movieEdit";

const MovieTest = () => {
	const dispatch = useDispatch();
	const movie = useSelector(state => state.movie);
	console.log(movie);
	useEffect(() => {
		dispatch(__movie());
	}, [dispatch]);

	return (
		<div>
			{movie.map((movie, idx) => {
				return (
					<div key={idx}>
						<p>{movie.title}</p>
						<p>{movie.summary}</p>
						<img src={movie.imageUrl} />
						<p>좋아요{movie.totalHeartCount}개</p>
					</div>
				);
			})}
			<span></span>
		</div>
	);
};

export default MovieTest;
