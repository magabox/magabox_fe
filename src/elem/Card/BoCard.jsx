import React from "react";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
	StPost,
	StBoxOf,
	StImg,
	StBtn,
	StHoverWrap,
	StFlexWrap,
} from "./styled/BoCardStyled";
import { Link } from "react-router-dom";

const BoCard = ({ card }) => {
	const { imageUrl, totalHeartCount } = card;
	// console.log("card", card);
	const userRole = localStorage.getItem("user-role");

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
										{userRole === "ROLE_ADMIN" ? (
											<Link to={`/movie/${card.id}`} state={{ card }}>
												<span>수정/삭제</span>
											</Link>
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
					<Button theme="like">
						<FontAwesomeIcon
							icon={faHeart}
							size="lg"
							style={{ marginRight: "5px" }}
						/>
						{totalHeartCount}
					</Button>
					<Button theme="reservation">예매</Button>
				</StBtn>
			</StBoxOf>
		</StPost>
	);
};

export default BoCard;
