import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "../../api";
const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");
const userRole = localStorage.getItem("user-role");

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

			return thunkAPI.fulfillWithValue(data.data);
		} catch (e) {
			return thunkAPI.rejectWithValue(e.code);
		}
	},
);

// export const __updateMovie = createAsyncThunk(
// 	"updateMovie",
// 	async (payload, thunkAPI) => {
// 		try {
// 			const { data } = await axios.put(
// 				`${serverUrl}/movies/${payload}`,
// 				payload,
// 				{
// 					headers: {
// 						Authorization: accessToken,
// 						refreshToken,
// 						userRole,
// 						"Content-Type": "application/json",
// 					},
// 				},
// 			);
// 			return thunkAPI.fulfillWithValue(data.data);
// 		} catch (e) {
// 			return thunkAPI.rejectWithValue(e.code);
// 		}
// 	},
// );
const initialState = {
	boxoffices: [],
	error: null,
};

const movieSlice = createSlice({
	name: "movie",
	initialState,
	reducers: {},
	extraReducers: {
		[__deleteMovie.pending]: state => {
			state.isLoading = true;
		},

		[__deleteMovie.fulfilled]: (state, action) => {
			state.boxoffices = state.boxoffices.filter(
				list => list.id !== action.payload,
			);
		},
		[__deleteMovie.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		// [__updateMovie.pending]: state => {
		// 	state.isLoading = true;
		// },
		// [__updateMovie.fulfilled]: (state, action) => {
		// 	state.isLoading = false;
		// 	state.boxoffices = state.boxoffices.push(action.payload);
		// },
		// [__updateMovie.rejected]: (state, action) => {
		// 	state.isLoading = false;
		// 	state.error = action.payload;
		// },
	},
});

export const {} = movieSlice.actions;
export default movieSlice.reducer;
