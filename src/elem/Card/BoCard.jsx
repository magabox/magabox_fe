import React, { useState } from "react";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as Regular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as Solid } from "@fortawesome/free-solid-svg-icons";
import {
	StPost,
	StBoxOf,
	StImg,
	StBtn,
	StHoverWrap,
	StFlexWrap,
} from "./styled/BoCardStyled";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __heart } from "../../redux/modules/heartSlice.js/heartSlice";
import { useEffect } from "react";
import { __getBoxOffice, __getByMovieId } from "../../redux/modules/boxOffice/boxOfiiceSlice";
import { useParams } from "react-router-dom/dist";
import { loginAction } from "../../redux/modules/user/login";

const BoCard = ({ card }) => {
	const dispatch = useDispatch();
	const { imageUrl, totalHeartCount, heartList } = card;
	const heartData = useSelector(state => state.heart);
	const userRole = localStorage.getItem("user-role");
	const username = localStorage.getItem("user-name");
	const filter = heartList.filter(heart => username === heart.username);
    const isLogin = useSelector(state => state.login.isLogin);
	const [ready, setReady] = useState(undefined);
    const { handleLoginDispatch } = loginAction;
	const sample = () => {
		const loggedin = localStorage.getItem("isLogin");
		if (loggedin) {
			dispatch(handleLoginDispatch());
		}

		setReady("yes");
	};

	useEffect(() => {
		sample();
	}, [isLogin]);

	useEffect(() => {
		dispatch(__getBoxOffice());
	}, [dispatch, heartData]);

	return (
		<StPost>
			<StBoxOf>
				<Link to={`/detail/${card.id}`}>
					<div>
						<StImg src={imageUrl} />
						<StHoverWrap>
							<p>{card.summary}</p>
							<StFlexWrap>
								<div>
									<p>
										{isLogin ? (
											<>
												{userRole === "ROLE_ADMIN" ? (
													<Link to={`/movie/${card.id}`} state={{ card }}>
														<span>수정/삭제</span>
													</Link>
												) : null}
											</>
										) : null}
									</p>
									<p>
										관람평
										{card.totalRating ? <span>{card.totalRating}</span> : null}
									</p>
								</div>
							</StFlexWrap>
						</StHoverWrap>
					</div>
				</Link>
				<StBtn>
					<Button theme="like" onClick={() => dispatch(__heart(card.id))}>
						{filter.length === 0 ? (
							<FontAwesomeIcon
								icon={Regular}
								size="lg"
								style={{ marginRight: "5px" }}
							/>
						) : (
							<FontAwesomeIcon
								icon={Solid}
								size="lg"
								style={{ marginRight: "5px" }}
							/>
						)}
						{totalHeartCount}
					</Button>
					<Button theme="reservation">예매</Button>
				</StBtn>
			</StBoxOf>
		</StPost>
	);
};

export default BoCard;
