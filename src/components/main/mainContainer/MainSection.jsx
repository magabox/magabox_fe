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
	StSearchMenu,
	StSearchInput,
	StAnima,
} from "../styled/MainSectionStyle";
import { StCell } from "../../../elem/Cell/styled/CellStyled";
import remember from "../../../../src/UseImg/megabox_img/megabox039.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getBoxOffice } from "../../../redux/modules/boxOffice/boxOfiiceSlice";
import boxOfiiceSlice from "../../../redux/modules/boxOffice/boxOfiiceSlice";
import BoCard from "../../../elem/Card/BoCard";
import Cell from "../../../elem/Cell/Cell";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faFilm } from "@fortawesome/free-regular-svg-icons";
import cal from "../../../UseImg/megabox_img/megabox050.png";
import film from "../../../UseImg/megabox_img/megabox051.png";
import ticket from "../../../UseImg/megabox_img/megabox052.png";
import move from "../../../UseImg/megabox_img/megabox053.png";

const MainSection = () => {
	const dispatch = useDispatch();
	const boxOfficeData = useSelector(state => state.boxoffice.boxoffices);
	// console.log(boxOfficeData);
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
					<StSearchMenu>
						<StCell>
							<StSearchInput placeholder="영화명을 입력해 주세요" />
							<FontAwesomeIcon
								icon={faMagnifyingGlass}
								size="lg"
								color="gray"
								style={{
									position: "absolute",
									left: "210px",
									cursor: "pointer",
								}}
							/>
						</StCell>
						<StCell>
							<a>
								<img
									src={cal}
									style={{
										width: "24px",
										height: "26px",
										marginRight: "5px",
										marginTop: "-2px",
									}}
									alt="캘린더"
								/>
								<span>상영시간표</span>
							</a>
						</StCell>
						<StCell>
							<a>
								<img
									src={film}
									style={{
										width: "26px",
										height: "24px",
										marginRight: "5px",
										marginTop: "-1px",
									}}
									alt="필름"
								/>
								<span>박스오피스</span>
							</a>
						</StCell>
						<StCell>
							<a>
								<img
									src={ticket}
									style={{
										width: "29px",
										height: "25px",
										marginTop: "-2px",
										marginRight: "5px",
									}}
									alt="티켓"
								/>
								<span>빠른예매</span>
							</a>
						</StCell>
					</StSearchMenu>
					<StAnima style={{ position: "relative" }}>
						<img src={move} alt="move" />
					</StAnima>
				</StMainContent>
			</StMainContainer>
		</>
	);
};

export default MainSection;
