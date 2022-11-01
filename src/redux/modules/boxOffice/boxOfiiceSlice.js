import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "../../api";

export const __getBoxOffice = createAsyncThunk(
	"BOX_OFFICE",
	async (payload, thunkAPI) => {
		try {
			const { data } = await axios.get(`${serverUrl}/movies/index`);

			return thunkAPI.fulfillWithValue(data.data);
		} catch (e) {
			return thunkAPI.rejectWithValue(e.code);
		}
	},
);

const initialState = {
	isLoading: false,
	error: null,
	boxoffices: [],
};

const boxOfficeSlice = createSlice({
	name: "boxoffice",
	initialState,
	reducers: {},
	extraReducers: {
		[__getBoxOffice.pending]: (state, action) => {
			state.isLoading = true;
		},
		[__getBoxOffice.fulfilled]: (state, action) => {
			state.boxoffices = action.payload;
			state.isLoading = false;
		},
		[__getBoxOffice.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const {} = boxOfficeSlice.actions;
export default boxOfficeSlice.reducer;
