import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "../../api";
const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refresh-token");
const userRole = localStorage.getItem("user-role");

export const __getMovie = createAsyncThunk(
	"getMovie",
	async (payload, thunkAPI) => {
		try {
			const data = await axios.get(`${serverUrl}/movies`, payload);

			return thunkAPI.fulfillWithValue(data.data.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);
export const __deleteMovie = createAsyncThunk(
	"deleteMovie",
	async (payload, thunkAPI) => {
		try {
			const data = axios.delete(`${serverUrl}/movies/${payload}`, {
				headers: {
					Authorization: accessToken,
					refreshToken,
					userRole,
					"Content-Type": "application/json",
				},
			});

			return thunkAPI.fulfillWithValue(data.data.data);
		} catch (e) {
			return thunkAPI.rejectWithValue(e.code);
		}
	},
);

export const __updateMovie = createAsyncThunk(
	"updateMovie",
	async (payload, thunkAPI) => {
		try {
			const { data } = await axios.put(
				`${serverUrl}/movies/${payload}`,
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
const initialState = {
	movies: [],
	isLoading: false,
	error: null,
};

const movieSlice = createSlice({
	name: "movie",
	initialState,
	reducers: {},
	extraReducers: {
		[__getMovie.pending]: state => {
			state.isLoading = true;
		},
		[__getMovie.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.movies = action.payload;
		},
		[__getMovie.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		[__deleteMovie.pending]: state => {
			state.isLoading = true;
		},

		[__deleteMovie.fulfilled]: (state, action) => {
			state.movies = state.movies.filter(list => list.id !== action.payload);
		},
		[__deleteMovie.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		[__updateMovie.pending]: state => {
			state.isLoading = true;
		},
		[__updateMovie.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.movies.push(action.payload);
		},
		[__updateMovie.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export default movieSlice.reducer;
