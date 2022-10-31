import React from "react";
import styled from "styled-components";
import {
	StMainContainer,
	StMainBackGround,
	StBackGroundImg,
	StMainContent,
	StBoxOffice,
	StLiter,
	StBO,
	StPlus,
	StBoList,
} from "../styled/MainSectionStyle";
import remember from "../../../../src/UseImg/megabox_img/megabox039.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getBoxOffice } from "../../../redux/modules/boxOffice/boxOfiiceSlice";
import boxOfiiceSlice from "../../../redux/modules/boxOffice/boxOfiiceSlice";
import BoCard from "../../../elem/Card/BoCard";

const MainSection = () => {
	const dispatch = useDispatch();
	const boxOfficeData = useSelector(state => state.boxoffice.boxoffices);

	// console.log(boxOfficeData)

	useEffect(() => {
		dispatch(__getBoxOffice());
	}, [dispatch]);

	return (
		<>
			<StMainContainer>
				<StMainBackGround />
				<StBackGroundImg src={remember} />
				<StMainContent>
					<StBoxOffice>
						<StLiter>
							<StBO>박스오피스</StBO>
							<StPlus>
								더 많은 영화보기 <FontAwesomeIcon icon={faPlus} size="lg" />
							</StPlus>
						</StLiter>
					</StBoxOffice>
					<StBoList>
						{boxOfficeData?.map(card => (
							<BoCard key={card.id} card={card} />
						))}
					</StBoList>
					<StSearchMenu></StSearchMenu>
				</StMainContent>
			</StMainContainer>
		</>
	);
};

export default MainSection;

export const StSearchMenu = styled.div`
	width: 100%;
	height: 75px;
	margin-top: 50px;
	padding-top: 23px;
	background-color: rgba(0, 0, 0, 0.2);
	overflow: hidden;
	background-clip: padding-box;
`;
