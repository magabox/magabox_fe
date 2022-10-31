import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Input from "../../elem/Input/Input";
import { serverUrl } from "../../redux/api";
import { useLocation } from "react-router-dom";
import { __deleteMovie } from "../../redux/modules/movie/movieEdit";
import { useDispatch } from "react-redux";

const MovieAdmin = () => {
	const dispatch = useDispatch();
	const location = useLocation();

	const card = location.state.card;
	// const test = useSelector(state => state.boxoffice.boxoffices);
	// console.log(test);
	// useEffect(() => {
	// 	dispatch(__getBoxOffice());
	// }, [dispatch]);
	console.log(card.id);
	const [imageToUpload, setImageToUpload] = useState(null);
	const [uploadpreview, setUploadpreview] = useState(null);
	const [data, setData] = useState({});
	const accessToken = localStorage.getItem("accessToken");
	const refreshToken = localStorage.getItem("refreshToken");
	const userRole = localStorage.getItem("user-role");

	const fileUpload = e => {
		setImageToUpload(e.target.files[0]);

		//image URL코드
		setUploadpreview(URL.createObjectURL(e.target.files[0]));
		console.log(e.target.files[0]);
	};
	const onChangeHandler = e => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};
	const onClickHandler = e => {
		e.preventDefault();

		const formData = new FormData();

		// 이걸 합친게 바로 위 코드임
		formData.append("image", imageToUpload);
		formData.append("title", data.title);
		formData.append("summary", data.summary);
		formData.append("runtime", data.runtime);

		let entries = formData.entries();
		for (const pair of entries) {
			console.log(pair[0] + ", " + pair[1]);
		}

		axios
			.put(`${serverUrl}/movies/${card.id}`, formData, {
				headers: {
					Authorization: accessToken,
					refreshToken,
					userRole,
					"Content-Type": "multipart/form-data",
				},
			})
			.then(function a(response) {
				alert("수정되었습니다.");
				window.location.replace("/");
			})
			.catch(function (error) {
				alert("수정에 실패했습니다");
				console.log("err", error.response);
			});
	};

	return (
		<>
			<Layout>
				<Title>영화 수정/삭제</Title>
				<UploadWrap>
					<StForm>
						<ImgUploadWrap>
							<ImageLabel htmlFor="file"></ImageLabel>
							<ImageInput
								placeholder="업로드"
								id="file"
								type={"file"}
								accept={"image/*"}
								onChange={fileUpload}
								required
							/>
							{uploadpreview ? (
								<ImagePreview src={uploadpreview} />
							) : (
								<ImagePreview src={card.imageUrl} />
							)}

							<img
								className="PlusBtn"
								src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTIuMDAyIDJjNS41MTggMCA5Ljk5OCA0LjQ4IDkuOTk4IDkuOTk4IDAgNS41MTctNC40OCA5Ljk5Ny05Ljk5OCA5Ljk5Ny01LjUxNyAwLTkuOTk3LTQuNDgtOS45OTctOS45OTcgMC01LjUxOCA0LjQ4LTkuOTk4IDkuOTk3LTkuOTk4em0tLjc0NyA5LjI1aC0zLjVjLS40MTQgMC0uNzUuMzM2LS43NS43NXMuMzM2Ljc1Ljc1Ljc1aDMuNXYzLjVjMCAuNDE0LjMzNi43NS43NS43NXMuNzUtLjMzNi43NS0uNzV2LTMuNWgzLjVjLjQxNCAwIC43NS0uMzM2Ljc1LS43NXMtLjMzNi0uNzUtLjc1LS43NWgtMy41di0zLjVjMC0uNDE0LS4zMzYtLjc1LS43NS0uNzVzLS43NS4zMzYtLjc1Ljc1eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+"
								alt=""
							/>
						</ImgUploadWrap>
						<TextUploadWrap>
							<div>
								<TextLabel htmlFor="">title</TextLabel>
								<Input
									theme={"join"}
									type="text"
									name="title"
									onChange={onChangeHandler}
									placeholder={card.title}
									required
								/>
							</div>

							<div>
								<TextLabel htmlFor="">summary</TextLabel>
								<Input
									theme={"join"}
									type="text"
									name="summary"
									id="summary"
									onChange={onChangeHandler}
									placeholder={card.summary}
									required
								/>
							</div>

							<div>
								<TextLabel htmlFor="">runtime</TextLabel>
								<Input
									theme={"join"}
									type="number"
									name="runtime"
									onChange={onChangeHandler}
									placeholder={card.runtime}
									required
								/>
								<span>분</span>
							</div>
						</TextUploadWrap>
						<div>
							<SubmitBtn type={"submit"} onClick={onClickHandler}>
								수정하기
							</SubmitBtn>
							<SubmitBtn
								onClick={() => {
									const result = window.confirm("이 게시글을 지울까요?");

									if (result) {
										window.location.replace("/");
										return dispatch(__deleteMovie(card.id));
									} else {
										return;
									}
								}}
							>
								삭제하기
							</SubmitBtn>
						</div>
					</StForm>
				</UploadWrap>
			</Layout>
		</>
	);
};

export default MovieAdmin;

const Layout = styled.div`
	width: 1100px;
	height: 100vh;
	margin: 100px auto;
`;
const Title = styled.h1`
	font-size: 30px;
	margin-bottom: 20px;
`;
const UploadWrap = styled.div``;

const StForm = styled.form`
	display: flex;
	justify-content: center;
	gap: 20px;
	div {
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
	}
`;

const TextLabel = styled.label`
	padding: 10px 0;
	display: inline-block;
	text-align: center;
	width: 130px;
	height: 40px;
	margin-right: 10px;
	line-height: 40px;
	background-color: #f7f8f9;
`;
const ImgUploadWrap = styled.div`
	width: 240px;
	height: 335px;
	border: 1px solid #666565;
	box-sizing: border-box;
	background-color: #fff;
	transition: all 0.5s;
	position: relative;
	.PlusBtn {
		opacity: 0;
		padding-top: 45px;
		transform: scale(0.2);
		transition: all 0.5s;
	}
	:hover {
		cursor: pointer;
		.PlusBtn {
			transform: scale(0.22);
			opacity: 1;
			padding-top: 55px;
			display: block;
		}
	}
`;

const TextUploadWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

const ImageLabel = styled.label`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	background-color: transparent;
	cursor: pointer;
`;

const ImageInput = styled.input`
	visibility: hidden;
`;

const ImagePreview = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	box-sizing: border-box;
`;

const SubmitBtn = styled.button`
	display: block;
	background: #fff;
	border: 3px solid #f7f8f9;
	cursor: pointer;
	width: 80px;
	height: 40px;
	margin-bottom: 10px;
	transition: all 0.5s;
	:hover {
		background: #f7f8f9;
		border: 3px solid transparent;
	}
`;
