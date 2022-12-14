import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "../../api";
import { current } from "@reduxjs/toolkit";

const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");
const userRole = localStorage.getItem("user-role");

export const __getMovie = createAsyncThunk(
	"GET_COMMENT",
	async (payload, thunkAPI) => {
		try {
			const { data } = await axios.get(`${serverUrl}/movies/${payload}`, {
				headers: {
					Authorization: accessToken,
					refreshToken,
					userRole,
					"Content-Type": "application/json",
				},
			});
			return thunkAPI.fulfillWithValue(data);
		} catch (e) {
			return thunkAPI.rejectWithValue(e.code);
		}
	},
);

export const __AddComment = createAsyncThunk(
	"ADD_COMMENT",
	async (payload, thunkAPI) => {
		try {
			const { id, rating, content } = payload;
			const { data } = await axios.post(
				`${serverUrl}/comments/${id}`,
				{ rating, content },
				{
					headers: {
						Authorization: accessToken,
						refreshToken,
						userRole,
						"Content-Type": "application/json",
					},
				},
			);
			return thunkAPI.fulfillWithValue(data.data);
		} catch (e) {
			return thunkAPI.rejectWithValue(e.code);
		}
	},
);

export const __UpdateComment = createAsyncThunk(
	"UPDATE_COMMENT",
	async (payload, thunkAPI) => {
		try {
			const { data } = await axios.put(
				`${serverUrl}/comments/{commentId}`,
				payload,
				{
					headers: {
						Authorization: accessToken,
						refreshToken,
						userRole,
						"Content-Type": "application/json",
					},
				},
			);
			return thunkAPI.fulfillWithValue(data);
		} catch (e) {
			return thunkAPI.rejectWithValue(e.code);
		}
	},
);

export const __DeleteComment = createAsyncThunk(
	"DELETE_COMMENT",
	async (payload, thunkAPI) => {
		try {
			const { data } = await axios.delete(`${serverUrl}/comments/${payload}`, {
				headers: {
					Authorization: accessToken,
					refreshToken,
					userRole,
					"Content-Type": "application/json",
				},
			});
			return thunkAPI.fulfillWithValue(data);
		} catch (e) {
			return thunkAPI.rejectWithValue(e.code);
		}
	},
);

const initialState = {
	isLoading: false,
	movies: [],
};

const commentSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {},
	extraReducers: {
		[__AddComment.pending]: (state, action) => {
			state.isLoading = true;
			console.log(current(state.movies.data.commentList));
		},
		[__AddComment.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.movies.data.commentList.push(action.payload);
			alert("??????????????? ????????? ?????????????????????");
		},
		[__AddComment.rejected]: (state, action) => {
			state.isLoading = false;
		},
		[__UpdateComment.pending]: (state, action) => {
			state.isLoading = true;
		},
		[__UpdateComment.fulfilled]: (state, action) => {
			const target = state.movies.commentList.findIndex(comment => {
				return comment.id === action.payload.id;
			});
			state.comments.splice(target, 1, action.payload);
			state.isLoading = false;
		},
		[__UpdateComment.rejected]: (state, action) => {
			state.isLoading = false;
		},
		[__DeleteComment.pending]: (state, action) => {
			state.isLoading = true;
		},
		[__DeleteComment.fulfilled]: (state, action) => {
			state.isLoading = false;
			const target = state.movies.commentList.filter(comment => {
				return comment.id !== action.payload.id;
			});
			state.comments = target;
		},
		[__getMovie.pending]: (state, action) => {
			state.isLoading = true;
		},
		[__getMovie.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.movies = action.payload;
		},
		[__getMovie.rejected]: (state, action) => {
			state.isLoading = false;
		},
	},
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
